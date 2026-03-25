import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';
import { useForm, ValidationError } from '@formspree/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    const [state, handleSubmit] = useForm("xnjoalgb");

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
            .fromTo(infoRef.current,
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                "-=0.4"
            )
            .fromTo(formRef.current,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="contact-page">
            <section className="section contact-hero">
                <div className="container">
                    <div ref={headerRef} className="section-header text-center">
                        <h1 className="section-title"><span className="text-gradient">Contact Me</span></h1>
                        <p className="section-desc">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                    </div>

                    <div className="contact-content">
                        {/* Contact Info Column */}
                        <div className="contact-info" ref={infoRef}>
                            <h2 className="info-title">Let's Chat</h2>
                            <p className="info-text">
                                I'm always open to discussing new projects, creative opportunities, or partnerships.
                            </p>

                            <div className="info-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h3 className="item-label">Email</h3>
                                    <a href="mailto:kahan.ghori.cg@gmail.com" className="item-link">kahan.ghori.cg@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h3 className="item-label">Location</h3>
                                    <p className="item-text">Gandhinagar, Gujarat</p>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h3 className="social-title">Connect</h3>
                                <div className="social-icons">
                                    <a href="https://github.com/ghorikahan" target="_blank" rel="noopener noreferrer" className="social-btn"><Github size={20} /></a>
                                    <a href="https://www.linkedin.com/in/kahan-ghori-157487394/" target="_blank" rel="noopener noreferrer" className="social-btn"><Linkedin size={20} /></a>
                                    <a href="mailto:kahan.ghori.cg@gmail.com" className="social-btn"><Mail size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="contact-form-wrapper" ref={formRef}>
                            {state.succeeded ? (
                                <div className="status-message success" style={{ 
                                    padding: '2rem', 
                                    backgroundColor: 'rgba(201, 168, 76, 0.1)', 
                                    border: '1px solid var(--gold)',
                                    color: 'var(--gold)',
                                    borderRadius: 'var(--radius-sm)',
                                    textAlign: 'center'
                                }}>
                                    <h3>Thanks for reaching out!</h3>
                                    <p style={{ marginTop: '1rem' }}>Your message has been sent successfully. I will get back to you soon.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            placeholder="Tell me about your project..."
                                            required
                                        ></textarea>
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                                    </div>

                                    <button
                                        type="submit"
                                        className={`btn btn-primary submit-btn ${state.submitting ? 'submitting' : ''}`}
                                        disabled={state.submitting}
                                    >
                                        {state.submitting ? 'Sending...' : 'Send Message'} 
                                        {!state.submitting && <Send size={18} />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
