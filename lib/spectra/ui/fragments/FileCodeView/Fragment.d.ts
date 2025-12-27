export interface FileCodeViewProps {
    /** Filename (used for language detection if no mimeType provided) */
    filename: string;
    /** File content to display */
    content: string;
    /** MIME type / Content-Type header (takes priority over filename for language detection) */
    mimeType?: string;
    /** Whether to show line numbers */
    showLineNumbers?: boolean;
    /** Show footer (default: true) */
    showFooter?: boolean;
    /** Optional footer content override */
    footer?: {
        left?: string;
        right?: string;
    };
}
export declare function FileCodeView({ filename, content, mimeType, showLineNumbers, showFooter, footer, }: FileCodeViewProps): import("react/jsx-runtime").JSX.Element;
