import { IconStarFilled, } from "@tabler/icons-react";

const styles = {
    direction: 'rounded-lg bg-badge-secondary-background text-badge-text',
    rubric: 'rounded-lg bg-info-button-background text-badge-info-text',
    top: 'rounded-full bg-warning-button-background text-badge-warning-text',
} as const;

const BASE = 'px-2 py-[4px] h-6 gap-[4px] inline-flex items-center';

type BadgeProps =
    | { type?: 'direction' | 'rubric'; children: string }
    | { type: 'top'; children?: never };

export const Badge = ({ children, type = 'direction', }: BadgeProps) => (
    <div className={`${BASE} ${styles[type]}`}>
        {type === 'top' && (
            <IconStarFilled color="var(--color-badge-warning-text)" size={12.25} />
        )}
        <span className="text-nowrap truncate max-w-43">
            {type === 'top' ? 'Топ новость' : children}
        </span>
    </div>
);