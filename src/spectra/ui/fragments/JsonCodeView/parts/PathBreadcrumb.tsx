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
    if (value === null) return { type: 'null', color: 'text-muted-foreground/60' };
    if (Array.isArray(value)) return { type: `array[${value.length}]`, color: 'text-muted-foreground' };
    if (typeof value === 'object') return { type: `object{${Object.keys(value).length}}`, color: 'text-muted-foreground' };
    if (typeof value === 'number') return { type: 'number', color: 'text-muted-foreground' };
    if (typeof value === 'boolean') return { type: 'bool', color: 'text-muted-foreground' };
    if (typeof value === 'string') return { type: 'string', color: 'text-muted-foreground' };
    return { type: typeof value, color: 'text-muted-foreground' };
}

export function PathBreadcrumb({ data, path, rootLabel, onPathChange, onCopyPath, pathCopied }: PathBreadcrumbProps) {
    const [open, setOpen] = useState(false);

    const currentValue = useMemo(() => getValueAtPath(data, path), [data, path]);
    const currentKeys = useMemo(() => getKeys(currentValue), [currentValue]);
    // const isArray = Array.isArray(currentValue); // Unused
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

    const displayRootLabel = rootLabel || 'root';

    return (
        <div className="px-3 py-2 flex-shrink-0 flex items-center gap-2 overflow-hidden">
            <Breadcrumb className="whitespace-nowrap overflow-hidden text-ellipsis">
                <BreadcrumbList className="flex-nowrap">
                    {/* Root */}
                    <BreadcrumbItem>
                        {path.length === 0 ? (
                            <BreadcrumbPage className="font-mono font-medium text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm flex items-center gap-1.5">
                                {rootLabel && (
                                    <button
                                        onClick={onCopyPath}
                                        className="p-0.5 hover:bg-background/20 rounded-sm transition-colors text-secondary-foreground/80 hover:text-secondary-foreground"
                                        title="Copy path"
                                    >
                                        {pathCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                    </button>
                                )}
                                {displayRootLabel}
                            </BreadcrumbPage>
                        ) : (
                            <BreadcrumbLink
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePathClick(0); }}
                                className="font-mono hover:text-foreground transition-colors"
                            >
                                {displayRootLabel}
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>

                    {/* Path segments */}
                    {path.map((segment, index) => {
                        const isLast = index === path.length - 1;
                        return (
                            <span key={index} className="contents">
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="font-mono font-medium text-secondary-foreground bg-secondary px-1.5 py-0.5 rounded-sm flex items-center gap-1.5">
                                            <button
                                                onClick={onCopyPath}
                                                className="p-0.5 hover:bg-background/20 rounded-sm transition-colors text-secondary-foreground/80 hover:text-secondary-foreground"
                                                title="Copy path"
                                            >
                                                {pathCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                            </button>
                                            {formatSegment(segment)}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink
                                            href="#"
                                            onClick={(e) => { e.preventDefault(); handlePathClick(index + 1); }}
                                            className="font-mono hover:text-foreground transition-colors"
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
                                <Popover open={open} onOpenChange={setOpen} modal={true}>
                                    <PopoverTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                                        <span className="font-mono text-xs group-hover:underline decoration-border/50 underline-offset-2">...</span>
                                    </PopoverTrigger>
                                    <PopoverContent align="start" className="w-56 p-1">
                                        <Command>
                                            <CommandList className="max-h-[240px] overflow-y-auto">
                                                <CommandEmpty className="py-2 text-center text-xs text-muted-foreground">No items.</CommandEmpty>
                                                <CommandGroup>
                                                    {keysWithTypes.map(({ key, type, color }) => (
                                                        <CommandItem
                                                            key={String(key)}
                                                            value={String(key)}
                                                            onSelect={() => handleDrillDown(key)}
                                                            className="flex items-center justify-between py-1.5 px-2 text-xs rounded-sm aria-selected:bg-accent aria-selected:text-accent-foreground cursor-pointer"
                                                        >
                                                            <span className="font-mono truncate">{formatSegment(key)}</span>
                                                            <span className={`text-[10px] ${color} opacity-80 flex-shrink-0 ml-2`}>{type}</span>
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
        </div>
    );
}
