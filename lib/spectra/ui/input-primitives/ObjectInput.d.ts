export interface ObjectInputProps {
    /** Current JSON value (object or string) */
    value: unknown;
    /** Called when value is saved */
    onChange: (value: unknown) => void;
    /** Label shown in trigger button and dialog header */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
}
export declare function ObjectInput({ value, onChange, label, disabled, }: ObjectInputProps): import("react/jsx-runtime").JSX.Element;
