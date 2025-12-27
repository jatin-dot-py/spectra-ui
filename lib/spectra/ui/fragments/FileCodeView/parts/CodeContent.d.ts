export declare const MAX_HIGHLIGHT_CHARS = 15000;
interface CodeContentProps {
    content: string;
    language: string;
    showLineNumbers: boolean;
    wrapLines?: boolean;
}
export declare function CodeContent({ content, language, showLineNumbers, wrapLines }: CodeContentProps): import("react/jsx-runtime").JSX.Element;
export {};
