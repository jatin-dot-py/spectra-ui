export interface FileCodeViewProps {
    filename: string;
    content: string;
    mimeType?: string;
    showLineNumbers?: boolean;
    showFooter?: boolean;
    footer?: {
        left?: string;
        right?: string;
    };
    wrapLines?: boolean;
    /** Exact height of the container */
    height?: string;
    /** Exact width of the container */
    width?: string;
    /** Maximum height of the container */
    maxHeight?: string;
    /** Maximum width of the container */
    maxWidth?: string;
    /** Custom class name for styling overrides */
    className?: string;
}
export declare function FileCodeView({ filename, content, mimeType, showLineNumbers, showFooter, footer, wrapLines, height, width, maxHeight, maxWidth, className, }: FileCodeViewProps): import("react/jsx-runtime").JSX.Element;
