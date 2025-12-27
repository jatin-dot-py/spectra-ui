import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Copy, Check } from 'lucide-react';
import { type SpectraIconType } from '@/spectra/types';
import { parseUrl, getStatusVariant, formatStatus } from './parts';

export interface HttpRequestMetadataProps {
    /** HTTP Method (e.g., GET, POST) */
    method: string;
    /** Full request URL */
    url: string;
    /** Response status code (e.g., 200, 404) or string (e.g. "200 OK") */
    status: number | string;
    /** Optional status text if not included in status string */
    statusText?: string;
    /** Response MIME type */
    mimeType?: string;

    // Action Button Props
    showActionButton?: boolean;
    actionButtonText?: string;
    actionButtonIcon?: SpectraIconType;
    onActionButtonClick?: () => void;
    actionButtonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    actionButtonTitle?: string;
}

export function HttpRequestMetadata({
    method,
    url,
    status,
    statusText,
    mimeType,
    showActionButton = false,
    actionButtonText = 'Action',
    actionButtonIcon: ActionIcon,
    onActionButtonClick,
    actionButtonVariant = 'outline',
    actionButtonTitle,
}: HttpRequestMetadataProps) {
    const [copied, setCopied] = useState(false);
    const urlParts = parseUrl(url);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleActionClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onActionButtonClick?.();
    };

    const statusVariant = getStatusVariant(status);

    return (
        <div className="space-y-3">
            <div className="flex items-center gap-2">
                <Badge
                    variant="secondary"
                    className="font-mono font-bold text-xs px-2 py-0.5"
                >
                    {method}
                </Badge>
                <Badge
                    variant={statusVariant}
                    className="font-mono text-xs px-2 py-0.5"
                >
                    {formatStatus(status, statusText)}
                </Badge>
                {mimeType && (
                    <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                        {mimeType}
                    </Badge>
                )}
                <div className="flex-1" />

                {showActionButton && (
                    <Button
                        size="sm"
                        variant={actionButtonVariant}
                        onClick={handleActionClick}
                        className="shrink-0 gap-1.5 h-7 text-xs"
                        title={actionButtonTitle}
                    >
                        {ActionIcon && <ActionIcon className="h-3.5 w-3.5" />}
                        {actionButtonText && <span className="hidden sm:inline">{actionButtonText}</span>}
                    </Button>
                )}
            </div>

            <div className="flex items-center gap-2 min-w-0 bg-muted/40 p-2 rounded-md border border-border/50">
                <Globe className="h-4 w-4 shrink-0 text-primary" />
                <p className="font-mono text-xs text-foreground/80 truncate flex-1 leading-none" title={url}>
                    {urlParts.isDataUrl ? (
                        <>
                            <span className="text-muted-foreground">{urlParts.protocol}</span>
                            <span>{urlParts.host}</span>
                            <span className="text-muted-foreground ml-1">{urlParts.path}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-muted-foreground">{urlParts.protocol}//</span>
                            <span className="font-medium">{urlParts.host}</span>
                            <span className="text-foreground/60">{urlParts.path}</span>
                        </>
                    )}
                </p>
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCopy}
                    className="shrink-0 h-6 w-6 p-0 hover:bg-transparent"
                    title="Copy URL"
                >
                    {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />}
                </Button>
            </div>
        </div>
    );
}
