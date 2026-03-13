import { useState, useEffect } from 'react';

const Header = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: scrolled || mobileMenuOpen ? 'var(--color-header-bg)' : 'transparent',
    backdropFilter: scrolled || mobileMenuOpen ? 'blur(10px)' : 'none',
    zIndex: 1000,
    borderBottom: scrolled ? '1px solid var(--color-light-grey)' : '1px solid transparent',
    padding: scrolled ? 'var(--space-xs) 0' : '0.5rem 0',
    transition: 'var(--transition-smooth)'
  };

  const navContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 'var(--space-sm) var(--space-md)',
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%'
  };

  const logoStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.05em',
    zIndex: 1001
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
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul style={navLinksStyle}>
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

        {/* Mobile Controls */}
        <div className="mobile-controls">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                {theme === 'light' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                )}
            </button>
            <button 
                className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
            >
                <span className="hamburger"></span>
            </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>Work</a></li>
          <li><a href="#resume" onClick={closeMobileMenu}>Resume</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
      </nav>

      <style>{`
        .desktop-nav {
            display: block;
        }
        .mobile-controls {
            display: none;
            align-items: center;
            gap: 1rem;
            z-index: 1001;
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
        
        /* Mobile Menu Button */
        .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: none;
            border: none;
            cursor: pointer;
            position: relative;
        }
        .hamburger {
            width: 24px;
            height: 2px;
            background: var(--color-charcoal);
            position: relative;
            transition: all 0.3s ease;
        }
        .hamburger::before,
        .hamburger::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            background: var(--color-charcoal);
            left: 0;
            transition: all 0.3s ease;
        }
        .hamburger::before { top: -8px; }
        .hamburger::after { bottom: -8px; }
        
        .menu-toggle.open .hamburger {
            background: transparent;
        }
        .menu-toggle.open .hamburger::before {
            transform: rotate(45deg);
            top: 0;
        }
        .menu-toggle.open .hamburger::after {
            transform: rotate(-45deg);
            bottom: 0;
        }

        /* Mobile Nav Overlay */
        .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: var(--color-overlay);
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(-100%);
            transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
            z-index: 999;
            visibility: hidden;
        }
        .mobile-nav.open {
            transform: translateY(0);
            visibility: visible;
        }
        .mobile-nav-links {
            list-style: none;
            text-align: center;
            padding: 0;
        }
        .mobile-nav-links li {
            margin: 2rem 0;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
        }
        .mobile-nav.open .mobile-nav-links li {
            opacity: 1;
            transform: translateY(0);
        }
        .mobile-nav.open .mobile-nav-links li:nth-child(1) { transition-delay: 0.1s; }
        .mobile-nav.open .mobile-nav-links li:nth-child(2) { transition-delay: 0.2s; }
        .mobile-nav.open .mobile-nav-links li:nth-child(3) { transition-delay: 0.3s; }
        .mobile-nav.open .mobile-nav-links li:nth-child(4) { transition-delay: 0.4s; }
        
        .mobile-nav-links a {
            font-family: var(--font-heading);
            font-size: 2.5rem;
            color: var(--color-charcoal);
            text-transform: lowercase;
            letter-spacing: -0.02em;
        }
        .mobile-nav-links a:hover {
            color: var(--color-accent);
        }

        @media (max-width: 768px) {
            .desktop-nav {
                display: none;
            }
            .mobile-controls {
                display: flex;
            }
        }
      `}</style>
    </header>
  );
};

export default Header;
