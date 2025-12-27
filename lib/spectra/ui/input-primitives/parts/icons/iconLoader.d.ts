import { ComponentType } from 'react';
/**
 * Dynamically load an icon by its full name (e.g., "lucide-react:Search")
 * Uses caching to prevent re-loading the same pack multiple times
 */
export declare function loadIcon(fullName: string): Promise<ComponentType | null>;
/**
 * Parse icon name into [pack, iconName]
 * e.g., "lucide-react:Search" -> ["lucide-react", "Search"]
 */
export declare function parseIconName(fullName: string): [string, string] | [null, null];
/**
 * Create a full icon name from pack and icon
 */
export declare function formatIconName(pack: string, iconName: string): string;
/**
 * Check if an icon pack is already cached
 */
export declare function isPackCached(pack: string): boolean;
/**
 * Preload an icon pack (useful for frequently used packs)
 */
export declare function preloadPack(pack: string): Promise<void>;
