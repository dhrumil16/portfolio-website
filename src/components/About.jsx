import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
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
        <section id="about" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <div ref={sectionRef} className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Career Objective
                        </span>
                    </h2>
                    <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl hover:border-primary/30 transition-colors duration-300">
                        <p className="text-lg text-gray-300 leading-relaxed text-left">
                            Experienced <span className="text-primary font-semibold">Web and Python Developer</span> with a background in
                            Financial Technology, specializing in building responsive web applications and scalable backend solutions.
                            Passionate about developing practical, user-focused digital products and contributing to innovative technology
                            projects while continuously strengthening technical expertise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
