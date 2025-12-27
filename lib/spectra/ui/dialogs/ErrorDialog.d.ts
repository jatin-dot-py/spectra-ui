export interface ErrorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRetry?: () => void;
    onDismiss?: () => void;
    title?: string;
    description?: string;
    error?: Error | string;
    retryText?: string;
    dismissText?: string;
    showRetry?: boolean;
}
export declare function ErrorDialog({ open, onOpenChange, onRetry, onDismiss, title, description, error, retryText, dismissText, showRetry, }: ErrorDialogProps): import("react/jsx-runtime").JSX.Element;
