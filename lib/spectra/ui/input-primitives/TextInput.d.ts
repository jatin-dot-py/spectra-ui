import { InputHTMLAttributes } from 'react';
export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    /** Current value */
    value: string;
    /** Called when value changes — receives clean string, not event */
    onChange: (value: string) => void;
    /** Optional suggestions for autocomplete dropdown */
    suggestions?: string[];
    /** Disable focus ring */
    noRing?: boolean;
    /** Frozen state - click to thaw and enable editing (like Candy Crush ice blocks) */
    frozen?: boolean;
}
export declare function TextInput({ value, onChange, suggestions, noRing, frozen, className, ...props }: TextInputProps): import("react/jsx-runtime").JSX.Element;
