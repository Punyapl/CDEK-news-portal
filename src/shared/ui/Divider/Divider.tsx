interface DividerProps {
    className?: string;
}

export const Divider = ({ className, }: DividerProps) => {
    return <hr className={`border-t border-divider my-4 ${className ?? ''}`} />;
};
