import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RequestSection: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const requestedSection = queryParams.get('section') || '';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [organization, setOrganization] = useState('');
    const [message, setMessage] = useState(`I am interested in receiving the full copy of the section: ${requestedSection}`);
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        try {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                const user = JSON.parse(userStr);
                if (user.name) setName(user.name);
                if (user.email) setEmail(user.email);
            }
        } catch (e) {
            console.error("Error reading user from localStorage", e);
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            const res = await fetch('/api/contact/request-section', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                },
                body: JSON.stringify({
                    sectionTitle: requestedSection,
                    name,
                    email,
                    organization,
                    message
                })
            });

            let data: any = {};
            const contentType = res.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                data = await res.json();
            }

            if (!res.ok) {
                throw new Error(data.message || `Request failed with status ${res.status}`);
            }

            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div style={{ maxWidth: '600px', margin: '100px auto', padding: '40px', backgroundColor: 'var(--navy-mid)', borderRadius: '12px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                <h2 style={{ color: 'white', marginBottom: '20px' }}>Request Submitted</h2>
                <p style={{ color: 'var(--mist)', fontSize: '16px', lineHeight: '1.6' }}>
                    Thanks for your interest. We shall be in touch with you to complete the section shortly.
                </p>
                <button 
                    onClick={() => navigate(-1)}
                    style={{ marginTop: '30px', padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Return to Report
                </button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '60px auto', padding: '40px', backgroundColor: 'var(--navy-mid)', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <h2 style={{ color: 'white', marginBottom: '10px', fontSize: '24px' }}>Request Full Section</h2>
            <p style={{ color: 'var(--mist)', marginBottom: '30px', fontSize: '14px' }}>
                Please fill out the form below to request access to the complete section. Our team will get back to you shortly.
            </p>

            {error && (
                <div style={{ backgroundColor: 'var(--lock-red)', color: 'white', padding: '15px', borderRadius: '6px', marginBottom: '20px', fontSize: '14px' }}>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div>
                    <label style={{ display: 'block', color: 'var(--mist)', marginBottom: '8px', fontSize: '13px', fontWeight: 'bold' }}>Requested Section</label>
                    <input 
                        type="text" 
                        value={requestedSection} 
                        readOnly 
                        style={{ width: '100%', padding: '12px', backgroundColor: 'var(--navy)', border: '1px solid var(--rule)', color: 'var(--mist)', borderRadius: '6px', fontSize: '14px' }} 
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '13px', fontWeight: 'bold' }}>Your Name *</label>
                        <input 
                            type="text" 
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ width: '100%', padding: '12px', backgroundColor: 'var(--navy)', border: '1px solid var(--rule)', color: 'white', borderRadius: '6px', fontSize: '14px' }} 
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '13px', fontWeight: 'bold' }}>Work Email *</label>
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '12px', backgroundColor: 'var(--navy)', border: '1px solid var(--rule)', color: 'white', borderRadius: '6px', fontSize: '14px' }} 
                        />
                    </div>
                </div>

                <div>
                    <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '13px', fontWeight: 'bold' }}>Organization</label>
                    <input 
                        type="text" 
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Company Name"
                        style={{ width: '100%', padding: '12px', backgroundColor: 'var(--navy)', border: '1px solid var(--rule)', color: 'white', borderRadius: '6px', fontSize: '14px' }} 
                    />
                </div>

                <div>
                    <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '13px', fontWeight: 'bold' }}>Message</label>
                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        style={{ width: '100%', padding: '12px', backgroundColor: 'var(--navy)', border: '1px solid var(--rule)', color: 'white', borderRadius: '6px', fontSize: '14px', resize: 'vertical' }} 
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{ 
                        marginTop: '10px', 
                        padding: '14px', 
                        backgroundColor: isSubmitting ? 'var(--navy)' : 'var(--accent)', 
                        color: isSubmitting ? 'var(--mist)' : 'white', 
                        border: 'none', 
                        borderRadius: '6px', 
                        cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                        fontWeight: 'bold',
                        fontSize: '15px'
                    }}
                >
                    {isSubmitting ? 'Sending Request...' : 'Send Request'}
                </button>

            </form>
        </div>
    );
};

export default RequestSection;
