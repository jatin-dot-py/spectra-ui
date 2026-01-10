import { DialogSize } from './DialogBase';
import * as React from 'react';
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
export declare function InfoDialog({ open, onOpenChange, title, description, children, dismissText, size, }: InfoDialogProps): import("react/jsx-runtime").JSX.Element;
