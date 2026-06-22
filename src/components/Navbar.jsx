import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
                    isScrolled 
                    ? 'top-4 w-[95%] max-w-5xl bg-white/[0.05] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-full py-2' 
                    : 'top-6 w-[95%] max-w-7xl bg-transparent py-4'
                }`}
            >
                <div className="px-6 md:px-8 flex justify-between items-center w-full">
                    
                    {/* Logo */}
                    <a href="#" className="text-2xl font-black tracking-tight group flex items-center gap-1">
                        <span className="text-white group-hover:text-gray-300 transition-colors">Dhrumil</span>
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-150 transition-transform duration-300"></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group overflow-hidden rounded-full"
                            >
                                <span className="relative z-10">{link.name}</span>
                                {/* Hover Pill Effect */}
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            </a>
                        ))}
                        
                        <div className="flex items-center space-x-3 pl-4 ml-2 border-l border-white/10">
                            <a href="https://github.com/dhrumil16" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/dhrumil-patel-627178268" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-full transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:dhrumildk16127@gmail.com" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-dark/95 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-3xl z-40 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.name}
                                    href={link.href}
                                    className="px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-colors font-medium text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            
                            <div className="flex justify-center space-x-6 mt-4 pt-6 border-t border-white/10 pb-4">
                                <a href="https://github.com/dhrumil16" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-gray-400 hover:text-white rounded-full transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/dhrumil-patel-627178268" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-gray-400 hover:text-primary rounded-full transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:dhrumildk16127@gmail.com" className="p-3 bg-white/5 text-gray-400 hover:text-white rounded-full transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
