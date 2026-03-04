import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState('#hero');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
            // Determine active section
            const sections = navLinks.map(l => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActive('#' + sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => scrollTo('#hero')} className="group flex items-center gap-2">
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white"
                            style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
                        >
                            MRS
                        </div>
                        <span className="font-bold text-white/80 group-hover:text-white transition hidden sm:block">
                            Mandal Rajesh
                        </span>
                    </button>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => (
                            <li key={href}>
                                <button
                                    onClick={() => scrollTo(href)}
                                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${active === href ? 'text-white' : 'text-white/50 hover:text-white/90'
                                        }`}
                                >
                                    {active === href && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className="absolute inset-0 rounded-full"
                                            style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}
                                        />
                                    )}
                                    <span className="relative">{label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white/70 hover:text-white p-2"
                    >
                        {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="fixed top-16 left-0 right-0 z-40 glass border-b border-white/10"
                    >
                        <ul className="flex flex-col p-4 gap-1">
                            {navLinks.map(({ label, href }) => (
                                <li key={href}>
                                    <button
                                        onClick={() => scrollTo(href)}
                                        className="w-full text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition text-sm font-medium"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}

                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
