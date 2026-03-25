import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-cta">
                    <h2 className="cta-title">Let's Work <span className="text-gradient">Together</span></h2>
                    <p className="cta-text">
                        I'm currently available for freelance work and open to full-time opportunities.
                    </p>
                    <div className="footer-actions" style={{ justifyContent: 'center' }}>
                        <a href="/resume.pdf" target="_blank" className="resume-btn">
                            <FileText size={18} />
                            View Resume
                        </a>
                        <a href="mailto:kahan.ghori.cg@gmail.com" className="footer-email-btn">
                            <Mail size={18} />
                            Email Me
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {year} Ghori Kahan. Designed & Developed with Passion.</p>
                    <div className="footer-socials">
                        <a href="https://github.com/ghorikahan" target="_blank" rel="noopener noreferrer">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/kahan-ghori-157487394/" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
