import { useEffect, useRef, useState, } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

const imageCache = new Set<string>();

export const LazyImage = ({ src, alt, className, }: LazyImageProps) => {
    const [isVisible, setIsVisible,] = useState(() => imageCache.has(src));
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry,]) => {
                if (entry.isIntersecting) {
                    imageCache.add(src);
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px', }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={ref}
            src={isVisible ? src : undefined}
            alt={alt}
            className={className}
        />
    );
};