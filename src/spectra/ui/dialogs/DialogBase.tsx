import * as React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export interface DialogBaseProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    icon?: React.ReactNode;
    iconVariant?: 'default' | 'warning' | 'error' | 'info';
    title: string;
    description?: string;
    children?: React.ReactNode;
    footer: React.ReactNode;
}

const iconVariantStyles = {
    default: 'bg-primary/10 text-primary',
    warning: 'bg-amber-500/10 text-amber-500',
    error: 'bg-destructive/10 text-destructive',
    info: 'bg-blue-500/10 text-blue-500',
};

export function DialogBase({
    open,
    onOpenChange,
    icon,
    iconVariant = 'default',
    title,
    description,
    children,
    footer,
}: DialogBaseProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent showCloseButton>
                <DialogHeader>
                    <div className="flex items-start gap-3">
                        {icon && (
                            <div
                                className={cn(
                                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
                                    iconVariantStyles[iconVariant]
                                )}
                            >
                                {icon}
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
                {children && <div className="py-2">{children}</div>}
                <DialogFooter>{footer}</DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
