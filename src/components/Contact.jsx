import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Clock, FileText } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">// Get In Touch</div>
          <h2 className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-section">
            <p className="contact-intro">
              I'm here to help with all your sound design needs. Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Call Me</h4>
                  <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email Me</h4>
                  <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>{contactInfo.location}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Availability</h4>
                  <p>{contactInfo.availability}</p>
                </div>
              </div>
            </div>

            <div className="contact-social-links">
              <a href={`mailto:${contactInfo.email}`} className="contact-link" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="contact-cta-section">
            <h3>Ready to collaborate?</h3>
            <p>Send me an email and let's discuss your project!</p>
            <div className="cta-buttons">
              <a href={`mailto:${contactInfo.email}`} className="btn btn-primary btn-large">
                Send Me a Message
              </a>
              <a href={`/${contactInfo.cvUrl}`} className="btn btn-secondary btn-large" download>
                <FileText size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
