import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Maximum characters before syntax highlighting is disabled (15KB)
export const MAX_HIGHLIGHT_CHARS = 15000;

interface CodeContentProps {
    content: string;
    language: string;
    showLineNumbers: boolean;
    wrapLines?: boolean;
}

export function CodeContent({ content, language, showLineNumbers, wrapLines = false }: CodeContentProps) {
    const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
    const isTooBig = content.length > MAX_HIGHLIGHT_CHARS;

    if (isTooBig) {
        return (
            <div
                className="text-xs font-mono p-3"
                style={{ background: 'hsl(var(--muted))' }}
            >
                <div className="text-muted-foreground text-[10px] uppercase mb-2 pb-2 border-b border-border">
                    Syntax highlighting disabled ({Math.round(content.length / 1000)}KB)
                </div>
                <pre className={wrapLines ? "whitespace-pre-wrap break-all overflow-x-hidden" : "whitespace-pre"}>
                    {content}
                </pre>
            </div>
        );
    }

    if (wrapLines) {
        return (
            <SyntaxHighlighter
                language={language}
                style={isDark ? oneDark : oneLight}
                showLineNumbers={showLineNumbers}
                wrapLines
                wrapLongLines
                lineProps={{
                    style: {
                        display: 'block',
                        width: '100%',
                    }
                }}
                customStyle={{
                    margin: 0,
                    padding: '12px',
                    background: 'hsl(var(--muted))',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all',
                    overflowWrap: 'break-word',
                }}
                codeTagProps={{
                    className: 'text-xs font-mono',
                    style: {
                        display: 'block',
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-all',
                    }
                }}
                lineNumberStyle={{
                    minWidth: '2.5em',
                    paddingRight: '1em',
                    color: 'hsl(var(--muted-foreground))',
                    userSelect: 'none',
                    display: 'inline-block',
                    textAlign: 'right',
                }}
                lineNumberContainerStyle={{
                    float: 'left',
                    paddingRight: '10px',
                }}
            >
                {content}
            </SyntaxHighlighter>
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
