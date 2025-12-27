import { TextareaHTMLAttributes } from 'react';
export interface TextAreaInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
    /** Current value */
    value: string;
    /** Called when value changes — receives clean string, not event */
    onChange: (value: string) => void;
    /** Optional suggestions for autocomplete dropdown */
    suggestions?: string[];
    /** Disable focus ring */
    noRing?: boolean;
    /** Disable resize handle */
    noResize?: boolean;
    /** Auto-grow height based on content (default: true) */
    autoGrow?: boolean;
}
export declare function TextAreaInput({ value, onChange, suggestions, noRing, noResize, autoGrow, className, ...props }: TextAreaInputProps): import("react/jsx-runtime").JSX.Element;
