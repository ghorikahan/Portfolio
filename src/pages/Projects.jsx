import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Github, Youtube, Trophy, Gamepad2, Code2, Layout } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import memoryFlipImg from '../assets/memory-flip-game.png';
import ticTacToeImg from '../assets/tic-tac-toe-game.png';
import colorGuessingImg from '../assets/color-guessing-game.png';
import whackAMoleImg from '../assets/whack-a-mole-game.png';
import typingGameImg from '../assets/typing-game.png';
import clickCounterImg from '../assets/click-counter-game.png';
import learnSmartImg from '../assets/learnsmart-hackathon.png';
import craftathonImg from '../assets/craftathon-hackathon.png';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const headerRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Header Entrance
        gsap.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
        );

        // Sections stagger entrance
        sectionsRef.current.forEach((section, index) => {
            if (section) {
                gsap.fromTo(section.querySelectorAll('.compact-proj-card'),
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                        }
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const projectData = {
        frontend: [
            {
                title: "Mamaearth Clone",
                description: "A feature-rich e-commerce clone of the Mamaearth website, focusing on a clean UI and responsive product listings.",
                tags: ["React", "CSS3", "Context API"],
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
                tags: ["React", "CSS3", "GSAP"],
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
                description: "Built BehaveGuard at Craftathon GU — a behavioral biometrics security platform that continuously authenticates users through typing patterns, touch dynamics & navigation habits. 99.9% accuracy, <10ms response, zero friction.",
                tags: ["React", "Biometrics AI", "Node.js", "Security"],
                image: craftathonImg,
                links: {
                    demo: "https://craftathon-gu.vercel.app/",
                    code: "https://github.com/Kanishka-Trivedi/CRAFTATHON_GU"
                }
            },
            {
                title: "LearnSmart AI Platform",
                description: "AI-powered e-learning dashboard with personalized learning paths, Focus Timer (Pomodoro), AI recommendations, skill assessments & progress analytics.",
                tags: ["React", "Node.js", "MongoDB", "AI API"],
                image: learnSmartImg,
                links: {
                    demo: "https://learn-smart-project.netlify.app/",
                    code: "https://github.com/ghorikahan/ELearningPlatform"
                }
            }
        ],
        uiux: [
            {
                title: "Fintech Dashboard Design",
                description: "A comprehensive dashboard for managing investments and assets with a focus on data visualization and accessibility.",
                tags: ["Figma", "User Research", "Prototyping"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80\u0026w=1000",
                links: {
                    demo: "https://www.figma.com/",
                    code: "#"
                }
            },
            {
                title: "Travel App Mobile UI",
                description: "A modern travel booking application UI focusing on seamless pathfinding and personalized trip planning.",
                tags: ["Figma", "Interaction Design", "Mobile UI"],
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80\u0026w=1000",
                links: {
                    demo: "https://www.figma.com/",
                    code: "#"
                }
            }
        ]
    };

    const renderProjectGrid = (categoryKey) => (
        <div className="compact-projects-grid">
            {projectData[categoryKey].map((project, index) => (
                <div key={index} className="compact-proj-card project-card">
                    <div className="compact-card-inner">
                        <div className="compact-card-image">
                            <div className="compact-browser-dots">
                                <span></span><span></span><span></span>
                            </div>
                            {project.image && <img src={project.image} alt={project.title} className="compact-img" />}
                        </div>
                        <div className="compact-card-info">
                            <div className="compact-info-head">
                                <h3 className="compact-title">{project.title}</h3>
                            </div>
                            <p className="compact-desc">{project.description}</p>
                            <div className="compact-tech-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="compact-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="compact-actions">
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="compact-btn-live">
                                    Demo <Globe size={14} />
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
    );

    return (
        <div className="projects-page">
            <Helmet>
                <title>Project Portfolio | Ghori Kahan | MERN Stack Work</title>
                <meta name="description" content="Explore a diverse portfolio of web applications, games, and hackathon wins by Ghori Kahan. Featuring React, Node.js, and Unity projects." />
                <meta name="keywords" content="React projects, MERN stack portfolio, Game development, Unity games, Ghori Kahan projects" />
                <link rel="canonical" href="https://ghorikahan.netlify.app/projects" />
            </Helmet>

            <section className="section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
                <div className="container">
                    <div ref={headerRef} className="section-header">
                        <h1 className="section-title">Featured <span className="text-gradient">Projects</span></h1>
                        <p className="section-desc">A deep dive into my specialized work across multiple domains.</p>
                    </div>

                    {/* FRONTEND SECTION */}
                    <div className="category-section" ref={el => sectionsRef.current[0] = el} id="frontend">
                        <div className="category-header">
                            <Code2 className="category-icon" />
                            <h2>Frontend Websites</h2>
                        </div>
                        {renderProjectGrid('frontend')}
                    </div>

                    {/* GAME DEV SECTION */}
                    <div className="category-section" ref={el => sectionsRef.current[1] = el} id="game-dev">
                        <div className="category-header">
                            <Gamepad2 className="category-icon" />
                            <h2>Game Development</h2>
                        </div>
                        {renderProjectGrid('gameDev')}
                    </div>

                    {/* HACKATHON SECTION */}
                    <div className="category-section" ref={el => sectionsRef.current[2] = el} id="hackathons">
                        <div className="category-header">
                            <Trophy className="category-icon" />
                            <h2>Hackathon Projects</h2>
                        </div>
                        {renderProjectGrid('hackathons')}
                    </div>

                    {/* UI/UX SECTION */}
                    <div className="category-section" ref={el => sectionsRef.current[3] = el} id="ui-ux-design">
                        <div className="category-header">
                            <Layout className="category-icon" />
                            <h2>UI/UX Design</h2>
                        </div>
                        {renderProjectGrid('uiux')}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
