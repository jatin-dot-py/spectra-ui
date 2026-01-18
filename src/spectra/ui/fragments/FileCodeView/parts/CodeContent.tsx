import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';

export const MAX_HIGHLIGHT_CHARS = 500000;

interface CodeContentProps {
    content: string;
    language: string;
    showLineNumbers: boolean;
    wrapLines?: boolean;
}

function getMonacoLanguage(language: string): string {
    const languageMap: Record<string, string> = {
        'js': 'javascript',
        'jsx': 'javascript',
        'ts': 'typescript',
        'tsx': 'typescript',
        'py': 'python',
        'rb': 'ruby',
        'yml': 'yaml',
        'md': 'markdown',
        'sh': 'shell',
        'bash': 'shell',
        'zsh': 'shell',
        'txt': 'plaintext',
        'text': 'plaintext',
        'plain': 'plaintext',
    };
    return languageMap[language.toLowerCase()] || language.toLowerCase();
}

export function CodeContent({ content, language, showLineNumbers, wrapLines = false }: CodeContentProps) {
    const [isDark, setIsDark] = useState(() =>
        typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        const checkDarkMode = () => setIsDark(document.documentElement.classList.contains('dark'));
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Editor
                height="100%"
                defaultLanguage={getMonacoLanguage(language)}
                value={content}
                theme={isDark ? 'vs-dark' : 'light'}
                options={{
                    cursorBlinking: 'smooth',
                    find: {
                        cursorMoveOnType: true,
                        seedSearchStringFromSelection: "always",
                        autoFindInSelection: "never",
                        addExtraSpaceOnTop: true,
                        loop: true
                    },
                    hover: {
                        enabled: true,
                        above: true,
                    },
                    readOnly: true,
                    lineNumbers: showLineNumbers ? 'on' : 'off',
                    wordWrap: wrapLines ? 'on' : 'off',
                    minimap: { enabled: false },
                    scrollBeyondLastLine: true,
                }}
            />
        </div>
    );
}
