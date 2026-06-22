import React from 'react';
import { motion } from 'framer-motion';
import { Target, Code, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-dark relative overflow-hidden z-10">
            {/* Background Orbs */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tight"
                    >
                        Career Objective
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    ></motion.div>
                </div>

                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-50px", once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative z-10 p-8 md:p-12 lg:p-16 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl group overflow-hidden"
                    >
                        {/* Subtle inner hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start relative z-10">
                            
                            {/* Decorative Icon */}
                            <div className="hidden lg:flex flex-shrink-0 w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500 group-hover:border-primary/30">
                                <Target size={40} className="text-primary"/>
                            </div>

                            {/* Objective Text */}
                            <div className="flex-1 space-y-6">
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light text-center lg:text-left">
                                    As a <span className="text-white font-bold tracking-wide">Freelance Frontend Developer</span> and <span className="text-primary font-bold">M.Sc IT in Fintech</span> graduate, I specialize in bridging the gap between complex financial systems and highly intuitive user experiences. 
                                </p>
                                <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed font-light text-center lg:text-left">
                                    Currently spearheading frontend engineering at <span className="text-gray-200 font-medium">Stock Streets</span>, I am passionate about building responsive web applications, integrating real-time data APIs, and delivering highly optimized digital products. My goal is to leverage my expertise in <span className="text-white font-medium">React.js, Tailwind CSS, and Full Stack technologies</span> to architect scalable, innovative solutions in dynamic tech environments.
                                </p>
                            </div>
                        </div>

                        {/* Floating Status Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10 lg:ml-32">
                            <div className="flex items-center gap-2 bg-black/40 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md shadow-sm">
                                <Code size={16} className="text-secondary" />
                                <span className="text-sm text-gray-300 font-medium">Frontend Expert</span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/40 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md shadow-sm">
                                <GraduationCap size={16} className="text-primary" />
                                <span className="text-sm text-gray-300 font-medium">9.0 CGPA (M.Sc IT)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
