import { SpectraIconType } from '../../types';
import * as React from 'react';
export interface PanelDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    icon?: SpectraIconType;
    children: React.ReactNode;
}
export declare function PanelDialog({ open, onOpenChange, title, description, icon: Icon, children, }: PanelDialogProps): import("react/jsx-runtime").JSX.Element;
