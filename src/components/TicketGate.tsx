import { useState, useEffect } from 'react';

const AUTH_BACKEND_URL = import.meta.env.VITE_AUTH_BACKEND_URL || 'http://localhost:3001';
const WEBSITE_A_URL = import.meta.env.VITE_WEBSITE_A_URL || 'http://localhost:8080';

/**
 * TicketGate — Guards the entire app.
 *
 * 1. If URL has ?ticket=xxx  → validate ticket with auth-backend → store JWT
 * 2. If JWT exists in storage → check expiry → render children
 * 3. If no ticket & no JWT   → redirect to Website A login
 */
const TicketGate = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState<'loading' | 'authenticated' | 'redirecting'>('loading');
    const [error, setError] = useState('');

    useEffect(() => {
        const authenticate = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const ticket = urlParams.get('ticket');

            // Case 1: Ticket in URL — validate it
            if (ticket) {
                try {
                    const response = await fetch(`${AUTH_BACKEND_URL}/api/auth/ticket/validate`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ticket }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Ticket validation failed');
                    }

                    // Store the RS256 JWT and user info
                    localStorage.setItem('crosssite_jwt', data.jwt);
                    localStorage.setItem('user', JSON.stringify(data.user));

                    // Clean the ticket from URL
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

            // Case 2: Check for existing JWT
            const jwt = localStorage.getItem('crosssite_jwt');
            if (jwt) {
                // Decode JWT to check expiry (without verification — that's the server's job)
                try {
                    const payload = JSON.parse(atob(jwt.split('.')[1]));
                    const now = Math.floor(Date.now() / 1000);

                    if (payload.exp && payload.exp > now) {
                        setState('authenticated');
                        return;
                    }

                    // JWT expired — clear and redirect
                    localStorage.removeItem('crosssite_jwt');
                    localStorage.removeItem('user');
                } catch {
                    // Malformed JWT — clear and redirect
                    localStorage.removeItem('crosssite_jwt');
                    localStorage.removeItem('user');
                }
            }

            // Case 3: No ticket, no valid JWT → redirect to Website A
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
