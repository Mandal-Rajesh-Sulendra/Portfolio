import React from 'react';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                        style={{ background: 'linear-gradient(135deg, #7C3AED, #06B6D4)' }}
                    >
                        MRS
                    </div>
                    <span className="font-bold text-white/60 text-sm">Mandal Rajesh</span>
                </div>

                {/* Copyright */}
                <p className="text-xs text-white/30 flex items-center gap-1">
                    © {year} Made with <FiHeart size={12} className="text-purple-400 animate-pulse" /> by Mandal Rajesh Sulendra
                </p>

                {/* Quick links */}
                <div className="flex items-center gap-5 text-xs text-white/30">
                    {['#hero', '#about', '#skills', '#projects', '#contact'].map((href) => (
                        <a
                            key={href}
                            href={href}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="hover:text-white/70 capitalize transition-colors"
                        >
                            {href.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
