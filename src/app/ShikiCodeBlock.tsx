'use client';

import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

interface ShikiCodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

/**
 * Simple Shiki-based code highlighter for showcase/examples only.
 * This is a dev-only component - not included in the library build.
 */
export function ShikiCodeBlock({
    code,
    language = 'tsx',
    showLineNumbers = true,
}: ShikiCodeBlockProps) {
    const [html, setHtml] = useState<string>('');
    const [isDark, setIsDark] = useState(false);

    // Detect theme
    useEffect(() => {
        const checkDarkMode = () => setIsDark(document.documentElement.classList.contains('dark'));
        checkDarkMode();
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    // Highlight code with Shiki
    useEffect(() => {
        let cancelled = false;

        codeToHtml(code, {
            lang: language,
            theme: isDark ? 'github-dark' : 'github-light',
        }).then((result) => {
            if (!cancelled) setHtml(result);
        }).catch(() => {
            // Fallback to plain text on error
            if (!cancelled) setHtml(`<pre><code>${code}</code></pre>`);
        });

        return () => { cancelled = true; };
    }, [code, language, isDark]);

    if (!html) {
        // Loading state - show plain code
        return (
            <div className="bg-muted/50 p-4 rounded-md overflow-auto">
                <pre className="text-xs font-mono whitespace-pre">{code}</pre>
            </div>
        );
    }

    return (
        <div
            className="shiki-code-block overflow-auto text-xs [&_pre]:p-4 [&_pre]:m-0 [&_pre]:bg-transparent [&_code]:font-mono"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
