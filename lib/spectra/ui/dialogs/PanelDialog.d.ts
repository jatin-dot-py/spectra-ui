import { SpectraIconType } from '../../types';
import * as React from 'react';
export interface PanelDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** Panel title */
    title: string;
    /** Optional description below title */
    description?: string;
    /** Optional icon */
    icon?: SpectraIconType;
    /** Content to render in the scrollable area */
    children: React.ReactNode;
}
export declare function PanelDialog({ open, onOpenChange, title, description, icon: Icon, children, }: PanelDialogProps): import("react/jsx-runtime").JSX.Element;
