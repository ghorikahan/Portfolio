import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; 
    const interval = 20; 
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="preloader-header">
        <span className="loading-text">LOADING EXPERIENCE</span>
        <span className="est-wait">Est. wait &lt; 2s</span>
      </div>

      <div className="preloader-center">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: 90 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="logo-g"
          >
            G
          </motion.span>
          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: 90 },
              visible: { 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="logo-k"
          >
            K
          </motion.span>
        </motion.h1>
      </div>

      <div className="preloader-footer">
        <div className="progress-container">
          <motion.div 
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="percentage">
          {Math.round(progress)}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
