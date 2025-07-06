"use client"

import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react"

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <div className="section-container">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Let's discuss cybersecurity challenges and opportunities</p>
      </div>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-intro">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in discussing cybersecurity challenges, development projects, or potential
              collaboration opportunities. Feel free to reach out!
            </p>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <Mail size={24} />
              </div>
              <div className="method-info">
                <h4>Email</h4>
                <p>muriithidennis340@gmail.com</p>
                <span>Preferred method</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <Phone size={24} />
              </div>
              <div className="method-info">
                <h4>Phone</h4>
                <p>+25412395869</p>
                <span>Available 9 AM - 6 PM EST</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <MapPin size={24} />
              </div>
              <div className="method-info">
                <h4>Location</h4>
                <p>Available Remotely</p>
                <span>Open to travel</span>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <h4>Connect on Social</h4>
            <div className="social-links">
              <a href="https://github.com/f6Lcon" target="_blank" rel="noreferrer" className="social-link">
                <Github size={20} />
                <span>GitHub - @f6Lcon</span>
              </a>
              <a href="https://linkedin.com/in/f6Lcon" target="_blank" rel="noreferrer" className="social-link">
                <Linkedin size={20} />
                <span>LinkedIn - @f6Lcon</span>
              </a>
              <a href="https://hackerone.com/f6Lcon" target="_blank" rel="noreferrer" className="social-link">
                <MessageCircle size={20} />
                <span>HackerOne - @f6Lcon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <div className="form-header">
            <h3>Send a Message</h3>
            <p>I'll get back to you within 24 hours</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required placeholder="John" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="john.doe@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company (Optional)</label>
              <input type="text" id="company" name="company" placeholder="Your Company" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="security-consultation">Security Consultation</option>
                <option value="penetration-testing">Penetration Testing</option>
                <option value="development-project">Development Project</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="Tell me about your project or how I can help..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="quick-contact">
        <h3>Quick Contact Options</h3>
        <div className="quick-contact-grid">
          <div className="quick-contact-card">
            <Mail size={24} />
            <h4>Email Me</h4>
            <p>For detailed discussions</p>
            <a href="mailto:muriithidennis340@gmail.com" className="quick-btn">
              Send Email
            </a>
          </div>

          <div className="quick-contact-card">
            <MessageCircle size={24} />
            <h4>Schedule a Call</h4>
            <p>For immediate consultation</p>
            <a href="wa.me/254112395869" className="quick-btn">
              Book Meeting
            </a>
          </div>

          <div className="quick-contact-card">
            <Github size={24} />
            <h4>View My Work</h4>
            <p>Check out my repositories</p>
            <a href="https://github.com/f6Lcon" target="_blank" rel="noreferrer" className="quick-btn">
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
