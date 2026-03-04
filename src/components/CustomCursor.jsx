import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        const onDown = () => setClicked(true);
        const onUp = () => setClicked(false);

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
            animate={{
                x: pos.x - 4,
                y: pos.y - 4,
                scale: clicked ? 0.5 : 1,
            }}
            transition={{ type: 'spring', stiffness: 800, damping: 35 }}
            style={{
                width: 8,
                height: 8,
                background: 'linear-gradient(135deg, #7C3AED, #06B6D4)',
            }}
        />
    );
}
