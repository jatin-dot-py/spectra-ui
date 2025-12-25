import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';

export interface LoadingProps {
    /** Loading variant type */
    variant?: 'spinner' | 'input' | 'text' | 'card' | 'custom';
    /** Number of lines for 'text' variant (default: 3) */
    lines?: number;
    /** Optional title for 'spinner' variant */
    title?: string;
    /** Custom className for sizing (primarily for 'custom' variant) */
    className?: string;
}

function Skeleton({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                'animate-pulse rounded-md bg-muted',
                className
            )}
        />
    );
}

export function Loading({
    variant = 'spinner',
    lines = 3,
    title,
    className,
}: LoadingProps) {
    // Spinner variant - centered with optional title
    if (variant === 'spinner') {
        return (
            <div className={cn('flex flex-col items-center justify-center gap-3 p-6 text-center', className)}>
                <Spinner className="h-6 w-6 text-muted-foreground" />
                {title && <p className="text-sm font-medium text-muted-foreground">{title}</p>}
            </div>
        );
    }

    // Input variant - mimics an input field skeleton
    if (variant === 'input') {
        return (
            <div className={cn('flex items-center gap-3', className)}>
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-8 flex-1" />
            </div>
        );
    }

    // Text variant - multiple lines of text skeleton
    if (variant === 'text') {
        return (
            <div className={cn('space-y-2', className)}>
                {Array.from({ length: lines }).map((_, i) => (
                    <Skeleton
                        key={i}
                        className={cn(
                            'h-4',
                            i === lines - 1 ? 'w-3/4' : 'w-full'
                        )}
                    />
                ))}
            </div>
        );
    }

    // Card variant - card-like skeleton with header and content
    if (variant === 'card') {
        return (
            <div className={cn('space-y-3 p-4 rounded-lg border border-border', className)}>
                <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-1.5 flex-1">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-3 w-1/2" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                </div>
            </div>
        );
    }

    // Custom variant - simple skeleton with custom className
    return <Skeleton className={cn('h-20 w-full', className)} />;
}
