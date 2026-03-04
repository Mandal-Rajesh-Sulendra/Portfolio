import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiBook } from 'react-icons/fi';

const stats = [
    { label: 'Projects Built', value: '5+' },
    { label: 'Skills Acquired', value: '10+' },
    { label: 'Workshops Attended', value: '3+' },
];

const highlights = [
    { icon: <FiCode size={18} />, text: 'Front-End Developer & UI enthusiast' },
    { icon: <FiCpu size={18} />, text: 'AI/ML practitioner — Fake News Detection project' },
    { icon: <FiBook size={18} />, text: 'TCS workshop alumnus & Tantrick Coding Club member' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-6xl mx-auto">

                {/* Section title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono text-purple-400 tracking-widest uppercase mb-2">Who I am</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white section-title">About Me</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Floating image card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            {/* Orbit ring */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #7C3AED, #06B6D4, transparent, #7C3AED)',
                                    padding: '2px',
                                    borderRadius: '50%',
                                    width: '280px',
                                    height: '280px',
                                    margin: 'auto',
                                    animation: 'orbit-ring 8s linear infinite',
                                }}
                            />
                            {/* Profile image container */}
                            <div
                                className="relative z-10 w-64 h-64 rounded-full overflow-hidden float-image"
                                style={{
                                    border: '3px solid rgba(124,58,237,0.4)',
                                    boxShadow: '0 0 40px rgba(124,58,237,0.3), 0 0 80px rgba(6,182,212,0.1)',
                                }}
                            >
                                <div
                                    className="w-full h-full flex items-center justify-center text-6xl font-black"
                                    style={{
                                        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                                        color: 'transparent',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                >
                                    <span
                                        style={{
                                            background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                    >
                                        MRS
                                    </span>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-4 -right-6 glass px-3 py-2 rounded-xl text-xs font-semibold text-white border border-purple-500/30"
                            >
                                🎓 B.Tech AIML
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -bottom-4 -left-6 glass px-3 py-2 rounded-xl text-xs font-semibold text-white border border-cyan-500/30"
                            >
                                💻 Full-Stack Dev
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        <div className="glass-strong rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Crafting experiences at the intersection of{' '}
                                <span className="gradient-text">design & technology</span>
                            </h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                I'm <strong className="text-white/90">Mandal Rajesh Sulendra</strong>, currently pursuing a
                                B.Tech in Computer Science &amp; Engineering (AI/ML) at Rai Technology University, Bengaluru.
                                I started my coding journey with C in my first semester and quickly fell in love with front-end
                                development and machine learning.
                            </p>
                            <p className="text-white/60 leading-relaxed mb-8">
                                I've attended workshops by <strong className="text-white/80">TCS</strong>, am an active
                                member of the <strong className="text-white/80">Tantrick Coding Club</strong>, and built
                                my first ML project — a <strong className="text-white/80">Fake News Detection</strong> model.
                                I'm always searching for new challenges to push my craft further.
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-3 mb-8">
                                {highlights.map(({ icon, text }) => (
                                    <li key={text} className="flex items-center gap-3 text-white/70 text-sm">
                                        <span className="text-purple-400 flex-shrink-0">{icon}</span>
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                {stats.map(({ label, value }) => (
                                    <div key={label} className="text-center">
                                        <p className="text-2xl font-black gradient-text">{value}</p>
                                        <p className="text-xs text-white/40 mt-1">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
