import { IconEye, IconThumbUp, } from '@tabler/icons-react';
import { News, } from '@/entities/News/model/types/news';
import { formatDate, } from '@/shared/lib/formatDate';
import { getImageUrl, } from '@/shared/lib/getImageUrl';
import { Badge, } from '@/shared/ui/Badge';
import { LazyImage, } from '@/shared/ui/LazyImage';
import { StatCounter, } from '@/shared/ui/StatCounter';
import { ArticleSkeleton, } from './ArticleDetailsSkeleton';

interface ArticleDetailsProps {
    article: News;
}

export const ArticleDetails = ({ article, }: ArticleDetailsProps) => {
    return (
        <article className="flex flex-col w-full gap-5 pb-4">
            {article.cover?.images[0]?.l && (
                <div className="w-full aspect-21/9 max-sm:aspect-video rounded-2xl overflow-hidden shrink-0">
                    <LazyImage 
                        src={getImageUrl(article.cover.images[0].l)} 
                        alt={article.title} 
                        className="w-full h-full object-cover" 
                    />
                </div>
            )}

            <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                    {article.isImportant && <Badge type="top" />}
                    {article.directions[0] && <Badge>{article.directions[0].name}</Badge>}
                    {article.rubrics[0] && <Badge type="rubric">{article.rubrics[0].name}</Badge>}
                </div>
                
                <h1 className="text-text-primary font-bold text-2xl md:text-3xl leading-tight">
                    {article.title}
                </h1>

                <div className="flex flex-wrap items-center w-full gap-2 text-text-secondary text-sm">
                    <span>{formatDate(article.publishedAt, 'full')}</span>
                    <span>•</span>
                    <div className="flex gap-3">
                        <StatCounter 
                            icon={<IconThumbUp color="var(--color-text-secondary)" size={16} />} 
                            count={article.likeCount} 
                        />
                        <StatCounter 
                            icon={<IconEye color="var(--color-text-secondary)" size={16} />} 
                            count={article.viewCount} 
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                <ArticleSkeleton />
            </div>
        </article>
    );
};