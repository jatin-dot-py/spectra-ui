import { useState } from 'react';
import { Copy, Check, FileJson } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ActionButton, ActionButtonGroup } from '@/spectra/ui/actions';

export interface KeyValuePairTableProps {
    /** Key-value data to display (supports mixed value types) */
    data: Record<string, unknown>;
    /** Label for the key column (default: "Name") */
    keyLabel?: string;
    /** Label for the value column (default: "Value") */
    valueLabel?: string;
    /** Show copy button in table header (default: false) */
    showCopy?: boolean;
    /** Show copy-as-JSON button in table header (default: false) */
    showCopyJson?: boolean;
    /** Hide the table header entirely (default: false) */
    hideHeader?: boolean;
}

/** Format value for display */
function formatValue(value: unknown): { display: string; className: string; wrapInCode: boolean } {
    if (value === null) {
        return { display: 'null', className: '', wrapInCode: true };
    }
    if (value === undefined) {
        return { display: 'undefined', className: '', wrapInCode: true };
    }
    if (typeof value === 'boolean') {
        return { display: String(value), className: '', wrapInCode: true };
    }
    if (typeof value === 'number') {
        return { display: String(value), className: '', wrapInCode: true };
    }
    if (typeof value === 'string') {
        if (value === '') {
            return { display: '(empty)', className: 'text-muted-foreground', wrapInCode: false };
        }
        return { display: value, className: '', wrapInCode: false };
    }
    if (Array.isArray(value) || typeof value === 'object') {
        return { display: JSON.stringify(value), className: '', wrapInCode: false };
    }
    return { display: String(value), className: '', wrapInCode: false };
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

    const handleCopyText = () => {
        const text = entries.map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`).join('\n');
        navigator.clipboard.writeText(text);
        setCopied('text');
        setTimeout(() => setCopied(null), 2000);
    };

    const handleCopyJson = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        setCopied('json');
        setTimeout(() => setCopied(null), 2000);
    };

    const showActions = showCopy || showCopyJson;

    return (
        <div className="space-y-2">
            {showActions && (
                <ActionButtonGroup align="end" gap="sm">
                    {showCopy && (
                        <ActionButton
                            label={copied === 'text' ? 'Copied' : 'Copy'}
                            icon={copied === 'text' ? Check : Copy}
                            onClick={handleCopyText}
                            variant="outline"
                            size="xs"
                            tooltip="Copy as text"
                        />
                    )}
                    {showCopyJson && (
                        <ActionButton
                            label={copied === 'json' ? 'Copied' : 'Copy JSON'}
                            icon={copied === 'json' ? Check : FileJson}
                            onClick={handleCopyJson}
                            variant="outline"
                            size="xs"
                            tooltip="Copy as JSON"
                        />
                    )}
                </ActionButtonGroup>
            )}

            <div className="rounded border border-border overflow-hidden">
                <Table className="table-fixed w-full">
                    {!hideHeader && (
                        <TableHeader>
                            <TableRow className="bg-muted/30">
                                <TableHead className="w-[180px] text-xs font-medium">{keyLabel}</TableHead>
                                <TableHead className="text-xs font-medium">{valueLabel}</TableHead>
                            </TableRow>
                        </TableHeader>
                    )}
                    <TableBody>
                        {entries.map(([key, value]) => {
                            const isExpanded = expandedKey === key;
                            const { display, className: valueClassName, wrapInCode } = formatValue(value);
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
                                            isExpanded ? "whitespace-pre-wrap break-all" : "truncate"
                                        )}
                                    >
                                        {key}
                                    </TableCell>
                                    <TableCell
                                        className={cn(
                                            "font-mono text-xs py-2",
                                            valueClassName,
                                            isExpanded ? "whitespace-pre-wrap break-all" : "truncate"
                                        )}
                                    >
                                        {wrapInCode ? (
                                            <code className="px-1.5 py-0.5 rounded bg-muted text-foreground border border-border">
                                                {display}
                                            </code>
                                        ) : (
                                            display
                                        )}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}