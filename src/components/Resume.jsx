const TimelineItem = ({ date, title, subtitle }) => (
    <div className="timeline-item">
        <div className="timeline-date">{date}</div>
        <h3 className="timeline-title">{title}</h3>
        <div className="timeline-subtitle">{subtitle}</div>
    </div>
);

const SkillCategory = ({ title, skills }) => (
    <div className="skills-category">
        <h3>{title}</h3>
        <div className="skills-list">
            {skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
            ))}
        </div>
    </div>
);

const Resume = () => {
    return (
        <section id="resume" className="section-padding container">
            <div className="resume-grid" id="resume-grid-layout">
                
                {/* Left Column: Education & Info */}
                <div className="fade-in-left delay-200">
                    <h2>Education</h2>
                    <div className="timeline">
                        <TimelineItem 
                            date="2019 - 2023"
                            title="B.S. in Computer Science"
                            subtitle="University of Technology"
                        />
                        <TimelineItem 
                            date="2022"
                            title="Advanced Web Architecture"
                            subtitle="Certification, Professional Institute"
                        />
                    </div>

                    <h2 style={{marginTop: '3rem'}}>Additional Info</h2>
                    <ul style={{listStyleType: 'none', marginLeft:'10px', paddingLeft:'1rem', borderLeft: '1px solid var(--color-light-grey)'}}>
                        <li style={{marginBottom: '0.5rem', position:'relative'}}>
                            <span style={{position: 'absolute', left:'-1rem', top:0, color:'var(--color-accent)'}}>&#10003;</span>
                            <strong>Languages:</strong> English (Fluent), French (Intermediate)
                        </li>
                        <li style={{marginBottom: '0.5rem', position:'relative'}}>
                            <span style={{position: 'absolute', left:'-1rem', top:0, color:'var(--color-accent)'}}>&#10003;</span>
                            <strong>Awards:</strong> Dean's List (4 years)
                        </li>
                        <li style={{position:'relative'}}>
                            <span style={{position: 'absolute', left:'-1rem', top:0, color:'var(--color-accent)'}}>&#10003;</span>
                            <strong>Volunteer:</strong> Local Coding Bootcamp Mentor
                        </li>
                    </ul>
                </div>

                {/* Right Column: Skills */}
                <div className="fade-in-right delay-400">
                    <h2>Skills</h2>
                    <SkillCategory 
                        title="Technical"
                        skills={['HTML5 / CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'TypeScript', 'Python', 'SQL / NoSQL']}
                    />
                    <SkillCategory 
                        title="Tools & Methods"
                        skills={['Git / GitHub', 'Docker', 'Agile / Scrum', 'Figma', 'CI/CD']}
                    />
                    <SkillCategory 
                        title="Core Competencies"
                        skills={['System Architecture', 'Performance Optimization', 'Problem Solving', 'Technical Writing']}
                    />
                </div>

            </div>

            <style>{`
                .resume-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-lg);
                }
                .timeline {
                    border-left: 1px solid var(--color-light-grey);
                    padding-left: var(--space-md);
                    margin-left: 10px;
                }
                .timeline-item {
                    position: relative;
                    margin-bottom: var(--space-md);
                }
                .timeline-item::before {
                    content: '';
                    position: absolute;
                    left: calc(-2rem - 5px); 
                    top: 5px;
                    width: 9px;
                    height: 9px;
                    background: var(--color-white);
                    border: 1px solid var(--color-charcoal);
                    border-radius: 50%;
                }
                .timeline-date {
                    font-size: 0.8rem;
                    color: var(--color-accent);
                    margin-bottom: 5px;
                    letter-spacing: 0.05em;
                }
                .timeline-title {
                    font-size: 1.25rem;
                    margin-bottom: 5px;
                }
                .timeline-subtitle {
                    font-size: 1rem;
                    color: var(--color-dark-grey);
                }
                .skills-category {
                    margin-bottom: var(--space-md);
                }
                .skills-category h3 {
                    font-size: 1.1rem;
                    margin-bottom: var(--space-sm);
                    font-family: var(--font-body);
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-dark-grey);
                }
                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-xs);
                }
                .skill-tag {
                    padding: 0.5rem 1rem;
                    background: var(--color-white);
                    border: 1px solid var(--color-light-grey);
                    font-size: 0.9rem;
                    color: var(--color-charcoal);
                    transition: var(--transition-smooth);
                }
                .skill-tag:hover {
                    border-color: var(--color-charcoal);
                    background: var(--color-charcoal);
                    color: var(--color-white);
                }
                @media (max-width: 768px) {
                    #resume-grid-layout {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Resume;
