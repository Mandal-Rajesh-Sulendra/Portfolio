import React, { useMemo } from 'react';

// Pure CSS animated star particles — no canvas, no libraries
const STAR_COUNT = 60;

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

export default function HeroBg() {
    const stars = useMemo(() => (
        Array.from({ length: STAR_COUNT }, (_, i) => ({
            id: i,
            size: randomBetween(1, 3),
            top: randomBetween(0, 100),
            left: randomBetween(0, 100),
            duration: randomBetween(4, 10),
            delay: randomBetween(0, 8),
            opacity: randomBetween(0.2, 0.7),
        }))
    ), []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Animated stars / particles */}
            {stars.map((s) => (
                <span
                    key={s.id}
                    style={{
                        position: 'absolute',
                        top: `${s.top}%`,
                        left: `${s.left}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        borderRadius: '50%',
                        background: i => i % 3 === 0 ? '#818CF8' : '#7C3AED',
                        backgroundColor: s.id % 3 === 0 ? '#818CF8' : s.id % 2 === 0 ? '#06B6D4' : '#7C3AED',
                        opacity: s.opacity,
                        animation: `starPulse ${s.duration}s ${s.delay}s ease-in-out infinite`,
                    }}
                />
            ))}

            {/* Slow diagonal gradient sweep */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.07) 0%, transparent 50%, rgba(6,182,212,0.05) 100%)',
                    animation: 'gradientSweep 10s ease-in-out infinite alternate',
                }}
            />
        </div>
    );
}
