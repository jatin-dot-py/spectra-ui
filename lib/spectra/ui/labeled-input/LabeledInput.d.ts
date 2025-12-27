import { ReactNode } from 'react';
import { SpectraIconType } from '../../types';
export interface LabeledInputProps {
    label: string;
    icon?: SpectraIconType;
    children: ReactNode;
    helpText?: string;
    helpUrl?: string;
}
export declare function LabeledInput({ label, icon: Icon, children, helpText, helpUrl, }: LabeledInputProps): import("react/jsx-runtime").JSX.Element;
