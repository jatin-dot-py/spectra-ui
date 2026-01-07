import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Copy, Check, Clock, ArrowRightLeft, AlertCircle, Package } from 'lucide-react';
import { type SpectraIconType } from '@/spectra/types';
import { parseUrl, getStatusVariant, formatStatus, hasValidStatus, formatResponseTime, formatBytes } from './parts';

export interface HttpRequestMetadataProps {
    /** HTTP Method (e.g., GET, POST) */
    method: string;
    /** Full request URL */
    url: string;
    /** Response status code (optional - badge hidden when undefined/0) */
    status?: number | string;
    /** Optional status text if not included in status string */
    statusText?: string;
    /** Response MIME type */
    mimeType?: string;

    /** Whether a redirect occurred */
    isRedirect?: boolean;
    /** Response time in milliseconds */
    responseTimeMs?: number;
    /** Content size in bytes */
    contentSizeBytes?: number;
    /** Whether the request failed */
    failed?: boolean;
    /** Failure reason if failed: true */
    failureReason?: string;

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
    isRedirect,
    responseTimeMs,
    contentSizeBytes,
    failed,
    failureReason,
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

    const showStatus = hasValidStatus(status);
    const statusVariant = showStatus ? getStatusVariant(status!) : 'secondary';

    return (
        <div className="space-y-2">
            {/* Failure Alert Banner */}
            {failed && failureReason && (
                <div className="flex items-center gap-2 p-2.5 rounded-md bg-destructive/10 border border-destructive/20 text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-medium truncate">{failureReason}</span>
                </div>
            )}

            {/* Method, Status, and Metadata Badges Row */}
            <div className="flex items-center gap-2 flex-wrap">
                {/* Method Badge */}
                <Badge
                    variant="secondary"
                    className="font-mono font-bold text-xs px-2 py-0.5"
                >
                    {method}
                </Badge>

                {/* Status Badge - only show if valid */}
                {showStatus && (
                    <Badge
                        variant={statusVariant}
                        className="font-mono text-xs px-2 py-0.5"
                    >
                        {formatStatus(status!, statusText)}
                    </Badge>
                )}

                {/* Failed Badge - show when failed but no valid status */}
                {failed && !showStatus && (
                    <Badge
                        variant="destructive"
                        className="font-mono text-xs px-2 py-0.5"
                    >
                        Failed
                    </Badge>
                )}

                {/* Response Time Badge */}
                {responseTimeMs !== undefined && responseTimeMs > 0 && (
                    <Badge variant="outline" className="text-xs gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {formatResponseTime(responseTimeMs)}
                    </Badge>
                )}

                {/* Content Size Badge */}
                {contentSizeBytes !== undefined && contentSizeBytes > 0 && (
                    <Badge variant="outline" className="text-xs gap-1 text-muted-foreground">
                        <Package className="h-3 w-3" />
                        {formatBytes(contentSizeBytes)}
                    </Badge>
                )}

                {/* Redirect Indicator */}
                {isRedirect && (
                    <Badge variant="outline" className="text-xs gap-1 text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700">
                        <ArrowRightLeft className="h-3 w-3" />
                        Redirect
                    </Badge>
                )}

                {/* MIME Type Badge */}
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

            {/* URL Display Row */}
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
