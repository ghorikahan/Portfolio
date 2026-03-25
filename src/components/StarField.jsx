import React, { useEffect, useState, useMemo } from 'react';
import './StarField.css';

const StarField = () => {
    const [shootingStars, setShootingStars] = useState([]);

    // Generate static/twinkling stars once
    const stars = useMemo(() => {
        const starCount = 80; // Reduced for performance
        return Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            size: Math.random() * 1.5 + 0.5, // Smaller stars
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: `${Math.random() * 3 + 3}s`, // Slower animations
            delay: `${Math.random() * 5}s`,
            twinkle: Math.random() > 0.4
        }));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();
            const newShootingStar = {
                id,
                top: `${Math.random() * 40}%`,
                left: `${100 + Math.random() * 10}%`,
                duration: `${Math.random() * 0.8 + 1.2}s`
            };

            setShootingStars(prev => [...prev, newShootingStar]);

            // Remove star after animation finishes
            setTimeout(() => {
                setShootingStars(prev => prev.filter(s => s.id !== id));
            }, 2000);
        }, 5000); // Increased interval for better performance

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="star-field">
            {stars.map(star => (
                <div
                    key={star.id}
                    className={`star ${star.twinkle ? 'twinkle' : ''}`}
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: star.top,
                        left: star.left,
                        '--duration': star.duration,
                        animationDelay: star.delay
                    }}
                />
            ))}
            {shootingStars.map(star => (
                <div
                    key={star.id}
                    className="shooting-star shooting-star-animate"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDuration: star.duration
                    }}
                />
            ))}
        </div>
    );
};

export default React.memo(StarField);
