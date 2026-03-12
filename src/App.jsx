import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <WorkGallery />
        <Resume />
        <Contact />
      </main>
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--color-light-grey)', color: 'var(--color-grey)', fontSize: '0.85rem' }}>
        <div className="container">
            &copy; {new Date().getFullYear()} Murshid. Designed with clarity and structure.
        </div>
      </footer>
    </>
  )
}

export default App;
