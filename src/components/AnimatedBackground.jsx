import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = React.memo(() => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll();

    const textX1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const textX2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <div ref={targetRef} className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-[#F8FAFC]">
            {/* Parallax Background Text - Light version */}
            <motion.div
                style={{ x: textX1 }}
                className="absolute top-[15%] left-0 text-[15vw] font-black text-secondary/[0.03] whitespace-nowrap leading-none uppercase"
            >
                Powerbenz Industries Powerbenz Industries
            </motion.div>

            <motion.div
                style={{ x: textX2 }}
                className="absolute bottom-[15%] right-0 text-[15vw] font-black text-secondary/[0.03] whitespace-nowrap leading-none uppercase"
            >
                Excellence Quality Legacy Excellence Quality
            </motion.div>

            {/* Dynamic Gradient Blobs - Softer for light theme */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -120, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[150px]"
            />

            {/* Grid Pattern - Subtly darker on light theme */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(1, 22, 39, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(1, 22, 39, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Scanline Effect - Primary color tint */}
            <motion.div
                animate={{
                    y: ['-100%', '100%'],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent h-[30%] w-full"
            />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
                style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}>
            </div>
        </div>
    );
});

export default AnimatedBackground;
