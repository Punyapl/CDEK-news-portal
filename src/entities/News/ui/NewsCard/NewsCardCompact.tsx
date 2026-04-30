import { IconEye, IconThumbUp, } from '@tabler/icons-react';
import { formatDate, } from '@/shared/lib/formatDate';
import { getImageUrl, } from '@/shared/lib/getImageUrl';
import { Badge, } from '@/shared/ui/Badge';
import { Divider, } from '@/shared/ui/Divider';
import { LazyImage, } from '@/shared/ui/LazyImage/LazyImage';
import { MetaText, } from '@/shared/ui/MetaText';
import { StatCounter, } from '@/shared/ui/StatCounter';

interface NewsCardCompactProps {
    image: string;
    publishedAt: string;
    title: string;
    direction: string;
    rubric: string;
    likeCount: number;
    viewCount: number;
    showImage?: boolean;
    showDivider?: boolean;
    isTop?: boolean;
    onClick?: () => void;
}

export const NewsCardCompact = (props: NewsCardCompactProps) => {
    const {
        image,
        publishedAt,
        title,
        direction,
        rubric,
        likeCount,
        viewCount,
        showImage = false,
        showDivider = true,
        isTop = false,
        onClick,
    } = props;

    return (
        <div className="flex flex-col w-full">
            <div className={`flex flex-col ${showImage ? 'gap-1' : 'gap-0'} w-full cursor-pointer`} onClick={onClick}>
                <div className="flex flex-col gap-3 w-full">
                    {showImage && (
                        <LazyImage src={getImageUrl(image)} alt={title} className="w-full h-full max-h-[160px] object-cover shrink-0 rounded-xl" />
                    )}
                    <div className="flex flex-col gap-1 w-full">
                        {isTop && <Badge type="top" />}
                        <h3 className="text-text-primary font-normal text-lg leading-normal line-clamp-2">{title}</h3>
                    </div>
                </div>
                <div className="flex flex-wrap items-center w-full gap-1">
                    <MetaText>{`#${direction}`}</MetaText>
                    <MetaText>{`#${rubric}`}</MetaText>
                    <MetaText>•</MetaText>
                    <MetaText>{formatDate(publishedAt, 'full')}</MetaText>
                    <MetaText>•</MetaText>
                    <div className='flex gap-1 flex-nowrap'>
                        <StatCounter icon={<IconThumbUp color="var(--color-text-secondary)" size={14} />} count={likeCount} />
                        <StatCounter icon={<IconEye color="var(--color-text-secondary)" size={14} />} count={viewCount} />
                    </div>
                </div>
            </div>
            {showDivider && <Divider />}
        </div>
    );
};