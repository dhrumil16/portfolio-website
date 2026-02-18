import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Database, Layout, PenTool, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const sectionRef = useRef(null);

    const skills = [
        {
            category: "Programming Languages",
            icon: <Terminal size={24} className="text-secondary" />,
            items: ["Python", "JavaScript (ES6+)"],
        },
        {
            category: "Web Technologies",
            icon: <Layout size={24} className="text-primary" />,
            items: ["HTML", "CSS", "React.js", "Tailwind CSS"],
        },
        {
            category: "Databases & Tools",
            icon: <Database size={24} className="text-accent" />,
            items: ["MySQL", "Firebase", "VS Code", "GitHub"],
        },
        {
            category: "Other Skills",
            icon: <PenTool size={24} className="text-green-400" />,
            items: ["Power BI", "Photoshop", "Canva"],
        },
    ];

    useEffect(() => {
        gsap.fromTo(
            ".skill-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section id="skills" className="py-20 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-96 bg-primary/5 -skew-y-6 -z-10"></div>

            <div className="container mx-auto px-6" ref={sectionRef}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-primary/10 group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-200">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 text-sm text-gray-400 rounded-full border border-white/5 hover:border-white/20 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
