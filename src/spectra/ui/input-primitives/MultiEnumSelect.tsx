import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Check, X, type LucideIcon } from 'lucide-react';

export interface MultiEnumOption {
    /** The actual value stored */
    value: string;
    /** Display text shown to user */
    label: string;
    /** Optional icon component */
    icon?: LucideIcon;
    /** Tooltip text on hover */
    hoverText?: string;
}

export interface MultiEnumSelectProps {
    /** Currently selected values */
    value: string[];
    /** Called when selection changes */
    onChange: (value: string[]) => void;
    /** Available options */
    options: MultiEnumOption[];
    /** Variant: 'dropdown' for multi-select, 'buttons' for toggle button group */
    variant?: 'dropdown' | 'buttons';
    /** For buttons: what to display - 'icon', 'text', or 'both' */
    buttonDisplay?: 'icon' | 'text' | 'both';
    /** Max buttons to show inline (rest go to overflow dropdown) */
    maxInline?: number;
    /** Placeholder text for dropdown */
    placeholder?: string;
    /** Title shown in dropdown (above options) */
    dropdownTitle?: string;
    /** Icon to use as compact dropdown trigger. When provided, only shows this icon + count badge + chevron */
    iconTrigger?: LucideIcon;
    /** Disabled state */
    disabled?: boolean;
    /** Remove border/shadow for seamless grouping in LabeledInput */
    borderless?: boolean;
}

