import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Github, ArrowRight, Youtube } from 'lucide-react';
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

    return (
        <div className="projects-page">
            <section className="section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
                <div className="container">
                    <div ref={headerRef} className="section-header">
                        <h1 className="section-title">All <span className="text-gradient">Projects</span></h1>
                        <p className="section-desc">A collection of my work, experiments, and side projects.</p>
                    </div>

                    <div className="projects-grid" ref={gridRef}>
                        {projects.map((project, index) => (
                            <TiltCard
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
                            </TiltCard>
                        ))}
                    </div>

                    {/* Footer / CTA Area */}
                    <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Working on something new?
                        </p>
                        <a href="/contact" className="btn btn-primary">
                            Let's Collaborate <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
