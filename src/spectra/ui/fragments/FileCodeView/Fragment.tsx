import { useState, useMemo } from 'react';
import { Check, Copy } from 'lucide-react';
import { getExtensionInfo, getInfoFromMimeType } from '../../../utils/fileExtensions';
import { CodeContent, MAX_HIGHLIGHT_CHARS } from './parts/CodeContent';

export interface FileCodeViewProps {
    filename: string;
    content: string;
    mimeType?: string;
    showLineNumbers?: boolean;
    showFooter?: boolean;
    footer?: { left?: string; right?: string };
    wrapLines?: boolean;
    /** Exact height of the container */
    height?: string;
    /** Exact width of the container */
    width?: string;
    /** Maximum height of the container */
    maxHeight?: string;
    /** Maximum width of the container */
    maxWidth?: string;
    /** Custom class name for styling overrides */
    className?: string;
}

function tryPrettifyJson(content: string): { content: string; isJson: boolean } {
    if (content.length > MAX_HIGHLIGHT_CHARS) return { content, isJson: false };
    try {
        return { content: JSON.stringify(JSON.parse(content), null, 2), isJson: true };
    } catch {
        return { content, isJson: false };
    }
}

export function FileCodeView({
    filename,
    content,
    mimeType,
    showLineNumbers = true,
    showFooter = true,
    footer,
    wrapLines = false,
    height,
    width,
    maxHeight,
    maxWidth,
    className,
}: FileCodeViewProps) {
    const [copied, setCopied] = useState(false);

    const extensionInfo = getExtensionInfo(filename);
    const mimeInfo = mimeType ? getInfoFromMimeType(mimeType) : null;
    const language = mimeInfo?.language ?? extensionInfo.language;
    const label = mimeInfo?.label ?? extensionInfo.label;

    const { content: displayContent, isJson } = useMemo(() => tryPrettifyJson(content), [content]);
    const finalLanguage = isJson ? 'json' : language;

    const handleCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const footerLeft = footer?.left ?? filename;
    const footerRight = footer?.right ?? (isJson ? 'JSON' : label);

    return (
        <div
            className={`relative bg-background group ${className || ''}`}
            style={{ height: height || '100%', width, maxHeight, maxWidth, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
            {/* Copy button - top right corner */}
            <button
                onClick={handleCopy}
                className="absolute top-2 right-3 z-10 p-1.5 rounded bg-muted/90 hover:bg-muted text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </button>

            {/* Scrollable code area */}
            <div style={{ flex: 1, minHeight: 0, overflow: wrapLines ? 'hidden auto' : 'auto' }}>
                <CodeContent
                    content={displayContent}
                    language={finalLanguage}
                    showLineNumbers={showLineNumbers}
                    wrapLines={wrapLines}
                />
            </div>

            {/* Footer */}
            {showFooter && (
                <div className="flex items-center justify-between gap-4 px-3 py-1 border-t border-border bg-muted/20 text-xs text-muted-foreground" style={{ flexShrink: 0 }}>
                    <span className="truncate" title={footerLeft}>{footerLeft}</span>
                    <span className="uppercase" style={{ flexShrink: 0 }}>{footerRight}</span>
                </div>
            )}
        </div>
    );
}
