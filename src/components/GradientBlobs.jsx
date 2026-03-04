import React from 'react';

export default function GradientBlobs() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
            {/* Top-left purple blob */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
                    top: '-200px',
                    left: '-150px',
                    animation: 'floatBob 12s ease-in-out infinite',
                }}
            />
            {/* Top-right cyan blob */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
                style={{
                    opacity: 0.15,
                    background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
                    top: '-100px',
                    right: '-100px',
                    animation: 'floatBob 9s ease-in-out infinite',
                    animationDelay: '3s',
                }}
            />
            {/* Center indigo blob */}
            <div
                className="absolute w-[700px] h-[400px] rounded-full opacity-10 blur-[130px]"
                style={{
                    background: 'radial-gradient(circle, #818CF8 0%, transparent 70%)',
                    top: '40%',
                    left: '30%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'floatBob 15s ease-in-out infinite',
                    animationDelay: '6s',
                }}
            />
            {/* Bottom-right purple blob */}
            <div
                className="absolute w-[450px] h-[450px] rounded-full blur-[90px]"
                style={{
                    opacity: 0.15,
                    background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)',
                    bottom: '-100px',
                    right: '10%',
                    animation: 'floatBob 10s ease-in-out infinite',
                    animationDelay: '1.5s',
                }}
            />
            {/* Bottom-left cyan blob */}
            <div
                className="absolute w-[350px] h-[350px] rounded-full opacity-10 blur-[80px]"
                style={{
                    background: 'radial-gradient(circle, #06B6D4 0%, transparent 70%)',
                    bottom: '15%',
                    left: '-50px',
                    animation: 'floatBob 11s ease-in-out infinite',
                    animationDelay: '4s',
                }}
            />
        </div>
    );
}
