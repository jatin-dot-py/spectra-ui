export interface HtmlCodeViewProps {
    /** The HTML content to display */
    content: string;
    /** Filename for the footer (default: 'index.html') */
    filename?: string;
    /** Initial view mode (default: 'code') */
    initialMode?: 'code' | 'preview';
    /** Custom class name for styling overrides */
    className?: string;
    /** Show footer bar (default: true) */
    showFooter?: boolean;
    /** Custom footer text */
    footer?: {
        left?: string;
        right?: string;
    };
    /** Wrap long lines instead of horizontal scroll (default: false) */
    wrapLines?: boolean;
    /** Exact height of the container */
    height?: string;
    /** Exact width of the container */
    width?: string;
    /** Maximum height of the container */
    maxHeight?: string;
    /** Maximum width of the container */
    maxWidth?: string;
}
export declare function HtmlCodeView({ content, filename, initialMode, className, showFooter, footer, wrapLines, height, width, maxHeight, maxWidth, }: HtmlCodeViewProps): import("react/jsx-runtime").JSX.Element;
