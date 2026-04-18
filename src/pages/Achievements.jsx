import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award, Trophy, Rocket, X, Github, Globe, Play, MapPin, Calendar, Users } from 'lucide-react';
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
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
    const certificatesRef = useRef(null);
    const hackathonsRef = useRef(null);
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
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
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (activeModal !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [activeModal]);

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
            location: "Kanpur, Uttar Pradesh",
            role: "Developer (Team CodeDeterminant)",
            year: "2026",
            date: "2026",
            image: codematrixRound1,
            modalImage: codematrixRound1,
            achievement: "Round 1 Milestone",
            description: "Participated in the CodeMatrix Genesis Hackathon organized by AITH Kanpur. Our team CodeDeterminant cleared the competitive coding Round 1 by solving algorithmic challenges under strict time constraints, demonstrating strong problem-solving and teamwork capabilities.",
            techStack: ["React", "Node.js", "MongoDB", "Express"],
            team: "Team CodeDeterminant",
            demoLink: null,
            githubLink: "https://github.com",
            liveLink: null,
            link: "#"
        },
        {
            title: "CodeMatrix: Genesis Excellence",
            project: "CodeMatrix Genesis Achievement",
            organization: "GDG DR AITD, Kanpur",
            location: "Kanpur, Uttar Pradesh",
            role: "Developer",
            year: "2026",
            date: "2026",
            image: codematrixExcellence,
            modalImage: codematrixExcellence,
            achievement: "Certificate of Excellence",
            description: "Awarded the Certificate of Excellence at CodeMatrix Genesis organized by GDG DR AITD Kanpur. Recognized for outstanding performance in full-stack development challenges and innovative solution design throughout the hackathon rounds.",
            techStack: ["JavaScript", "React", "TailwindCSS", "Firebase"],
            team: "Solo",
            demoLink: null,
            githubLink: "https://github.com",
            liveLink: null,
            link: "#"
        },
        {
            title: "FinAgent Hackathon",
            project: "Financial Technology Innovation",
            organization: "IIT Bombay (Unstop)",
            location: "Mumbai, Maharashtra (Remote)",
            role: "Developer",
            year: "2026",
            date: "2026",
            image: electrosphereCert,
            modalImage: finagentHackathon,
            achievement: "National Participation",
            description: "Competed in the FinAgent Hackathon hosted by IIT Bombay on the Unstop platform. Built an intelligent financial agent system that leveraged AI to automate budgeting, expense tracking, and financial insights for end users—competing at a national level.",
            techStack: ["Python", "FastAPI", "React", "OpenAI API", "PostgreSQL"],
            team: "Team of 3",
            demoLink: null,
            githubLink: "https://github.com",
            liveLink: "https://example.com",
            link: "#"
        },
        {
            title: "Tech Expo 2026",
            project: "Expenses Management System",
            organization: "Parul University",
            location: "Vadodara, Gujarat",
            role: "Developer",
            year: "2026",
            date: "Feb 3rd–4th, 2026",
            image: parulCert,
            modalImage: parulCert,
            achievement: "Participation & Showcase",
            description: "Showcased the Expenses Management System at Tech Expo 2026, Parul University. The project featured a full-stack application for tracking personal and team expenses with real-time dashboards, category analytics, and smart spend predictions.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
            team: "Team of 2",
            demoLink: null,
            githubLink: "https://github.com",
            liveLink: "https://example.com",
            link: "#"
        }
    ];

    const openModal = (index) => setActiveModal(index);
    const closeModal = () => setActiveModal(null);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) closeModal();
    };

    return (
        <div className="achievements-page">
            <Helmet>
                <title>Certificates & Hackathons | Ghori Kahan Achievements</title>
                <meta name="description" content="View verified certificates from AWS, Google Cloud, Microsoft, JPMorgan & hackathon wins from IIT Bombay and CodeMatrix by Ghori Kahan." />
                <meta name="keywords" content="AWS certificate, Google Cloud certificate, JPMorgan simulation, CodeMatrix hackathon, Ghori Kahan certifications" />
                <link rel="canonical" href="https://ghorikahan.netlify.app/achievements" />
            </Helmet>
            <div className="container">
                <div className="page-header text-center">
                    <h1 className="page-title">Honors & <span className="text-gradient">Achievements</span></h1>
                    <p className="page-subtitle">Technical certifications and competitive milestones.</p>
                </div>

                {/* Certificates Section */}
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
                                            <span>Certificate Image Needed</span>
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

                {/* Hackathons Section */}
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
                                            <Rocket size={48} />
                                            <span>Hackathon Visual Needed</span>
                                        </div>
                                    </div>

                                    <div className="cert-overlay">
                                        <div className="cert-overlay-content">
                                            <h3 className="cert-overlay-title">{hack.title}</h3>
                                            <p className="cert-overlay-org">{hack.project}</p>
                                            <div className="cert-overlay-footer">
                                                <span className="cert-overlay-date">{hack.organization} • {hack.date}</span>
                                                <button
                                                    className="cert-overlay-link hack-details-btn"
                                                    onClick={() => openModal(index)}
                                                >
                                                    Details <ExternalLink size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Hackathon Detail Modal */}
            {activeModal !== null && (
                <div className="hack-modal-backdrop" onClick={handleBackdropClick}>
                    <div className="hack-modal">
                        {/* Close Button */}
                        <button className="hack-modal-close" onClick={closeModal} aria-label="Close">
                            <X size={20} />
                        </button>

                        {/* Left: Image */}
                        <div className="hack-modal-left">
                            <div className="hack-modal-img-wrap">
                                <img
                                    src={hackathons[activeModal].modalImage}
                                    alt={hackathons[activeModal].title}
                                    className="hack-modal-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="hack-modal-img-fallback">
                                    <Rocket size={56} />
                                    <span>No Image</span>
                                </div>
                            </div>
                            <div className="hack-modal-badge-row">
                                <span className="hack-modal-achievement-badge">
                                    🏆 {hackathons[activeModal].achievement}
                                </span>
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="hack-modal-right">
                            <div className="hack-modal-tag">Hackathon</div>
                            <h2 className="hack-modal-title">{hackathons[activeModal].title}</h2>
                            <p className="hack-modal-project">{hackathons[activeModal].project}</p>

                            <div className="hack-modal-meta">
                                <div className="hack-meta-item">
                                    <MapPin size={14} />
                                    <span>{hackathons[activeModal].location}</span>
                                </div>
                                <div className="hack-meta-item">
                                    <Calendar size={14} />
                                    <span>{hackathons[activeModal].date}</span>
                                </div>
                                <div className="hack-meta-item">
                                    <Users size={14} />
                                    <span>{hackathons[activeModal].team} · {hackathons[activeModal].role}</span>
                                </div>
                            </div>

                            <p className="hack-modal-description">{hackathons[activeModal].description}</p>

                            {/* Tech Stack */}
                            <div className="hack-modal-tech-row">
                                {hackathons[activeModal].techStack.map((tech, i) => (
                                    <span key={i} className="hack-tech-chip">{tech}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="hack-modal-links">
                                {hackathons[activeModal].githubLink && (
                                    <a
                                        href={hackathons[activeModal].githubLink}
                                        className="hack-link-btn hack-link-github"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github size={16} />
                                        GitHub
                                    </a>
                                )}
                                {hackathons[activeModal].demoLink && (
                                    <a
                                        href={hackathons[activeModal].demoLink}
                                        className="hack-link-btn hack-link-demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Play size={16} />
                                        Demo
                                    </a>
                                )}
                                {hackathons[activeModal].liveLink && (
                                    <a
                                        href={hackathons[activeModal].liveLink}
                                        className="hack-link-btn hack-link-live"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Globe size={16} />
                                        Live Link
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Achievements;
