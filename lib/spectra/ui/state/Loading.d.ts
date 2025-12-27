export interface LoadingProps {
    /** Loading variant type */
    variant?: 'spinner' | 'input' | 'text' | 'card' | 'custom';
    /** Number of lines for 'text' variant (default: 3) */
    lines?: number;
    /** Optional title for 'spinner' variant */
    title?: string;
    /** Custom className for sizing (primarily for 'custom' variant) */
    className?: string;
}
export declare function Loading({ variant, lines, title, className, }: LoadingProps): import("react/jsx-runtime").JSX.Element;
