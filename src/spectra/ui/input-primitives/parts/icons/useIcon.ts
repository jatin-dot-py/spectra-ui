import { useState, useEffect, type ComponentType } from 'react';
import { loadIcon } from './iconLoader';

/**
 * Hook to load an icon component by its syntax name (e.g., "lucide-react:Settings")
 * Returns the Icon component that the consumer can render with custom classes/props
 * 
 * @example
 * const Icon = useIcon("lucide-react:Settings");
 * if (Icon) {
 *   return <Icon className="h-5 w-5 text-primary" />;
 * }
 */
export function useIcon(syntaxName: string | undefined): ComponentType<{
    size?: number;
    className?: string;
    [key: string]: unknown;
}> | null {
    const [IconComponent, setIconComponent] = useState<ComponentType<{
        size?: number;
        className?: string;
        [key: string]: unknown;
    }> | null>(null);

    useEffect(() => {
        if (!syntaxName || !syntaxName.includes(':')) {
            setIconComponent(null);
            return;
        }

        let mounted = true;

        loadIcon(syntaxName)
            .then((icon) => {
                if (mounted) {
                    setIconComponent(() => icon as ComponentType<{
                        size?: number;
                        className?: string;
                        [key: string]: unknown;
                    }> | null);
                }
            })
            .catch(() => {
                if (mounted) {
                    setIconComponent(null);
                }
            });

        return () => {
            mounted = false;
        };
    }, [syntaxName]);

    return IconComponent;
}

/**
 * Hook that returns loading state along with the icon
 */
export function useIconWithStatus(syntaxName: string | undefined): {
    Icon: ComponentType<{ size?: number; className?: string;[key: string]: unknown }> | null;
    isLoading: boolean;
    isError: boolean;
} {
    const [IconComponent, setIconComponent] = useState<ComponentType<{
        size?: number;
        className?: string;
        [key: string]: unknown;
    }> | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (!syntaxName || !syntaxName.includes(':')) {
            setIconComponent(null);
            setIsLoading(false);
            setIsError(false);
            return;
        }

        let mounted = true;
        setIsLoading(true);
        setIsError(false);

        loadIcon(syntaxName)
            .then((icon) => {
                if (mounted) {
                    setIconComponent(() => icon as ComponentType<{
                        size?: number;
                        className?: string;
                        [key: string]: unknown;
                    }> | null);
                    setIsLoading(false);
                    setIsError(!icon);
                }
            })
            .catch(() => {
                if (mounted) {
                    setIconComponent(null);
                    setIsLoading(false);
                    setIsError(true);
                }
            });

        return () => {
            mounted = false;
        };
    }, [syntaxName]);

    return { Icon: IconComponent, isLoading, isError };
}


