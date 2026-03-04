import React from 'react';
import { motion } from 'framer-motion';
import {
    FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram,
} from 'react-icons/fi';

const contacts = [
    {
        icon: <FiMail size={22} />,
        label: 'Email',
        value: 'mandalrajeshsulendra@gmail.com',
        href: 'mailto:mandalrajeshsulendra@gmail.com',
        color: '#EA4335',
    },
    {
        icon: <FiPhone size={22} />,
        label: 'Phone',
        value: '+91 9167185621',
        href: 'tel:+919167185621',
        color: '#06B6D4',
    },
    {
        icon: <FiLinkedin size={22} />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/mandal-rajesh-sulendra',
        href: 'https://www.linkedin.com/in/mandal-rajesh-sulendra',
        color: '#0077B5',
    },
    {
        icon: <FiGithub size={22} />,
        label: 'GitHub',
        value: 'github.com/rajesh',
        href: 'https://github.com',
        color: '#e2e8f0',
    },
    {
        icon: <FiInstagram size={22} />,
        label: 'Instagram',
        value: '@instagram',
        href: 'https://www.instagram.com',
        color: '#E1306C',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

export default function Contact() {
    return (
        <section id="contact" className="section-padding">
            <div className="max-w-4xl mx-auto">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-mono text-purple-400 tracking-widest uppercase mb-2">Let's connect</p>
                    <h2 className="text-4xl md:text-5xl font-black text-white section-title">Contact Me</h2>
                    <p className="text-white/40 mt-4 max-w-md mx-auto text-sm">
                        Open to internships, collaborations, and new opportunities. Reach out directly via any of the options below.
                    </p>
                </motion.div>

                {/* Contact cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {contacts.map((item, i) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group flex items-center gap-4 glass-strong rounded-2xl p-5 border border-white/10 transition-all duration-300"
                            style={{ '--accent': item.color }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${item.color}55`;
                                e.currentTarget.style.boxShadow = `0 0 25px ${item.color}22`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '';
                                e.currentTarget.style.boxShadow = '';
                            }}
                        >
                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                                style={{
                                    background: `${item.color}18`,
                                    border: `1px solid ${item.color}33`,
                                    color: item.color,
                                }}
                            >
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div className="min-w-0">
                                <p className="text-xs text-white/30 uppercase tracking-wider mb-0.5">{item.label}</p>
                                <p className="text-sm text-white/70 group-hover:text-white transition-colors truncate">
                                    {item.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Availability note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center text-white/30 text-xs mt-12 flex items-center justify-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                    Currently available for internships and freelance projects
                </motion.p>

            </div>
        </section>
    );
}
