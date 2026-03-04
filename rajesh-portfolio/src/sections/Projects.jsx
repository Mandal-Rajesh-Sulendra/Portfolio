import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { HiCode } from 'react-icons/hi';

const projects = [
    {
        id: 1,
        title: 'Fake News Detection',
        category: 'AI / Machine Learning',
        tagline: 'ML model that classifies news articles as real or fake.',
        description:
            'My first ML project — a Fake News Detection model built with Python, Pandas, and Scikit-learn. It uses Natural Language Processing (TF-IDF vectorization) with a Logistic Regression classifier to identify misinformation in news articles with high accuracy.',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'NLP', 'TF-IDF'],
        color: '#7C3AED',
        gradient: 'from-purple-600/20 to-purple-900/10',
        icon: '🧠',
        github: 'https://github.com',
        live: null,
    },
    {
        id: 2,
        title: 'Personal Portfolio v1',
        category: 'Web Development',
        tagline: 'My first portfolio — built with pure HTML & CSS.',
        description:
            'The original portfolio website built with semantic HTML5 and CSS3 — featuring animations, responsive design, skill cards, and a contact page. The foundation that led to this futuristic React version.',
        tech: ['HTML5', 'CSS3', 'Responsive Design', 'CSS Animations'],
        color: '#06B6D4',
        gradient: 'from-cyan-600/20 to-cyan-900/10',
        icon: '🌐',
        github: 'https://github.com',
        live: null,
    },
    {
        id: 3,
        title: 'Futuristic Portfolio v2',
        category: 'Web Development',
        tagline: 'This very site — built with React, Tailwind & Three.js.',
        description:
            'A complete redesign of my portfolio using React 18 + Vite, Tailwind CSS, Framer Motion animations, Three.js particle background, custom cursor, and glassmorphism design. A showcase of modern front-end engineering skills.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
        color: '#818CF8',
        gradient: 'from-indigo-600/20 to-indigo-900/10',
        icon: '🚀',
        github: 'https://github.com',
        live: '#hero',
    },
];

function TiltCard({ project, onOpen }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        const y = ((e.clientX - rect.left) / rect.width - 0.5) * -15;
        setTilt({ x, y });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            onClick={() => onOpen(project)}
            style={{
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
            }}
            className="relative glass-strong rounded-2xl p-6 border border-white/10 cursor-pointer group overflow-hidden"
        >
            {/* Gradient glow border on hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `linear-gradient(135deg, ${project.color}22, transparent)`,
                    border: `1px solid ${project.color}55`,
                }}
            />

            {/* Top row */}
            <div className="relative flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <span
                    className="text-xs font-mono px-2 py-1 rounded-full border"
                    style={{ borderColor: `${project.color}44`, color: project.color }}
                >
                    {project.category}
                </span>
            </div>

            <h3 className="relative text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
            <p className="relative text-white/50 text-sm mb-5 leading-relaxed">{project.tagline}</p>

            {/* Tech pills */}
            <div className="relative flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                        {t}
                    </span>
                ))}
                {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/40">+{project.tech.length - 3}</span>
                )}
            </div>

            {/* View detail prompt */}
            <div className="relative flex items-center gap-1 text-xs text-white/30 group-hover:text-white/60 transition-colors mt-2">
                <HiCode size={14} />
                <span>Click to view details</span>
            </div>
        </motion.div>
    );
}

function Modal({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    key="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
                    style={{ background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(10px)' }}
                    onClick={onClose}
                >
                    <motion.div
                        key="modal-box"
                        initial={{ scale: 0.85, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                        className="glass-strong rounded-2xl p-8 max-w-lg w-full border border-white/10 relative"
                        style={{ boxShadow: `0 0 60px ${project.color}33` }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1"
                        >
                            <FiX size={20} />
                        </button>

                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">{project.icon}</span>
                            <div>
                                <h3 className="text-2xl font-black text-white">{project.title}</h3>
                                <span className="text-xs font-mono" style={{ color: project.color }}>{project.category}</span>
                            </div>
                        </div>

                        <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-7">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1 rounded-full border font-medium"
                                    style={{ borderColor: `${project.color}44`, color: project.color, background: `${project.color}11` }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold glass border border-white/10 hover:border-purple-500/50 text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                            >
                                <FiGithub size={16} /> GitHub
                            </a>
                            {project.live && (
                                <a
                                    href={project.live}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white btn-primary"
                                >
                                    <FiExternalLink size={16} /> Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="section-padding">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-2">What I've built</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white section-title">Projects</h2>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <TiltCard key={p.id} project={p} onOpen={setSelected} />
                    ))}
                </div>

            </div>

            {/* Modal */}
            <Modal project={selected} onClose={() => setSelected(null)} />
        </section>
    );
}
