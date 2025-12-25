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

import type { ComponentType } from 'react';
import { formatIconName } from './iconLoader';

// Supported icon packs - these are the only packs we'll enumerate
const SUPPORTED_PACKS = [
    'lucide-react',
    'react-icons/ai',
    'react-icons/bi',
    'react-icons/bs',
    'react-icons/cg',
    'react-icons/ci',
    'react-icons/di',
    'react-icons/fa',
    'react-icons/fa6',
    'react-icons/fc',
    'react-icons/fi',
    'react-icons/gi',
    'react-icons/go',
    'react-icons/gr',
    'react-icons/hi',
    'react-icons/hi2',
    'react-icons/im',
    'react-icons/io',
    'react-icons/io5',
    'react-icons/lia',
    'react-icons/lu',
    'react-icons/md',
    'react-icons/pi',
    'react-icons/ri',
    'react-icons/rx',
    'react-icons/si',
    'react-icons/sl',
    'react-icons/tb',
    'react-icons/tfi',
    'react-icons/ti',
    'react-icons/vsc',
    'react-icons/wi',
] as const;

type PackName = typeof SUPPORTED_PACKS[number];

// Cache for enumerated icon names per pack
const packIconCache = new Map<string, string[]>();

// Pending enumerations to prevent duplicate requests
const pendingEnumerations = new Map<string, Promise<string[]>>();

// Track which packs failed to load (don't retry)
const failedPacks = new Set<string>();

// Full icon list cache (computed once all packs are loaded)
let allIconsCache: string[] | null = null;

/**
 * Check if a pack is one we support
 */
export function isSupportedPack(pack: string): pack is PackName {
    return SUPPORTED_PACKS.includes(pack as PackName);
}

/**
 * Get list of supported pack names
 */
export function getSupportedPacks(): readonly string[] {
    return SUPPORTED_PACKS;
}

/**
 * Dynamically import a pack and return its module
 */
async function importPack(pack: string): Promise<Record<string, ComponentType>> {
    // Handle lucide-react
    if (pack === 'lucide-react') {
        const mod = await import('lucide-react');
        return mod as unknown as Record<string, ComponentType>;
    }

    // Handle react-icons packs
    if (pack.startsWith('react-icons/')) {
        const packName = pack.replace('react-icons/', '');

        // Use explicit imports for bundler compatibility
        switch (packName) {
            case 'ai': return (await import('react-icons/ai')) as unknown as Record<string, ComponentType>;
            case 'bi': return (await import('react-icons/bi')) as unknown as Record<string, ComponentType>;
            case 'bs': return (await import('react-icons/bs')) as unknown as Record<string, ComponentType>;
            case 'cg': return (await import('react-icons/cg')) as unknown as Record<string, ComponentType>;
            case 'ci': return (await import('react-icons/ci')) as unknown as Record<string, ComponentType>;
            case 'di': return (await import('react-icons/di')) as unknown as Record<string, ComponentType>;
            case 'fa': return (await import('react-icons/fa')) as unknown as Record<string, ComponentType>;
            case 'fa6': return (await import('react-icons/fa6')) as unknown as Record<string, ComponentType>;
            case 'fc': return (await import('react-icons/fc')) as unknown as Record<string, ComponentType>;
            case 'fi': return (await import('react-icons/fi')) as unknown as Record<string, ComponentType>;
            case 'gi': return (await import('react-icons/gi')) as unknown as Record<string, ComponentType>;
            case 'go': return (await import('react-icons/go')) as unknown as Record<string, ComponentType>;
            case 'gr': return (await import('react-icons/gr')) as unknown as Record<string, ComponentType>;
            case 'hi': return (await import('react-icons/hi')) as unknown as Record<string, ComponentType>;
            case 'hi2': return (await import('react-icons/hi2')) as unknown as Record<string, ComponentType>;
            case 'im': return (await import('react-icons/im')) as unknown as Record<string, ComponentType>;
            case 'io': return (await import('react-icons/io')) as unknown as Record<string, ComponentType>;
            case 'io5': return (await import('react-icons/io5')) as unknown as Record<string, ComponentType>;
            case 'lia': return (await import('react-icons/lia')) as unknown as Record<string, ComponentType>;
            case 'lu': return (await import('react-icons/lu')) as unknown as Record<string, ComponentType>;
            case 'md': return (await import('react-icons/md')) as unknown as Record<string, ComponentType>;
            case 'pi': return (await import('react-icons/pi')) as unknown as Record<string, ComponentType>;
            case 'ri': return (await import('react-icons/ri')) as unknown as Record<string, ComponentType>;
            case 'rx': return (await import('react-icons/rx')) as unknown as Record<string, ComponentType>;
            case 'si': return (await import('react-icons/si')) as unknown as Record<string, ComponentType>;
            case 'sl': return (await import('react-icons/sl')) as unknown as Record<string, ComponentType>;
            case 'tb': return (await import('react-icons/tb')) as unknown as Record<string, ComponentType>;
            case 'tfi': return (await import('react-icons/tfi')) as unknown as Record<string, ComponentType>;
            case 'ti': return (await import('react-icons/ti')) as unknown as Record<string, ComponentType>;
            case 'vsc': return (await import('react-icons/vsc')) as unknown as Record<string, ComponentType>;
            case 'wi': return (await import('react-icons/wi')) as unknown as Record<string, ComponentType>;
            default:
                throw new Error(`Unknown react-icons pack: ${packName}`);
        }
    }

    throw new Error(`Unknown icon pack: ${pack}`);
}

