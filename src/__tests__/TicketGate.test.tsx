import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import TicketGate from '../components/TicketGate';

// Mock Firebase SDKs
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(),
  getApps: vi.fn(() => []),
}));
vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
}));
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(),
  doc: vi.fn(),
  getDoc: vi.fn(),
  updateDoc: vi.fn(),
}));

describe('TicketGate Authentication flow', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    
    // Mock window.location redirection
    delete (window as any).location;
    window.location = {
      ...originalLocation,
      href: '',
      search: '',
      origin: 'http://localhost:5173',
      pathname: '/',
    } as any;
  });

  it('redirects to Website A if no ticket and no active session exist', () => {
    render(
      <TicketGate>
        <div data-testid="protected-content">Secret Dashboard</div>
      </TicketGate>
    );

    // Should not render child elements
    expect(screen.queryByTestId('protected-content')).toBeNull();
    // Should trigger redirect to Website A login.html
    expect(window.location.href).toContain('login.html');
  });

  it('renders child components if valid session exists in localStorage', () => {
    // Mock active session
    localStorage.setItem('session_active', 'true');
    localStorage.setItem('session_expires_at', (Date.now() + 100000).toString());
    localStorage.setItem('user', JSON.stringify({ uid: '123', email: 'test@example.com' }));

    render(
      <TicketGate>
        <div data-testid="protected-content">Secret Dashboard</div>
      </TicketGate>
    );

    // Should successfully authenticate and show children
    expect(screen.getByTestId('protected-content')).toBeTruthy();
  });
});
