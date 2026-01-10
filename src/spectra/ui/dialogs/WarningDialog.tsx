import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogBase, type DialogSize } from './DialogBase';

export interface WarningDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onProceed: () => void;
    onCancel?: () => void;

    title: string;
    description?: string;
    details?: string[];

    proceedText?: string;
    cancelText?: string;

    /** Dialog size */
    size?: DialogSize;
}

export function WarningDialog({
    open,
    onOpenChange,
    onProceed,
    onCancel,
    title,
    description,
    details,
    proceedText = 'Proceed Anyway',
    cancelText = 'Go Back',
    size,
}: WarningDialogProps) {
    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen && onCancel) {
            onCancel();
        }
        onOpenChange(newOpen);
    };

    const handleProceed = () => {
        onProceed();
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
            icon={<AlertTriangle className="h-4 w-4" />}
            iconVariant="warning"
            title={title}
            description={description}
            size={size}
            footer={
                <>
                    <Button variant="outline" onClick={handleCancel}>
                        {cancelText}
                    </Button>
                    <Button variant="default" onClick={handleProceed}>
                        {proceedText}
                    </Button>
                </>
            }
        >
            {details && details.length > 0 && (
                <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            )}
        </DialogBase>
    );
}
