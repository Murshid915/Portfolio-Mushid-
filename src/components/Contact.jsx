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
                            <a href="https://www.linkedin.com/in/ibrahim-mohammad-murshid" className="social-link hover-float" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://wa.me/918129155422" className="social-link hover-float" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.4 8.28 8.28 0 0 1 3.8.9L21 3z"></path></svg>
                            </a>
                            <a href="mailto:murshi479@gmail.com" className="social-link hover-float" aria-label="Email">
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
