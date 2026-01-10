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

    /** Panel title */
    title: string;
    /** Optional description below title */
    description?: string;
    /** Optional icon */
    icon?: SpectraIconType;
    /** Content to render in the scrollable area */
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
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton
                className={cn(
                    // Near full-screen dimensions
                    'sm:max-w-[90vw] sm:max-h-[90vh] h-[90vh]',
                    // Fixed layout - no content wrapping
                    'flex flex-col',
                    // Remove default gap since we handle our own spacing
                    'gap-0'
                )}
            >
                {/* Fixed header */}
                <DialogHeader className="shrink-0 pb-4 border-b border-border">
                    <div className="flex items-start gap-3">
                        {Icon && (
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                <Icon className="h-4 w-4" />
                            </div>
                        )}
                        <div className="flex flex-col gap-1 pt-0.5">
                            <DialogTitle>{title}</DialogTitle>
                            {description && (
                                <DialogDescription>{description}</DialogDescription>
                            )}
                        </div>
                    </div>
                </DialogHeader>

                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden py-4">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}
