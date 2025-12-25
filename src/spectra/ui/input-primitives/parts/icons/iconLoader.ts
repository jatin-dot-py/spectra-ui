import type { ComponentType } from 'react';

// Cache for loaded icon packs to prevent re-fetching
const packCache = new Map<string, Record<string, ComponentType>>();

// Pending loads to prevent duplicate fetches
const pendingLoads = new Map<string, Promise<Record<string, ComponentType>>>();

/**
 * Dynamically load an icon by its full name (e.g., "lucide-react:Search")
 * Uses caching to prevent re-loading the same pack multiple times
 */
export async function loadIcon(fullName: string): Promise<ComponentType | null> {
    const [pack, iconName] = parseIconName(fullName);
    if (!pack || !iconName) return null;

    try {
        const packModule = await loadPack(pack);
        return packModule[iconName] ?? null;
    } catch (error) {
        console.warn(`Failed to load icon: ${fullName}`, error);
        return null;
    }
}

/**
 * Load an icon pack and cache it
 */
async function loadPack(pack: string): Promise<Record<string, ComponentType>> {
    // Return from cache if available
    if (packCache.has(pack)) {
        return packCache.get(pack)!;
    }

    // Return pending load if in progress
    if (pendingLoads.has(pack)) {
        return pendingLoads.get(pack)!;
    }

    // Start new load
    const loadPromise = importPack(pack);
    pendingLoads.set(pack, loadPromise);

    try {
        const module = await loadPromise;
        packCache.set(pack, module);
        return module;
    } finally {
        pendingLoads.delete(pack);
    }
}

/**
 * Dynamic import for icon packs
 * Note: react-icons requires explicit imports per pack due to bundler limitations
 */
async function importPack(pack: string): Promise<Record<string, ComponentType>> {
    // Handle lucide-react
    if (pack === 'lucide-react') {
        const mod = await import('lucide-react');
        return mod as unknown as Record<string, ComponentType>;
    }

    // Handle react-icons packs - need explicit imports for each pack
    if (pack.startsWith('react-icons/')) {
        const packName = pack.replace('react-icons/', '');

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
 * Parse icon name into [pack, iconName]
 * e.g., "lucide-react:Search" -> ["lucide-react", "Search"]
 */
export function parseIconName(fullName: string): [string, string] | [null, null] {
    const colonIndex = fullName.indexOf(':');
    if (colonIndex === -1) return [null, null];
    return [fullName.slice(0, colonIndex), fullName.slice(colonIndex + 1)];
}

/**
 * Create a full icon name from pack and icon
 */
export function formatIconName(pack: string, iconName: string): string {
    return `${pack}:${iconName}`;
}

/**
 * Check if an icon pack is already cached
 */
export function isPackCached(pack: string): boolean {
    return packCache.has(pack);
}

/**
 * Preload an icon pack (useful for frequently used packs)
 */
export async function preloadPack(pack: string): Promise<void> {
    await loadPack(pack);
}
