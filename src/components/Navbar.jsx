import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo-v2.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('dark');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Work', path: '/projects' },
        { name: 'Achievements', path: '/achievements' },
    ];
    return (
        <motion.nav 
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
        >
            <div className="nav-container">
                {/* Logo Section */}
                <Link to="/" className="logo">
                    <img src={logoImg} alt="GK Logo" className="navbar-logo-img" />
                </Link>

                {/* Central Pill Menu */}
                <div className="nav-pill-wrapper desktop-only">
                    <div className="nav-pill">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-pill-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="pill-active-bg"
                                        className="pill-active-bg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {location.pathname === link.path && (
                                    <div className="pill-indicator" />
                                )}
                                <span className="pill-link-text">{link.name}</span>
                            </Link>
                        ))}
                        
                        {/* Book a Call Button */}
                        <Link to="/contact" className="pill-book-call">
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className="nav-right-actions">
                    {/* Theme Toggle Switch */}
                    <div className="theme-switch-wrapper" onClick={toggleTheme}>
                        <div className={`theme-switch ${theme}`}>
                            <motion.div 
                                className="theme-switch-fill"
                                animate={{ width: theme === 'light' ? '100%' : '0%' }}
                                transition={{ type: "spring", stiffness: 400, damping: 40 }}
                            />
                            <motion.div 
                                className="theme-switch-handle"
                                layout
                                transition={{ type: "spring", stiffness: 800, damping: 35 }}
                            >
                                <div className="theme-toggle-icon">
                                    {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Tray */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="mobile-links-grid">
                            {[...navLinks, { name: 'Contact', path: '/contact' }].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

