import { useState } from 'react';
import { Copy, Check, Braces } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

export interface KeyValuePairTableProps {
    /** Key-value data to display */
    data: Record<string, string>;
    /** Label for the key column (default: "Name") */
    keyLabel?: string;
    /** Label for the value column (default: "Value") */
    valueLabel?: string;
    /** Show copy button in table header (default: false) */
    showCopy?: boolean;
    /** Show copy-as-JSON button in table header (default: false) */
    /** Show copy-as-JSON button in table header (default: false) */
    showCopyJson?: boolean;
    /** Hide the table header entirely (default: false) */
    hideHeader?: boolean;
}

export function KeyValuePairTable({
    data,
    keyLabel = 'Name',
    valueLabel = 'Value',
    showCopy = false,
    showCopyJson = false,
    hideHeader = false,
}: KeyValuePairTableProps) {
    const entries = Object.entries(data ?? {});
    const [expandedKey, setExpandedKey] = useState<string | null>(null);
    const [copied, setCopied] = useState<'text' | 'json' | null>(null);

    const handleRowClick = (key: string) => {
        setExpandedKey(expandedKey === key ? null : key);
    };

    const handleCopyText = (e: React.MouseEvent) => {
        e.stopPropagation();
        const text = entries.map(([k, v]) => `${k}: ${v}`).join('\n');
        navigator.clipboard.writeText(text);
        setCopied('text');
        setTimeout(() => setCopied(null), 2000);
    };

    const handleCopyJson = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        setCopied('json');
        setTimeout(() => setCopied(null), 2000);
    };

    const showActions = showCopy || showCopyJson;

    // If copy options are on, distinct labels are suppressed
    const displayKeyLabel = showActions ? '' : keyLabel;
    const displayValueLabel = showActions ? '' : valueLabel;

    return (
        <div className="rounded border border-border overflow-hidden">
            <Table className="table-fixed w-full">
                {!hideHeader && (
                    <TableHeader>
                        <TableRow className="bg-muted/30">
                            <TableHead className="w-[180px] text-xs font-medium">{displayKeyLabel}</TableHead>
                            <TableHead className="text-xs font-medium">
                                <div className="flex items-center justify-between">
                                    <span>{displayValueLabel}</span>
                                    {showActions && (
                                        <div className="flex items-center gap-1">
                                            {showCopy && (
                                                <button
                                                    onClick={handleCopyText}
                                                    className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                                    title="Copy as text"
                                                >
                                                    {copied === 'text' ? (
                                                        <Check className="h-3.5 w-3.5 text-green-500" />
                                                    ) : (
                                                        <Copy className="h-3.5 w-3.5" />
                                                    )}
                                                </button>
                                            )}
                                            {showCopyJson && (
                                                <button
                                                    onClick={handleCopyJson}
                                                    className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                                    title="Copy as JSON"
                                                >
                                                    {copied === 'json' ? (
                                                        <Check className="h-3.5 w-3.5 text-green-500" />
                                                    ) : (
                                                        <Braces className="h-3.5 w-3.5" />
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                )}
                <TableBody>
                    {entries.map(([key, value]) => {
                        const isExpanded = expandedKey === key;
                        return (
                            <TableRow
                                key={key}
                                onClick={() => handleRowClick(key)}
                                className={cn(
                                    "cursor-pointer transition-colors hover:bg-muted/50",
                                    isExpanded && "bg-muted/30"
                                )}
                            >
                                <TableCell
                                    className={cn(
                                        "font-mono text-xs py-2 text-muted-foreground align-top",
                                        isExpanded
                                            ? "whitespace-pre-wrap break-all"
                                            : "truncate"
                                    )}
                                >
                                    {key}
                                </TableCell>
                                <TableCell
                                    className={cn(
                                        "font-mono text-xs py-2",
                                        isExpanded
                                            ? "whitespace-pre-wrap break-all"
                                            : "truncate"
                                    )}
                                >
                                    {value}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
