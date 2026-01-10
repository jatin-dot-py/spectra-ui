import * as React from 'react';
export type DialogSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export interface DialogBaseProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    icon?: React.ReactNode;
    iconVariant?: 'default' | 'warning' | 'error' | 'info';
    title: string;
    description?: string;
    children?: React.ReactNode;
    footer: React.ReactNode;
    /** Dialog size - controls max width */
    size?: DialogSize;
}
export declare function DialogBase({ open, onOpenChange, icon, iconVariant, title, description, children, footer, size, }: DialogBaseProps): import("react/jsx-runtime").JSX.Element;
