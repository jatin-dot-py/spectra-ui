import { DialogSize } from './DialogBase';
import { SpectraIconType } from '../../types';
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
    /** Disable the confirm button (e.g., for form validation) */
    confirmDisabled?: boolean;
    /** Dialog size */
    size?: DialogSize;
    /** Custom icon - defaults to CircleCheck */
    icon?: SpectraIconType;
}
export declare function ConfirmDialog({ open, onOpenChange, onConfirm, onCancel, title, description, children, confirmText, cancelText, variant, loading, confirmDisabled, size, icon: Icon, }: ConfirmDialogProps): import("react/jsx-runtime").JSX.Element;
