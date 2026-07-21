import { useState, useEffect } from 'react';

const WEBSITE_A_URL = import.meta.env.VITE_WEBSITE_A_URL || 'http://localhost:5500';

/**
 * TicketGate — Guards the entire app.
 *
 * 1. If URL has ?ticket=xxx  → validate ticket via admin-backend → store session
 * 2. If valid session exists in storage → render children
 * 3. If no ticket & no session → redirect to Website A login
 */
const TicketGate = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<'loading' | 'authenticated' | 'redirecting'>('loading');
    const [error, setError] = useState('');

    useEffect(() => {
        const authenticate = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const ticket = urlParams.get('ticket');

            // Case 1: Ticket in URL — validate it via admin-backend
            if (ticket) {
                try {
                    const ADMIN_BACKEND_URL = import.meta.env.VITE_ADMIN_BACKEND_URL || 'http://localhost:3002/api';
                    
                    const viewerRes = await fetch(`${ADMIN_BACKEND_URL}/viewer/session`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ticketId: ticket })
                    });

                    if (!viewerRes.ok) {
                        const errData = await viewerRes.json();
                        throw new Error(errData.message || 'Ticket validation failed');
                    }

                    const viewerData = await viewerRes.json();

                    // Store user details (including pricingPlan) and session duration
                    localStorage.setItem('user', JSON.stringify(viewerData.user));
                    localStorage.setItem('session_active', 'true');
                    localStorage.setItem('session_expires_at', (Date.now() + 24 * 60 * 60 * 1000).toString()); // 24 hours
                    localStorage.setItem('viewer_token', viewerData.viewer_token);

                    // Clean the ticket parameter from the URL
                    const cleanUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, '', cleanUrl);

                    setState('authenticated');
                    return;
                } catch (err: any) {
                    console.error('Ticket validation failed:', err);
                    setError(err.message || 'Authentication failed');

                    // Redirect back to Website A after a brief delay
                    setTimeout(() => {
                        window.location.href = `${WEBSITE_A_URL}/login.html`;
                    }, 2000);
                    setState('redirecting');
                    return;
                }
            }


            // Case 2: Check for existing session in local storage
            const sessionActive = localStorage.getItem('session_active');
            const sessionExpiresAt = localStorage.getItem('session_expires_at');
            const userData = localStorage.getItem('user');

            if (sessionActive === 'true' && sessionExpiresAt && userData) {
                const now = Date.now();
                if (now < Number(sessionExpiresAt)) {
                    setState('authenticated');
                    return;
                }
            }

            // Session expired or missing — clear storage
            localStorage.removeItem('user');
            localStorage.removeItem('session_active');
            localStorage.removeItem('session_expires_at');
            localStorage.removeItem('viewer_token');

            // Case 3: Redirect to Website A
            setState('redirecting');
            window.location.href = `${WEBSITE_A_URL}/login.html`;
        };

        authenticate();
    }, []);

    // Loading state
    if (state === 'loading') {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-400 text-sm">Authenticating...</p>
            </div>
        );
    }

    // Redirecting state (with error)
    if (state === 'redirecting') {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
                {error ? (
                    <>
                        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 text-xl">
                            ✕
                        </div>
                        <p className="text-red-400 text-sm font-medium">{error}</p>
                        <p className="text-slate-500 text-xs">Redirecting to login...</p>
                    </>
                ) : (
                    <>
                        <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-400 text-sm">Redirecting to login...</p>
                    </>
                )}
            </div>
        );
    }

    // Authenticated — render app
    return <>{children}</>;
};

export default TicketGate;
