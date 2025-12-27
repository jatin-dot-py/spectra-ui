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
    maxHeight?: string;
    maxWidth?: string;
}
export declare function FileCodeView({ filename, content, mimeType, showLineNumbers, showFooter, footer, wrapLines, maxHeight, maxWidth, }: FileCodeViewProps): import("react/jsx-runtime").JSX.Element;
