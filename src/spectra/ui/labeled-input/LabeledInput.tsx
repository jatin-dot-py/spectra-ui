import { type ReactNode, Children } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';
import { ExternalLink, AlertCircle, AlertTriangle, HelpCircle } from 'lucide-react';

export interface LabeledInputProps {
    label: string;
    icon?: SpectraIconType;
    children: ReactNode;
    helpText?: string;
    helpUrl?: string;
    /** Error message - shows destructive styling */
    error?: string;
    /** Warning message - shows warning styling (lower priority than error) */
    warning?: string;
}

export function LabeledInput({
    label,
    icon: Icon,
    children,
    helpText,
    helpUrl,
    error,
    warning,
}: LabeledInputProps) {
    const childCount = Children.count(children);
    const hasMultipleChildren = childCount > 1;

    // Determine validation state (error takes priority)
    const hasError = !!error;
    const hasWarning = !hasError && !!warning;
    const validationMessage = error || warning;

    // Split label to ensure the icon always sticks to the last word
    const labelParts = label.split(' ');
    const lastWord = labelParts.length > 0 ? labelParts.pop() : label;
    const mainText = labelParts.join(' ');
    // If there was split text, add the trailing space back to mainText
    const mainTextWithSpace = mainText ? `${mainText} ` : '';

    const labelElement = (
        <span className="text-xs text-muted-foreground block leading-snug">
            {Icon && <Icon className="h-3.5 w-3.5 inline-block align-middle mr-1.5 -mt-0.5" />}

            <span className="align-middle">
                {mainTextWithSpace}
                {/* Bind last word and icon together to prevent orphan icon wrapping */}
                <span className="whitespace-nowrap inline-flex items-center gap-1">
                    {lastWord}
                    {(helpText || helpUrl) && (
                        <TooltipProvider delayDuration={200}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <HelpCircle className="h-3 w-3 cursor-help text-muted-foreground/50 hover:text-muted-foreground transition-colors flex-shrink-0" />
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
                    )}
                </span>
            </span>
        </span>
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
        <div className="flex flex-col gap-1">
            {/* Main row: label + input */}
            <div className={cn('flex items-center gap-3')}>
                <div className="flex-shrink-0 w-20">
                    {labelElement}
                </div>
                <div
                    className={cn(
                        'min-w-0 flex items-center gap-1 flex-1 rounded-md transition-colors',
                        hasMultipleChildren && 'bg-muted/30 p-0.5'
                    )}
                >
                    {renderChildren()}
                </div>
            </div>

            {/* Validation message row */}
            {validationMessage && (
                <div className={cn('flex items-start gap-3')}>
                    {/* Empty spacer matching label width */}
                    <div className="flex-shrink-0 w-20" />
                    {/* Message */}
                    <div
                        className={cn(
                            'flex items-center gap-1.5 text-xs',
                            hasError && 'text-destructive',
                            hasWarning && 'text-yellow-600 dark:text-yellow-500'
                        )}
                    >
                        {hasError && <AlertCircle className="h-3 w-3 flex-shrink-0" />}
                        {hasWarning && <AlertTriangle className="h-3 w-3 flex-shrink-0" />}
                        <span>{validationMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
