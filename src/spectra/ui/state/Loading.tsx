import { cn } from '@/lib/utils';
import { Spinner } from '@/components/ui/spinner';
import { type StateSize, sizeConfig } from './sizeConfig';

export interface LoadingProps {
    /** Loading variant type */
    variant?: 'spinner' | 'input' | 'text' | 'card' | 'custom';
    /** Number of lines for 'text' variant (default: 3) */
    lines?: number;
    /** Optional title for 'spinner' variant */
    title?: string;
    /** Custom className for sizing (primarily for 'custom' variant) */
    className?: string;
    /** Size variant */
    size?: StateSize;
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
    size = 'md',
}: LoadingProps) {
    const s = sizeConfig[size];

    // Spinner variant - centered with optional title (inline layout)
    if (variant === 'spinner') {
        return (
            <div className={cn('flex items-center justify-center', s.padding, s.gap, className)}>
                <Spinner className={cn('text-muted-foreground', s.icon)} />
                {title && <p className={cn('font-medium text-muted-foreground', s.titleText)}>{title}</p>}
            </div>
        );
    }

    // Input variant - mimics an input field skeleton
    if (variant === 'input') {
        return (
            <div className={cn('flex items-center', s.skeletonGap, className)}>
                <Skeleton className={cn(s.lineHeight, s.labelWidth)} />
                <Skeleton className={cn(s.inputHeight, 'flex-1')} />
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
                            s.lineHeight,
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
            <div className={cn('space-y-3 rounded-lg border border-border', s.padding, className)}>
                <div className={cn('flex items-center', s.skeletonGap)}>
                    <Skeleton className={cn('rounded-full', s.avatarSize)} />
                    <div className="space-y-1.5 flex-1">
                        <Skeleton className={cn(s.lineHeight, 'w-1/3')} />
                        <Skeleton className={cn(s.lineHeight, 'w-1/2')} />
                    </div>
                </div>
                <div className="space-y-2">
                    <Skeleton className={cn(s.lineHeight, 'w-full')} />
                    <Skeleton className={cn(s.lineHeight, 'w-full')} />
                    <Skeleton className={cn(s.lineHeight, 'w-2/3')} />
                </div>
            </div>
        );
    }

    // Custom variant - simple skeleton with custom className
    return <Skeleton className={cn('h-20 w-full', className)} />;
}
