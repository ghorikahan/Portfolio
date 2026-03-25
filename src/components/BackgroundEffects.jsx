import React, { useMemo } from 'react';
import '../index.css';

const BackgroundEffects = () => {
    // Generate static particles array
    const particles = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5
        }));
    }, []);

    return (
        <div className="background-effects">


            {/* Floating Particles */}
            <div className="particles-container">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}vw`,
                            top: `${particle.top}vh`,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BackgroundEffects;
