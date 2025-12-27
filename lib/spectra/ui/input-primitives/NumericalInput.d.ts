export interface NumericalInputProps {
    /** Current value */
    value: number;
    /** Called when value changes */
    onChange: (value: number) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Additional className */
    className?: string;
    /** Display variant */
    variant?: 'input' | 'slider';
    /** Min value (for slider) */
    min?: number;
    /** Max value (for slider) */
    max?: number;
    /** Step value */
    step?: number;
}
export declare function NumericalInput({ value, onChange, placeholder, disabled, className, variant, min, max, step, }: NumericalInputProps): import("react/jsx-runtime").JSX.Element;
