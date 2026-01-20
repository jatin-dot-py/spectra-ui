import { useState, useMemo, useCallback } from 'react';
import { FileCodeView } from '../FileCodeView';
import { PathBreadcrumb, type PathSegment } from './parts/PathBreadcrumb';

export interface JsonCodeViewProps {
    /** Display filename in footer */
    filename: string;
    /** JSON data to display (parsed object/array) */
    data: unknown;
    /** Label for root in breadcrumb (default: shows "root") */
    rootLabel?: string;
    /** Initial path to open (default: root level) */
    initialPath?: PathSegment[];
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
    /** Custom class name for styling overrides */
    className?: string;
}

/** Get value at a path in JSON data */
function getValueAtPath(data: unknown, path: PathSegment[]): unknown {
    let current = data;
    for (const key of path) {
        if (current === null || current === undefined) return undefined;
        if (typeof current !== 'object') return undefined;
        current = (current as Record<string, unknown>)[key];
    }
    return current;
}

/** Format path as array string for copy
 * - If rootLabel provided: ["rootLabel", "items", 1]
 * - If no rootLabel: ["items", 1]
 */
function formatPathForCopy(path: PathSegment[], rootLabel?: string): string {
    const segments: (string | number)[] = rootLabel ? [rootLabel, ...path] : [...path];
    if (segments.length === 0) return '[]';
    const formatted = segments.map(seg => typeof seg === 'number' ? String(seg) : `"${seg}"`);
    return `[${formatted.join(', ')}]`;
}

/** Calculate container height based on content */
function calculateAutoHeight(content: string): number {
    const lineCount = content.split('\n').length;
    const lineHeight = 19; // Monaco default line height
    const breadcrumbHeight = 40; // Breadcrumb bar height
    const footerHeight = 28;
    const padding = 16;
    const minHeight = 150;
    const maxHeight = 500;

    const contentHeight = lineCount * lineHeight + breadcrumbHeight + footerHeight + padding;
    return Math.max(minHeight, Math.min(contentHeight, maxHeight));
}

export function JsonCodeView({
    filename,
    data,
    rootLabel,
    initialPath,
    showFooter = true,
    footer,
    wrapLines = false,
    height,
    width,
    maxHeight,
    maxWidth,
    className,
}: JsonCodeViewProps) {
    const [path, setPath] = useState<PathSegment[]>(initialPath ?? []);
    const [pathCopied, setPathCopied] = useState(false);

    // Get current value at path
    const currentValue = useMemo(() => getValueAtPath(data, path), [data, path]);

    // Determine if current value is a primitive string (show as plain text)
    const isString = typeof currentValue === 'string';

    // Format content and determine MIME type
    const { displayContent, mimeType } = useMemo(() => {
        if (isString) {
            // For strings: show raw content with text/plain (no JSON encoding)
            return { displayContent: currentValue as string, mimeType: 'text/plain' };
        }
        // For objects/arrays/primitives: show as formatted JSON
        try {
            return { displayContent: JSON.stringify(currentValue, null, 2), mimeType: 'application/json' };
        } catch {
            return { displayContent: String(currentValue ?? 'undefined'), mimeType: 'text/plain' };
        }
    }, [currentValue, isString]);

    // Auto-calculate height when not provided
    const autoHeight = useMemo(() => calculateAutoHeight(displayContent), [displayContent]);
    const containerHeight = height || `${autoHeight}px`;

    // Path change handler
    const handlePathChange = useCallback((newPath: PathSegment[]) => {
        setPath(newPath);
    }, []);

    // Copy path handler - include rootLabel if provided
    const handleCopyPath = useCallback(() => {
        navigator.clipboard.writeText(formatPathForCopy(path, rootLabel));
        setPathCopied(true);
        setTimeout(() => setPathCopied(false), 2000);
    }, [path, rootLabel]);

    return (
        <div
            className={`flex flex-col bg-background ${className || ''}`}
            style={{ height: containerHeight, width, maxHeight, maxWidth }}
        >
            {/* Path breadcrumb with copy button */}
            <div className="border-b border-border flex-shrink-0">
                <PathBreadcrumb
                    data={data}
                    path={path}
                    rootLabel={rootLabel}
                    onPathChange={handlePathChange}
                    onCopyPath={handleCopyPath}
                    pathCopied={pathCopied}
                />
            </div>

            {/* Code view - JSON or plain text depending on value type */}
            <div className="flex-1 min-h-0">
                <FileCodeView
                    filename={filename}
                    content={displayContent}
                    mimeType={mimeType}
                    showLineNumbers={true}
                    showFooter={showFooter}
                    footer={footer}
                    wrapLines={wrapLines}
                    height="100%"
                />
            </div>
        </div>
    );
}
