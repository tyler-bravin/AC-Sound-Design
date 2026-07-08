import React from 'react';
import { skillGroups, aboutText } from '../data/portfolio';

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">// About Me</div>
          <h2 className="section-title">Andrew Clelland</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>{aboutText.intro}</p>
            <p>{aboutText.experience}</p>
            <p>{aboutText.approach}</p>
            <p>
              From <strong>game jams</strong> to <strong>film festivals</strong>, I bring dedication,
              creativity, and technical expertise to every project. I'm always eager to take on new
              challenges and push the boundaries of what's possible with audio.
            </p>
          </div>

          <div className="skills-container">
            <h3 className="skills-heading">Toolkit</h3>
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <div className="skill-group-label">{group.label}</div>
                <ul className="skill-tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
