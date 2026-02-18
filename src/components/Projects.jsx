import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);

    const projects = [
        {
            title: "Sales Ticket System",
            date: "Dec 2025",
            tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
            description: "A full-stack role-based Sales Ticket Management System with secure authentication, protected routing, and complete ticket lifecycle management.",
            points: [
                "Role-based access control (Admin, Sales, Operations).",
                "Deployed frontend on Netlify and backend on Railway.",
                "Scalable MySQL database integration."
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", // Placeholder
            github: "https://github.com/hardikmehta2111/sales-ticket-system-react",
            live: "https://sales-ticket-system.netlify.app/"
        },
        {
            title: "Employee Management System",
            date: "Jan 2026",
            tech: ["React.js", "Firebase", "Tailwind CSS"],
            description: "CRUD-based Employee Management System with real-time UI updates and optimized state management.",
            points: [
                "Real-time data synchronization using Firebase.",
                "Secure cloud data storage and Firebase Hosting.",
                "Responsive design for all devices."
            ],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop", // Placeholder
            github: "https://github.com/dhrumil16/employee_management_system",
            live: "https://crud-ems-2fca7.web.app/"
        }
    ];

    useEffect(() => {
        gsap.fromTo(
            ".project-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="projects" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6" ref={sectionRef}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col h-full">
                            {/* Image Header */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10 opacity-60"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                    <span className="text-sm text-gray-300">{project.date}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-6">
                                        {project.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-white/5 hover:bg-white/10 text-center rounded-lg font-medium text-sm transition-colors border border-white/10 flex items-center justify-center gap-2">
                                            <Github size={16} /> Code
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 bg-primary hover:bg-primary/90 text-center text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
