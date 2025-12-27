import { AlertCircle, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';
import { Button } from '@/components/ui/button';
import { type StateSize, sizeConfig } from './sizeConfig';

export interface ErrorProps {
    /** Custom icon (defaults to AlertCircle) */
    icon?: SpectraIconType;
    /** Error message title */
    title: string;
    /** Action button label */
    actionLabel: string;
    /** Action button click handler */
    onAction: () => void;
    /** Optional external help link */
    learnMoreUrl?: string;
    /** Size variant */
    size?: StateSize;
}

export function Error({
    icon: Icon = AlertCircle,
    title,
    actionLabel,
    onAction,
    learnMoreUrl,
    size = 'md',
}: ErrorProps) {
    const s = sizeConfig[size];

    return (
        <div className={cn('flex flex-col items-center justify-center text-center', s.padding, s.gap)}>
            <div className={cn('flex items-center justify-center rounded-full bg-destructive/10', s.iconContainer)}>
                <Icon className={cn('text-destructive', s.icon)} />
            </div>
            <p className={cn('font-medium text-foreground', s.titleText)}>{title}</p>
            <Button
                variant="default"
                size={size === 'lg' ? 'default' : 'sm'}
                onClick={onAction}
                className={s.buttonMargin}
            >
                {actionLabel}
            </Button>
            {learnMoreUrl && (
                <a
                    href={learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors', s.linkText)}
                >
                    Learn more <ExternalLink className={s.linkIcon} />
                </a>
            )}
        </div>
    );
}
