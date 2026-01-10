import { useState } from 'react';
import { CircleX, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogBase, type DialogSize } from './DialogBase';
import { cn } from '@/lib/utils';

export interface ErrorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRetry?: () => void;
    onDismiss?: () => void;

    title?: string;
    description?: string;
    error?: Error | string;

    retryText?: string;
    dismissText?: string;
    showRetry?: boolean;

    /** Dialog size */
    size?: DialogSize;
}

export function ErrorDialog({
    open,
    onOpenChange,
    onRetry,
    onDismiss,
    title = 'Something went wrong',
    description,
    error,
    retryText = 'Try Again',
    dismissText = 'Dismiss',
    showRetry,
    size,
}: ErrorDialogProps) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    const shouldShowRetry = showRetry ?? !!onRetry;

    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen && onDismiss) {
            onDismiss();
        }
        onOpenChange(newOpen);
    };

    const handleRetry = () => {
        onRetry?.();
        onOpenChange(false);
    };

    const handleDismiss = () => {
        onDismiss?.();
        onOpenChange(false);
    };

    const errorMessage = error instanceof Error ? error.message : error;
    const errorStack = error instanceof Error ? error.stack : undefined;

    return (
        <DialogBase
            open={open}
            onOpenChange={handleOpenChange}
            icon={<CircleX className="h-4 w-4" />}
            iconVariant="error"
            title={title}
            description={description}
            size={size}
            footer={
                <>
                    {shouldShowRetry && (
                        <Button variant="outline" onClick={handleRetry}>
                            {retryText}
                        </Button>
                    )}
                    <Button variant="default" onClick={handleDismiss}>
                        {dismissText}
                    </Button>
                </>
            }
        >
            {errorMessage && (
                <div className="space-y-2">
                    <button
                        type="button"
                        onClick={() => setDetailsOpen(!detailsOpen)}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ChevronDown
                            className={cn(
                                'h-3 w-3 transition-transform',
                                !detailsOpen && '-rotate-90'
                            )}
                        />
                        <span>Technical Details</span>
                    </button>
                    {detailsOpen && (
                        <div className="rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-auto max-h-32">
                            <p>{errorMessage}</p>
                            {errorStack && (
                                <pre className="mt-2 text-[10px] opacity-70 whitespace-pre-wrap">
                                    {errorStack}
                                </pre>
                            )}
                        </div>
                    )}
                </div>
            )}
        </DialogBase>
    );
}
