"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            const cursorOuter = document.querySelector('body::before') as any;
            const cursorInner = document.querySelector('body::after') as any;

            // Update CSS custom properties for cursor position
            document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
        };
    }, []);

    return null;
}
