import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './TiltCard.css';

const TiltCard = ({ children, className = "" }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["-15deg", "15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["15deg", "-15deg"]);
    const translateX = useTransform(mouseX, [-0.5, 0.5], ["15px", "-15px"]);
    const translateY = useTransform(mouseY, [-0.5, 0.5], ["15px", "-15px"]);
    const z = useMotionValue(0);
    const mouseZ = useSpring(z, { stiffness: 300, damping: 30 });
    const translateZ = useTransform(mouseZ, [0, 1], ["0px", "-50px"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        z.set(1); // Set depth when mouse enters/moves

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;

        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        z.set(0); // Return photo to surface
    };

    return (
        <motion.div
            ref={ref}
            className={`tilt-card ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <div
                style={{
                    translateX,
                    translateY,
                    translateZ,
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>
            {/* Glare Effect */}
            <motion.div
                className="tilt-glare"
                style={{
                    opacity: useTransform(mouseX, [-0.5, 0, 0.5], [0.4, 0, 0.4]),
                    background: useTransform(
                        mouseX,
                        [-0.5, 0, 0.5],
                        [
                            "linear-gradient(to right, rgba(255,255,255,0.1) 0%, transparent 100%)",
                            "linear-gradient(to right, transparent 0%, transparent 100%)",
                            "linear-gradient(to left, rgba(255,255,255,0.1) 0%, transparent 100%)"
                        ]
                    )
                }}
            />
        </motion.div>
    );
};

export default TiltCard;
