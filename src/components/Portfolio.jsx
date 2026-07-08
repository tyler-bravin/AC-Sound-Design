import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

const Portfolio = ({ onProjectClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle swipe gestures
  useEffect(() => {
    if (!isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left - next
          nextProject();
        } else {
          // Swiped right - previous
          prevProject();
        }
      }
    };

    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.addEventListener('touchstart', handleTouchStart);
      portfolioSection.addEventListener('touchend', handleTouchEnd);

      return () => {
        portfolioSection.removeEventListener('touchstart', handleTouchStart);
        portfolioSection.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isMobile, currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  if (isMobile) {
    // Mobile: Carousel View
    return (
      <section id="portfolio">
        <div className="section-container">
          <div className="section-header">
            <div className="section-label">// Selected Work</div>
            <h2 className="section-title">Portfolio</h2>
          </div>

          <div className="portfolio-carousel">
            {/* Navigation Arrows */}
            <button 
              className="carousel-nav carousel-nav-prev" 
              onClick={prevProject}
              aria-label="Previous project"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Current Project Card */}
            <div className="carousel-track">
              <div className="carousel-item">
                <ProjectCard 
                  project={projects[currentIndex]}
                  onClick={() => onProjectClick(projects[currentIndex])}
                />
              </div>
            </div>

            <button 
              className="carousel-nav carousel-nav-next" 
              onClick={nextProject}
              aria-label="Next project"
            >
              <ChevronRight size={28} />
            </button>

            {/* Project Counter & Dots */}
            <div className="carousel-info">
              <div className="carousel-counter">
                {currentIndex + 1} / {projects.length}
              </div>
              <div className="carousel-dots">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToProject(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Swipe Hint (shows briefly on first load) */}
            <div className="swipe-hint">
              ← Swipe to browse projects →
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: Grid View (original)
  return (
    <section id="portfolio">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">// Selected Work</div>
          <h2 className="section-title">Portfolio</h2>
        </div>
        
        <div className="portfolio-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
