"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            style={{
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: isVisible
                    ? 'translateY(0) scale(1)'
                    : 'translateY(80px) scale(0.95)',
                opacity: isVisible ? 1 : 0,
                filter: isVisible ? 'blur(0px)' : 'blur(10px)'
            }}
        >
            {children}
        </div>
    );
}
