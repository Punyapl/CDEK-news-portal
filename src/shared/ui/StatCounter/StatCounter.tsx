import { ReactNode, } from "react";

interface StatCounterProps {
    icon: ReactNode;
    count: number;
}

export const StatCounter = ({ icon, count, }: StatCounterProps) => (
    <div className="flex gap-1 items-center">
        {icon}
        <p className="text-text-secondary font-normal text-sm leading-none">{count}</p>
    </div>
);