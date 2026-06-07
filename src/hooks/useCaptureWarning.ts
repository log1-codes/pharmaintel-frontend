import { useEffect, useRef } from 'react';

const CAPTURE_WARNING = 'Screenshots and screen recording are not allowed on this page.';

const isRestrictedShortcut = (event: KeyboardEvent) => {
  const key = event.key.toLowerCase();

  return (
    key === 'printscreen' ||
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

    const blockEvent = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      showWarning();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isRestrictedShortcut(event)) {
        blockEvent(event);
      }
    };

    const mediaDevices = navigator.mediaDevices as
      | (MediaDevices & { getDisplayMedia?: MediaDevices['getDisplayMedia'] })
      | undefined;
    const originalGetDisplayMedia = mediaDevices?.getDisplayMedia?.bind(mediaDevices);

    if (mediaDevices && originalGetDisplayMedia) {
      mediaDevices.getDisplayMedia = (() => {
        showWarning();
        return Promise.reject(new DOMException('Screen capture is not allowed on this page.', 'NotAllowedError'));
      }) as MediaDevices['getDisplayMedia'];
    }

    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('contextmenu', blockEvent, true);
    window.addEventListener('beforeprint', blockEvent, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('contextmenu', blockEvent, true);
      window.removeEventListener('beforeprint', blockEvent, true);

      if (mediaDevices && originalGetDisplayMedia) {
        mediaDevices.getDisplayMedia = originalGetDisplayMedia;
      }
    };
  }, []);
};

