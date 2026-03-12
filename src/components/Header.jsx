import { useState, useEffect } from 'react';

const Header = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        if (window.scrollY < 10) {
          setScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'var(--color-header-bg)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    borderBottom: scrolled ? '1px solid var(--color-light-grey)' : '1px solid transparent',
    padding: scrolled ? 'var(--space-xs) 0' : '0',
    transition: 'var(--transition-smooth)'
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--space-sm) var(--space-md)',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const logoStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.05em'
  };

  const navLinksStyle = {
    display: 'flex',
    gap: 'var(--space-md)',
    listStyle: 'none',
    alignItems: 'center'
  };

  const linkStyle = {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    position: 'relative',
    display: 'inline-block'
  };

  return (
    <header style={headerStyle}>
      <div style={navContainerStyle}>
        <div style={logoStyle}>M.</div>
        <nav className="desktop-nav">
          <ul style={navLinksStyle} className="nav-links-list">
            <li><a href="#home" style={linkStyle} className="nav-link">Home</a></li>
            <li><a href="#projects" style={linkStyle} className="nav-link">Work</a></li>
            <li><a href="#resume" style={linkStyle} className="nav-link">Resume</a></li>
            <li><a href="#contact" style={linkStyle} className="nav-link">Contact</a></li>
            <li>
                <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                   {theme === 'light' ? (
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                   ) : (
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                   )}
                </button>
            </li>
          </ul>
        </nav>
      </div>
      <style>{`
        .desktop-nav {
            display: block;
        }
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0%;
            height: 1px;
            background-color: var(--color-accent);
            transition: var(--transition-smooth);
        }
        .nav-link:hover::after {
            width: 100%;
        }
        .theme-toggle {
            background: none;
            border: none;
            color: var(--color-charcoal);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-smooth);
        }
        .theme-toggle:hover {
            color: var(--color-accent);
            transform: scale(1.1);
        }
        @media (max-width: 768px) {
            .desktop-nav {
                display: none;
            }
        }
      `}</style>
    </header>
  );
};

export default Header;
