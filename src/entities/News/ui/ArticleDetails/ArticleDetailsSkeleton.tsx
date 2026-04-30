import { Skeleton, } from "@/shared/ui/Skeleton";

export const ArticleSkeleton = () => (
    <div className="flex flex-col gap-3 w-full">
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-4 w-[95%]"/>
        <Skeleton className="h-4 w-[90%]"/>
        <Skeleton className="h-4 w-[98%]"/>
        <Skeleton className="h-4 w-[60%] mb-4"/>
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-4 w-[85%]"/>
        <Skeleton className="h-4 w-[92%]"/>
    </div>
);