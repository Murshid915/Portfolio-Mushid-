import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="home" className="container" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gap: 'var(--space-lg)',
                alignItems: 'center',
                width: '100%'
            }} id="hero-grid">
                
                <div className="fade-in-left delay-100">
                    <h1>Crafting elegant solutions <br /> through code and design.</h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-dark-grey)',
                        maxWidth: '600px',
                        marginTop: 'var(--space-sm)',
                        marginBottom: 'var(--space-md)'
                    }}>I am a software engineer specializing in refined, high-performance architectural systems and minimalist web experiences.</p>
                    <a href="#projects" className="btn-hero">View Work</a>
                </div>

                <div className="hero-image-wrapper fade-in-right delay-300 hover-float">
                    <img src={profileImg} alt="Murshid - Professional Profile" className="hero-image" />
                    <div className="image-frame"></div>
                </div>

            </div>

            <style>{`
                .btn-hero {
                    display: inline-block;
                    padding: 1rem 2rem;
                    border: 1px solid var(--color-charcoal);
                    background: transparent;
                    color: var(--color-charcoal);
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                .btn-hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: var(--color-charcoal);
                    z-index: -1;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .btn-hero:hover {
                    color: var(--color-white);
                }
                .btn-hero:hover::before {
                    transform: scaleX(1);
                    transform-origin: left;
                }
                .hero-image-wrapper {
                    position: relative;
                }
                .hero-image {
                    width: 100%;
                    height: auto;
                    aspect-ratio: 3/4;
                    object-fit: cover;
                    filter: grayscale(100%);
                    transition: var(--transition-smooth);
                    border-radius: 4px; /* Slight softening for a photo */
                }
                .hero-image:hover {
                    filter: grayscale(0%);
                }
                .image-frame {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    width: 100%;
                    height: 100%;
                    border: 1px solid var(--color-light-grey);
                    z-index: -1;
                    transition: var(--transition-smooth);
                }
                .hero-image-wrapper:hover .image-frame {
                    top: 25px;
                    left: 25px;
                    border-color: var(--color-accent);
                }
                @media (max-width: 768px) {
                    #hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
