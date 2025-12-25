import { useState, useMemo, useEffect, useRef } from 'react';
import { getAllIcons, getPackIcons, getSupportedPacks, getLoadedPackCount, areAllPacksLoaded } from './IconService';

/**
 * Hook for debounced icon search with lazy loading
 * Icons are enumerated from packs at runtime, not bundled
 */
export function useIconSearch(query: string, debounceMs = 150) {
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [isSearching, setIsSearching] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [icons, setIcons] = useState<string[]>([]);
    const [loadProgress, setLoadProgress] = useState(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Load icons on mount
    useEffect(() => {
        let mounted = true;

        const loadIcons = async () => {
            setIsLoading(true);

            try {
                // Load all icons (IconService handles caching)
                const allIcons = await getAllIcons();

                if (mounted) {
                    setIcons(allIcons);
                    setIsLoading(false);
                    setLoadProgress(100);
                }
            } catch (error) {
                console.error('Failed to load icons:', error);
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };

        loadIcons();

        return () => {
            mounted = false;
        };
    }, []);

    // Track loading progress
    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                const loaded = getLoadedPackCount();
                const total = getSupportedPacks().length;
                setLoadProgress(Math.round((loaded / total) * 100));

                if (areAllPacksLoaded()) {
                    clearInterval(interval);
                }
            }, 100);

            return () => clearInterval(interval);
        }
    }, [isLoading]);

    // Debounce the query
    useEffect(() => {
        setIsSearching(true);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setDebouncedQuery(query);
            setIsSearching(false);
        }, debounceMs);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [query, debounceMs]);

    // Filter icons based on debounced query
    const results = useMemo(() => {
        if (!debouncedQuery.trim()) {
            // Return a reasonable subset when no query
            return icons.slice(0, 500);
        }

        const lowerQuery = debouncedQuery.toLowerCase();

        // Fast filter - just check if icon name contains query
        return icons.filter((fullName) => {
            const colonIdx = fullName.indexOf(':');
            const iconName = colonIdx !== -1 ? fullName.slice(colonIdx + 1) : fullName;
            return iconName.toLowerCase().includes(lowerQuery);
        });
    }, [debouncedQuery, icons]);

    return {
        results,
        isSearching,
        isLoading,
        loadProgress,
        totalCount: icons.length,
    };
}

/**
 * Get icon packs available
 */
export function getIconPacks(): readonly string[] {
    return getSupportedPacks();
}

/**
 * Hook to load icons from a specific pack (for pack-filtered search)
 */
export function usePackIcons(pack: string) {
    const [icons, setIcons] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let mounted = true;
        setIsLoading(true);
        setError(null);

        getPackIcons(pack)
            .then((packIcons) => {
                if (mounted) {
                    setIcons(packIcons);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                if (mounted) {
                    setError(err instanceof Error ? err : new Error(String(err)));
                    setIsLoading(false);
                }
            });

        return () => {
            mounted = false;
        };
    }, [pack]);

    return { icons, isLoading, error };
}
