import { Inbox, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';
import { Button } from '@/components/ui/button';
import { type StateSize, sizeConfig } from './sizeConfig';

export interface NoContentProps {
    /** Custom icon (defaults to Inbox) */
    icon?: SpectraIconType;
    /** Empty state message title */
    title: string;
    /** Action button label (optional) */
    actionLabel?: string;
    /** Action button click handler (optional) */
    onAction?: () => void;
    /** Optional external help link */
    learnMoreUrl?: string;
    /** Size variant */
    size?: StateSize;
}

export function NoContent({
    icon: Icon = Inbox,
    title,
    actionLabel,
    onAction,
    learnMoreUrl,
    size = 'md',
}: NoContentProps) {
    const s = sizeConfig[size];

    return (
        <div className={cn('flex flex-col items-center justify-center text-center', s.padding, s.gap)}>
            {/* Row 1: Icon + Title inline */}
            <div className={cn('flex items-center', s.gap)}>
                <div className={cn('flex items-center justify-center rounded-full bg-muted shrink-0', s.iconContainer)}>
                    <Icon className={cn('text-muted-foreground', s.icon)} />
                </div>
                <p className={cn('font-medium text-foreground', s.titleText)}>{title}</p>
            </div>
            {/* Row 2: Action / Link (optional) */}
            {(actionLabel && onAction) || learnMoreUrl ? (
                <div className="flex items-center gap-3">
                    {actionLabel && onAction && (
                        <Button
                            variant="default"
                            size={size === 'lg' ? 'default' : 'sm'}
                            onClick={onAction}
                        >
                            {actionLabel}
                        </Button>
                    )}
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
            ) : null}
        </div>
    );
}
