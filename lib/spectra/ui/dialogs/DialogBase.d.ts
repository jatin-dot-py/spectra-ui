import * as React from 'react';
export interface DialogBaseProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    icon?: React.ReactNode;
    iconVariant?: 'default' | 'warning' | 'error' | 'info';
    title: string;
    description?: string;
    children?: React.ReactNode;
    footer: React.ReactNode;
}
export declare function DialogBase({ open, onOpenChange, icon, iconVariant, title, description, children, footer, }: DialogBaseProps): import("react/jsx-runtime").JSX.Element;
