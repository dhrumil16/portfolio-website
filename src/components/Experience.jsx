import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Zap, Star, ShieldCheck, Terminal } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Freelance Frontend Developer",
            company: "Stock Streets",
            location: "Remote",
            date: "Apr 2026 – Present",
            description: [
                "Spearheaded the development of a web-based Paper Trading Platform, empowering users to practice trading strategies in a simulated environment.",
                "Engineered responsive and intuitive user interfaces using React.js, optimizing the overall user experience.",
                "Integrated complex stock market data APIs to power real-time analysis dashboards and reporting modules.",
                "Collaborated directly with clients to translate requirements into production-ready features, focusing on UI/UX optimization."
            ],
            icons: [Zap, Terminal, ShieldCheck, Star]
        },
        {
            role: "Full Stack Development Trainee",
            company: "QSpiders",
            location: "Ahmedabad, Gujarat",
            date: "Aug 2025 – Jan 2026",
            description: [
                "Completed Full Stack Development training covering Python, SQL, React.js, and modern web technologies including HTML, CSS, JavaScript, and Tailwind CSS.",
                "Gained hands-on experience in building responsive web applications with strong fundamentals in OOPS, database design, backend integration, and real-time mini projects."
            ],
            icons: [Terminal, ShieldCheck]
        },
        {
            role: "React JS Developer Intern",
            company: "CS Vision",
            location: "Remote",
            date: "May 2025 – June 2025",
            description: [
                "Developed responsive and interactive user interfaces using HTML, CSS, JavaScript and React.js.",
                "Built reusable components and implemented component-based architecture following modern frontend practices."
            ],
            icons: [Zap, Star]
        }
    ];

    return (
        <section id="experience" className="py-24 md:py-32 bg-dark relative z-10 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-24 md:mb-32">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tight"
                    >
                        Professional Experience
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    ></motion.div>
                </div>

                {/* Timeline Wrapper */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Glowing Journey Line (Desktop only to save space on mobile) */}
                    <div className="hidden lg:block absolute left-0 top-12 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] z-0"></div>

                    <div className="flex flex-col gap-24 md:gap-40 relative z-10">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative lg:pl-16">
                                
                                {/* Journey Line Node */}
                                <div className="hidden lg:flex absolute left-[-20px] top-8 w-11 h-11 rounded-full bg-dark border-4 border-primary/80 shadow-[0_0_20px_rgba(168,85,247,0.6)] items-center justify-center z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-500">
                                    <Briefcase size={18} className="text-white"/>
                                </div>

                                {/* Giant Background Number */}
                                <div className="absolute -top-10 md:-top-20 -left-4 md:left-10 text-[120px] md:text-[250px] font-black text-white/[0.02] select-none pointer-events-none leading-none z-0 tracking-tighter">
                                    0{index + 1}
                                </div>
                                
                                <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
                                    
                                    {/* Left Side: Sticky Header */}
                                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 pt-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -30 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ margin: "-100px", once: true }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">{exp.company}</h3>
                                            <p className="text-xl md:text-2xl text-primary font-bold mb-8">{exp.role}</p>
                                            
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl w-fit backdrop-blur-md shadow-lg">
                                                    <Calendar size={18} className="text-secondary"/> 
                                                    <span className="text-gray-300 font-medium">{exp.date}</span>
                                                </div>
                                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl w-fit backdrop-blur-md shadow-lg">
                                                    <MapPin size={18} className="text-secondary"/> 
                                                    <span className="text-gray-300 font-medium">{exp.location}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Right Side: Bento Grid of Achievements */}
                                    <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {exp.description.map((item, idx) => {
                                            // Determine if this card should span 2 columns (if it's the last odd item)
                                            const isLastOddItem = exp.description.length % 2 !== 0 && idx === exp.description.length - 1;
                                            // Cycle through icons
                                            const Icon = exp.icons[idx % exp.icons.length];
                                            
                                            return (
                                                <motion.div 
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ margin: "-50px", once: true }}
                                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                    className={`p-6 md:p-8 bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-500 group relative overflow-hidden shadow-xl
                                                        ${isLastOddItem ? 'md:col-span-2' : ''}
                                                    `}
                                                >
                                                    {/* Subtle hover gradient inside card */}
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                                    
                                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 border border-primary/20 group-hover:border-primary/40 relative z-10 shadow-inner">
                                                        <Icon size={20} className="text-primary"/>
                                                    </div>
                                                    
                                                    <p className="text-gray-300 leading-relaxed text-base md:text-lg relative z-10 font-light group-hover:text-white transition-colors">
                                                        {item}
                                                    </p>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
