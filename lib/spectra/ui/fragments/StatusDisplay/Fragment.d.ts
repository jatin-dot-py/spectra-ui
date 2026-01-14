import { SpectraIconType } from '../../../types';
export interface StatusDisplayProps {
    /** Visual style variant */
    variant: 'success' | 'warning' | 'destructive' | 'neutral';
    /** Icon to display */
    icon: SpectraIconType;
    /** Main status title */
    title: string;
    /** Optional detailed description */
    description?: string;
    /** Optional CTA link text (e.g., "Learn more") */
    ctaText?: string;
    /** Optional CTA click handler */
    ctaOnClick?: () => void;
    /** Optional className */
    className?: string;
}
export declare function StatusDisplay({ variant, icon: Icon, title, description, ctaText, ctaOnClick, className, }: StatusDisplayProps): import("react/jsx-runtime").JSX.Element;
