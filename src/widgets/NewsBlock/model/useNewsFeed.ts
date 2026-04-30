import { useState, useEffect, useRef, } from 'react';
import { getCompanyNewsFeed, getEmptyNewsFeed, } from '@/entities/News/api/newsApi';
import type { NewsFeedResponse, } from '@/entities/News/model/types/news';

export const useNewsFeed = (perPage: number, type: 'default' | 'important') => {
    const [page, setPage,] = useState(1);
    const [data, setData,] = useState<NewsFeedResponse | null>(null);
    const [isLoading, setIsLoading,] = useState(false);
    const [error, setError,] = useState<string | null>(null);
    const cache = useRef<Map<number, NewsFeedResponse>>(new Map());

    useEffect(() => {
        if (cache.current.has(page)) {
            setData(cache.current.get(page)!);
            return;
        }

        const fetchFn = type === 'default' ? getCompanyNewsFeed : getEmptyNewsFeed;
        setIsLoading(true);

        fetchFn({ page, perPage, })
            .then(response => { cache.current.set(page, response); setData(response); setError(null); })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [page, type,]);

    return { data, isLoading, page, setPage, error, };
};