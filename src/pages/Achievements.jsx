import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Award } from 'lucide-react';
import jpmorganCert from '../assets/jpmorgan-certificate.jpg';
import microsoftCert from '../assets/microsoft-certificate.jpg';
import parulCert from '../assets/parul-certificate.jpg';
import cppCert from '../assets/cpp-certificate.jpg';
import './Achievements.css';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
    const certificatesRef = useRef(null);

    useEffect(() => {
        const certificateCards = gsap.utils.toArray('.certificate-card');
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

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const certificates = [
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
            title: "Tech Expo 2026 - Expenses Management",
            organization: "Parul University",
            type: "Certificate of Participation",
            year: "2026",
            date: "February 3rd-4th, 2026",
            image: parulCert,
            link: "#"
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

    return (
        <div className="achievements-page">
            <section className="section certificates-section" ref={certificatesRef}>
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">My <span className="text-gradient">Achievements</span></h2>
                        <p className="section-desc">Recognition of my continuous learning and specialized training.</p>
                    </div>

                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <div key={index} className="certificate-card">
                                <div className="cert-visual-card">
                                    <div className="cert-year-badge">{cert.year}</div>
                                    <div className="cert-type-badge">{cert.type}</div>

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
                                            <span>Add certificate image to src/assets/</span>
                                        </div>
                                    </div>

                                    <div className="cert-overlay">
                                        <div className="cert-overlay-content">
                                            <h3 className="cert-overlay-title">{cert.title}</h3>
                                            <p className="cert-overlay-org">{cert.organization}</p>
                                            <div className="cert-overlay-footer">
                                                <span className="cert-overlay-date">{cert.date}</span>
                                                <a href={cert.link} className="cert-overlay-link" target="_blank" rel="noopener noreferrer">
                                                    View <ExternalLink size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Achievements;
