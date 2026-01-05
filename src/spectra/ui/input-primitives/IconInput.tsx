import { useState, useCallback, useRef, useEffect } from 'react';
import { Grid } from 'react-window';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverAnchor } from '@/components/ui/popover';
import { useIconSearch, AsyncIconLoader, getIconDisplayName, getIconPackName } from './parts/icons';
import { cn } from '@/lib/utils';

const ICON_SIZE = 20;
const CELL_SIZE = 40;
const GRID_HEIGHT = 280;
const COLUMNS = 6;

export interface IconInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export function IconInput({
    value,
    onChange,
    placeholder = 'Search icons...',
    disabled = false,
}: IconInputProps) {
    const [inputValue, setInputValue] = useState(value || '');
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setInputValue(value || '');
    }, [value]);

    const searchQuery = inputValue.includes(':')
        ? inputValue.split(':')[1] || ''
        : inputValue;

    const { results } = useIconSearch(searchQuery);
    const isExactMatch = results.includes(inputValue);
    const showSuggestions = isFocused && inputValue.length > 0 && !isExactMatch && results.length > 0;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };

    const handleSelect = useCallback((iconName: string) => {
        setInputValue(iconName);
        onChange(iconName);
        setIsFocused(false);
        // Return focus to input
        inputRef.current?.focus();
    }, [onChange]);

    // Measure width for the grid
    const [gridWidth, setGridWidth] = useState(300);

    // Update grid width when suggestions open or container resizes
    useEffect(() => {
        if (showSuggestions && containerRef.current) {
            setGridWidth(containerRef.current.offsetWidth);
        }
    }, [showSuggestions]);

    const cellWidth = Math.floor(gridWidth / COLUMNS);
    const rowCount = Math.ceil(results.length / COLUMNS);

    const Cell = useCallback(({ columnIndex, rowIndex, style }: {
        columnIndex: number;
        rowIndex: number;
        style: React.CSSProperties;
    }) => {
        const index = rowIndex * COLUMNS + columnIndex;
        if (index >= results.length) {
            return <div style={style} />;
        }

        const iconName = results[index];

        return (
            <div style={style} className="p-0.5">
                <TooltipProvider delayDuration={300}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button
                                onMouseDown={(e) => {
                                    e.preventDefault(); // Prevent blur
                                    handleSelect(iconName);
                                }}
                                className={cn(
                                    'w-full h-full flex items-center justify-center transition-all rounded-sm',
                                    'bg-muted/30 hover:bg-muted border border-transparent hover:border-border'
                                )}
                            >
                                <AsyncIconLoader name={iconName} size={ICON_SIZE} className="text-foreground" />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="text-xs max-w-[200px] z-[60]">
                            <div className="font-medium truncate">{getIconDisplayName(iconName)}</div>
                            <div className="text-muted-foreground text-xs">{getIconPackName(iconName)}</div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        );
    }, [results, handleSelect]);

    return (
        <div ref={containerRef}>
            <Popover open={showSuggestions} modal={false}>
                <PopoverAnchor asChild>
                    <div className="relative">
                        {isExactMatch && (
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                                <AsyncIconLoader name={inputValue} size={14} className="text-foreground" />
                            </div>
                        )}
                        <Input
                            ref={inputRef}
                            value={inputValue}
                            onChange={handleInputChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                            placeholder={placeholder}
                            disabled={disabled}
                            className={cn(
                                'h-7 text-xs font-mono bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors',
                                isExactMatch ? 'pl-7 text-foreground' : 'text-muted-foreground'
                            )}
                        />
                    </div>
                </PopoverAnchor>
                <PopoverContent
                    className="p-0 overflow-hidden"
                    align="start"
                    sideOffset={5}
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    style={{ width: gridWidth }}
                >
                    <div className="px-2 py-1 text-xs text-muted-foreground border-b border-border bg-muted/30">
                        {results.length.toLocaleString()} matches
                    </div>
                    <div
                        className="icon-picker-grid"
                        style={{ height: Math.min(GRID_HEIGHT, rowCount * CELL_SIZE) }}
                    >
                        <style>{`
                            .icon-picker-grid > div::-webkit-scrollbar {
                                display: none;
                            }
                            .icon-picker-grid > div {
                                scrollbar-width: none;
                                -ms-overflow-style: none;
                            }
                        `}</style>
                        <Grid
                            columnCount={COLUMNS}
                            columnWidth={cellWidth}
                            defaultHeight={GRID_HEIGHT}
                            defaultWidth={gridWidth}
                            rowCount={rowCount}
                            rowHeight={CELL_SIZE}
                            cellComponent={Cell}
                            cellProps={{} as any}
                            style={{
                                height: Math.min(GRID_HEIGHT, rowCount * CELL_SIZE),
                                width: '100%',
                                overflowX: 'hidden',
                            }}
                        />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}

