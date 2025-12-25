import { type ReactNode, Children } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';
import { ExternalLink } from 'lucide-react';

export interface LabeledInputProps {
    label: string;
    icon?: SpectraIconType;
    children: ReactNode;
    helpText?: string;
    helpUrl?: string;
}

export function LabeledInput({
    label,
    icon: Icon,
    children,
    helpText,
    helpUrl,
}: LabeledInputProps) {
    const childCount = Children.count(children);
    const hasMultipleChildren = childCount > 1;

    const labelElement = (
        <span
            className={cn(
                'text-xs text-muted-foreground inline-flex items-center gap-1.5',
                (helpText || helpUrl) && 'cursor-help'
            )}
        >
            {Icon && <Icon className="h-3.5 w-3.5" />}
            <span className={(helpText || helpUrl) ? 'border-b border-dotted border-muted-foreground/50' : ''}>
                {label}
            </span>
        </span>
    );

    const labelWithTooltip = (helpText || helpUrl) ? (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>
                    {labelElement}
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-64 text-xs space-y-1.5">
                    {helpText && <p>{helpText}</p>}
                    {helpUrl && (
                        <a
                            href={helpUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-chart-1 hover:underline"
                        >
                            Learn more <ExternalLink className="h-3 w-3" />
                        </a>
                    )}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ) : (
        labelElement
    );

    // Render children with separators when multiple
    const renderChildren = () => {
        if (!hasMultipleChildren) {
            return children;
        }

        const childArray = Children.toArray(children);
        return childArray.map((child, index) => (
            <div key={index} className="flex items-center">
                {child}
                {index < childArray.length - 1 && (
                    <div className="w-px h-4 bg-border/50 mx-0.5" />
                )}
            </div>
        ));
    };

    return (
        <div className={cn('flex items-center gap-3')}>
            <div className="flex-shrink-0 w-20">
                {labelWithTooltip}
            </div>
            <div
                className={cn(
                    'min-w-0 flex items-center gap-1',
                    'flex-1',
                    hasMultipleChildren && 'rounded-md bg-muted/30 p-0.5'
                )}
            >
                {renderChildren()}
            </div>
        </div>
    );
}
