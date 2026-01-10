import { DialogSize } from './DialogBase';
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
export declare function WarningDialog({ open, onOpenChange, onProceed, onCancel, title, description, details, proceedText, cancelText, size, }: WarningDialogProps): import("react/jsx-runtime").JSX.Element;
