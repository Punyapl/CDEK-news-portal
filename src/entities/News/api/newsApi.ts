import { api, } from '@/shared/api/axiosInstance';
import type { NewsFeedResponse, } from '../model/types/news';

interface GetCompanyNewsFeedParams {
    page: number;
    perPage: number;
}

export const getCompanyNewsFeed = async (params: GetCompanyNewsFeedParams): Promise<NewsFeedResponse> => {
    const { data, } = await api.get<NewsFeedResponse>('/api/v1/news/feed/company/short', { params, });
    return data;
};

export const getEmptyNewsFeed = async (params: GetCompanyNewsFeedParams): Promise<NewsFeedResponse> => {
    const { data, } = await api.get<NewsFeedResponse>('/api/v1/news/feed/company/empty', { params, });
    return data;
};