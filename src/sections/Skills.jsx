import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        label: 'Languages',
        color: '#7C3AED',
        skills: [
            { name: 'C Programming', level: 75 },
            { name: 'Python', level: 70 },
            { name: 'JavaScript', level: 80 },
            { name: 'SQL', level: 65 },
        ],
    },
    {
        label: 'Web Dev',
        color: '#06B6D4',
        skills: [
            { name: 'HTML & CSS', level: 90 },
            { name: 'React.js', level: 65 },
            { name: 'Tailwind CSS', level: 70 },
            { name: 'Responsive Design', level: 80 },
        ],
    },
    {
        label: 'AI / ML',
        color: '#818CF8',
        skills: [
            { name: 'Python (ML)', level: 65 },
            { name: 'Pandas', level: 70 },
            { name: 'Scikit-learn', level: 55 },
            { name: 'Data Analysis', level: 60 },
        ],
    },
    {
        label: 'Tools',
        color: '#34D399',
        skills: [
            { name: 'Git & GitHub', level: 70 },
            { name: 'VS Code', level: 90 },
            { name: 'Linux Basics', level: 55 },
            { name: 'Figma (Basic)', level: 50 },
        ],
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function SkillBar({ name, level, color, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="mb-4"
        >
            <div className="flex justify-between text-sm mb-1">
                <span className="text-white/70 font-medium">{name}</span>
                <span className="font-mono text-xs" style={{ color }}>{level}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2, duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${color}aa, ${color})`,
                        boxShadow: `0 0 10px ${color}66`,
                    }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const [active, setActive] = useState(null);

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-2">What I know</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white section-title">Skills</h2>
                </motion.div>

                {/* Skill cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((cat) => (
                        <motion.div
                            key={cat.label}
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="glass-strong rounded-2xl p-6 border border-white/10 transition-all duration-300"
                            style={{
                                boxShadow: active === cat.label ? `0 0 30px ${cat.color}44` : 'none',
                            }}
                            onMouseEnter={() => setActive(cat.label)}
                            onMouseLeave={() => setActive(null)}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-5">
                                <div
                                    className="w-3 h-3 rounded-sm"
                                    style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                                />
                                <h3 className="font-bold text-white">{cat.label}</h3>
                            </div>

                            {/* Skill bars */}
                            {cat.skills.map((skill, i) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    color={cat.color}
                                    index={i}
                                />
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Floating skill pills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mt-12"
                >
                    {['React', 'Python', 'C', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Pandas', 'Git', 'Tailwind', 'Scikit-learn', 'VS Code'].map((skill) => (
                        <span
                            key={skill}
                            className="glass px-4 py-2 rounded-full text-sm text-white/70 border border-white/10 hover:border-purple-500/50 hover:text-white transition-all duration-200 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
