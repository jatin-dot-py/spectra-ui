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
