import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowDown } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import HeroBg from '../components/HeroBg';
import profileImg from '../Profile_img/Mandal_Rajesh_Sulendra.jpeg';

export default function Hero() {
    const btnRef = useRef(null);
    const [magPos, setMagPos] = useState({ x: 0, y: 0 });

    // Magnetic button effect — handler lives inside effect to avoid stale closure
    useEffect(() => {
        const handleMouseMove = (e) => {
            const btn = btnRef.current;
            if (!btn) return;
            const rect = btn.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 80;
            if (dist < maxDist) {
                const strength = (maxDist - dist) / maxDist;
                setMagPos({ x: dx * strength * 0.5, y: dy * strength * 0.5 });
            } else {
                setMagPos({ x: 0, y: 0 });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Animated star background */}
            <HeroBg />

            {/* Dark overlay */}
            <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #030712 80%)' }} />

            {/* Content */}
            <div className="relative z-[2] w-full max-w-6xl mx-auto px-6 py-20">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* ── Left: Text ── */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-white/60 mb-8 border border-purple-500/30"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Available for opportunities
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight"
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text">Rajesh</span>
                        </motion.h1>

                        {/* Typed roles */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="text-xl md:text-2xl font-semibold text-white/70 mb-6 h-10"
                        >
                            A{' '}
                            <TypeAnimation
                                sequence={[
                                    'Front-End Developer', 2000,
                                    'AI/ML Enthusiast', 2000,
                                    'Tech Explorer', 2000,
                                    'Problem Solver', 2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                style={{
                                    background: 'linear-gradient(135deg, #818CF8, #06B6D4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.6 }}
                            className="max-w-xl text-white/50 text-base md:text-lg mb-10 leading-relaxed mx-auto lg:mx-0"
                        >
                            B.Tech Computer Science Student exploring Web Development, Artificial Intelligence,
                            and Machine Learning through projects and continuous learning.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <motion.button
                                ref={btnRef}
                                onClick={scrollToProjects}
                                animate={{ x: magPos.x, y: magPos.y }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                className="btn-primary px-8 py-4 text-base font-semibold"
                            >
                                View My Work
                            </motion.button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="flex items-center justify-center lg:justify-start gap-5 mt-8"
                        >
                            {[
                                { icon: <FiGithub size={20} />, href: 'https://github.com', label: 'GitHub' },
                                { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/mandal-rajesh-sulendra', label: 'LinkedIn' },
                            ].map(({ icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-white/40 hover:text-white transition-all duration-200 hover:scale-110"
                                >
                                    {icon}
                                    <span className="text-sm">{label}</span>
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── Right: Profile Photo (static) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
                        className="flex-shrink-0 flex items-center justify-center"
                    >
                        <div
                            style={{
                                width: 280,
                                height: 280,
                                borderRadius: '50%',
                                padding: '3px',
                                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                                boxShadow: '0 8px 40px rgba(124,58,237,0.25), 0 4px 20px rgba(0,0,0,0.4)',
                            }}
                        >
                            <img
                                src={profileImg}
                                alt="Mandal Rajesh Sulendra"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    objectPosition: 'center 15%',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToAbout}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.2, duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="absolute bottom-10 z-[2] text-white/30 hover:text-white/60 transition-colors"
                aria-label="Scroll down"
            >
                <HiArrowDown size={24} />
            </motion.button>
        </section>
    );
}
