export interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
    /** Display variant */
    variant?: 'stepper' | 'slider';
}
export declare function NumberInput({ value, onChange, min, max, step, disabled, className, variant, }: NumberInputProps): import("react/jsx-runtime").JSX.Element;
