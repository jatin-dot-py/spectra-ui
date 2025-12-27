import * as React from 'react';
export interface InfoDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
    dismissText?: string;
}
export declare function InfoDialog({ open, onOpenChange, title, description, children, dismissText, }: InfoDialogProps): import("react/jsx-runtime").JSX.Element;
