import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { TextInput, type TextInputProps } from './TextInput';

export interface UrlInputProps extends TextInputProps {
    /** Favicon size (16, 32, 64, etc.) */
    faviconSize?: number;
}

/**
 * Extract domain from a URL string.
 * Returns null if not a valid URL.
 */
function extractDomain(url: string): string | null {
    const trimmed = url.trim();
    if (!trimmed) return null;

    try {
        // Add protocol if missing
        const withProtocol = trimmed.match(/^https?:\/\//)
            ? trimmed
            : `https://${trimmed}`;

        const parsed = new URL(withProtocol);
        const hostname = parsed.hostname;

        // Basic validation: must have at least one dot
        if (!hostname.includes('.')) return null;

        return hostname;
    } catch {
        return null;
    }
}

export function UrlInput({
    value,
    onChange,
    faviconSize = 16,
    className,
    ...props
}: UrlInputProps) {
    const domain = useMemo(() => extractDomain(value), [value]);

    const faviconUrl = domain
        ? `https://www.google.com/s2/favicons?domain=${domain}&sz=${faviconSize}`
        : null;

    return (
        <div className={cn('relative flex items-center flex-1', className)}>
            {/* Favicon or placeholder icon */}
            <div className="absolute left-2 flex items-center justify-center w-4 h-4 pointer-events-none z-10">
                {faviconUrl ? (
                    <img
                        src={faviconUrl}
                        alt=""
                        width={faviconSize}
                        height={faviconSize}
                        className="w-4 h-4 rounded-sm"
                        onError={(e) => {
                            // Hide on error
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                ) : (
                    <Globe className="w-3.5 h-3.5 text-muted-foreground/50" />
                )}
            </div>

            <TextInput
                value={value}
                onChange={onChange}
                className="pl-7"
                {...props}
            />
        </div>
    );
}
