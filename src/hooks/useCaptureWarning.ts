import { useEffect, useRef } from 'react';

const CAPTURE_WARNING = 'Screenshots, screen recording, and printing are not allowed on this page.';

const isRestrictedShortcut = (event: KeyboardEvent) => {
  const key = event.key.toLowerCase();

  return (
    key === 'printscreen' ||
    key === 'snapshot' ||
    key === 'prtscr' ||
    event.keyCode === 44 ||
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

      if (now - lastWarningAtRef.current < 1200) {
        return;
      }

      lastWarningAtRef.current = now;
      window.alert(CAPTURE_WARNING);
    };

    const clearClipboard = async () => {
      try {
        await navigator.clipboard.writeText("Content is protected. Screenshots/screen captures are strictly prohibited.");
      } catch (err) {
        // Ignore permission errors
      }
    };

    const blockEvent = (event: Event) => {
      // Allow printing when the print bypass is active
      if ((window as any).__allowPrint && (event.type === 'beforeprint' || (event instanceof KeyboardEvent && event.key.toLowerCase() === 'p'))) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      
      // If it is a printscreen event, attempt to clear the clipboard
      if (event instanceof KeyboardEvent && (event.key.toLowerCase() === 'printscreen' || event.key.toLowerCase() === 'snapshot' || event.keyCode === 44)) {
        clearClipboard();
      }

      showWarning();
    };

    const blockInteraction = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isRestrictedShortcut(event)) {
        blockEvent(event);
      }
    };

    const handleBlur = () => {
      document.body.classList.add('blurred-content');
    };

    const handleFocus = () => {
      document.body.classList.remove('blurred-content');
    };

    document.addEventListener('keydown', handleKeyDown, true);
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
      document.removeEventListener('contextmenu', blockEvent, true);
      document.removeEventListener('copy', blockInteraction, true);
      document.removeEventListener('cut', blockInteraction, true);
      document.removeEventListener('paste', blockInteraction, true);
      document.removeEventListener('dblclick', blockInteraction, true);
      window.removeEventListener('beforeprint', blockEvent, true);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.body.classList.remove('blurred-content');
    };
  }, []);
};

