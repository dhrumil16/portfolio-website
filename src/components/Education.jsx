import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            institution: "JG University",
            degree: "M.Sc IT in Fintech (Financial Technology)",
            year: "July 2024 – May 2026",
            grade: "CGPA: 9.0",
            location: "Ahmedabad, India"
        },
        {
            institution: "Gujarat University (Department of Animation)",
            degree: "B.Sc IT in Fintech (Financial Technology)",
            year: "Sept 2021 – June 2024",
            grade: "CGPA: 7.71",
            location: "Ahmedabad, India"
        }
    ];

    return (
        <section id="education" className="py-20 md:py-32 bg-dark relative overflow-hidden z-10">
            {/* Creative Background Orbs */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 -right-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-secondary/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tight"
                    >
                        Academic Journey
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    ></motion.div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Glowing Timeline Line */}
                    <div className="absolute left-8 md:left-12 top-4 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

                    <div className="space-y-12 md:space-y-16">
                        {education.map((edu, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-50px", once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-20 md:pl-32 group"
                            >
                                {/* Timeline Node / Icon */}
                                <div className="absolute left-2 md:left-5 top-6 md:top-8 w-14 h-14 rounded-full bg-dark border-4 border-primary/80 shadow-[0_0_20px_rgba(168,85,247,0.6)] flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(168,85,247,0.9)] transition-all duration-500">
                                    <GraduationCap size={24} className="text-white group-hover:-translate-y-0.5 transition-transform" />
                                </div>

                                {/* Content Card */}
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] hover:bg-white/10 transition-colors duration-500 shadow-2xl relative overflow-hidden group/card hover:border-white/20">
                                    {/* Subtle internal gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

                                    <div className="flex flex-col gap-8 relative z-10">
                                        <div className="w-full">
                                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-primary font-bold text-xl md:text-2xl mb-8">
                                                {edu.degree}
                                            </p>
                                            
                                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-400 font-medium">
                                                <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                                                    <Calendar size={18} className="text-secondary"/> {edu.year}
                                                </span>
                                                <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                                                    <MapPin size={18} className="text-secondary"/> {edu.location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* CGPA Badge */}
                                        <div className="self-start mt-2">
                                            <div className="inline-flex items-center gap-4 px-6 py-4 md:px-8 md:py-5 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-3xl shadow-[0_0_20px_rgba(168,85,247,0.2)] group-hover/card:scale-105 transition-transform duration-500">
                                                <div className="p-3 bg-primary/30 rounded-2xl text-primary">
                                                    <Award size={24} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-bold">Grade</span>
                                                    <span className="text-xl md:text-2xl font-black text-white">{edu.grade}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
