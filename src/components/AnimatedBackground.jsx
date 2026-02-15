import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedBackground = React.memo(() => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Use lighter transforms and useSpring for smoother transitions if needed
    const textX1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const textX2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div ref={targetRef} className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none bg-[#F8FAFC]">
            {/* Optimized Background Text - Less movement */}
            <motion.div
                style={{ x: textX1 }}
                className="absolute top-[15%] left-0 text-[15vw] font-black text-secondary/[0.02] whitespace-nowrap leading-none uppercase will-change-transform"
            >
                Powerbenz Industries Powerbenz Industries
            </motion.div>

            <motion.div
                style={{ x: textX2 }}
                className="absolute bottom-[15%] right-0 text-[15vw] font-black text-secondary/[0.02] whitespace-nowrap leading-none uppercase will-change-transform"
            >
                Excellence Quality Legacy Excellence Quality
            </motion.div>

            {/* Reduced Blur Blobs - Performance Critical Optimization */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 60, 0],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[80px] md:blur-[150px]"
            />

            {/* Faster/Simpler Grid Rendering */}
            <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `linear-gradient(rgba(1, 22, 39, 0.02) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(1, 22, 39, 0.02) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }}
            />

            {/* Optimized Scanline - Simplified to be lighter */}
            <motion.div
                animate={{
                    y: ['-100%', '100%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.01] to-transparent h-[40%] w-full"
            />

            {/* Removed Heavy Noise Texture for better smoothness */}
        </div>
    );
});

export default AnimatedBackground;
