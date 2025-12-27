/**
 * IconService - Runtime icon enumeration with lazy loading and caching
 *
 * This service eliminates the need for a bundled icon manifest by:
 * 1. Dynamically importing icon packs on demand
 * 2. Enumerating exports to discover available icons
 * 3. Caching results in memory for subsequent requests
 *
 * This is a standard pattern used by VS Code, Storybook, and other apps
 * to reduce bundle size while maintaining full icon library access.
 */
declare const SUPPORTED_PACKS: readonly ["lucide-react", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"];
type PackName = typeof SUPPORTED_PACKS[number];
/**
 * Check if a pack is one we support
 */
export declare function isSupportedPack(pack: string): pack is PackName;
/**
 * Get list of supported pack names
 */
export declare function getSupportedPacks(): readonly string[];
/**
 * Enumerate icons in a specific pack
 * Returns cached result if available, otherwise loads and enumerates
 */
export declare function getPackIcons(pack: string): Promise<string[]>;
/**
 * Get all icons from all supported packs
 * Loads packs in parallel for efficiency
 */
export declare function getAllIcons(): Promise<string[]>;
/**
 * Get count of loaded packs (for progress indication)
 */
export declare function getLoadedPackCount(): number;
/**
 * Check if all packs are loaded
 */
export declare function areAllPacksLoaded(): boolean;
/**
 * Preload specific packs (useful for commonly used packs)
 */
export declare function preloadPacks(packs: string[]): Promise<void>;
/**
 * Get icons count per pack (without loading all icons)
 */
export declare function getCachedPackIconCount(pack: string): number | null;
/**
 * Clear all caches (useful for testing or memory management)
 */
export declare function clearIconCache(): void;
export {};
