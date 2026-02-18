import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';

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
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Dhrumil<span className="text-white">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
                        <a href="https://github.com/dhrumil16" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/dhrumil-patel-627178268" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:dhrumildk16127@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-lg border-b border-white/10 py-4">
                    <div className="flex flex-col space-y-4 px-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-primary transition-colors block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-6 pt-4 border-t border-white/10">
                            <a href="https://github.com/dhrumil16" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com/in/dhrumil-patel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:dhrumildk16127@gmail.com" className="text-gray-400 hover:text-white">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
