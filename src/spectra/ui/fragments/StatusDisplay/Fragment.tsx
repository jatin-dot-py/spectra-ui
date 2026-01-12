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
        success: 'text-green-600 dark:text-green-500',
        warning: 'text-amber-600 dark:text-amber-500',
        destructive: 'text-destructive',
        neutral: 'text-muted-foreground',
    };

    const bgStyles = {
        success: 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20',
        warning: 'bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
        destructive: 'bg-destructive/10 border-destructive/20',
        neutral: 'bg-muted/50 border-border',
    };

    return (
        <div
            className={cn(
                'flex items-start gap-3 p-3 rounded-md border',
                bgStyles[variant],
                className
            )}
        >
            <Icon className={cn('h-5 w-5 shrink-0 mt-0.5', variantStyles[variant])} />
            <div className="space-y-1 min-w-0 flex-1">
                <h4 className="font-medium text-sm leading-6 text-foreground">
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
