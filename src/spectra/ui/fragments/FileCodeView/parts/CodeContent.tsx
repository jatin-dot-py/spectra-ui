import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Maximum characters before syntax highlighting is disabled (50KB)
export const MAX_HIGHLIGHT_CHARS = 50000;

interface CodeContentProps {
    content: string;
    language: string;
    showLineNumbers: boolean;
}

export function CodeContent({ content, language, showLineNumbers }: CodeContentProps) {
    // Check if dark mode by looking at document class
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

    // Check if content exceeds limit
    const isTooBig = content.length > MAX_HIGHLIGHT_CHARS;

    // Render plain text for large files
    if (isTooBig) {
        return (
            <div
                className="text-xs font-mono p-3"
                style={{ background: 'hsl(var(--muted))' }}
            >
                <div className="text-muted-foreground text-[10px] uppercase mb-2 pb-2 border-b border-border">
                    Syntax highlighting disabled ({Math.round(content.length / 1000)}KB)
                </div>
                <pre className="whitespace-pre-wrap break-words text-foreground">
                    {content}
                </pre>
            </div>
        );
    }

    return (
        <SyntaxHighlighter
            language={language}
            style={isDark ? oneDark : oneLight}
            showLineNumbers={showLineNumbers}
            customStyle={{
                margin: 0,
                padding: '12px',
                background: 'hsl(var(--muted))',
                minWidth: 'max-content',
            }}
            codeTagProps={{
                className: 'text-xs font-mono',
            }}
            lineNumberStyle={{
                minWidth: '2.5em',
                paddingRight: '1em',
                color: 'hsl(var(--muted-foreground))',
                userSelect: 'none',
            }}
        >
            {content}
        </SyntaxHighlighter>
    );
}
