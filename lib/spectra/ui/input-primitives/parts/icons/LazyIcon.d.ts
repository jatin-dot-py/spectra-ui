interface AsyncIconLoaderProps {
    name: string;
    size?: number;
    className?: string;
    showSpinner?: boolean;
}
/**
 * Asynchronously loads and renders an icon by its full name.
 * Icons are loaded on-demand and cached by the icon loader.
 * Memoized to prevent unnecessary re-renders during scroll.
 */
export declare const AsyncIconLoader: import('react').NamedExoticComponent<AsyncIconLoaderProps>;
/**
 * Extract display name from full icon name
 * e.g., "lucide-react:ArrowRight" -> "ArrowRight"
 */
export declare function getIconDisplayName(fullName: string): string;
/**
 * Extract pack name from full icon name
 * e.g., "lucide-react:ArrowRight" -> "lucide-react"
 */
export declare function getIconPackName(fullName: string): string;
/** @deprecated Use AsyncIconLoader instead */
export declare const LazyIcon: import('react').NamedExoticComponent<AsyncIconLoaderProps>;
export {};
