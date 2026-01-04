import { ReactNode } from 'react';
import { SpectraIconType } from '../../types';
export interface LabeledInputProps {
    label: string;
    icon?: SpectraIconType;
    children: ReactNode;
    helpText?: string;
    helpUrl?: string;
    /** Error message - shows destructive styling */
    error?: string;
    /** Warning message - shows warning styling (lower priority than error) */
    warning?: string;
}
export declare function LabeledInput({ label, icon: Icon, children, helpText, helpUrl, error, warning, }: LabeledInputProps): import("react/jsx-runtime").JSX.Element;
