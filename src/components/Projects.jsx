import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "UrbanSync",
            date: "Jun 2026",
            tech: ["React.js", "Tailwind CSS", "Firebase"],
            description: "UrbanSync replaces chaotic WhatsApp groups and manual ledgers with a clean, powerful, and secure platform for modern communities.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
            github: "https://github.com/dhrumil16/soc-mngment-clgproject",
            live: "https://soc-mngment-clgproject-68a39.web.app/"
        },
        {
            title: "Sales Ticket System",
            date: "Dec 2025",
            tech: ["React.js", "Node.js", "Express.js", "MySQL"],
            description: "A full-stack role-based Sales Ticket Management System with secure authentication, protected routing, and complete ticket lifecycle management.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
            github: "https://github.com/hardikmehta2111/sales-ticket-system-react",
            live: "https://sales-ticket-system.netlify.app/"
        },
        {
            title: "Employee Management",
            date: "Jan 2026",
            tech: ["React.js", "Firebase", "Tailwind CSS"],
            description: "CRUD-based Employee Management System with real-time UI updates and optimized state management.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop", 
            github: "https://github.com/dhrumil16/employee_management_system",
            live: "https://crud-ems-2fca7.web.app/"
        }
    ];

    return (
        <section id="projects" className="py-20 md:py-32 bg-dark relative z-10">
            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 left-10 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-10 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/10 rounded-full blur-[120px] md:blur-[180px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 md:mb-32 relative">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tight"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-20 md:w-28 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    ></motion.div>
                </div>

                <div className="relative flex flex-col gap-10 lg:gap-0 lg:pb-32">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="lg:sticky flex items-center justify-center w-full mb-4 lg:mb-[10vh] last:mb-0"
                            style={{ 
                                top: `calc(10vh + ${index * 40}px)`, 
                                zIndex: index,
                            }}
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px", once: true }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full max-w-6xl bg-dark/90 lg:bg-dark/80 backdrop-blur-3xl border border-white/10 rounded-3xl lg:rounded-[3rem] p-4 sm:p-6 lg:p-12 shadow-2xl lg:shadow-[0_-10px_50px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row gap-6 lg:gap-12 items-center origin-top hover:border-white/20 transition-colors duration-500 group/card relative overflow-hidden"
                            >
                                {/* Subtle internal gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

                                {/* Image Side (Top on Mobile) */}
                                <div className="w-full lg:w-1/2 order-1 lg:order-2 relative z-10">
                                    <div className="relative w-full aspect-video lg:aspect-[4/3] rounded-2xl lg:rounded-[2rem] overflow-hidden group-hover/card:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-shadow duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-10"></div>
                                        <div className="absolute inset-0 bg-black/10 lg:bg-black/20 group-hover/card:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        {/* Floating Badge (Hidden on very small screens to save space) */}
                                        <div className="hidden sm:flex absolute bottom-4 right-4 lg:bottom-6 lg:right-6 z-20 bg-black/70 backdrop-blur-xl px-4 py-2 lg:px-6 lg:py-3 rounded-full border border-white/10 shadow-2xl lg:translate-y-10 lg:opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 delay-100">
                                            <span className="text-white text-xs lg:text-sm font-medium flex items-center gap-2">
                                                <Sparkles size={14} className="text-primary"/> Featured
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side (Bottom on Mobile) */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1 relative z-10 px-2 lg:px-0 pb-2 lg:pb-0">
                                    <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-6">
                                        <span className="px-3 py-1 lg:px-4 lg:py-1.5 rounded-full bg-primary/10 text-primary text-[10px] lg:text-sm font-bold tracking-widest uppercase border border-primary/20">
                                            {project.date}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-6xl font-black text-white mb-3 lg:mb-6 leading-tight tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base lg:text-xl leading-relaxed mb-6 lg:mb-8 font-light">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-10">
                                        {project.tech.map((tech, idx) => (
                                            <div key={idx} className="px-3 py-1.5 lg:px-4 lg:py-2 bg-black/40 rounded-lg lg:rounded-xl border border-white/5 text-gray-300 text-xs lg:text-sm font-medium flex items-center gap-1.5 lg:gap-2">
                                                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary/70"></div>
                                                {tech}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action Buttons - Stack on mobile, row on tablet/desktop */}
                                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-auto">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto px-5 py-3.5 lg:px-8 lg:py-4 bg-white text-dark rounded-xl lg:rounded-2xl font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2 overflow-hidden text-sm lg:text-base shadow-lg">
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Live Preview</span>
                                            <ArrowUpRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-white duration-300 lg:w-5 lg:h-5" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity z-0 duration-300"></div>
                                        </a>
                                        
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto px-5 py-3.5 lg:px-8 lg:py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl lg:rounded-2xl font-bold transition-all border border-white/10 hover:border-white/30 flex items-center justify-center gap-2 backdrop-blur-md text-sm lg:text-base">
                                            <Github size={18} className="lg:w-5 lg:h-5" />
                                            <span>Source Code</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
