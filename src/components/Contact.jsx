import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            value: "dhrumildk16127@gmail.com",
            link: "mailto:dhrumildk16127@gmail.com",
            color: "text-primary",
            bg: "bg-primary/20",
            border: "group-hover:border-primary/50"
        },
        {
            icon: <Phone size={24} />,
            title: "Phone",
            value: "+91-9173091944",
            link: "tel:+919173091944",
            color: "text-secondary",
            bg: "bg-secondary/20",
            border: "group-hover:border-secondary/50"
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            value: "Ahmedabad, Gujarat, India",
            link: "#",
            color: "text-purple-400",
            bg: "bg-purple-400/20",
            border: "group-hover:border-purple-400/50"
        }
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-dark relative overflow-hidden z-10 border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"></div>
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                
                {/* Consistent Centered Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tight"
                    >
                        Let's Connect
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto"
                    >
                        I'm currently open for freelance projects, open-source collaborations, or full-time opportunities. Let's create the next big thing together!
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
                    
                    {/* Left Side: Socials */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
                        <motion.h3 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-2"
                        >
                            Social Profiles
                        </motion.h3>
                        <div className="flex gap-6">
                            <motion.a 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                href="https://github.com/dhrumil16" target="_blank" rel="noopener noreferrer" 
                                className="group flex items-center justify-center w-16 h-16 bg-white/[0.03] hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-2"
                            >
                                <Github size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                            </motion.a>
                            <motion.a 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                href="https://www.linkedin.com/in/dhrumil-patel-627178268" target="_blank" rel="noopener noreferrer" 
                                className="group flex items-center justify-center w-16 h-16 bg-white/[0.03] hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-2"
                            >
                                <Linkedin size={28} className="text-gray-400 group-hover:text-primary transition-colors" />
                            </motion.a>
                            <motion.a 
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                href="mailto:dhrumildk16127@gmail.com" 
                                className="group flex items-center justify-center w-16 h-16 bg-white/[0.03] hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-2"
                            >
                                <Mail size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Right Side: Fancy Glass Cards */}
                    <div className="lg:col-span-8 space-y-4 max-w-2xl">
                        {contactInfo.map((info, idx) => (
                            <motion.a
                                key={idx}
                                href={info.link}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px", once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className={`group flex items-center gap-5 p-4 md:p-6 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[1.5rem] hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden shadow-xl ${info.border} hover:-translate-y-1`}
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${info.bg} flex items-center justify-center border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                    <div className={info.color}>
                                        {React.cloneElement(info.icon, { size: 20 })}
                                    </div>
                                </div>
                                
                                <div className="flex-1 relative z-10">
                                    <p className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest mb-0.5">{info.title}</p>
                                    <p className="text-base md:text-xl text-white font-medium group-hover:text-gray-200 transition-colors">{info.value}</p>
                                </div>

                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 bg-white/5">
                                    <ArrowRight size={18} className="text-white" />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm md:text-base mt-20 gap-4">
                    <p className="flex items-center gap-2">
                        Designed with <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary inline-block"></span> by Dhrumil Patel
                    </p>
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
