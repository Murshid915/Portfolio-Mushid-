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
                
                {/* Left Column: Experience & Education */}
                <div className="fade-in-left delay-200">
                    <h2>Experience</h2>
                    <div className="timeline">
                        <TimelineItem 
                            date="Jan 2025 - Dec 2025"
                            title="IT Support & Area Manager"
                            subtitle="Althamar Dates & Nuts International LLP"
                        />
                        <div style={{ marginLeft: 'var(--space-md)', marginBottom: 'var(--space-md)', fontSize: '0.9rem', color: 'var(--color-dark-grey)' }}>
                            <p>• Provided IT support to maintain and control company software systems.</p>
                            <p>• Troubleshoot hardware and software issues, improving system reliability.</p>
                            <p>• Oversaw operations and supervised staff across multiple branches.</p>
                            <p>• Coordinated between technical and operational teams to bridge IT solutions with business needs.</p>
                        </div>
                    </div>

                    <h2 style={{marginTop: '3rem'}}>Education</h2>
                    <div className="timeline">
                        <TimelineItem 
                            date="2024"
                            title="BCA"
                            subtitle="P A First Grade College Mangalore (71%)"
                        />
                        <TimelineItem 
                            date="2021"
                            title="PUC (Commerce)"
                            subtitle="Badriya College Mangalore (68%)"
                        />
                        <TimelineItem 
                            date="2019"
                            title="SSLC"
                            subtitle="Kunnil EMS Manjeshwar (70%)"
                        />
                    </div>

                    <h2 style={{marginTop: '3rem'}}>Languages</h2>
                    <div className="skills-list" style={{ marginTop: '1rem' }}>
                        {['English', 'Hindi', 'Malayalam', 'Kannada', 'Tamil'].map((lang, i) => (
                            <span key={i} className="skill-tag">{lang}</span>
                        ))}
                    </div>
                </div>

                {/* Right Column: Skills & Certifications */}
                <div className="fade-in-right delay-400">
                    <h2>Software Skills</h2>
                    <SkillCategory 
                        title="Technical Expertise"
                        skills={['Software Installation & Maintenance', 'Hardware Troubleshooting', 'Network Solutions', 'System Monitoring', 'Remote Support (TeamViewer/AnyDesk)']}
                    />
                    <SkillCategory 
                        title="Office & Communication"
                        skills={['MS Office (Excel, PPT, Word)', 'Zoom / Teams / Slack']}
                    />
                    
                    <h2 style={{marginTop: '3rem'}}>Management Skills</h2>
                    <SkillCategory 
                        title="Operations"
                        skills={['Branch Operations Oversight', 'Staff Supervision', 'Process Improvement', 'Compliance Tracking', 'Technical Documentation']}
                    />

                    <h2 style={{marginTop: '3rem'}}>Additional Certifications</h2>
                    <SkillCategory 
                        title="Full Stack & More"
                        skills={['Full Stack Development (HTML, CSS, JS, Bootstrap, RESTful APIs)', 'Data Analytics', 'Junior Hardware Engineering (JHE)']}
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
