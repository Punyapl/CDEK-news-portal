import { useState, useRef, } from 'react';

export const useDragOffset = () => {
    const [offset, setOffset,] = useState(0);
    const startX = useRef<number | null>(null);

    const onPointerDown = (e: React.PointerEvent) => {
        startX.current = e.clientX;
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (startX.current === null) return;
        const diff = e.clientX - startX.current;
        // ограничиваем смещение до 10px
        setOffset(Math.max(-10, Math.min(10, diff)));
    };

    const onPointerUp = () => {
        setOffset(0);
        startX.current = null;
    };

    return { offset, onPointerDown, onPointerMove, onPointerUp, };
};