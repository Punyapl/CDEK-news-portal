import { IconArrowLeft, IconArrowRight, } from "@tabler/icons-react";
import { News, NewsCard, } from "@/entities/News";
import { ArticleDetails, } from "@/entities/News/ui/ArticleDetails/ArticleDetails";
import NewsEmptyPlaceholder from "@/shared/assets/images/NewsEmptyPlaceholder.png";
import { formatDate, } from "@/shared/lib/formatDate";
import { useDragOffset, } from "@/shared/lib/useDragOffset";
import { useModal, } from "@/shared/lib/useModal";
import { useSwipe, } from "@/shared/lib/useSwipe";
import { Divider, } from "@/shared/ui/Divider";
import { FadeTransition, } from "@/shared/ui/FadeTransition";
import { LazyImage, } from "@/shared/ui/LazyImage/LazyImage";
import { Modal, } from "@/shared/ui/Modal/Modal";
import { useNewsFeed, } from "../model/useNewsFeed";
import { NewsBlockSkeleton, } from "./NewsBlockSkeleton";

interface NewsBlockProps {
    type: 'company' | 'rubric' | 'important';
    title: string;
}

const newsCardContainerStyles = {
    company: 'mt-2 max-md:mt-0 md:gap-4',
    rubric: 'mt-2',
    important: '',
} as const;

export const NewsBlock = (props: NewsBlockProps) => {
    const { type, title, } = props;

    const { data, isLoading, page, setPage, error, } = useNewsFeed(3, type === 'important' ? 'important' : 'default');
    const totalPages = data?.totalPages ?? 1;

    const { offset, onPointerDown, onPointerMove, onPointerUp, } = useDragOffset();

    const articleModal = useModal<News>();

    const swipe = useSwipe({
        onSwipeLeft: () => { if (page < totalPages) setPage(page + 1); },
        onSwipeRight: () => { if (page > 1) setPage(page - 1); },
    });

    const swipeHandlers = {
        onPointerDown: (e: React.PointerEvent) => { onPointerDown(e); swipe.onPointerDown(e); },
        onPointerMove,
        onPointerUp: (e: React.PointerEvent) => { onPointerUp(); swipe.onPointerUp(e); },
    };

    const headerDate = data?.news[0]?.publishedAt || new Date().toISOString();

    if (isLoading) return <NewsBlockSkeleton />;
    if (!data) return null;

    return (
        <>
            <div className="flex flex-col h-full w-2xl max-md:w-full rounded-2xl bg-white p-6 max-md:p-4">
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-text-primary font-semibold text-2xl leading-none">{title}</h2>
                    <p className="text-text-secondary text-sm leading-none capitalize">
                        {formatDate(headerDate!, type === 'important' ? 'weekday' : 'month')}
                    </p>
                </div>
                <Divider />
                <div className="flex flex-col w-full h-full justify-between">
                    <div className={`flex flex-col w-full ${newsCardContainerStyles[type]}`} {...swipeHandlers}
                        style={{
                            transform: `translateX(${offset}px)`,
                            transition: offset === 0 ? 'transform 0.3s ease' : 'none',
                            touchAction: 'pan-y',
                        }}
                    >
                        {!error && data.news.map((item, index) => (
                            <FadeTransition key={item.id} delay={index * 100} transitionKey={page}>
                                <NewsCard
                                    type={type === 'company' ? 'default' : 'compact'}
                                    image={item.cover.images[0]?.l ?? ''}
                                    publishedAt={item.publishedAt}
                                    title={item.title}
                                    direction={item.directions[0]?.name ?? ''}
                                    rubric={item.rubrics[0]?.name ?? ''}
                                    likeCount={item.likeCount}
                                    viewCount={item.viewCount}
                                    isTop={item.isImportant}
                                    showImage={index === 0}
                                    showDivider={index !== data.news.length - 1}
                                    onClick={() => articleModal.open(item)}
                                />
                            </FadeTransition>
                        ))}
                        {
                            data.news.length === 0 && !error && (
                                <div className="flex flex-col w-full gap-2 items-center">
                                    <LazyImage src={NewsEmptyPlaceholder} alt="Новых новостей нет" className="w-[160px] aspect-square" />
                                    <h4 
                                        className="title-h4 text-text-primary font-semibold text-lg leading-none text-center"
                                    >
                                        Новых новостей нет
                                        </h4>
                                </div>
                            )
                        }
                        {
                            error && (
                                <div className="flex flex-col w-full gap-2 items-center">
                                    <h4 
                                        className="title-h4 text-text-primary font-semibold text-lg leading-none text-center"
                                    >
                                        Ошибка загрузки новостей
                                    </h4>
                                    <p className="text-text-secondary text-sm leading-none text-center">{error}</p>
                                </div>
                            )
                        }
                    </div>
                    {
                        data.news.length !== 0 && !error && (
                            <div className="flex justify-end gap-2 mt-6">
                                <button
                                    type="button"
                                    aria-label="Предыдущая страница"
                                    className="p-[2px] border-0 bg-transparent disabled:opacity-40 enabled:cursor-pointer"
                                    onClick={() => setPage(page - 1)}
                                    disabled={page <= 1}
                                >
                                    <IconArrowLeft color="var(--color-button-text)" size={17.5} />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Следующая страница"
                                    className="p-[2px] border-0 bg-transparent disabled:opacity-40 enabled:cursor-pointer"
                                    onClick={() => setPage(page + 1)}
                                    disabled={page >= data.totalPages}
                                >
                                    <IconArrowRight color="var(--color-button-text)" size={17.5} />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
            <Modal
                isOpen={articleModal.show}
                onClose={articleModal.close}
                size="xl"
            >
                {articleModal.item && (
                    <ArticleDetails article={articleModal.item} />
                )}
            </Modal>
        </>

    );
};
