import { NewsCardCompact, } from './NewsCardCompact';
import { NewsCardDefault, } from './NewsCardDefault';

interface NewsCardProps {
    image: string;
    publishedAt: string;
    title: string;
    direction: string;
    rubric: string;
    likeCount: number;
    viewCount: number;
    type?: 'default' | 'compact';
    showImage?: boolean;
    showDivider?: boolean;
    isTop?: boolean;
    onClick?: () => void;
}

export const NewsCard = ({ type = 'default', onClick, ...props }: NewsCardProps) => {
    if (type === 'compact') return <NewsCardCompact onClick={onClick} {...props} />;
    return <NewsCardDefault onClick={onClick} {...props} />;
};