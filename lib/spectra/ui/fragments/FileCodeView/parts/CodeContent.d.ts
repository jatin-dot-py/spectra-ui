export declare const MAX_HIGHLIGHT_CHARS = 50000;
interface CodeContentProps {
    content: string;
    language: string;
    showLineNumbers: boolean;
}
export declare function CodeContent({ content, language, showLineNumbers }: CodeContentProps): import("react/jsx-runtime").JSX.Element;
export {};
