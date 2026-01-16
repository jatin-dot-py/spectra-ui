import { useState } from 'react';
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
    /** Exact height of the container */
    height?: string;
    /** Exact width of the container */
    width?: string;
    /** Maximum height of the container */
    maxHeight?: string;
    /** Maximum width of the container */
    maxWidth?: string;
}

export function HtmlCodeView({
    content,
    filename = 'index.html',
    initialMode = 'code',
    className,
    showFooter = true,
    footer,
    height,
    width,
    maxHeight,
    maxWidth,
}: HtmlCodeViewProps) {
    const [mode, setMode] = useState<'code' | 'preview'>(initialMode);

    return (
        <div
            className={`flex flex-col bg-background border border-border rounded-md overflow-hidden ${className || ''}`}
            style={{ height: height || '100%', width, maxHeight, maxWidth }}
        >
            {/* Header / Tabs */}
            <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-sm">
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
                        maxHeight="100%"
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
