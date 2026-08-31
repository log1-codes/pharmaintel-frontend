import { useEffect, useRef } from 'react';

const CAPTURE_WARNING = 'Screenshots, screen recording, and printing are not allowed on this page.';

const isRestrictedShortcut = (event: KeyboardEvent) => {
  const key = event.key.toLowerCase();

  return (
    key === 'printscreen' ||
    key === 'snapshot' ||
    key === 'prtscr' ||
    event.keyCode === 44 ||
    (event.shiftKey && key === 'printscreen') ||
    (event.metaKey && event.shiftKey && key === 's') ||
    (event.metaKey && event.shiftKey && ['3', '4', '5'].includes(key)) ||
    ((event.ctrlKey || event.metaKey) && ['p', 's', 'u'].includes(key)) ||
    ((event.ctrlKey || event.metaKey) && event.shiftKey && ['i', 'j', 'c'].includes(key)) ||
    key === 'f12'
  );
};

export const useCaptureWarning = () => {
  const lastWarningAtRef = useRef(0);

  useEffect(() => {
    const showWarning = () => {
      const now = Date.now();
      if (now - lastWarningAtRef.current < 1200) return;
      lastWarningAtRef.current = now;
      window.alert(CAPTURE_WARNING);
    };

    const clearClipboard = async () => {
      try {
        await navigator.clipboard.writeText("Content is protected. Screenshots/screen captures are strictly prohibited.");
      } catch (err) { /* ignore */ }
    };

    // Direct synchronous DOM manipulation — fastest possible hide,
    // bypasses React's render cycle entirely.
    const hideContent = () => {
      document.documentElement.style.setProperty('visibility', 'hidden', 'important');
      document.documentElement.style.setProperty('opacity', '0', 'important');
    };

    const showContent = () => {
      document.documentElement.style.removeProperty('visibility');
      document.documentElement.style.removeProperty('opacity');
    };

    const blockEvent = (event: Event) => {
      if ((window as any).__allowPrint && (event.type === 'beforeprint' || (event instanceof KeyboardEvent && event.key.toLowerCase() === 'p'))) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (event instanceof KeyboardEvent) {
        const key = event.key.toLowerCase();
        if (key === 'printscreen' || key === 'snapshot' || key === 'prtscr' || event.keyCode === 44) {
          // Immediately blank screen, clear clipboard, then restore and warn
          hideContent();
          clearClipboard();
          setTimeout(() => {
            showContent();
            showWarning();
          }, 600);
          return;
        }
      }

      showWarning();
    };

    const blockInteraction = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isRestrictedShortcut(event)) blockEvent(event);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (isRestrictedShortcut(event)) blockEvent(event);
    };

    // Window blur = OS-level screenshot tool stole focus (Snipping Tool, GNOME Screenshot).
    // Immediately hide the entire page so whatever gets captured is blank.
    const handleBlur = () => {
      hideContent();
    };

    const handleFocus = () => {
      showContent();
    };

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('keyup', handleKeyUp, true);
    document.addEventListener('contextmenu', blockEvent, true);
    document.addEventListener('copy', blockInteraction, true);
    document.addEventListener('cut', blockInteraction, true);
    document.addEventListener('paste', blockInteraction, true);
    document.addEventListener('dblclick', blockInteraction, true);
    window.addEventListener('beforeprint', blockEvent, true);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('keyup', handleKeyUp, true);
      document.removeEventListener('contextmenu', blockEvent, true);
      document.removeEventListener('copy', blockInteraction, true);
      document.removeEventListener('cut', blockInteraction, true);
      document.removeEventListener('paste', blockInteraction, true);
      document.removeEventListener('dblclick', blockInteraction, true);
      window.removeEventListener('beforeprint', blockEvent, true);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      showContent();
    };
  }, []);
};
