import { Divider, } from '@/shared/ui/Divider';
import { Skeleton, } from '@/shared/ui/Skeleton';

const NewsCardSkeleton = () => (
    <div className="flex max-md:flex-col gap-4 py-2 w-full">
        <Skeleton className="w-full h-[160px] md:w-[184px] md:h-[127px] shrink-0 rounded-xl" />
        <div className="flex flex-col justify-between w-full max-md:gap-4 md:h-[127px]">
            <div className="flex flex-col gap-2">
                <Skeleton className="w-24 h-3 rounded-md" />
                <Skeleton className="w-full h-5 rounded-md" />
                <Skeleton className="w-3/4 h-5 rounded-md" />
            </div>
            <div className="flex gap-2">
                <Skeleton className="w-16 h-5 rounded-md" />
                <Skeleton className="w-16 h-5 rounded-md" />
            </div>
        </div>
    </div>
);

export const NewsBlockSkeleton = () => (
    <div className="flex flex-col w-2xl max-md:w-full rounded-2xl bg-white p-6 max-md:p-4">
        <div className="flex flex-col gap-2 w-full">
            <Skeleton className="w-32 h-6" />
            <Skeleton className="w-24 h-4" />
        </div>
        <Divider />
        <div className="flex flex-col gap-4 mt-2">
            <NewsCardSkeleton />
            <NewsCardSkeleton />
            <NewsCardSkeleton />
        </div>
    </div>
);