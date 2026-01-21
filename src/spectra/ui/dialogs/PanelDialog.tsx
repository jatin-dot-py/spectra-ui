import * as React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';

export interface PanelDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    icon?: SpectraIconType;
    children: React.ReactNode;
}

export function PanelDialog({
    open,
    onOpenChange,
    title,
    description,
    icon: Icon,
    children,
}: PanelDialogProps) {
    const hasDescription = !!description;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton
                className={cn(
                    "sm:max-w-[98vw] sm:max-h-[98vh] h-[98vh]",
                    "flex flex-col gap-0 p-0", // p-0 is the absolute minimum
                    "overflow-hidden"
                )}
            >
                {/* Unified Header */}
                <DialogHeader
                    className={cn(
                        "shrink-0 border-b border-border px-3 flex flex-row items-center gap-3 space-y-0",
                        hasDescription ? "py-2.5" : "py-1.5" // Ultra-compact toggle
                    )}
                >
                    {Icon && (
                        <div className={cn(
                            "flex shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary",
                            hasDescription ? "h-8 w-8" : "h-6 w-6" // Scale icon container
                        )}>
                            <Icon className={hasDescription ? "h-4 w-4" : "h-3.5 w-3.5"} />
                        </div>
                    )}

                    <div className="flex flex-col justify-center min-w-0">
                        <DialogTitle className="text-sm font-semibold leading-none truncate">
                            {title}
                        </DialogTitle>
                        {description && (
                            <DialogDescription className="text-[12px] leading-tight mt-1 line-clamp-1">
                                {description}
                            </DialogDescription>
                        )}
                    </div>
                </DialogHeader>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-2">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}