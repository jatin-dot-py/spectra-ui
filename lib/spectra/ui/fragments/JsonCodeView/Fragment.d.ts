export interface JsonCodeViewProps {
    /** Display filename in footer */
    filename: string;
    /** JSON data to display (parsed object/array) */
    data: unknown;
    /** Label for root in breadcrumb (default: shows "root") */
    rootLabel?: string;
    /** Show footer bar (default: true) */
    showFooter?: boolean;
    /** Custom footer text */
    footer?: {
        left?: string;
        right?: string;
    };
    /** Maximum height of the container */
    maxHeight?: string;
    /** Maximum width of the container */
    maxWidth?: string;
}
export declare function JsonCodeView({ filename, data, rootLabel, showFooter, footer, maxHeight, maxWidth, }: JsonCodeViewProps): import("react/jsx-runtime").JSX.Element;
