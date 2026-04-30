import { useRef, } from 'react';

interface UseSwipeOptions {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    threshold?: number;
}

export const useSwipe = ({ onSwipeLeft, onSwipeRight, threshold = 50, }: UseSwipeOptions) => {
    const startX = useRef<number | null>(null);

    const onPointerDown = (e: React.PointerEvent) => {
        startX.current = e.clientX;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        if (startX.current === null) return;

        const diff = startX.current - e.clientX;

        if (diff > threshold) onSwipeLeft?.();
        if (diff < -threshold) onSwipeRight?.();

        startX.current = null;
    };

    return { onPointerDown, onPointerUp, };
};