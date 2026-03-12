import { useState } from 'react';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully!');
        // In a real app, integrate email service here
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container fade-in-up">
                <style>{`
                    .contact-section {
                        background-color: var(--color-white);
                        border-top: 1px solid var(--color-light-grey);
                    }
                    .contact-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: var(--space-lg);
                    }
                    .contact-info p {
                        margin-bottom: var(--space-sm);
                        color: var(--color-dark-grey);
                    }
                    .social-links {
                        display: flex;
                        gap: var(--space-sm);
                        margin-top: var(--space-md);
                    }
                    .social-link {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        border: 1px solid var(--color-light-grey);
                        border-radius: 50%;
                        transition: var(--transition-smooth);
                    }
                    .social-link:hover {
                        border-color: var(--color-accent);
                        color: var(--color-accent);
                    }
                    .contact-form {
                        display: flex;
                        flex-direction: column;
                        gap: var(--space-sm);
                    }
                    .form-group {
                        position: relative;
                    }
                    .form-control {
                        width: 100%;
                        padding: 1rem 0;
                        background: transparent;
                        border: none;
                        border-bottom: 1px solid var(--color-light-grey);
                        font-family: var(--font-body);
                        font-size: 1rem;
                        color: var(--color-charcoal);
                        outline: none;
                        transition: var(--transition-smooth);
                    }
                    .form-control:focus {
                        border-bottom-color: var(--color-charcoal);
                    }
                    .form-control::placeholder {
                        color: var(--color-grey);
                    }
                    textarea.form-control {
                        resize: vertical;
                        min-height: 100px;
                    }
                    @media (max-width: 768px) {
                        .contact-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
                
                <div className="contact-grid">
                    <div className="contact-info fade-in-left delay-200">
                        <h2 className="contact-section-header">Get in Touch</h2>
                        <p>I am currently available for freelance projects and full-time opportunities.</p>
                        <p>Drop a message and let's craft something beautiful together.</p>
                        
                        <div className="social-links">
                            <a href="#" className="social-link hover-float" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="social-link hover-float" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="mailto:hello@example.com" className="social-link hover-float" aria-label="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form fade-in-right delay-400" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" className="form-control" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" className="form-control" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="btn-hero" style={{alignSelf: 'flex-start', marginTop: '1rem'}}>Send Message</button>
                        {status && <p style={{marginTop: '1rem', color: 'var(--color-accent)', fontSize: '0.9rem'}}>{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
