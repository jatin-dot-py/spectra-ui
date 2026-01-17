export interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    /** Minimum value. If undefined, no lower bound is enforced. */
    min?: number;
    /** Maximum value. If undefined, no upper bound is enforced. */
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
    /** Display variant. Note: 'slider' requires both min and max to be defined. */
    variant?: 'stepper' | 'slider';
}
export declare function NumberInput({ value, onChange, min, max, step, disabled, className, variant, }: NumberInputProps): import("react/jsx-runtime").JSX.Element;
