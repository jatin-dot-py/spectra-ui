export type PathSegment = string | number;
export interface JsonPathInputProps {
    /** Current path segments */
    value: PathSegment[];
    /** Called when path changes */
    onChange: (value: PathSegment[]) => void;
    /** Placeholder */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Additional className */
    className?: string;
}
export declare function JsonPathInput({ value, onChange, placeholder, disabled, className, }: JsonPathInputProps): import("react/jsx-runtime").JSX.Element;
