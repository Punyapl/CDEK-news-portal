import { IconEye, IconThumbUp, } from '@tabler/icons-react';
import { formatDate, } from '@/shared/lib/formatDate';
import { getImageUrl, } from '@/shared/lib/getImageUrl';
import { Badge, } from '@/shared/ui/Badge';
import { Divider, } from '@/shared/ui/Divider';
import { LazyImage, } from '@/shared/ui/LazyImage/LazyImage';
import { StatCounter, } from '@/shared/ui/StatCounter';

interface NewsCardDefaultProps {
    image: string;
    publishedAt: string;
    title: string;
    direction: string;
    rubric: string;
    likeCount: number;
    viewCount: number;
    showImage?: boolean;
    showDivider?: boolean;
    onClick?: () => void;
}

export const NewsCardDefault = (props: NewsCardDefaultProps) => {
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
        onClick,
    } = props;

    return (
        <div className="flex max-md:flex-col w-full">
            <div className="flex max-md:flex-col gap-4 w-full cursor-pointer" onClick={onClick}>
                <LazyImage src={getImageUrl(image)} alt={title} className={`
                    w-full object-cover shrink-0 rounded-xl
                    h-[160px] ${!showImage ? 'max-md:hidden' : ''}
                    md:w-[184px] md:h-[127px]
                `} />
                <div className="flex flex-col md:h-full md:justify-between max-md:gap-4 w-full">
                    <div className="flex flex-col w-full">
                        <p className="text-text-secondary font-normal text-base leading-normal">{formatDate(publishedAt)}</p>
                        <h3 className="text-text-primary font-normal text-lg leading-normal line-clamp-3">{title}</h3>
                    </div>
                    <div className="flex items-center justify-between w-full flex-wrap gap-2">
                        <div className="flex gap-2">
                            <Badge>{direction}</Badge>
                            <Badge type="rubric">{rubric}</Badge>
                        </div>
                        <div className="flex gap-2">
                            <StatCounter icon={<IconThumbUp color="var(--color-text-secondary)" size={21} />} count={likeCount} />
                            <StatCounter icon={<IconEye color="var(--color-text-secondary)" size={21} />} count={viewCount} />
                        </div>
                    </div>
                </div>
            </div>
            {showDivider && <Divider className='md:hidden' />}
        </div>
    );
};