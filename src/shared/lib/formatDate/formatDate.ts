type DateFormat = 'short' | 'full' | 'month' | 'weekday';

export const formatDate = (date: string, format: DateFormat = 'short') => {
    if (!date) return '';
    const d = new Date(date);

    switch (format) {
        case 'short':
            return new Intl.DateTimeFormat('ru-RU', {
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit',
            }).format(d);

        case 'full':
            return new Intl.DateTimeFormat('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            }).format(d).replace(' г.', '');

        case 'month': {
            const parts = new Intl.DateTimeFormat('ru-RU', {
                month: 'long',
                year: 'numeric',
            }).formatToParts(d);

            const month = parts.find(p => p.type === 'month')?.value ?? '';
            const year = parts.find(p => p.type === 'year')?.value ?? '';

            return `${month}, ${year}`;
        }

        case 'weekday': {
            const parts = new Intl.DateTimeFormat('ru-RU', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
            }).formatToParts(d);

            const weekday = parts.find(p => p.type === 'weekday')?.value ?? '';
            const day = parts.find(p => p.type === 'day')?.value ?? '';
            const month = parts.find(p => p.type === 'month')?.value ?? '';

            const capitalized = weekday.charAt(0).toUpperCase() + weekday.slice(1);
            return `${capitalized}, ${day} ${month}`;
        }
    }
};