export function MultiEnumSelect({
    value,
    onChange,
    options,
    variant,
    buttonDisplay = 'text',
    maxInline,
    placeholder = 'Select...',
    dropdownTitle,
    iconTrigger: TriggerIcon,
    disabled = false,
    borderless = false,
}: MultiEnumSelectProps) {
    // Ensure value is always an array
    const safeValue = Array.isArray(value) ? value : [];

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [overflowOpen, setOverflowOpen] = useState(false);

    const isSelected = useCallback((optionValue: string) => safeValue.includes(optionValue), [safeValue]);

    const toggleOption = useCallback(
        (optionValue: string) => {
            if (disabled) return;
            if (safeValue.includes(optionValue)) {
                onChange(safeValue.filter(v => v !== optionValue));
            } else {
                onChange([...safeValue, optionValue]);
            }
        },
        [safeValue, onChange, disabled]
    );

    const removeOption = useCallback(
        (optionValue: string, e: React.MouseEvent) => {
            e.stopPropagation();
            if (disabled) return;
            onChange(safeValue.filter(v => v !== optionValue));
        },
        [safeValue, onChange, disabled]
    );

    const clearAll = useCallback(() => {
        if (disabled) return;
        onChange([]);
    }, [onChange, disabled]);

    // Auto-determine variant if not specified
    const effectiveVariant = variant ?? (options.length > 5 ? 'dropdown' : 'buttons');
    const selectedOptions = options.filter(opt => safeValue.includes(opt.value));

    // ========================================================================
    // Dropdown Variant
    // ========================================================================
    if (effectiveVariant === 'dropdown') {
        // Icon trigger mode
        if (TriggerIcon) {
            return (
                <Popover open={dropdownOpen} onOpenChange={setDropdownOpen}>
                    <PopoverTrigger asChild>
                        <button
                            disabled={disabled}
                            className={cn(
                                'inline-flex items-center justify-center gap-1 h-8 px-2',
                                'bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors',
                                disabled && 'opacity-50 cursor-not-allowed'
                            )}
                        >
                            <TriggerIcon className="h-4 w-4" />
                            {selectedOptions.length > 0 && (
                                <span className="min-w-[18px] h-[18px] rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
                                    {selectedOptions.length}
                                </span>
                            )}
                            <ChevronDown className="h-3 w-3 opacity-50" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-[220px] p-0 gap-0" sideOffset={4}>
                        {/* Header */}
                        <div className="px-3 py-2 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-medium text-muted-foreground">
                                {dropdownTitle || `${selectedOptions.length} selected`}
                            </span>
                            {selectedOptions.length > 0 && (
                                <button
                                    onClick={clearAll}
                                    className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {/* Options */}
                        <div className="max-h-[200px] overflow-y-auto p-1">
                            {options.map((option) => {
                                const Icon = option.icon;
                                const selected = isSelected(option.value);
                                return (
                                    <button
                                        key={option.value}
                                        onClick={() => toggleOption(option.value)}
                                        className={cn(
                                            'w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors',
                                            selected
                                                ? 'bg-primary/10 text-foreground'
                                                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        <div className={cn(
                                            'h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors',
                                            selected
                                                ? 'bg-primary border-primary'
                                                : 'border-border bg-background'
                                        )}>
                                            {selected && <Check className="h-3 w-3 text-primary-foreground" />}
                                        </div>
                                        {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                                        <span className="flex-1 text-left truncate">{option.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </PopoverContent>
                </Popover>
            );
        }

        // Standard dropdown
        return (
            <Popover open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <PopoverTrigger asChild>
                    <button
                        disabled={disabled}
                        className={cn(
                            'inline-flex items-center justify-between gap-2 h-8 px-3 text-xs w-full min-w-[180px]',
                            'bg-muted/30 border border-transparent hover:border-border transition-colors',
                            disabled && 'opacity-50 cursor-not-allowed'
                        )}
                    >
                        <div className="flex items-center gap-1.5 flex-1 overflow-hidden">
                            {selectedOptions.length > 0 ? (
                                <>
                                    {selectedOptions.slice(0, 2).map(opt => (
                                        <Badge
                                            key={opt.value}
                                            variant="secondary"
                                            className="h-5 px-1.5 text-[10px] font-normal gap-1 shrink-0"
                                        >
                                            {opt.icon && <opt.icon className="h-3 w-3" />}
                                            <span className="truncate max-w-[50px]">{opt.label}</span>
                                        </Badge>
                                    ))}
                                    {selectedOptions.length > 2 && (
                                        <span className="text-muted-foreground text-[10px]">
                                            +{selectedOptions.length - 2}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <span className="text-muted-foreground">{placeholder}</span>
                            )}
                        </div>
                        <ChevronDown className="h-3.5 w-3.5 opacity-50 shrink-0" />
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-[220px] p-0 gap-0" sideOffset={4}>
                    {/* Header */}
                    {(dropdownTitle || selectedOptions.length > 0) && (
                        <div className="px-3 py-2 border-b border-border flex items-center justify-between">
                            <span className="text-xs font-medium text-muted-foreground">
                                {dropdownTitle || `${selectedOptions.length} selected`}
                            </span>
                            {selectedOptions.length > 0 && (
                                <button
                                    onClick={clearAll}
                                    className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>
                    )}

                    {/* Options */}
                    <div className="max-h-[200px] overflow-y-auto p-1">
                        {options.map((option) => {
                            const Icon = option.icon;
                            const selected = isSelected(option.value);
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => toggleOption(option.value)}
                                    className={cn(
                                        'w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors',
                                        selected
                                            ? 'bg-primary/10 text-foreground'
                                            : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                                    )}
                                >
                                    <div className={cn(
                                        'h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors',
                                        selected
                                            ? 'bg-primary border-primary'
                                            : 'border-border bg-background'
                                    )}>
                                        {selected && <Check className="h-3 w-3 text-primary-foreground" />}
                                    </div>
                                    {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                                    <span className="flex-1 text-left truncate">{option.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Selected chips */}
                    {selectedOptions.length > 0 && (
                        <div className="border-t border-border p-2">
                            <div className="flex flex-wrap gap-1">
                                {selectedOptions.map(opt => (
                                    <Badge
                                        key={opt.value}
                                        variant="secondary"
                                        className="h-5 px-1.5 text-[10px] font-normal gap-1 pr-0.5"
                                    >
                                        {opt.icon && <opt.icon className="h-3 w-3" />}
                                        <span className="truncate max-w-[60px]">{opt.label}</span>
                                        <button
                                            onClick={(e) => removeOption(opt.value, e)}
                                            className="ml-0.5 p-0.5 rounded hover:bg-muted-foreground/20 transition-colors"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}
                </PopoverContent>
            </Popover>
        );
    }

    // ========================================================================
    // Button Variant (Toggle Buttons) - Improved Styling
    // ========================================================================
    const needsOverflow = maxInline !== undefined && options.length > maxInline;
    const inlineOptions = needsOverflow ? options.slice(0, maxInline - 1) : options;
    const overflowOptions = needsOverflow ? options.slice(maxInline - 1) : [];
    const selectedInOverflow = overflowOptions.filter(opt => safeValue.includes(opt.value));

    const renderButton = (option: MultiEnumOption, isFirst: boolean, isLast: boolean) => {
        const selected = isSelected(option.value);
        const Icon = option.icon;

        const showIcon = Icon && (buttonDisplay === 'icon' || buttonDisplay === 'both');
        const showText = buttonDisplay === 'text' || buttonDisplay === 'both';

        const button = (
            <button
                key={option.value}
                onClick={() => toggleOption(option.value)}
                disabled={disabled}
                className={cn(
                    'flex items-center justify-center gap-1.5 font-medium transition-all',
                    'h-8 px-2.5 text-xs',
                    isFirst && 'rounded-l-md',
                    isLast && !needsOverflow && 'rounded-r-md',
                    !isFirst && !isLast && 'rounded-none',
                    selected
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                    disabled && 'opacity-50 cursor-not-allowed'
                )}
            >
                {showIcon && <Icon className="h-3.5 w-3.5" />}
                {showText && <span className="truncate">{option.label}</span>}
            </button>
        );

        const tooltipText = option.hoverText || (buttonDisplay === 'icon' ? option.label : undefined);
        if (tooltipText && !disabled) {
            return (
                <TooltipProvider key={option.value} delayDuration={200}>
                    <Tooltip>
                        <TooltipTrigger asChild>{button}</TooltipTrigger>
                        <TooltipContent side="bottom" className="text-xs">
                            {tooltipText}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        }

        return button;
    };

    return (
        <div className={cn(
            'inline-flex',
            !borderless && 'border border-border/40 bg-muted/30 p-0.5 shadow-sm',
            disabled && 'opacity-50'
        )}>
            {/* Inline toggle buttons */}
            {inlineOptions.map((option, index) =>
                renderButton(option, index === 0, index === inlineOptions.length - 1)
            )}

            {/* Overflow dropdown */}
            {needsOverflow && (
                <Popover open={overflowOpen} onOpenChange={setOverflowOpen}>
                    <PopoverTrigger asChild>
                        <button
                            disabled={disabled}
                            className={cn(
                                'flex items-center justify-center gap-1 font-medium transition-all rounded-r-md',
                                'h-8 px-2.5 text-xs',
                                selectedInOverflow.length > 0
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                                disabled && 'cursor-not-allowed'
                            )}
                        >
                            <span>
                                {selectedInOverflow.length > 0 ? `+${selectedInOverflow.length}` : 'More'}
                            </span>
                            <ChevronDown className="h-3 w-3" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-44 p-1 gap-0">
                        {overflowOptions.map((option) => {
                            const Icon = option.icon;
                            const selected = isSelected(option.value);
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => toggleOption(option.value)}
                                    className={cn(
                                        'w-full flex items-center gap-2 px-2 py-1 text-xs rounded-sm transition-colors',
                                        selected
                                            ? 'bg-accent text-accent-foreground'
                                            : 'hover:bg-muted'
                                    )}
                                >
                                    {Icon && <Icon className="h-3.5 w-3.5" />}
                                    <span className="flex-1 text-left truncate">{option.label}</span>
                                    {selected && <Check className="h-3.5 w-3.5" />}
                                </button>
                            );
                        })}
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
}

