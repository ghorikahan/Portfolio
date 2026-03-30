import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award, Trophy, Rocket } from 'lucide-react';
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
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
    const certificatesRef = useRef(null);
    const hackathonsRef = useRef(null);

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
        <div className="achievements-page">
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
                                                <a href={cert.link} className="cert-overlay-link" target="_blank" rel="noopener noreferrer">
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
                                                <a href={hack.link} className="cert-overlay-link" target="_blank" rel="noopener noreferrer">
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
    );
};

export default Achievements;

