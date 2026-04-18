import React from 'react';
import { 
    Code2, Database, Terminal, Globe, Cpu, Layers, 
    Workflow, Shield, Zap, Layout, Server, Settings,
    Cpu as CpuIcon, Braces, Cloud, GitBranch, Github
} from 'lucide-react';
import './Skills.css';

const skillRows = [
    {
        direction: 1, // Right
        speed: 80,
        skills: [
            { name: 'JavaScript (ES6+)', icon: <Braces size={20} /> },
            { name: 'C++', icon: <Code2 size={20} /> },
            { name: 'React.js', icon: <Layout size={20} /> },
            { name: 'Tailwind CSS', icon: <Layers size={20} /> },
            { name: 'HTML5', icon: <Code2 size={20} /> },
            { name: 'CSS3', icon: <Globe size={20} /> }
        ]
    },
    {
        direction: -1, // Left
        speed: 80,
        skills: [
            { name: 'MongoDB', icon: <Database size={20} /> },
            { name: 'Mongoose', icon: <Database size={20} /> },
            { name: 'REST APIs', icon: <Globe size={20} /> },
            { name: 'Cloudinary', icon: <Cloud size={20} /> },
            { name: 'Node.js', icon: <Server size={20} /> },
            { name: 'Express.js', icon: <Terminal size={20} /> }
        ]
    },
    {
        direction: 1, // Right
        speed: 90,
        skills: [
            { name: 'Git', icon: <GitBranch size={20} /> },
            { name: 'GitHub', icon: <Github size={20} /> },
            { name: 'Postman', icon: <Terminal size={20} /> },
            { name: 'npm', icon: <Cpu size={20} /> },
            { name: 'Vercel', icon: <Cloud size={20} /> },
            { name: 'Netlify', icon: <Cloud size={20} /> },
            { name: 'Render', icon: <Cloud size={20} /> }
        ]
    },
    {
        direction: -1, // Left
        speed: 40, 
        skills: [
            { name: 'Figma', icon: <Layout size={20} /> },
            { name: 'Prototyping', icon: <Workflow size={20} /> }
        ]
    }
];

const Skills = () => {
    return (
        <section className="marquee-skills-section">
            <div className="marquee-skills-header">
                <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
            </div>
            
            <div className="marquee-skills-container">
                {skillRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="skill-row-wrapper">
                        <div 
                            className={`skill-row ${row.direction > 0 ? 'animate-marquee-right' : 'animate-marquee-left'}`}
                            style={{ animationDuration: `${row.speed}s` }}
                        >
                            {/* Duplicate items enough times to fill the width and allow seamless loop */}
                            {Array(rowIndex === 3 ? 15 : 8).fill(row.skills).flat().map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-pill">
                                    <span className="skill-icon">{skill.icon}</span>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
