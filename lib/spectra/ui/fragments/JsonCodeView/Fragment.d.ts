import { PathSegment } from './parts/PathBreadcrumb';
export interface JsonCodeViewProps {
    /** Display filename in footer */
    filename: string;
    /** JSON data to display (parsed object/array) */
    data: unknown;
    /** Label for root in breadcrumb (default: shows "root") */
    rootLabel?: string;
    /** Initial path to open (default: root level) */
    initialPath?: PathSegment[];
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
    /** Custom class name for styling overrides */
    className?: string;
}
export declare function JsonCodeView({ filename, data, rootLabel, initialPath, showFooter, footer, wrapLines, height, width, maxHeight, maxWidth, className, }: JsonCodeViewProps): import("react/jsx-runtime").JSX.Element;
