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
    /** Show footer bar (default: true) */
    showFooter?: boolean;
    /** Custom footer text */
    footer?: { left?: string; right?: string };
    /** Maximum height of the container */
    maxHeight?: string;
    /** Maximum width of the container */
    maxWidth?: string;
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

export function JsonCodeView({
    filename,
    data,
    rootLabel,
    showFooter = true,
    footer,
    maxHeight,
    maxWidth,
}: JsonCodeViewProps) {
    const [path, setPath] = useState<PathSegment[]>([]);
    const [pathCopied, setPathCopied] = useState(false);

    // Get current value at path
    const currentValue = useMemo(() => getValueAtPath(data, path), [data, path]);

    // Format as JSON string
    const jsonString = useMemo(() => {
        try {
            return JSON.stringify(currentValue, null, 2);
        } catch {
            return String(currentValue ?? 'undefined');
        }
    }, [currentValue]);

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
            className="flex flex-col bg-background overflow-hidden"
            style={{ maxHeight, maxWidth, height: '100%' }}
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

            {/* JSON code view */}
            <div className="flex-1 min-h-0 overflow-hidden">
                <FileCodeView
                    filename={filename}
                    content={jsonString}
                    mimeType="application/json"
                    showLineNumbers={true}
                    showFooter={showFooter}
                    footer={footer}
                    maxHeight="100%"
                />
            </div>
        </div>
    );
}
