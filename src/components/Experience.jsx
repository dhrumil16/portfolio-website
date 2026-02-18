import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    const experiences = [
        {
            role: "Full Stack Development Trainee",
            company: "QSpiders Software Training Institute",
            location: "Ahmedabad, Gujarat",
            date: "Aug 2025 – Jan 2026",
            description: [
                "Completed Full Stack Development training covering Python, SQL, React.js, and modern web technologies including HTML, CSS, JavaScript, and Tailwind CSS.",
                "Gained hands-on experience in building responsive web applications with strong fundamentals in OOPS, database design, backend integration, and real-time mini projects."
            ]
        },
        {
            role: "React JS Developer Intern",
            company: "CS Vision",
            location: "Remote",
            date: "May 2025 – June 2025",
            description: [
                "Developed responsive and interactive user interfaces using HTML, CSS, JavaScript and React.js.",
                "Built reusable components and implemented component-based architecture following modern frontend practices."
            ]
        }
    ];

    useEffect(() => {
        gsap.fromTo(
            ".experience-item",
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="experience" className="py-20 bg-dark">
            <div className="container mx-auto px-6" ref={sectionRef}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary to-secondary md:left-1/2 md:-ml-0.5"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`experience-item relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Timeline Dot */}
                            <div className="absolute left-0 w-10 h-10 bg-dark border-4 border-primary rounded-full z-10 flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>

                            {/* Content */}
                            <div className="ml-16 md:ml-0 md:w-1/2 px-4">
                                <div className={`bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-primary mb-2 font-medium">{exp.company}</h4>
                                    <div className={`flex items-center gap-4 text-sm text-gray-400 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                                        <span>•</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <ul className={`list-disc list-inside space-y-2 text-gray-300 text-sm ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="leading-relaxed">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
