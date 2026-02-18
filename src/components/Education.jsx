import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);

    const education = [
        {
            institution: "JG University",
            degree: "M.Sc IT in Fintech (Financial Technology)",
            year: "July 2024 – Present",
            grade: "CGPA: 8.5",
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

    useEffect(() => {
        gsap.fromTo(
            ".education-item",
            { x: -30, opacity: 0 },
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
        <section id="education" className="py-20 bg-dark/50 relative">
            <div className="container mx-auto px-6" ref={sectionRef}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="education-item bg-white/5 backdrop-blur-sm border-l-4 border-primary p-6 rounded-r-xl hover:bg-white/10 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex gap-4">
                                    <div className="p-3 bg-primary/20 rounded-lg h-fit text-primary">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                                        <p className="text-lg text-gray-300">{edu.degree}</p>
                                        <p className="text-sm text-gray-400 mt-2">{edu.location}</p>
                                    </div>
                                </div>
                                <div className="text-left md:text-right">
                                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white mb-2">{edu.year}</span>
                                    <p className="text-primary font-bold">{edu.grade}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
