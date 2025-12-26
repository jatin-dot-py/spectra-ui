import * as React from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DialogBase } from './DialogBase';

export interface InfoDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;

    title: string;
    description?: string;
    children?: React.ReactNode;

    dismissText?: string;
}

export function InfoDialog({
    open,
    onOpenChange,
    title,
    description,
    children,
    dismissText = 'Got it',
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
