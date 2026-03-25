import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import profileImg from '../assets/Gemini_Generated_Image_7n4fz57n4fz57n4f.png';
import './About.css';
import TiltCard from '../components/TiltCard';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const imageRef = useRef(null);
    const bioRef = useRef(null);
    const statsRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Header & Bio Animation
        tl.fromTo(headerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
            .fromTo([imageRef.current, bioRef.current],
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                "-=0.4"
            )
            .fromTo(statsRef.current.children,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 },
                "-=0.4"
            );

        // Timeline Animation
        gsap.fromTo(timelineRef.current.children,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 80%",
                }
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const stats = [
        { label: "Years Experience", value: "2+" },
        { label: "Projects Completed", value: "15+" },
        { label: "Happy Clients", value: "5+" }
    ];

    const experience = [
        {
            type: "education",
            role: "SSC Education (10th)",
            company: "Vidhyadish Vidhyasankul | Grade: 74%",
            period: "2023",
            desc: "Completed secondary education with excellence, maintaining a strong academic record and developing a keen interest in computer science and logical reasoning."
        },
        {
            type: "education",
            role: "HSC Education (12th)",
            company: "Vidhyadish Vidhyasankul | Grade: 85%",
            period: "2023 - 2025",
            desc: "Pursuing higher secondary education with a focus on Science and Computer Science. Actively engaged in advanced mathematics and programming fundamentals."
        },
        {
            type: "education",
            role: "CodingGita",
            company: "Student",
            period: "2025 - 2029",
            desc: "Learning and growing at CodingGita, where the curriculum is exceptional and the environment is perfect for mastering modern web technologies. It's a fantastic place to build a strong foundation in software development."
        }
    ];

    return (
        <div className="about-page" ref={containerRef}>
            <section className="section about-hero">
                <div className="container">
                    <div ref={headerRef} className="section-header text-center">
                        <h1 className="section-title">About <span className="text-gradient">Me</span></h1>
                        <p className="section-desc">My journey, experience, and what drives me.</p>
                    </div>

                    <div className="about-content">
                        <div className="about-image-column" ref={imageRef}>
                            <TiltCard className="about-image-wrapper">
                                <img src={profileImg} alt="Profile" className="about-profile-img"
                                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                                />
                                <div className="profile-placeholder">
                                    <span className="placeholder-text">Profile</span>
                                </div>
                                <div className="about-glow"></div>
                            </TiltCard>
                        </div>

                        <div className="about-bio-column" ref={bioRef}>
                            <h2 className="bio-title">Driven by creativity, <br />Powered by code.</h2>
                            <p className="bio-text">
                                I'm a passionate developer who bridges the gap between design and technology.
                                I don't just write code; I build immersive digital experiences that solve real-world problems.
                            </p>
                            <p className="bio-text">
                                When I'm not coding, you can find me exploring new design trends, contributing to open-source,
                                or debugging life one coffee at a time.
                            </p>

                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                                Download CV <Download size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="stats-row" ref={statsRef}>
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-card">
                                <h3 className="stat-value text-gradient">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section timeline-section">
                <div className="container">
                    <h2 className="section-title text-center" style={{ marginBottom: '4rem' }}>Experience & <span className="text-gradient">Education</span></h2>

                    <div className="timeline" ref={timelineRef}>
                        {experience.map((item, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-icon">
                                    {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                </div>
                                <div className="timeline-content">
                                    <span className="timeline-date">{item.period}</span>
                                    <h3 className="timeline-role">{item.role}</h3>
                                    <h4 className="timeline-company">{item.company}</h4>
                                    <p className="timeline-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
