import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                        <p className="text-gray-400 mb-6 max-w-md">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop a message!
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/dhrumil16" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/dhrumil-patel-627178268" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary rounded-full flex items-center justify-center transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:dhrumildk16127@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                            <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <a href="mailto:dhrumildk16127@gmail.com" className="text-white hover:text-primary transition-colors">dhrumildk16127@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                            <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <a href="tel:+919173091944" className="text-white hover:text-secondary transition-colors">+91-9173091944</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
                            <div className="p-2 bg-accent/20 rounded-lg text-accent">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Location</p>
                                <p className="text-white">Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-white/10 text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Dhrumil Patel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
