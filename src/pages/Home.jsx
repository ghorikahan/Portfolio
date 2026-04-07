import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layout,
    Award,
    MapPin,
    Youtube,
    FileText,
    Trophy,
    Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/Gemini_Generated_Image_7n4fz57n4fz57n4f.png';
import jpmorganCert from '../assets/jpmorgan-certificate.jpg';
import microsoftCert from '../assets/microsoft-certificate.jpg';
import parulCert from '../assets/parul-certificate.jpg';
import cppCert from '../assets/cpp-certificate.jpg';
import awsCert from '../assets/aws-documentdb.png';
import databricksCert from '../assets/databricks-ml.png';
import electrosphereCert from '../assets/electrosphere-cert.png';
import sangamHackathonCert from '../assets/sangam-hackathon.png';
import codematrixRound1 from '../assets/codematrix-round1.png';
import codematrixExcellence from '../assets/codematrix-excellence.png';
import finagentHackathon from '../assets/finagent-hackathon.png';
import sangamIdCard from '../assets/sangam-id-card.jpg';
import './Home.css';
import TiltCard from '../components/TiltCard';
import LeetCodeIcon from '../components/LeetCodeIcon';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const greetingRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const actionsRef = useRef(null);
    const heroImageRef = useRef(null);

    const skillsRef = useRef(null);
    const technicalSkillsRef = useRef(null);
    const projectsRef = useRef(null);

    const certificatesRef = useRef(null);
    const hackathonsRef = useRef(null);

    const [titleIndex, setTitleIndex] = useState(0);
    const titles = [
        "Creative Developer",
        "FullStack Developer",
        "MERNStack Developer",
        "UI/UX Designer",
        "Web Developer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.4 } });

        // Hero Cinematic Entrance
        tl.fromTo(greetingRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.1 })
            .fromTo(titleRef.current, { y: 40, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1 }, "-=1.2")
            .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.1")
            .fromTo(actionsRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "-=1.2")
            .fromTo(heroImageRef.current, { x: 40, opacity: 0, scale: 0.9 }, { x: 0, opacity: 1, scale: 1, ease: "power4.out", duration: 1.8 }, "-=1.4");

        // Reusable Section Headers Animation
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.fromTo(header,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: header,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

        // Expertise Cards Animation
        gsap.fromTo(gsap.utils.toArray('.skill-card'),
            { y: 60, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Technical Skills Grid (Pop-in Random Stagger)
        gsap.fromTo(gsap.utils.toArray('.skill-logo-card'),
            { y: 40, opacity: 0, scale: 0.8 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 0.8,
                ease: "back.out(1.2)",
                stagger: { amount: 0.6, from: "random" },
                scrollTrigger: {
                    trigger: technicalSkillsRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Featured Projects Animation
        gsap.fromTo(gsap.utils.toArray('.project-card'),
            { y: 80, opacity: 0, scale: 0.95 },
            {
                y: 0, opacity: 1, scale: 1,
                duration: 1.4,
                ease: "expo.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: "top 75%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Certificates Animation
        const certificateCards = gsap.utils.toArray('.certificates-grid .certificate-card');
        gsap.fromTo(certificateCards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: certificatesRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Hackathons Animation
        const hackathonCards = gsap.utils.toArray('.hackathons-grid .certificate-card');
        gsap.fromTo(hackathonCards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: hackathonsRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    useEffect(() => {
        document.title = "Ghori Kahan | MERN Stack Developer Portfolio";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Professional MERN Stack Developer specializing in building high-performance, scalable web applications.');
        }
    }, []);

    const skills = [
        {
            name: "Frontend Development",
            icon: <Layout />,
            desc: "Specializing in crafting high-end, responsive user interfaces that prioritize speed and accessibility. I leverage modern frameworks like React and Vite to build modular components that provide a seamless user experience across all devices and screen sizes."
        },
        {
            name: "Backend Development",
            icon: <Terminal />,
            desc: "Architecting scalable and secure server-side solutions using the Node.js ecosystem. From implementing complex business logic to building high-performance RESTful APIs, I ensure the backend infrastructure is robust and efficient."
        },
        {
            name: "Database & Cloud",
            icon: <Database />,
            desc: "Expertise in designing logical and physical data models that ensure data integrity and performance. I manage modern database systems like MongoDB and deploy resilient cloud-hosted environments that offer high availability."
        },
        {
            name: "Tools & Others",
            icon: <Cpu />,
            desc: "Proficient in managing the entire development lifecycle, from sophisticated design prototyping in Figma to version control and automated deployments. I utilize industry-standard tools to streamline workflows and maintain peak productivity."
        }
    ];

    const technicalSkills = {
        frontend: [
            {
                name: "React.js",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            },
            {
                name: "JavaScript",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            },
            {
                name: "HTML5",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            },
            {
                name: "CSS3",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            },
            {
                name: "Tailwind CSS",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
            },
            {
                name: "Vite",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg"
            }
        ],
        backend: [
            {
                name: "Node.js",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            },
            {
                name: "Express.js",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
            },
            {
                name: "Mongoose",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" // Mongoose doesn't have a devicon, MongoDB is close
            }
        ],
        database: [
            {
                name: "MongoDB",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
            },
            {
                name: "AWS",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            }
        ],
        tools: [
            {
                name: "Git",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
            },
            {
                name: "GitHub",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
            },
            {
                name: "VS Code",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"
            },
            {
                name: "Figma",
                logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
            },
            {
                name: "Postman",
                logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            }
        ]
    };

    const projects = [
        {
            title: "Mamaearth Clone",
            description: "A feature-rich e-commerce clone of the Mamaearth website, focusing on a clean UI, responsive product listings, and a modern shopping experience.",
            tags: ["React", "CSS3", "JavaScript"],
            image: new URL('../assets/mamaearth.png', import.meta.url).href,
            links: {
                demo: "https://lambent-arithmetic-6de4fa.netlify.app/",
                code: "https://github.com/ghorikahan/Website-Clone/tree/main/Website-3-Mamaearth",
                video: "https://youtu.be/_pX3Evdr20U"
            }
        },
        {
            title: "AdilQuadri Clone",
            description: "A sophisticated e-commerce clone of the premium fragrance brand AdilQuadri, featuring luxury aesthetics and a seamless user interface.",
            tags: ["React", "CSS3", "JavaScript"],
            image: new URL('../assets/adilquadri.png', import.meta.url).href,
            links: {
                demo: "https://adilquadri-clone.netlify.app/",
                code: "https://github.com/ghorikahan/Website-Clone/tree/main/Website-4-adilquadri",
                video: "https://youtu.be/DfU-GbvsFA0"
            }
        },
        {
            title: "On Clone",
            description: "A high-performance e-commerce clone of the 'On' running brand website. Featuring sleek animations, a minimalistic design language, and a premium product showcase.",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            image: new URL('../assets/on.png', import.meta.url).href,
            links: {
                demo: "https://delightful-lolly-d0cceb.netlify.app/",
                code: "https://github.com/ghorikahan/Website-Clone/tree/main/Website-5-on",
                video: "https://youtu.be/7gAJA2iyHwA"
            }
        }
    ];

    const certificates = [
        {
            title: "Getting Started with Amazon DocumentDB",
            organization: "Simplilearn (AWS)",
            type: "Certificate of Completion",
            year: "2026",
            date: "February 18th, 2026",
            image: awsCert,
            link: "#"
        },
        {
            title: "Get Started with Databricks for Machine Learning",
            organization: "Simplilearn (Databricks)",
            type: "Declaration of Completion",
            year: "2026",
            date: "February 17th, 2026",
            image: databricksCert,
            link: "#"
        },
        {
            title: "Software Engineering Job Simulation",
            organization: "JPMorgan Chase & Co.",
            type: "Certificate of Completion",
            year: "2026",
            date: "January 18th, 2026",
            image: jpmorganCert,
            link: "https://media.licdn.com/dms/image/v2/D5622AQGM3TIzzeR09Q/feedshare-shrink_2048_1536/B56Zvqz7eSH4Ak-/0/1769171040368?e=1775088000&v=beta&t=NgfwqAtpfvEgj8GpZiGCWarq9omeHNgrYeyKADODU2w"
        },
        {
            title: "GitHub Copilot Fundamentals",
            organization: "Simplilearn (Microsoft)",
            type: "Declaration of Completion",
            year: "2025",
            date: "December 26th, 2025",
            image: microsoftCert,
            link: "https://media.licdn.com/dms/image/v2/D5622AQFFWC0xy5ZlTg/feedshare-shrink_2048_1536/B56ZtgFxi_JIAw-/0/1766843686696?e=1775088000&v=beta&t=nqI6aeGyK-96JO-8LkOy1yt2sLD0AK2FZg11_hqlfl4"
        },
        {
            title: "Introduction to C++",
            organization: "Sololearn",
            type: "Course Certificate",
            year: "2026",
            date: "March 6th, 2026",
            image: cppCert,
            link: "#"
        }
    ];

    const hackathons = [
        {
            title: "CodeMatrix: Genesis Hackathon",
            project: "Competitive Coding Round 1",
            organization: "AITH, Kanpur",
            role: "Developer (Team CodeDeterminant)",
            year: "2026",
            date: "2026",
            image: codematrixRound1,
            achievement: "Round 1 Milestone",
            link: "#"
        },
        {
            title: "CodeMatrix: Genesis Excellence",
            project: "CodeMatrix Genesis Achievement",
            organization: "GDG DR AITD, Kanpur",
            role: "Developer",
            year: "2026",
            date: "2026",
            image: codematrixExcellence,
            achievement: "Certificate of Excellence",
            link: "#"
        },
        {
            title: "FinAgent Hackathon",
            project: "Financial Technology Innovation",
            organization: "IIT Bombay (Unstop)",
            role: "Developer",
            year: "2026",
            date: "2026",
            image: finagentHackathon,
            achievement: "National Participation",
            link: "#"
        },
        {
            title: "Tech Expo 2026",
            project: "Expenses Management System",
            organization: "Parul University",
            role: "Developer",
            year: "2026",
            date: "Feb 3rd-4th, 2026",
            image: parulCert,
            achievement: "Participation & Showcase",
            link: "#"
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" ref={heroRef}>
                <div className="container hero-container">
                    <div className="hero-content">
                        <span ref={greetingRef} className="greeting">Hello, I'm</span>
                        <h1 ref={titleRef} className="hero-title">
                            <span className="text-gradient">Ghori Kahan</span> <br />
                            <div className="dynamic-title-wrapper" style={{
                                minHeight: '1.4em',
                                position: 'relative',
                                display: 'inline-block',
                                marginTop: '0.2em'
                            }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={titles[titleIndex]}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        style={{
                                            display: 'inline-block',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {titles[titleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </h1>
                        <p ref={subtitleRef} className="hero-subtitle">
                            I craft accessible, pixel-perfect, and performant web experiences that leave a lasting impression.
                        </p>

                        <div className="hero-footer">
                            <div ref={actionsRef} className="hero-actions">
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    View Resume <FileText size={18} />
                                </a>
                                <Link to="/contact" className="btn btn-outline">
                                    Contact Me
                                </Link>
                            </div>

                            <div className="social-links">
                                <a href="https://github.com/ghorikahan" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/kahan-ghori-157487394/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
                                <a href="https://leetcode.com/u/Ghori_Kahan05/" target="_blank" rel="noopener noreferrer" className="social-icon"><LeetCodeIcon size={20} /></a>
                                <a href="https://www.youtube.com/@kahanghori" target="_blank" rel="noopener noreferrer" className="social-icon"><Youtube size={20} /></a>
                                <a href="mailto:kahan.ghori.cg@gmail.com" className="social-icon"><Mail size={20} /></a>
                            </div>
                        </div>

                        <div className="hero-location" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            <MapPin size={18} style={{ color: 'var(--accent-primary)' }} />
                            <span>Gandhinagar, Gujarat</span>
                        </div>
                    </div>

                    <div ref={heroImageRef} className="hero-image-wrapper">
                        <TiltCard className="image-content">
                            <img src={profileImg} alt="Profile" className="profile-image"
                                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                            />
                            <div className="profile-placeholder">
                                <span className="placeholder-text">Save 'profile.png' in assets</span>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section skills-section" id="skills">
                <div className="container" ref={skillsRef}>
                    <div className="section-header">
                        <h2 className="section-title">My <span className="text-gradient">Expertise</span></h2>
                        <p className="section-desc">Tools and technologies I use to bring ideas to life.</p>
                    </div>

                    <div className="skills-grid">
                        {skills.map((category, index) => (
                            <div
                                key={index}
                                className="skill-card"
                            >
                                <div className="skill-icon-outer">
                                    <div className="skill-icon-wrapper">{category.icon}</div>
                                </div>
                                <h3 className="skill-category">{category.name}</h3>
                                <p className="skill-description">{category.desc}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Skills Section */}
            <section className="section technical-skills-section" ref={technicalSkillsRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Technical <span className="text-gradient">Stack</span></h2>
                        <p className="section-desc">My professional toolkit for building enterprise-grade applications.</p>
                    </div>

                    <div className="technical-skills-container">
                        {Object.entries(technicalSkills).map(([category, skillsList], catIndex) => (
                            <div key={category} className="technical-skill-category-section">
                                <div className="category-header">
                                    <div className="category-title-wrapper">
                                        <span className="category-num">0{catIndex + 1}</span>
                                        <h3 className="technical-skill-category-title">
                                            {category.charAt(0).toUpperCase() + category.slice(1)} <span className="text-gradient">Core</span>
                                        </h3>
                                    </div>
                                    <div className="category-line"></div>
                                </div>
                                <div className="technical-skills-grid">
                                    {skillsList.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="skill-logo-card"
                                            style={{ '--skill-index': index }}
                                        >
                                            <div className="skill-card-glass"></div>
                                            <div className="skill-logo-wrapper">
                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="skill-logo"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className="skill-logo-name">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section projects-section" id="projects" ref={projectsRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                        <p className="section-desc">A selection of my recent work and experiments.</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card"
                            >
                                {project.image && (
                                    <div className="project-image-container">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                    </div>
                                )}
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="link-item"><Globe size={16} /> Demo</a>
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="link-item"><Github size={16} /> Code</a>
                                        {project.links.video && (
                                            <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="link-item"><Youtube size={16} /> Video</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <div className="achievements-section-home" id="achievements">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Honours & <span className="text-gradient">Achievements</span></h2>
                        <p className="section-desc">Technical certifications and competitive milestones earned through rigorous training and challenges.</p>
                    </div>

                    {/* Technical Certificates Section */}
                    <section className="achievements-section" ref={certificatesRef}>
                        <div className="section-header-inline">
                            <div className="section-icon-box">
                                <Award className="section-icon" />
                            </div>
                            <div className="section-title-group">
                                <h2 className="section-main-title">Technical <span className="text-gradient">Certificates</span></h2>
                                <p className="section-subtitle">Verified credentials and professional training in core technologies.</p>
                            </div>
                        </div>

                        <div className="certificates-grid">
                            {certificates.map((cert, index) => (
                                <div key={index} className="certificate-card">
                                    <div className="cert-visual-card">
                                        <div className="cert-year-badge">{cert.year}</div>

                                        <div className="cert-image-container">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="cert-image"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="cert-placeholder">
                                                <Award size={48} />
                                                <span>Certificate Preview</span>
                                            </div>
                                        </div>

                                        <div className="cert-overlay">
                                            <div className="cert-overlay-content">
                                                <h3 className="cert-overlay-title">{cert.title}</h3>
                                                <p className="cert-overlay-org">{cert.organization}</p>
                                                <div className="cert-overlay-footer">
                                                    <span className="cert-overlay-date">{cert.date}</span>
                                                    {cert.link !== '#' && (
                                                        <a href={cert.link} className="cert-verify-btn" target="_blank" rel="noopener noreferrer">
                                                            Verify <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Hackathon Certificates Section */}
                    <section className="achievements-section" ref={hackathonsRef}>
                        <div className="section-header-inline">
                            <div className="section-icon-box">
                                <Trophy className="section-icon" />
                            </div>
                            <div className="section-title-group">
                                <h2 className="section-main-title">Hackathon <span className="text-gradient">Milestones</span></h2>
                                <p className="section-subtitle">Competitive events and rapid development challenges.</p>
                            </div>
                        </div>

                        <div className="hackathons-grid">
                            {hackathons.map((hack, index) => (
                                <div key={index} className="certificate-card hackathon-card">
                                    <div className="cert-visual-card">
                                        <div className="cert-year-badge">{hack.year}</div>

                                        <div className="cert-image-container">
                                            <img
                                                src={hack.image}
                                                alt={hack.title}
                                                className="cert-image"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="cert-placeholder">
                                                <span className="placeholder-icon">🚀</span>
                                                <span>Hackathon Visual</span>
                                            </div>
                                        </div>

                                        <div className="cert-overlay">
                                            <div className="cert-overlay-content">
                                                <h3 className="cert-overlay-title">{hack.title}</h3>
                                                <p className="cert-overlay-org">{hack.project}</p>
                                                <div className="cert-overlay-footer">
                                                    <span className="cert-overlay-date">{hack.organization} • {hack.date}</span>
                                                    {hack.link !== '#' && (
                                                        <a href={hack.link} className="cert-verify-btn" target="_blank" rel="noopener noreferrer">
                                                            Details <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
