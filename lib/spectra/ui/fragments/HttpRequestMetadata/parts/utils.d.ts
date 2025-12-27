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
