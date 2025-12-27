/**
 * Hook for debounced icon search with lazy loading
 * Icons are enumerated from packs at runtime, not bundled
 */
export declare function useIconSearch(query: string, debounceMs?: number): {
    results: string[];
    isSearching: boolean;
    isLoading: boolean;
    loadProgress: number;
    totalCount: number;
};
/**
 * Get icon packs available
 */
export declare function getIconPacks(): readonly string[];
/**
 * Hook to load icons from a specific pack (for pack-filtered search)
 */
export declare function usePackIcons(pack: string): {
    icons: string[];
    isLoading: boolean;
    error: Error | null;
};
