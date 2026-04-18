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
    Rocket,
    Gamepad2,
    Braces
} from 'lucide-react';
import { Link } from 'react-router-dom';
import memoryFlipImg from '../assets/memory-flip-game.png';
import ticTacToeImg from '../assets/tic-tac-toe-game.png';
import colorGuessingImg from '../assets/color-guessing-game.png';
import whackAMoleImg from '../assets/whack-a-mole-game.png';
import typingGameImg from '../assets/typing-game.png';
import clickCounterImg from '../assets/click-counter-game.png';
import learnSmartImg from '../assets/learnsmart-hackathon.png';
import craftathonImg from '../assets/craftathon-hackathon.png';
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
import sangamIdCard from '../assets/sangam-id-card.jpg';
import finagentHackathon from '../assets/finagent-hackathon.png';
import awsPdf from '../assets/AWS(Document DB).pdf';
import databricksPdf from '../assets/databriks_machineLearning.pdf';
import generativeAiPdf from '../assets/generative ai atudio from google cloud.pdf';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import TiltCard from '../components/TiltCard';
import LeetCodeIcon from '../components/LeetCodeIcon';
import Skills from '../components/Skills';

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

        // Featured Projects Animation (Display at once)
        gsap.fromTo(gsap.utils.toArray('.project-card'),
            {
                y: 60,
                opacity: 0,
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".projects-section",
                    start: "top 80%",
                    toggleActions: "play none none none"
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



    const skills = [
        {
            name: "Languages & Frameworks",
            icon: <Braces />,
            desc: "Proficient in JavaScript (ES6+), C++, React.js, Tailwind CSS, HTML5, and CSS3. I build modern, responsive, and high-performance user interfaces with clean and maintainable code."
        },
        {
            name: "Databases & Backend",
            icon: <Terminal />,
            desc: "Experienced with MongoDB, Mongoose, REST APIs, Cloudinary, Node.js, and Express.js. I architect robust backend systems and scalable database solutions for modern web applications."
        },
        {
            name: "Tools & Platforms",
            icon: <Globe />,
            desc: "Skilled in using Git, GitHub, Postman, npm, and deploying on platforms like Vercel, Netlify, and Render. I manage the entire development lifecycle efficiently."
        },
        {
            name: "UI/UX Design",
            icon: <Layout />,
            desc: "Focused on creating intuitive user experiences using Figma and rapid prototyping techniques to ensure design-to-code alignment and visual excellence."
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

    const projectData = {
        frontend: [
            {
                title: "Mamaearth Clone",
                description: "A feature-rich e-commerce clone of the Mamaearth website, focusing on a clean UI and responsive product listings.",
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
                description: "A sophisticated e-commerce clone of the premium fragrance brand AdilQuadri with luxury aesthetics.",
                tags: ["React", "CSS3", "JavaScript", "GSAP"],
                image: new URL('../assets/adilquadri.png', import.meta.url).href,
                links: {
                    demo: "https://adilquadri-clone.netlify.app/",
                    code: "https://github.com/ghorikahan/Website-Clone/tree/main/Website-4-adilquadri",
                    video: "https://youtu.be/DfU-GbvsFA0"
                }
            },
            {
                title: "On Running Clone",
                description: "A high-performance e-commerce clone of the 'On' running brand featuring complex layouts and sleek animations.",
                tags: ["React", "Tailwind CSS", "Framer Motion"],
                image: new URL('../assets/on.png', import.meta.url).href,
                links: {
                    demo: "https://delightful-lolly-d0cceb.netlify.app/",
                    code: "https://github.com/ghorikahan/Website-Clone/tree/main/Website-5-on",
                    video: "https://youtu.be/7gAJA2iyHwA"
                }
            }
        ],
        gameDev: [
            {
                title: "Click Counter",
                description: "A fun interactive counter app with smooth click animations and a live click tracker. Built with vanilla HTML, CSS & JS.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: clickCounterImg,
                links: {
                    demo: "https://rainbow-selkie-abefa7.netlify.app/",
                    code: "https://github.com/ghorikahan/Games/tree/main/Click-Counter"
                }
            },
            {
                title: "Typing Game",
                description: "A speed-typing challenge that tests your WPM with real-time feedback, countdown timer and accuracy tracking.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: typingGameImg,
                links: {
                    demo: "https://extraordinary-bonbon-2c6507.netlify.app/",
                    code: "https://github.com/ghorikahan/Games/tree/main/Typing-game"
                }
            },
            {
                title: "Whack-a-Mole",
                description: "Classic whack-a-mole arcade game with progressive difficulty, score counter and responsive hit detection.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: whackAMoleImg,
                links: {
                    demo: "https://harmonious-macaron-a9f311.netlify.app/",
                    code: "https://github.com/ghorikahan/Games/tree/main/Wack-a-mole"
                }
            },
            {
                title: "Color Guessing",
                description: "A color-guessing challenge — identify the right color from its RGB value. Multiple difficulty levels for added fun.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: colorGuessingImg,
                links: {
                    demo: "https://moonlit-dragon-e26370.netlify.app/",
                    code: "https://github.com/ghorikahan/Games/tree/main/Color-Guessing"
                }
            },
            {
                title: "Tic-Tac-Toe",
                description: "Two-player Tic-Tac-Toe with win detection, draw handling and an animated restart button. Clean minimal UI.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: ticTacToeImg,
                links: {
                    demo: "https://incredible-squirrel-1c129d.netlify.app/",
                    code: "https://github.com/ghorikahan/Games/tree/main/Tic-Tac-Toe"
                }
            },
            {
                title: "Memory Flip",
                description: "Card-flip memory matching game with a shuffled deck, move counter and smooth flip animation on every card.",
                tags: ["HTML", "CSS", "JavaScript"],
                image: memoryFlipImg,
                links: {
                    demo: "https://lustrous-begonia-eee3dc.netlify.app/",
                    code: "https://github.com/ghorikahan/Games/tree/main/Memory-flip"
                }
            }
        ],
        hackathons: [
            {
                title: "Craftathon — BehaveGuard",
                description: "Built BehaveGuard at Craftathon GU — a behavioral biometrics security platform that continuously authenticates users.",
                tags: ["React", "Biometrics AI", "Node.js"],
                image: craftathonImg,
                links: {
                    demo: "https://craftathon-gu.vercel.app/",
                    code: "https://github.com/Kanishka-Trivedi/CRAFTATHON_GU"
                }
            },
            {
                title: "LearnSmart AI Platform",
                description: "AI-powered e-learning dashboard with personalized learning paths, Focus Timer (Pomodoro), and AI recommendations.",
                tags: ["React", "Node.js", "MongoDB"],
                image: learnSmartImg,
                links: {
                    demo: "https://learn-smart-project.netlify.app/",
                    code: "https://github.com/ghorikahan/ELearningPlatform"
                }
            }
        ]
    };

    const certificates = [
        {
            title: "Getting Started with Amazon DocumentDB",
            organization: "Simplilearn (AWS)",
            type: "Certificate of Completion",
            year: "2026",
            date: "February 18th, 2026",
            image: awsCert,
            pdf: awsPdf,
            link: awsPdf
        },
        {
            title: "Get Started with Databricks for Machine Learning",
            organization: "Simplilearn (Databricks)",
            type: "Declaration of Completion",
            year: "2026",
            date: "February 17th, 2026",
            image: databricksCert,
            pdf: databricksPdf,
            link: databricksPdf
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
            <Helmet>
                <title>Ghori Kahan | Full-Stack MERN Developer & UX/UI Designer</title>
                <meta name="description" content="Welcome to the professional portfolio of Ghori Kahan. A Full-Stack MERN Developer dedicated to building performant web applications and immersive digital experiences." />
                <meta name="keywords" content="Full Stack Developer, MERN Stack, React, Node.js, Web Design, Portfolio Ghori Kahan" />
                <link rel="canonical" href="https://ghorikahan.netlify.app/" />
            </Helmet>
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

            {/* Skills Marquee Section (from About page) */}
            <Skills />

            {/* Projects Section */}
            <section className="section projects-section" id="projects" ref={projectsRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
                        <p className="section-desc">A selection of my recent work and experiments.</p>
                    </div>

                    {/* Frontend Websites */}
                    <div className="category-section">
                        <div className="category-header-inline">
                            <Code2 className="category-icon" />
                            <h3 className="category-title">Frontend <span className="text-gradient">Websites</span></h3>
                        </div>
                        <div className="compact-projects-grid">
                            {projectData.frontend.map((project, index) => (
                                <div key={index} className="compact-proj-card project-card">
                                    <div className="compact-card-inner">
                                        <div className="compact-card-image">
                                            <div className="compact-browser-dots">
                                                <span></span><span></span><span></span>
                                            </div>
                                            {project.image && <img src={project.image} alt={project.title} className="compact-img" />}
                                        </div>
                                        <div className="compact-card-info">
                                            <h3 className="compact-title">{project.title}</h3>
                                            <p className="compact-desc">{project.description}</p>
                                            <div className="compact-tech-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="compact-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="compact-actions">
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="compact-btn-live">
                                                    DEMO <Globe size={14} />
                                                </a>
                                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="compact-btn-icon">
                                                    <Github size={18} />
                                                </a>
                                                {project.links.video && (
                                                    <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="compact-btn-icon btn-video">
                                                        <Youtube size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Game Development */}
                    <div className="category-section" style={{ marginTop: '4rem' }}>
                        <div className="category-header-inline">
                            <Gamepad2 className="category-icon" />
                            <h3 className="category-title">Game <span className="text-gradient">Development</span></h3>
                        </div>
                        <div className="compact-projects-grid">
                            {projectData.gameDev.map((project, index) => (
                                <div key={index} className="compact-proj-card project-card">
                                    <div className="compact-card-inner">
                                        <div className="compact-card-image">
                                            <div className="compact-browser-dots">
                                                <span></span><span></span><span></span>
                                            </div>
                                            {project.image && <img src={project.image} alt={project.title} className="compact-img" />}
                                        </div>
                                        <div className="compact-card-info">
                                            <h3 className="compact-title">{project.title}</h3>
                                            <p className="compact-desc">{project.description}</p>
                                            <div className="compact-tech-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="compact-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="compact-actions">
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="compact-btn-live">
                                                    DEMO <Globe size={14} />
                                                </a>
                                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="compact-btn-icon">
                                                    <Github size={18} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hackathon Projects */}
                    <div className="category-section" style={{ marginTop: '4rem' }}>
                        <div className="category-header-inline">
                            <Trophy className="category-icon" />
                            <h3 className="category-title">Hackathon <span className="text-gradient">Projects</span></h3>
                        </div>
                        <div className="compact-projects-grid">
                            {projectData.hackathons.map((project, index) => (
                                <div key={index} className="compact-proj-card project-card">
                                    <div className="compact-card-inner">
                                        <div className="compact-card-image">
                                            <div className="compact-browser-dots">
                                                <span></span><span></span><span></span>
                                            </div>
                                            {project.image && <img src={project.image} alt={project.title} className="compact-img" />}
                                        </div>
                                        <div className="compact-card-info">
                                            <h3 className="compact-title">{project.title}</h3>
                                            <p className="compact-desc">{project.description}</p>
                                            <div className="compact-tech-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="compact-tag">{tag}</span>
                                                ))}
                                            </div>
                                            <div className="compact-actions">
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="compact-btn-live">
                                                    DEMO <Globe size={14} />
                                                </a>
                                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="compact-btn-icon">
                                                    <Github size={18} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <div className="achievements-section-home" id="achievements">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Honors & <span className="text-gradient">Achievements</span></h2>
                        <p className="section-desc">Technical certifications and competitive milestones earned through rigorous training and challenges.</p>
                    </div>

                    {/* Technical Certificates Section */}
                    <section className="achievements-section" ref={certificatesRef}>
                        <div className="section-header-inline">
                            <div className="section-icon-box">
                                <Award className="section-icon" />
                            </div>
                            <div className="section-title-group">
                                <h2 className="section-main-title">Skill's <span className="text-gradient">certificate</span></h2>
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
                                                    <a href={cert.pdf || (cert.link !== "#" ? cert.link : cert.image)} className="cert-overlay-link" target="_blank" rel="noopener noreferrer">
                                                        Verify <ExternalLink size={14} />
                                                    </a>
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
                                <h2 className="section-main-title">Hackathon <span className="text-gradient">certificate</span></h2>
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
                                                    <a href={hack.pdf || (hack.link !== "#" ? hack.link : hack.image)} className="cert-overlay-link" target="_blank" rel="noopener noreferrer">
                                                        Details <ExternalLink size={14} />
                                                    </a>
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
