import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isInteractive = 
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.interactive') ||
                target.closest('.card') ||
                target.closest('[class*="-card"]') ||
                target.closest('.project-card') ||
                target.closest('.skill-logo-card') ||
                target.closest('.timeline-content') ||
                target.closest('.social-icon');
                
            setIsHovering(!!isInteractive);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible, mouseX, mouseY]);

    return (
        <motion.div
            className={`custom-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hover' : ''}`}
            style={{
                x: mouseX,
                y: mouseY,
            }}
        >
            <div className="cursor-inner"></div>
            <div className="cursor-outer"></div>
        </motion.div>
    );
};

export default Cursor;