/**
 * Extract icon names from a module's exports
 * Filters to only include actual icon components (PascalCase names)
 */
function extractIconNames(module: Record<string, unknown>): string[] {
    return Object.keys(module).filter(key => {
        // Icons are PascalCase and are functions/components
        if (!/^[A-Z]/.test(key)) return false;

        // Exclude known non-icon exports
        const excluded = ['createLucideIcon', 'Icon', 'IconNode', 'LucideIcon'];
        if (excluded.includes(key)) return false;

        // Check it's actually a function (component)
        const value = module[key];
        return typeof value === 'function' || typeof value === 'object';
    });
}

/**
 * Enumerate icons in a specific pack
 * Returns cached result if available, otherwise loads and enumerates
 */
export async function getPackIcons(pack: string): Promise<string[]> {
    // Return cached if available
    if (packIconCache.has(pack)) {
        return packIconCache.get(pack)!;
    }

    // Return empty if pack previously failed
    if (failedPacks.has(pack)) {
        return [];
    }

    // Return pending enumeration if one is in progress
    if (pendingEnumerations.has(pack)) {
        return pendingEnumerations.get(pack)!;
    }

    // Start new enumeration
    const enumeration = (async () => {
        try {
            const module = await importPack(pack);
            const iconNames = extractIconNames(module);

            // Format as full names (pack:IconName)
            const fullNames = iconNames.map(name => formatIconName(pack, name));

            // Cache the result
            packIconCache.set(pack, fullNames);

            // Invalidate all-icons cache since we have new data
            allIconsCache = null;

            return fullNames;
        } catch (error) {
            console.warn(`Failed to enumerate icons in pack "${pack}":`, error);
            failedPacks.add(pack);
            return [];
        } finally {
            pendingEnumerations.delete(pack);
        }
    })();

    pendingEnumerations.set(pack, enumeration);
    return enumeration;
}

/**
 * Get all icons from all supported packs
 * Loads packs in parallel for efficiency
 */
export async function getAllIcons(): Promise<string[]> {
    // Return cache if available
    if (allIconsCache) {
        return allIconsCache;
    }

    // Load all packs in parallel
    const results = await Promise.all(
        SUPPORTED_PACKS.map(pack => getPackIcons(pack))
    );

    // Flatten and cache
    allIconsCache = results.flat();
    return allIconsCache;
}

/**
 * Get count of loaded packs (for progress indication)
 */
export function getLoadedPackCount(): number {
    return packIconCache.size;
}

/**
 * Check if all packs are loaded
 */
export function areAllPacksLoaded(): boolean {
    return packIconCache.size + failedPacks.size >= SUPPORTED_PACKS.length;
}

/**
 * Preload specific packs (useful for commonly used packs)
 */
export async function preloadPacks(packs: string[]): Promise<void> {
    await Promise.all(packs.map(pack => getPackIcons(pack)));
}

/**
 * Get icons count per pack (without loading all icons)
 */
export function getCachedPackIconCount(pack: string): number | null {
    const icons = packIconCache.get(pack);
    return icons ? icons.length : null;
}

/**
 * Clear all caches (useful for testing or memory management)
 */
export function clearIconCache(): void {
    packIconCache.clear();
    pendingEnumerations.clear();
    failedPacks.clear();
    allIconsCache = null;
}
