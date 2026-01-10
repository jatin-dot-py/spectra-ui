import * as React from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogBase, type DialogSize } from './DialogBase';

export interface InfoDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;

    title: string;
    description?: string;
    children?: React.ReactNode;

    dismissText?: string;

    /** Dialog size */
    size?: DialogSize;
}

export function InfoDialog({
    open,
    onOpenChange,
    title,
    description,
    children,
    dismissText = 'Got it',
    size,
}: InfoDialogProps) {
    const handleDismiss = () => {
        onOpenChange(false);
    };

    return (
        <DialogBase
            open={open}
            onOpenChange={onOpenChange}
            icon={<Info className="h-4 w-4" />}
            iconVariant="info"
            title={title}
            description={description}
            size={size}
            footer={
                <Button variant="default" onClick={handleDismiss}>
                    {dismissText}
                </Button>
            }
        >
            {children}
        </DialogBase>
    );
}
