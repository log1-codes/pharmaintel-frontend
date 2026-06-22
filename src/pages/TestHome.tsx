import { useEffect, useRef } from 'react';
import { testHomeContent } from './testHomeContent';
import '../styles/testHome.css';

const TestHome = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const modal = page.querySelector<HTMLElement>('#demoModal');
    const demoForm = page.querySelector<HTMLFormElement>('#demoForm');
    const demoSuccess = page.querySelector<HTMLElement>('#demoSuccess');
    const waitlistForm = page.querySelector<HTMLFormElement>('#waitlistForm');
    const successMessage = page.querySelector<HTMLElement>('#successMessage');
    const watermark = page.querySelector<HTMLElement>('#bbai-watermark');

    const openDemoModal = () => {
      modal?.classList.remove('hidden');
      modal?.classList.add('flex');
    };

    const closeDemoModal = () => {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
      demoForm?.reset();
      demoSuccess?.classList.add('hidden');
    };

    (window as typeof window & {
      openDemoModal?: () => void;
      closeDemoModal?: () => void;
    }).openDemoModal = openDemoModal;
    (window as typeof window & {
      openDemoModal?: () => void;
      closeDemoModal?: () => void;
    }).closeDemoModal = closeDemoModal;

    const params = new URLSearchParams(window.location.search);
    const viewerEmail = (localStorage.getItem('viewerEmail') || params.get('email') || '').trim();
    const viewerName = (localStorage.getItem('viewerName') || params.get('name') || '').trim();
    const identity = (viewerEmail || viewerName || 'anonymous').replace(/[<>]/g, '');

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="420" height="140">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#ff5b4d" stop-opacity="0.55"/>
            <stop offset="1" stop-color="#C026D3" stop-opacity="0.55"/>
          </linearGradient>
        </defs>
        <rect width="420" height="140" fill="transparent"/>
        <g transform="translate(10,70) rotate(-25)">
          <text x="0" y="0" fill="url(#g)" font-size="22" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial" letter-spacing="1.2" opacity="0.95">
            ${identity}
          </text>
        </g>
      </svg>
    `.trim();

    const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');
    watermark?.style.setProperty('--bbai-watermark-pattern', `url("data:image/svg+xml,${encoded}")`);

    const handleContextMenu = (event: MouseEvent) => {
      if (!page.contains(event.target as Node)) return;
      event.preventDefault();
      event.stopPropagation();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey) {
        const key = (event.key || '').toLowerCase();
        if (key === 's' || key === 'p') {
          event.preventDefault();
          event.stopPropagation();
        }
      }

      if (event.key === 'PrintScreen' || event.key === 'OS' || event.key === 'System') {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleDemoSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      if (!demoSuccess) return;
      demoSuccess.textContent = 'Demo request submitted successfully!';
      demoSuccess.classList.remove('hidden');
      setTimeout(closeDemoModal, 1500);
    };

    const handleWaitlistSubmit = async (event: SubmitEvent) => {
      event.preventDefault();
      const emailInput = page.querySelector<HTMLInputElement>('#email');
      const email = emailInput?.value.trim();
      if (!email || !successMessage) return;

      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${apiBaseUrl}/api/waitlist`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) throw new Error('Waitlist request failed');

        successMessage.innerText = 'Successfully joined the waitlist!';
        successMessage.classList.remove('hidden');
        waitlistForm?.reset();
      } catch (error) {
        console.error(error);
        successMessage.innerText = 'Could not join the waitlist. Please try again.';
        successMessage.classList.remove('hidden');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });
    demoForm?.addEventListener('submit', handleDemoSubmit);
    waitlistForm?.addEventListener('submit', handleWaitlistSubmit);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      demoForm?.removeEventListener('submit', handleDemoSubmit);
      waitlistForm?.removeEventListener('submit', handleWaitlistSubmit);
      delete (window as typeof window & { openDemoModal?: () => void }).openDemoModal;
      delete (window as typeof window & { closeDemoModal?: () => void }).closeDemoModal;
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="test-home-page"
      dangerouslySetInnerHTML={{ __html: testHomeContent }}
    />
  );
};

export default TestHome;
