import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
    const [show, setShow] = useState(true);
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        const timer = setTimeout(() => {
            if (!mountedRef.current) return;
            setShow(false);
            // Fix Bug 6: guard against calling onComplete after unmount
            setTimeout(() => { if (mountedRef.current) onComplete(); }, 600);
        }, 2400);
        return () => {
            clearTimeout(timer);
            mountedRef.current = false;
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="loader"
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
                    style={{ background: '#030712' }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    {/* Logo / initials */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'backOut' }}
                        className="relative w-24 h-24 mb-8"
                    >
                        {/* Spinning gradient ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #7C3AED, #06B6D4, #818CF8, #7C3AED)',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        />
                        {/* Inner dark circle */}
                        <div className="absolute inset-[3px] rounded-full bg-[#030712] flex items-center justify-center">
                            <span
                                className="text-2xl font-black"
                                style={{
                                    background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                MRS
                            </span>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl font-bold text-white tracking-widest mb-6"
                    >
                        RAJESH MANDAL
                    </motion.h1>

                    {/* Loading bar */}
                    <motion.div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #7C3AED, #06B6D4)' }}
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 text-xs text-white/40 tracking-[0.3em] uppercase font-mono"
                    >
                        Loading Portfolio...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
