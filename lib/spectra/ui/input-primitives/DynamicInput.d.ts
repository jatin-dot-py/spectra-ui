export type ValueType = 'null' | 'string' | 'number' | 'boolean' | 'object';
export type DynamicValue = null | string | number | boolean | Record<string, unknown>;
export interface DynamicInputProps {
    /** Current value */
    value: DynamicValue;
    /** Called when value changes */
    onChange: (value: DynamicValue) => void;
    /** Restrict which types are selectable */
    allowedTypes?: ValueType[];
    /** Disabled state */
    disabled?: boolean;
}
export declare function DynamicInput({ value, onChange, allowedTypes, disabled, }: DynamicInputProps): import("react/jsx-runtime").JSX.Element;
