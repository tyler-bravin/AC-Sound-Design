import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Navigation = ({ activeSection, onNavigate, theme, onThemeToggle }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (section) => {
    onNavigate(section);
    setMobileMenuOpen(false); // Close menu after navigation
  };

  return (
      <>
        <nav>
          <div className="nav-container">
            <div className="logo">AC SOUND</div>

            {/* Desktop Nav Links */}
            <div className="nav-links">
              <button
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => onNavigate('home')}
              >
                Home
              </button>
              <button
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => onNavigate('about')}
              >
                About
              </button>
              <button
                  className={activeSection === 'portfolio' ? 'active' : ''}
                  onClick={() => onNavigate('portfolio')}
              >
                Portfolio
              </button>
              <button
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => onNavigate('contact')}
              >
                Contact
              </button>
            </div>

            {/* Desktop Theme Toggle */}
            <button className="theme-toggle" onClick={onThemeToggle}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Hamburger */}
            <button
                className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
            className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <button
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
            >
              About
            </button>
            <button
                className={activeSection === 'portfolio' ? 'active' : ''}
                onClick={() => handleNavClick('portfolio')}
            >
              Portfolio
            </button>
            <button
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
            >
              Contact
            </button>
          </div>

          {/* Theme Toggle in Mobile Menu */}
          <div className="mobile-theme-section">
            <span>Theme</span>
            <button className="theme-toggle" onClick={onThemeToggle}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </>
  );
};

export default Navigation;
