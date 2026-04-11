import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Github, ArrowRight, Youtube, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltCard from '../components/TiltCard';
import './Home.css'; // Reuse existing styles
import './Projects.css'; // Projects-specific styles

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(headerRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
        );

        const cards = gsap.utils.toArray('.project-card');
        gsap.fromTo(cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                }
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const projects = [
        {
            title: "Mamaearth Clone",
            category: "FRONTEND DEVELOPER",
            id: "01",
            description: "A feature-rich e-commerce clone of the Mamaearth website, focusing on a clean UI, responsive product listings, and a modern shopping experience.",
            implementation: [
                "Built with React and Context API for global state management.",
                "Implemented responsive product grids with filtering and sorting.",
                "Custom CSS3 components with smooth transitions and hover states.",
                "Full-featured cart and checkout simulation."
            ],
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
            category: "FRONTEND DEVELOPER",
            id: "02",
            description: "A sophisticated e-commerce clone of the premium fragrance brand AdilQuadri, featuring luxury aesthetics and a seamless user interface.",
            implementation: [
                "Tailored UI with a premium feel and high-end aesthetics.",
                "Dynamic routing and detailed product views.",
                "GSAP integrated for page entrance animations.",
                "Clean and elegant navigation system."
            ],
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
            category: "CREATIVE FRONTEND",
            id: "03",
            description: "A high-performance e-commerce clone of the 'On' running brand. Pushed boundaries with complex layouts and sleek animations.",
            implementation: [
                "Tailwind CSS for utility-first styling and rapid responsiveness.",
                "Framer Motion for complex entrance and scroll animations.",
                "High-performance image optimization and lazy loading.",
                "Interactive UI elements with custom transition effects."
            ],
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            image: new URL('../assets/on.png', import.meta.url).href,
            links: {
                demo: "https://delightful-lolly-d0cceb.netlify.app/",
                code: "https://github.com/ghorikahan/Website-Clone/tree/main/Website-5-on",
                video: "https://youtu.be/7gAJA2iyHwA"
            }
        }
    ];

    return (
        <div className="projects-page">
            <section className="section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
                <div className="container">
                    <div ref={headerRef} className="section-header">
                        <h1 className="section-title">All <span className="text-gradient">Projects</span></h1>
                        <p className="section-desc">A collection of my work, experiments, and side projects.</p>
                    </div>

                    <div className="project-stack-container" ref={gridRef}>
                        {projects.map((project, index) => (
                            <div key={index} className="project-stack-item">
                                <div className="project-stack-card">
                                    <div className="card-inner-grid">
                                        {/* Visual Side */}
                                        <div className="card-visual-side">
                                            <div className="browser-header">
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                                <div className="dot"></div>
                                            </div>
                                            {project.image && (
                                                <img src={project.image} alt={project.title} className="stack-image" />
                                            )}
                                        </div>

                                        {/* Content Side */}
                                        <div className="card-content-side">
                                            <div className="card-top-header">
                                                <span className="project-id text-gradient">{project.id} / 03</span>
                                                <h3 className="project-stack-category">{project.category}</h3>
                                            </div>

                                            <h2 className="project-stack-title">{project.title}</h2>
                                            <p className="project-stack-desc">{project.description}</p>

                                            <div className="implementation-block">
                                                <h4 className="impl-title">
                                                    <Code size={16} /> IMPLEMENTATION
                                                </h4>
                                                <ul className="impl-list">
                                                    {project.implementation.map((point, i) => (
                                                        <li key={i} className="impl-item">
                                                            <ArrowRight size={12} className="arrow" />
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="card-tags">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="stack-tag">{tag}</span>
                                                ))}
                                            </div>

                                            <div className="card-actions">
                                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary stack-btn">
                                                    Live Demo <Globe size={16} />
                                                </a>
                                                <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="btn btn-outline stack-btn">
                                                    GitHub <Github size={16} />
                                                </a>
                                                {project.links.video && (
                                                    <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="btn btn-outline stack-btn">
                                                        Video <Youtube size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer / CTA Area */}
                    <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Working on something new?
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Let's Collaborate <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
