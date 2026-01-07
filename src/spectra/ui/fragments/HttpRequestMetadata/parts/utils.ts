/**
 * Parse a URL into its components for display
 */
export function parseUrl(url: string | undefined | null): {
    protocol: string;
    host: string;
    path: string;
    isDataUrl: boolean;
} {
    if (!url) {
        return { protocol: '', host: '', path: '', isDataUrl: false };
    }

    // Handle data: URLs specially
    if (url.startsWith('data:')) {
        const mimeEnd = url.indexOf(',');
        const mimeType = mimeEnd > 0 ? url.slice(5, Math.min(mimeEnd, 50)) : 'unknown';
        return {
            protocol: 'data:',
            host: mimeType + (mimeEnd > 50 ? '...' : ''),
            path: `[${((url.length - mimeEnd) / 1024).toFixed(1)} KB payload]`,
            isDataUrl: true,
        };
    }

    try {
        const parsed = new URL(url);
        return {
            protocol: parsed.protocol,
            host: parsed.host,
            path: parsed.pathname + parsed.search + parsed.hash,
            isDataUrl: false,
        };
    } catch {
        return { protocol: '', host: '', path: url, isDataUrl: false };
    }
}

/**
 * Get the appropriate badge variant based on HTTP status code
 */
export function getStatusVariant(status: number | string): "default" | "secondary" | "destructive" | "outline" {
    let code: number;
    if (typeof status === 'number') {
        code = status;
    } else {
        const match = status.toString().match(/^\d+/);
        code = match ? parseInt(match[0], 10) : 0;
    }

    if (code >= 200 && code < 300) return 'default'; // Success
    if (code >= 400) return 'destructive'; // Error
    return 'secondary'; // Other (1xx, 3xx, unknown)
}

/**
 * Format status code with optional status text
 */
export function formatStatus(status: number | string, statusText?: string): string {
    if (statusText) return `${status} ${statusText}`;
    return status.toString();
}

/**
 * Check if status is valid and should be displayed
 */
export function hasValidStatus(status: number | string | undefined): boolean {
    if (status === undefined || status === null) return false;
    if (typeof status === 'number') return status > 0;
    if (typeof status === 'string') {
        const match = status.match(/^\d+/);
        return match ? parseInt(match[0], 10) > 0 : status.length > 0;
    }
    return false;
}

/**
 * Format response time for display (e.g., "345ms", "1.2s", "2.5min")
 */
export function formatResponseTime(ms: number): string {
    if (ms < 1000) return `${Math.round(ms)}ms`;
    if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
    return `${(ms / 60000).toFixed(1)}min`;
}

/**
 * Format byte size for display (e.g., "1.2 KB", "3.5 MB")
 */
export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const units = ['B', 'KB', 'MB', 'GB'];
    const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
    const value = bytes / Math.pow(1024, i);
    return `${value < 10 ? value.toFixed(1) : Math.round(value)} ${units[i]}`;
}

/**
 * Check if a redirect occurred by comparing request and response URLs
 */
export function isRedirect(requestUrl: string, responseUrl?: string): boolean {
    if (!responseUrl) return false;
    try {
        const reqUrl = new URL(requestUrl);
        const resUrl = new URL(responseUrl);
        return reqUrl.href !== resUrl.href;
    } catch {
        return requestUrl !== responseUrl;
    }
}
