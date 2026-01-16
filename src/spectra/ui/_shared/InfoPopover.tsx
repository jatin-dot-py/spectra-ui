import { HelpCircle, ExternalLink } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export interface InfoPopoverProps {
    /** Description text shown in the popover */
    description: string;
    /** Optional reference URL for "Learn more" link */
    referenceUrl?: string;
    /** Label for the reference link, defaults to "Learn more" */
    referenceLabel?: string;
    /** Additional className for the trigger icon */
    className?: string;
}

/**
 * A help icon that opens a popover with contextual information.
 * Used by LabeledInput and GroupItem for unified info UX.
 */
export function InfoPopover({
    description,
    referenceUrl,
    referenceLabel = 'Learn more',
    className,
}: InfoPopoverProps) {
    return (
        <Popover modal={true}>
            <PopoverTrigger asChild>
                <button
                    type="button"
                    className={cn(
                        'inline-flex items-center justify-center rounded-sm p-0.5 transition-colors',
                        'text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50',
                        'focus:outline-none focus-visible:ring-1 focus-visible:ring-ring',
                        className
                    )}
                    aria-label="More information"
                >
                    <HelpCircle className="h-3 w-3" />
                </button>
            </PopoverTrigger>
            <PopoverContent side="top" align="start" className="max-w-64">
                <PopoverDescription>{description}</PopoverDescription>
                {referenceUrl && (
                    <a
                        href={referenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-chart-1 hover:underline"
                    >
                        {referenceLabel}
                        <ExternalLink className="h-3 w-3" />
                    </a>
                )}
            </PopoverContent>
        </Popover>
    );
}
