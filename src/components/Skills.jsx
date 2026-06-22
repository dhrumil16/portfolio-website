import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, PenTool, Terminal, Layers, Globe, Cpu } from 'lucide-react';

const Skills = () => {
    const skills = [
        {
            category: "Programming",
            icon: <Terminal size={32} />,
            color: "from-blue-500 to-cyan-400",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-400/50",
            span: "md:col-span-1",
            items: ["Python", "JavaScript (ES6+)"],
        },
        {
            category: "Web Development",
            icon: <Layout size={32} />,
            color: "from-primary to-secondary",
            bg: "bg-primary/10",
            border: "group-hover:border-primary/50",
            span: "md:col-span-2",
            items: ["HTML5", "CSS3", "React.js", "Tailwind CSS"],
        },
        {
            category: "Databases & Tools",
            icon: <Database size={32} />,
            color: "from-emerald-400 to-teal-500",
            bg: "bg-emerald-500/10",
            border: "group-hover:border-emerald-400/50",
            span: "md:col-span-2",
            items: ["MySQL", "Firebase", "VS Code", "GitHub"],
        },
        {
            category: "Design & Analytics",
            icon: <PenTool size={32} />,
            color: "from-orange-400 to-pink-500",
            bg: "bg-orange-500/10",
            border: "group-hover:border-orange-400/50",
            span: "md:col-span-1",
            items: ["Power BI", "Photoshop", "Canva"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section id="skills" className="py-24 md:py-32 bg-dark relative overflow-hidden z-10">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent rounded-full blur-[150px] mix-blend-screen"></div>
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-20 md:mb-28">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tight"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    ></motion.div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-100px", once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group relative p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:shadow-2xl hover:-translate-y-2 ${skill.span} ${skill.border}`}
                        >
                            {/* Hover Gradient Splash */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${skill.color} rounded-full blur-[60px] opacity-20 group-hover:opacity-50 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight w-2/3 leading-tight">
                                        {skill.category}
                                    </h3>
                                    <div className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner backdrop-blur-md`}>
                                        <div className={`bg-gradient-to-br ${skill.color} bg-clip-text text-transparent`}>
                                            {React.cloneElement(skill.icon, { className: 'text-white drop-shadow-md' })}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-auto flex flex-wrap gap-3">
                                    {skill.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-black/40 text-sm md:text-base text-gray-300 font-medium rounded-xl border border-white/5 group-hover:border-white/10 transition-colors flex items-center gap-2 shadow-sm"
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
