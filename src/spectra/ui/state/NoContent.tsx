import { Inbox, ExternalLink } from 'lucide-react';
import { type SpectraIconType } from '@/spectra/types';
import { Button } from '@/components/ui/button';

export interface NoContentProps {
    /** Custom icon (defaults to Inbox) */
    icon?: SpectraIconType;
    /** Empty state message title */
    title: string;
    /** Action button label */
    actionLabel: string;
    /** Action button click handler */
    onAction: () => void;
    /** Optional external help link */
    learnMoreUrl?: string;
}

export function NoContent({
    icon: Icon = Inbox,
    title,
    actionLabel,
    onAction,
    learnMoreUrl,
}: NoContentProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Icon className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">{title}</p>
            <Button
                variant="default"
                size="sm"
                onClick={onAction}
                className="mt-1"
            >
                {actionLabel}
            </Button>
            {learnMoreUrl && (
                <a
                    href={learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                    Learn more <ExternalLink className="h-3 w-3" />
                </a>
            )}
        </div>
    );
}
