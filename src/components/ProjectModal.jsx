import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Escape closes every modal type; arrows only apply to galleries.
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (!project?.galleryImages) return;

      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentImageIndex, project]);

  if (!project) return null;

  const nextImage = () => {
    if (project.galleryImages) {
      setCurrentImageIndex((prev) => 
        prev === project.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.galleryImages) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.galleryImages.length - 1 : prev - 1
      );
    }
  };

  // Icon components for download buttons
  const WindowsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  );

  const AppleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      style={{ animation: 'fadeIn 0.3s ease-out' }}
      tabIndex={0}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'slideUp 0.4s ease-out' }}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-media-container">
          {project.videoUrl ? (
            // YouTube Video
            <iframe
              className="modal-iframe modal-iframe-video"
              src={project.videoUrl}
              title={project.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : project.gameUrl ? (
            // Embedded Game (works for both Wildfire and Honours)
            <iframe
              className="modal-iframe modal-iframe-game"
              src={project.gameUrl}
              title={project.title}
              loading="lazy"
              allowFullScreen
            ></iframe>
          ) : project.isGallery && project.galleryImages ? (
            // Photo Gallery with Navigation
            <div className="gallery-container">
              <img 
                src={project.galleryImages[currentImageIndex]} 
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className="gallery-image"
              />
              <button 
                className="gallery-nav gallery-nav-prev" 
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                className="gallery-nav gallery-nav-next" 
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
              <div className="gallery-counter">
                {currentImageIndex + 1} / {project.galleryImages.length}
              </div>
            </div>
          ) : (
            // Fallback Image (for Honours project)
            project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="modal-media-placeholder" aria-hidden="true">
                {Array.from({ length: 18 }, (_, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            )
          )}
        </div>
        
        <div className="modal-body">
          <div className="modal-header">
            <span className="modal-category">{project.category}</span>
            <span className="modal-duration">{project.duration}</span>
          </div>
          
          <h2>{project.title}</h2>
          
          {project.role && (
            <p className="modal-role"><strong>Role:</strong> {project.role}</p>
          )}
          
          {project.purpose && (
            <p className="modal-purpose"><strong>Purpose:</strong> {project.purpose}</p>
          )}
          
          <p>{project.description}</p>

          {project.additionalInfo && (
            <p className="modal-additional-info">{project.additionalInfo}</p>
          )}

          {/* Download Buttons for Honours Project */}
          {project.hasDownloads && project.downloads && (
            <div className="modal-downloads">
              <h3>Download Builds</h3>
              <div className="download-buttons">
                {project.downloads.map((download, index) => (
                  <a
                    key={index}
                    href={download.url}
                    className="download-btn"
                    download
                  >
                    {download.icon === 'windows' && <WindowsIcon />}
                    {download.icon === 'apple' && <AppleIcon />}
                    <span>{download.label}</span>
                    <Download size={18} />
                  </a>
                ))}
              </div>
            </div>
          )}
          
          <div className="modal-tech">
            <h3>{project.isGallery ? 'Equipment & Software' : 'Tools & Software'}</h3>
            <div className="tech-tags">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {project.isGallery && project.galleryImages && (
            <div className="gallery-thumbnails">
              {project.galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
