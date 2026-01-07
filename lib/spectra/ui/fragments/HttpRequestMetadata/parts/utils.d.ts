/**
 * Parse a URL into its components for display
 */
export declare function parseUrl(url: string | undefined | null): {
    protocol: string;
    host: string;
    path: string;
    isDataUrl: boolean;
};
/**
 * Get the appropriate badge variant based on HTTP status code
 */
export declare function getStatusVariant(status: number | string): "default" | "secondary" | "destructive" | "outline";
/**
 * Format status code with optional status text
 */
export declare function formatStatus(status: number | string, statusText?: string): string;
/**
 * Check if status is valid and should be displayed
 */
export declare function hasValidStatus(status: number | string | undefined): boolean;
/**
 * Format response time for display (e.g., "345ms", "1.2s", "2.5min")
 */
export declare function formatResponseTime(ms: number): string;
/**
 * Format byte size for display (e.g., "1.2 KB", "3.5 MB")
 */
export declare function formatBytes(bytes: number): string;
/**
 * Check if a redirect occurred by comparing request and response URLs
 */
export declare function isRedirect(requestUrl: string, responseUrl?: string): boolean;
