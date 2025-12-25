import { useState, useEffect, memo, Component, type ReactNode } from 'react';
import type { ComponentType } from 'react';
import { loadIcon, parseIconName } from './iconLoader';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

// Error boundary to catch icon rendering errors
class IconErrorBoundary extends Component<
    { children: ReactNode; fallback: ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: ReactNode; fallback: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

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
export const AsyncIconLoader = memo(function AsyncIconLoader({
    name,
    size = 20,
    className,
    showSpinner = true,
}: AsyncIconLoaderProps) {
    const [Icon, setIcon] = useState<ComponentType<{ size?: number; className?: string }> | null>(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        setError(false);
        setIcon(null);

        if (!name || !name.includes(':')) {
            setLoading(false);
            setError(true);
            return;
        }

        loadIcon(name)
            .then((LoadedIcon) => {
                if (mounted && LoadedIcon) {
                    setIcon(() => LoadedIcon as ComponentType<{ size?: number; className?: string }>);
                    setLoading(false);
                } else if (mounted) {
                    setError(true);
                    setLoading(false);
                }
            })
            .catch(() => {
                if (mounted) {
                    setError(true);
                    setLoading(false);
                }
            });

        return () => {
            mounted = false;
        };
    }, [name]);

    if (loading) {
        return showSpinner ? (
            <Loader2
                className={cn('animate-spin text-muted-foreground', className)}
                style={{ width: size, height: size }}
            />
        ) : (
            <div
                className={cn('animate-pulse bg-muted rounded', className)}
                style={{ width: size, height: size }}
            />
        );
    }

    if (error || !Icon) {
        return (
            <div
                className={cn('flex items-center justify-center text-muted-foreground/50 text-xs', className)}
                style={{ width: size, height: size }}
            >
                ?
            </div>
        );
    }

    const fallback = (
        <div
            className={cn('flex items-center justify-center text-muted-foreground/50 text-xs', className)}
            style={{ width: size, height: size }}
        >
            !
        </div>
    );

    return (
        <IconErrorBoundary fallback={fallback}>
            <Icon size={size} className={className} />
        </IconErrorBoundary>
    );
});

/**
 * Extract display name from full icon name
 * e.g., "lucide-react:ArrowRight" -> "ArrowRight"
 */
export function getIconDisplayName(fullName: string): string {
    const [, iconName] = parseIconName(fullName);
    return iconName ?? fullName;
}

/**
 * Extract pack name from full icon name
 * e.g., "lucide-react:ArrowRight" -> "lucide-react"
 */
export function getIconPackName(fullName: string): string {
    const [pack] = parseIconName(fullName);
    return pack ?? 'unknown';
}

// Backwards compatibility alias
/** @deprecated Use AsyncIconLoader instead */
export const LazyIcon = AsyncIconLoader;
