import { useEffect, useState, } from 'react';

interface FadeTransitionProps {
    children: React.ReactNode;
    delay?: number;
    transitionKey: number | string;
}

export const FadeTransition = ({ children, delay = 0, transitionKey, }: FadeTransitionProps) => {
    const [visible, setVisible,] = useState(false);

    useEffect(() => {
        setVisible(false);
        const timeout = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timeout);
    }, [transitionKey,]);

    return (
        <div
            style={{
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
            }}
            className='max-md:w-full'
        >
            {children}
        </div>
    );
};