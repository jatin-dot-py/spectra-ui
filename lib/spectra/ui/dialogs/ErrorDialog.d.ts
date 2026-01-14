import { DialogSize } from './DialogBase';
export interface ErrorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRetry?: () => void;
    onDismiss?: () => void;
    title?: string;
    description?: string;
    /** Technical error details (shown in collapsible section) */
    error?: string;
    retryText?: string;
    dismissText?: string;
    showRetry?: boolean;
    /** Dialog size */
    size?: DialogSize;
}
export declare function ErrorDialog({ open, onOpenChange, onRetry, onDismiss, title, description, error, retryText, dismissText, showRetry, size, }: ErrorDialogProps): import("react/jsx-runtime").JSX.Element;
