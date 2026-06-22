import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, MapPin, Phone } from 'lucide-react';
import profileImage from '../assets/profile.png';
import resume from '../assets/Dhrumil_Patel_Resume.pdf';

const Hero = () => {
    // Floating animation variants for badges
    const floatingVariant = (delay) => ({
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }
        }
    });

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden z-10">
            {/* Massive Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Side: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-10">
                        
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-lg mb-8 group hover:border-primary/50 transition-colors"
                        >
                            <Sparkles size={16} className="text-primary group-hover:scale-110 transition-transform"/>
                            <span className="text-sm font-medium text-gray-300 tracking-wide">Fintech Graduate & Freelance Developer</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter mb-6 text-white"
                        >
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-purple-400">Dhrumil Patel.</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light mb-10"
                        >
                            I specialize in bridging the gap between complex financial systems and highly intuitive user experiences, engineering robust full-stack applications in the Fintech space.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
                        >
                            <a href="#projects" className="group relative px-8 py-4 bg-white text-dark rounded-2xl font-bold transition-transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto text-lg">
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform group-hover:text-white duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity z-0 duration-300"></div>
                            </a>
                            <a href={resume} download="Dhrumil_Patel_Resume.pdf" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-md hover:border-white/30 w-full sm:w-auto text-lg group">
                                Download CV
                                <Download size={20} className="group-hover:-translate-y-1 transition-transform"/>
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium"
                        >
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                <MapPin size={16} className="text-secondary"/> Ahmedabad, Gujarat
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                <Phone size={16} className="text-secondary"/> +91-9173091944
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Visual Content */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-12 lg:mt-0">
                        
                        {/* Wrapper for Image and Badges to ensure absolute positioning is relative to the circle */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            
                            {/* Premium Frosted Glass Image Circle */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                                className="absolute inset-0 rounded-full overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group z-10 flex items-center justify-center bg-dark/50 backdrop-blur-sm"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                                <img
                                    src={profileImage}
                                    alt="Dhrumil Patel"
                                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />
                                {/* Inner shadow to blend image with card */}
                                <div className="absolute inset-0 shadow-[inset_0_-30px_60px_rgba(0,0,0,0.8)] z-20 rounded-full"></div>
                            </motion.div>

                            {/* Floating Tech Badges with Zero-Gravity Framer Motion Animation */}
                            
                            {/* Top Right: React */}
                            <motion.div 
                                variants={floatingVariant(0)}
                                animate="animate"
                                className="absolute top-4 -right-4 md:-right-8 px-5 py-3 bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30"
                            >
                                <span className="text-primary font-black tracking-wide">React.js</span>
                            </motion.div>

                            {/* Bottom Left: Python */}
                            <motion.div 
                                variants={floatingVariant(1)}
                                animate="animate"
                                className="absolute bottom-10 -left-4 md:-left-8 px-5 py-3 bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30"
                            >
                                <span className="text-secondary font-black tracking-wide">Python</span>
                            </motion.div>

                            {/* Bottom Right: MySQL */}
                            <motion.div 
                                variants={floatingVariant(2.5)}
                                animate="animate"
                                className="absolute bottom-4 -right-2 md:right-0 px-5 py-3 bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30"
                            >
                                <span className="text-blue-400 font-black tracking-wide">MySQL</span>
                            </motion.div>

                            {/* Top Left: PowerBI */}
                            <motion.div 
                                variants={floatingVariant(1.5)}
                                animate="animate"
                                className="absolute top-24 -left-4 md:-left-8 px-5 py-3 bg-dark/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30"
                            >
                                <span className="text-yellow-500 font-black tracking-wide">PowerBI</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
