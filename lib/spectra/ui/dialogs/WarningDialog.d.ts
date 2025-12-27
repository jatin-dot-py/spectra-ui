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
}
export declare function WarningDialog({ open, onOpenChange, onProceed, onCancel, title, description, details, proceedText, cancelText, }: WarningDialogProps): import("react/jsx-runtime").JSX.Element;
