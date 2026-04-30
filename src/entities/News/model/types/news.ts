interface NewsImage {
    hd: string;
    l: string;
    m: string;
    s: string;
}

interface NewsCover {
    images: NewsImage[];
    type: 'gallery' | 'single';
}

interface NewsDirection {
    id: number;
    name: string;
    slug: string;
}

interface NewsRubric {
    id: number;
    name: string;
    slug: string;
}

export interface News {
    id: string;
    title: string;
    publishedAt: string;
    cover: NewsCover;
    directions: NewsDirection[];
    rubrics: NewsRubric[];
    likeCount: number;
    viewCount: number;
    isLiked: boolean;
    isImportant: boolean;
}

export interface NewsFeedResponse {
    totalPages: number;
    perPage: number;
    news: News[];
    minDatePublication: string;
}