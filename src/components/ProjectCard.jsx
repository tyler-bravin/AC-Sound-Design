import React from 'react';
import { Play } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
        ) : (
          // On-brand placeholder for projects without a screenshot yet
          <div className="project-image-placeholder" aria-hidden="true">
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.12}s` }} />
            ))}
          </div>
        )}
        <div className="project-overlay" />
        <div className="play-button">
          <Play size={24} fill="currentColor" />
        </div>
      </div>

      <div className="project-info">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-duration">Duration: {project.duration}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
