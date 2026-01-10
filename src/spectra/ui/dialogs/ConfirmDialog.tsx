import * as React from 'react';
import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { DialogBase, type DialogSize } from './DialogBase';
import { type SpectraIconType } from '@/spectra/types';

export interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    onCancel?: () => void;

    title: string;
    description?: string;
    children?: React.ReactNode;

    confirmText?: string;
    cancelText?: string;
    variant?: 'default' | 'destructive';

    loading?: boolean;
    /** Disable the confirm button (e.g., for form validation) */
    confirmDisabled?: boolean;

    /** Dialog size */
    size?: DialogSize;

    /** Custom icon - defaults to CircleCheck */
    icon?: SpectraIconType;
}

export function ConfirmDialog({
    open,
    onOpenChange,
    onConfirm,
    onCancel,
    title,
    description,
    children,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'default',
    loading = false,
    confirmDisabled = false,
    size,
    icon: Icon = CircleCheck,
}: ConfirmDialogProps) {
    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen && onCancel) {
            onCancel();
        }
        onOpenChange(newOpen);
    };

    const handleConfirm = () => {
        onConfirm();
        onOpenChange(false);
    };

    const handleCancel = () => {
        onCancel?.();
        onOpenChange(false);
    };

    return (
        <DialogBase
            open={open}
            onOpenChange={handleOpenChange}
            icon={<Icon className="h-4 w-4" />}
            iconVariant={variant === 'destructive' ? 'error' : 'default'}
            title={title}
            description={description}
            size={size}
            footer={
                <>
                    <Button variant="outline" onClick={handleCancel} disabled={loading}>
                        {cancelText}
                    </Button>
                    <Button
                        variant={variant === 'destructive' ? 'destructive' : 'default'}
                        onClick={handleConfirm}
                        disabled={loading || confirmDisabled}
                    >
                        {loading && <Spinner className="mr-2 h-3 w-3" />}
                        {confirmText}
                    </Button>
                </>
            }
        >
            {children}
        </DialogBase>
    );
}

