import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';

export interface StatusDisplayProps {
    /** Visual style variant */
    variant: 'success' | 'warning' | 'destructive' | 'neutral';
    /** Icon to display */
    icon: SpectraIconType;
    /** Main status title */
    title: string;
    /** Optional detailed description */
    description?: string;
    /** Optional className */
    className?: string;
}

export function StatusDisplay({
    variant,
    icon: Icon,
    title,
    description,
    className,
}: StatusDisplayProps) {
    const variantStyles = {
        success: 'text-primary',
        warning: 'text-amber-600 dark:text-amber-500',
        destructive: 'text-destructive',
        neutral: 'text-muted-foreground',
    };

    const bgStyles = {
        success: 'bg-card border-border',
        warning: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
        destructive: 'bg-destructive/10 border-destructive/20',
        neutral: 'bg-card border-border',
    };

    return (
        <div
            className={cn(
                'flex items-start gap-2 p-2 rounded-md border',
                bgStyles[variant],
                className
            )}
        >
            <Icon className={cn('h-4 w-4 shrink-0 mt-0.5', variantStyles[variant])} />
            <div className="space-y-1 min-w-0 flex-1">
                <h4 className="font-medium text-sm leading-5 text-foreground">
                    {title}
                </h4>
                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
