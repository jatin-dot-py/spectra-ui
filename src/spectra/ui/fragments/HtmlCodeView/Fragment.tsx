import { useState, useMemo } from 'react';
import { FileCodeView } from '../FileCodeView';

export interface HtmlCodeViewProps {
    /** The HTML content to display */
    content: string;
    /** Filename for the footer (default: 'index.html') */
    filename?: string;
    /** Initial view mode (default: 'code') */
    initialMode?: 'code' | 'preview';
    /** Custom class name for styling overrides */
    className?: string;
    /** Show footer bar (default: true) */
    showFooter?: boolean;
    /** Custom footer text */
    footer?: { left?: string; right?: string };
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
}

/** Calculate container height based on content line count */
function calculateAutoHeight(content: string): number {
    const lineCount = content.split('\n').length;
    const lineHeight = 19; // Monaco default line height
    const headerHeight = 36; // Header tabs height
    const footerHeight = 28;
    const padding = 16;
    const minHeight = 150;
    const maxHeight = 500;

    const contentHeight = lineCount * lineHeight + headerHeight + footerHeight + padding;
    return Math.max(minHeight, Math.min(contentHeight, maxHeight));
}

export function HtmlCodeView({
    content,
    filename = 'index.html',
    initialMode = 'code',
    className,
    showFooter = true,
    footer,
    wrapLines = false,
    height,
    width,
    maxHeight,
    maxWidth,
}: HtmlCodeViewProps) {
    const [mode, setMode] = useState<'code' | 'preview'>(initialMode);

    // Auto-calculate height when not provided
    const autoHeight = useMemo(() => calculateAutoHeight(content), [content]);
    const containerHeight = height || `${autoHeight}px`;

    return (
        <div
            className={`flex flex-col bg-background border border-border rounded-md ${className || ''}`}
            style={{ height: containerHeight, width, maxHeight, maxWidth }}
        >
            {/* Header / Tabs */}
            <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-sm flex-shrink-0">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMode('code')}
                        className={
                            mode === 'code'
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                        }
                    >
                        Code
                    </button>

                    <button
                        onClick={() => setMode('preview')}
                        className={
                            mode === 'preview'
                                ? 'text-foreground font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                        }
                    >
                        Preview
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-h-0">
                {mode === 'code' ? (
                    <FileCodeView
                        filename={filename}
                        content={content}
                        mimeType="text/html"
                        showLineNumbers={true}
                        showFooter={showFooter}
                        footer={footer}
                        wrapLines={wrapLines}
                        height="100%"
                    />
                ) : (
                    <div className="w-full h-full bg-white">
                        {content ? (
                            <iframe
                                srcDoc={content}
                                title="HTML Preview"
                                className="w-full h-full border-none block"
                                sandbox=""
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                                Empty Preview
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
