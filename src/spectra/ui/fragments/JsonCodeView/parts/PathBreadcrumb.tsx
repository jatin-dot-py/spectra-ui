import { useMemo, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';


export type PathSegment = string | number;

interface PathBreadcrumbProps {
    data: unknown;
    path: PathSegment[];
    rootLabel?: string;
    onPathChange: (newPath: PathSegment[]) => void;
    onCopyPath: () => void;
    pathCopied: boolean;
}

function getValueAtPath(data: unknown, path: PathSegment[]): unknown {
    let current = data;
    for (const key of path) {
        if (current === null || current === undefined) return undefined;
        if (typeof current !== 'object') return undefined;
        current = (current as Record<string, unknown>)[key];
    }
    return current;
}

function getKeys(value: unknown): PathSegment[] {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value.map((_, i) => i);
    if (typeof value === 'object') return Object.keys(value);
    return [];
}

function formatSegment(segment: PathSegment): string {
    return typeof segment === 'number' ? `[${segment}]` : segment;
}

// Get type info for a value
function getTypeInfo(value: unknown): { type: string; color: string } {
    if (value === null) return { type: 'null', color: 'secondary' };
    if (Array.isArray(value)) return { type: `array[${value.length}]`, color: 'default' };
    if (typeof value === 'object') return { type: `object{${Object.keys(value).length}}`, color: 'default' };
    if (typeof value === 'number') return { type: 'number', color: 'secondary' };
    if (typeof value === 'boolean') return { type: 'bool', color: 'secondary' };
    if (typeof value === 'string') return { type: 'string', color: 'secondary' };
    return { type: typeof value, color: 'secondary' };
}

export function PathBreadcrumb({ data, path, rootLabel = 'root', onPathChange, onCopyPath, pathCopied }: PathBreadcrumbProps) {
    const [open, setOpen] = useState(false);

    const currentValue = useMemo(() => getValueAtPath(data, path), [data, path]);
    const currentKeys = useMemo(() => getKeys(currentValue), [currentValue]);
    const isArray = Array.isArray(currentValue);
    const canDrillDeeper = currentValue !== null && typeof currentValue === 'object' && currentKeys.length > 0;

    const handlePathClick = (index: number) => {
        onPathChange(path.slice(0, index));
    };

    const handleDrillDown = (key: PathSegment) => {
        onPathChange([...path, key]);
        setOpen(false);
    };

    // Get type info for each key
    const keysWithTypes = useMemo(() => {
        return currentKeys.map(key => {
            const value = (currentValue as Record<string, unknown>)[key];
            return { key, ...getTypeInfo(value) };
        });
    }, [currentKeys, currentValue]);

    return (
        <div className="px-3 py-2 flex-shrink-0 flex items-center gap-2">
            <Breadcrumb className="flex-1 min-w-0">
                <BreadcrumbList>
                    {/* Root */}
                    <BreadcrumbItem>
                        {path.length === 0 && !canDrillDeeper ? (
                            <BreadcrumbPage className="font-mono">{rootLabel}</BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePathClick(0); }}
                                className="font-mono"
                            >
                                {rootLabel}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>

                    {/* Path segments */}
                    {path.map((segment, index) => {
                        const isLast = index === path.length - 1 && !canDrillDeeper;
                        return (
                            <span key={index} className="contents">
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="font-mono">{formatSegment(segment)}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); handlePathClick(index + 1); }}
                                            className="font-mono"
                                        >
                                            {formatSegment(segment)}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </span>
                        );
                    })}

                    {/* Keys command menu */}
                    {canDrillDeeper && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                        <span className="font-mono text-xs">...</span>
                                    </PopoverTrigger>
                                    <PopoverContent align="start" className="w-48 p-0">
                                        <Command>
                                            <CommandInput placeholder={isArray ? "Index..." : "Key..."} className="h-7 text-xs" />
                                            <CommandList className="max-h-48">
                                                <CommandEmpty className="py-2 text-xs">No results.</CommandEmpty>
                                                <CommandGroup heading={isArray ? `${currentKeys.length} items` : `${currentKeys.length} keys`}>
                                                    {keysWithTypes.map(({ key, type }) => (
                                                        <CommandItem
                                                            key={String(key)}
                                                            value={formatSegment(key)}
                                                            onSelect={() => handleDrillDown(key)}
                                                            className="flex items-center justify-between py-1 text-xs"
                                                        >
                                                            <span className="font-mono">{formatSegment(key)}</span>
                                                            <span className="text-[9px] text-muted-foreground/70">{type}</span>
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </BreadcrumbItem>
                        </>
                    )}
                </BreadcrumbList>
            </Breadcrumb>

            {/* Copy path button - integrated in breadcrumb row */}
            <button
                onClick={onCopyPath}
                className="flex-shrink-0 p-1 text-muted-foreground/50 hover:text-foreground transition-colors"
                title="Copy path"
            >
                {pathCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
            </button>
        </div>
    );
}
