import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/profile.png';
import resume from '../assets/Dhrumil_Patel_Resume.pdf';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current.children,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        )
            .fromTo(
                imageRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.8"
            );
    }, []);

    return (
        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Text Content - Image is Order 1 on Mobile, Text Order 2 */}
                <div ref={textRef} className="space-y-4 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start">
                    <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                        <span className="text-primary font-medium tracking-wide text-xs md:text-sm">Fintech Student & Developer</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Dhrumil Patel</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Experienced Web and Python Developer specializing in building responsive web applications and scalable backend solutions in the Fintech space.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start w-full">
                        <a href="#projects" className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all flex items-center gap-2 group text-sm md:text-base">
                            View Projects
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={resume} download="Dhrumil_Patel_Resume.pdf" className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 text-sm md:text-base">
                            Download CV
                            <Download size={16} />
                        </a>
                    </div>

                    <div className="pt-6 flex flex-col md:flex-row items-center gap-3 text-sm text-gray-500 justify-center md:justify-start">
                        <span>📍 Ahmedabad, Gujarat</span>
                        <span className="hidden md:block w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span>📱 +91-9173091944</span>
                    </div>
                </div>

                {/* Image/Visual Content */}
                <div ref={imageRef} className="relative flex justify-center order-1 md:order-2 mt-8 md:mt-0">
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl"></div>
                        <div className="relative w-full h-full rounded-full border-2 border-white/10 bg-dark/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                            <img
                                src={profileImage}
                                alt="Dhrumil Patel"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Floating Badges */}
                        {/* Top Right: React */}
                        <div className="absolute top-0 -right-4 md:-right-8 px-3 py-1.5 md:px-4 md:py-2 bg-dark/80 backdrop-blur border border-white/10 rounded-lg shadow-xl animate-bounce leading-none" style={{ animationDuration: '3s' }}>
                            <span className="text-primary font-bold text-xs md:text-sm">React.js</span>
                        </div>

                        {/* Bottom Left: Python */}
                        <div className="absolute bottom-4 -left-4 md:-left-8 px-3 py-1.5 md:px-4 md:py-2 bg-dark/80 backdrop-blur border border-white/10 rounded-lg shadow-xl animate-bounce leading-none" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                            <span className="text-secondary font-bold text-xs md:text-sm">Python</span>
                        </div>

                        {/* Bottom Right: MySQL */}
                        <div className="absolute bottom-6 -right-2 md:-right-4 px-3 py-1.5 md:px-4 md:py-2 bg-dark/80 backdrop-blur border border-white/10 rounded-lg shadow-xl animate-bounce leading-none" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                            <span className="text-blue-400 font-bold text-xs md:text-sm">MySQL</span>
                        </div>

                        {/* Top Left: PowerBI */}
                        <div className="absolute top-8 -left-2 md:-left-6 px-3 py-1.5 md:px-4 md:py-2 bg-dark/80 backdrop-blur border border-white/10 rounded-lg shadow-xl animate-bounce leading-none" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
                            <span className="text-yellow-500 font-bold text-xs md:text-sm">PowerBI</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
