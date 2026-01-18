import Editor, { type BeforeMount } from '@monaco-editor/react';
import { useEffect, useState, useCallback } from 'react';

export const MAX_HIGHLIGHT_CHARS = 500000;

interface CodeContentProps {
    content: string;
    language: string;
    showLineNumbers: boolean;
    wrapLines?: boolean;
}

/** Maps common language identifiers to Monaco language IDs */
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
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkDarkMode = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    // Configure Monaco for read-only viewing: disable type libraries and diagnostics
    const handleBeforeMount: BeforeMount = useCallback((monaco) => {
        const diagnosticsOff = {
            noSemanticValidation: true,
            noSyntaxValidation: true,
            noSuggestionDiagnostics: true,
        };
        const compilerOpts = { noLib: true, allowNonTsExtensions: true };

        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(diagnosticsOff);
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions(compilerOpts);
        monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(diagnosticsOff);
        monaco.languages.typescript.javascriptDefaults.setCompilerOptions(compilerOpts);
    }, []);

    return (
        <Editor
            height="100%"
            language={getMonacoLanguage(language)}
            value={content}
            theme={isDark ? 'vs-dark' : 'light'}
            beforeMount={handleBeforeMount}
            options={{
                readOnly: true,
                domReadOnly: true,
                // Appearance
                fontSize: 12,
                fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
                lineNumbers: showLineNumbers ? 'on' : 'off',
                minimap: { enabled: false },
                padding: { top: 8, bottom: 8 },
                scrollBeyondLastLine: false,
                wordWrap: wrapLines ? 'on' : 'off',
                renderLineHighlight: 'none',
                overviewRulerBorder: false,
                overviewRulerLanes: 0,
                hideCursorInOverviewRuler: true,
                glyphMargin: false,
                folding: true,
                lineDecorationsWidth: 8,
                lineNumbersMinChars: 3,
                automaticLayout: true,
                // Scrollbar
                scrollbar: {
                    vertical: 'auto',
                    horizontal: wrapLines ? 'hidden' : 'auto',
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                },
                // Disable IntelliSense features (read-only viewer, no context)
                hover: { enabled: false },
                quickSuggestions: false,
                parameterHints: { enabled: false },
                // Find (Ctrl+F)
                find: {
                    addExtraSpaceOnTop: false,
                    autoFindInSelection: 'never',
                    seedSearchStringFromSelection: 'selection',
                },
            }}
        />
    );
}
