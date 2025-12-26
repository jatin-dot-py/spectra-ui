import { CircleCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { DialogBase } from './DialogBase';

export interface ConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    onCancel?: () => void;

    title: string;
    description?: string;

    confirmText?: string;
    cancelText?: string;
    variant?: 'default' | 'destructive';

    loading?: boolean;
}

export function ConfirmDialog({
    open,
    onOpenChange,
    onConfirm,
    onCancel,
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'default',
    loading = false,
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
            icon={<CircleCheck className="h-4 w-4" />}
            iconVariant={variant === 'destructive' ? 'error' : 'default'}
            title={title}
            description={description}
            footer={
                <>
                    <Button variant="outline" onClick={handleCancel} disabled={loading}>
                        {cancelText}
                    </Button>
                    <Button
                        variant={variant === 'destructive' ? 'destructive' : 'default'}
                        onClick={handleConfirm}
                        disabled={loading}
                    >
                        {loading && <Spinner className="mr-2 h-3 w-3" />}
                        {confirmText}
                    </Button>
                </>
            }
        />
    );
}
