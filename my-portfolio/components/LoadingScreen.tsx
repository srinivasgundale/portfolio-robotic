"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const funnyMessages = [
    "Calibrating robotic arms...",
    "Downloading more RAM...",
    "Teaching robots to dance...",
    "Compiling coffee into code...",
    "Debugging the matrix...",
    "Initializing quantum processors...",
    "Charging flux capacitors...",
    "Optimizing neural pathways...",
    "Syncing with the mothership...",
    "Calculating meaning of life... 42!",
    "Warming up the servers...",
    "Feeding the hamsters...",
    "Reversing the polarity...",
    "Activating turbo mode...",
    "Loading awesome content...",
    "Convincing AI to cooperate...",
    "Summoning digital spirits...",
    "Reticulating splines...",
    "Generating witty loading messages...",
    "Preparing for launch sequence..."
];

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState(funnyMessages[0]);

    useEffect(() => {
        // Change message every 800ms
        const messageInterval = setInterval(() => {
            const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            setMessage(randomMessage);
        }, 800);

        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    clearInterval(messageInterval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);

        return () => {
            clearInterval(messageInterval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[10001] bg-background flex items-center justify-center"
                >
                    <div className="text-center max-w-md px-4">
                        {/* Animated Robot Head */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="mb-8"
                        >
                            <svg
                                width="120"
                                height="120"
                                viewBox="0 0 120 120"
                                className="mx-auto"
                            >
                                {/* Robot head */}
                                <rect
                                    x="30"
                                    y="25"
                                    width="60"
                                    height="50"
                                    fill="none"
                                    stroke="#00ffff"
                                    strokeWidth="3"
                                    rx="6"
                                />

                                {/* Eyes */}
                                <rect x="42" y="40" width="12" height="10" fill="#00ffff" rx="2">
                                    <animate
                                        attributeName="opacity"
                                        values="1;0.2;1"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </rect>
                                <rect x="66" y="40" width="12" height="10" fill="#00ffff" rx="2">
                                    <animate
                                        attributeName="opacity"
                                        values="1;0.2;1"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                    />
                                </rect>

                                {/* Mouth/Display */}
                                <rect x="42" y="58" width="36" height="8" fill="none" stroke="#00ff88" strokeWidth="2" rx="2" />

                                {/* Antenna */}
                                <line x1="60" y1="25" x2="60" y2="15" stroke="#00ff88" strokeWidth="3" />
                                <circle cx="60" cy="12" r="5" fill="#00ff88">
                                    <animate
                                        attributeName="opacity"
                                        values="0.5;1;0.5"
                                        dur="1s"
                                        repeatCount="indefinite"
                                    />
                                </circle>

                                {/* Body */}
                                <rect
                                    x="35"
                                    y="78"
                                    width="50"
                                    height="30"
                                    fill="none"
                                    stroke="#00ffff"
                                    strokeWidth="3"
                                    rx="4"
                                />

                                {/* Body details */}
                                <circle cx="50" cy="90" r="3" fill="#00ffff">
                                    <animate
                                        attributeName="opacity"
                                        values="1;0.3;1"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <circle cx="70" cy="90" r="3" fill="#00ffff">
                                    <animate
                                        attributeName="opacity"
                                        values="1;0.3;1"
                                        dur="2s"
                                        begin="0.5s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            </svg>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.h2
                            key={message}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xl font-mono text-primary mb-6 h-16 flex items-center justify-center"
                        >
                            {'>'} {message}
                        </motion.h2>

                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden mb-4 border border-primary/30">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    boxShadow: "0 0 15px hsl(180 100% 50%)",
                                }}
                            >
                                {/* Animated shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </motion.div>
                        </div>

                        {/* Progress Percentage */}
                        <p className="text-sm font-mono text-primary/80 mb-6">
                            [ {progress}% COMPLETE ]
                        </p>

                        {/* Loading dots */}
                        <div className="flex gap-2 justify-center">
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-primary rounded-sm"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
