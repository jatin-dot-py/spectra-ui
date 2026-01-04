export interface PythonInputProps {
    /** Current Python code value */
    value: string;
    /** Called when value is saved */
    onChange: (value: string) => void;
    /** Label shown in trigger button and dialog header */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
    /** List of text suggestions to show in autocomplete */
    suggestions?: string[];
}
export declare function PythonInput({ value, onChange, label, disabled, suggestions, }: PythonInputProps): import("react/jsx-runtime").JSX.Element;
