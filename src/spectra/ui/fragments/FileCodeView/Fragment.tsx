import { useState, useMemo } from 'react';
import { Check, Copy } from 'lucide-react';
import { getExtensionInfo, getInfoFromMimeType } from '../../../utils/fileExtensions';
import { CodeContent, MAX_HIGHLIGHT_CHARS } from './parts/CodeContent';

export interface FileCodeViewProps {
    /** Filename (used for language detection if no mimeType provided) */
    filename: string;
    /** File content to display */
    content: string;
    /** MIME type / Content-Type header (takes priority over filename for language detection) */
    mimeType?: string;
    /** Whether to show line numbers */
    showLineNumbers?: boolean;
    /** Show footer (default: true) */
    showFooter?: boolean;
    /** Optional footer content override */
    footer?: {
        left?: string;
        right?: string;
    };
}

/**
 * Try to prettify JSON if valid and under size limit
 */
function tryPrettifyJson(content: string): { content: string; isJson: boolean } {
    if (content.length > MAX_HIGHLIGHT_CHARS) {
        return { content, isJson: false };
    }

    try {
        const parsed = JSON.parse(content);
        return { content: JSON.stringify(parsed, null, 2), isJson: true };
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
}: FileCodeViewProps) {
    const [copied, setCopied] = useState(false);

    // Use MIME type for language if provided, otherwise fall back to filename
    const extensionInfo = getExtensionInfo(filename);
    const mimeInfo = mimeType ? getInfoFromMimeType(mimeType) : null;

    const detectedLanguage = mimeInfo?.language ?? extensionInfo.language;
    const label = mimeInfo?.label ?? extensionInfo.label;

    // Try to prettify JSON (auto-detect valid JSON)
    const { content: displayContent, isJson } = useMemo(
        () => tryPrettifyJson(content),
        [content]
    );

    // Use json language if we detected valid JSON
    const language = isJson ? 'json' : detectedLanguage;

    const onCopy = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Default footer shows filename on left, language on right
    const footerLeft = footer?.left ?? filename;
    const footerRight = footer?.right ?? (isJson ? 'JSON' : label);

    return (
        <div className="flex flex-col overflow-hidden bg-background">
            {/* Code Content - scrolls both directions with native scrollbars */}
            <div className="flex-1 overflow-auto relative group">
                {/* Copy button */}
                <button
                    onClick={onCopy}
                    className="absolute top-2 right-2 p-1.5 rounded bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                </button>

                <div className="min-w-max">
                    <CodeContent
                        content={displayContent}
                        language={language}
                        showLineNumbers={showLineNumbers}
                    />
                </div>
            </div>

            {/* Footer */}
            {showFooter && (
                <div className="flex items-center justify-between gap-4 px-3 py-1 border-t border-border bg-muted/20 text-xs text-muted-foreground flex-shrink-0">
                    <span className="truncate" title={footerLeft}>{footerLeft}</span>
                    <span className="uppercase flex-shrink-0">{footerRight}</span>
                </div>
            )}
        </div>
    );
}
