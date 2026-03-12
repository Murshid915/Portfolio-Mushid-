const ProjectCard = ({ title, category, image, tools }) => (
    <article className="project-card group hover-float">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{category}</p>
        </div>
        <div className="project-overlay">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{tools}</p>
            <a href="#" className="project-link">View Details</a>
        </div>
    </article>
);

const WorkGallery = () => {
    const projects = [
        {
            title: "Corporate Intranet",
            category: "Communications Platform",
            tools: "React, Node.js, and complex state management.",
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Financial Dashboard",
            category: "Real-time visualization",
            tools: "D3.js, WebSockets, and high performance.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "E-Commerce App",
            category: "Minimalist shopping",
            tools: "Next.js, Tailwind, Stripe integration.",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="projects" className="section-padding container">
            <div>
                <h2 className="projects-card-header fade-in-up">Selected Work</h2>
                <div className="projects-grid">
                    {projects.map((proj, idx) => {
                        const delayClass = `delay-${(idx + 1) * 100}`;
                        return (
                            <div key={idx} className={`fade-in-up ${delayClass}`}>
                                <ProjectCard {...proj} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <style>{`
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: var(--space-md);
                }
                .project-card {
                    position: relative;
                    overflow: hidden;
                    background: var(--color-white);
                    border: 1px solid var(--color-light-grey);
                }
                .project-image {
                    width: 100%;
                    height: 300px;
                    background-color: var(--color-light-grey);
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                    cursor: pointer;
                }
                .project-card:hover .project-image {
                    transform: scale(1.05); /* very subtle scale */
                }
                .project-info {
                    padding: var(--space-md);
                    background: var(--color-white);
                    position: relative;
                    border-top: 1px solid var(--color-light-grey);
                }
                .project-title {
                    font-size: 1.5rem;
                    margin-bottom: var(--space-xs);
                }
                .project-desc {
                    color: var(--color-dark-grey);
                    font-size: 0.9rem;
                }
                .project-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 300px;
                    background: rgba(250, 250, 250, 0.9);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: var(--transition-smooth);
                    padding: var(--space-md);
                    text-align: center;
                    pointer-events: none;
                }
                .project-card:hover .project-overlay {
                    opacity: 1;
                    pointer-events: auto;
                }
                .project-link {
                    margin-top: var(--space-sm);
                    color: var(--color-accent);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
            `}</style>
        </section>
    );
};

export default WorkGallery;
