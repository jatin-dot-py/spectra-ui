import { DialogSize } from './DialogBase';
import * as React from 'react';
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
    /** Dialog size */
    size?: DialogSize;
}
export declare function ConfirmDialog({ open, onOpenChange, onConfirm, onCancel, title, description, children, confirmText, cancelText, variant, loading, size, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
