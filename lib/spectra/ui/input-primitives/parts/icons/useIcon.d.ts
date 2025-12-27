import { ComponentType } from 'react';
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
export declare function useIcon(syntaxName: string | undefined): ComponentType<{
    size?: number;
    className?: string;
    [key: string]: unknown;
}> | null;
/**
 * Hook that returns loading state along with the icon
 */
export declare function useIconWithStatus(syntaxName: string | undefined): {
    Icon: ComponentType<{
        size?: number;
        className?: string;
        [key: string]: unknown;
    }> | null;
    isLoading: boolean;
    isError: boolean;
};
