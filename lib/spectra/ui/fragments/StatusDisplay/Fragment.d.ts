import { SpectraIconType } from '../../../types';
export interface StatusDisplayProps {
    /** Visual style variant */
    variant: 'success' | 'warning' | 'destructive';
    /** Icon to display */
    icon: SpectraIconType;
    /** Main status title */
    title: string;
    /** Optional detailed description */
    description?: string;
    /** Optional className */
    className?: string;
}
export declare function StatusDisplay({ variant, icon: Icon, title, description, className, }: StatusDisplayProps): import("react/jsx-runtime").JSX.Element;
