export const getImageUrl = (path: string) =>
    path.startsWith('http') ? path : `${__API_URL__}${path}`;