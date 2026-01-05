import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ChevronDown, Check, type LucideIcon } from 'lucide-react';
import { type SpectraIconType } from '@/spectra/types';

export interface EnumOption {
    /** The actual value stored */
    value: string;
    /** Display text shown to user */
    label: string;
    /** Optional icon component */
    icon?: SpectraIconType;
    /** Tooltip text on hover */
    hoverText?: string;
}

export interface EnumInputProps {
    /** Current selected value */
    value: string;
    /** Called when value changes */
    onChange: (value: string) => void;
    /** Available options */
    options: EnumOption[];
    /** Variant: 'dropdown' for select, 'buttons' for inline button group */
    variant?: 'dropdown' | 'buttons';
    /** For buttons: what to display - 'icon', 'text', or 'both' */
    buttonDisplay?: 'icon' | 'text' | 'both';
    /** Max buttons to show inline (rest go to overflow dropdown) */
    maxInline?: number;
    /** Placeholder text for dropdown */
    placeholder?: string;
    /** Title shown in dropdown (above options) */
    dropdownTitle?: string;
    /** Icon to use as compact dropdown trigger. When provided, only shows this icon + chevron */
    iconTrigger?: LucideIcon;
    /** Disabled state */
    disabled?: boolean;
    /** Remove border/shadow for seamless grouping in LabeledInput */
    borderless?: boolean;
}

export function EnumInput({
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
}: EnumInputProps) {
    const [overflowOpen, setOverflowOpen] = useState(false);
    const [iconDropdownOpen, setIconDropdownOpen] = useState(false);

    const handleSelect = useCallback(
        (optionValue: string) => {
            if (!disabled) {
                onChange(optionValue);
            }
        },
        [onChange, disabled]
    );

    // Auto-determine variant if not specified
    const effectiveVariant = variant ?? (options.length > 5 ? 'dropdown' : 'buttons');
    // const selectedOption = options.find(opt => opt.value === value);

    // ========================================================================
    // Dropdown Variant
    // ========================================================================
    if (effectiveVariant === 'dropdown') {
        // Icon-only trigger mode - use Popover instead of Select
        if (TriggerIcon) {
            return (
                <Popover open={iconDropdownOpen} onOpenChange={setIconDropdownOpen}>
                    <PopoverTrigger asChild>
                        <button
                            disabled={disabled}
                            className={cn(
                                'inline-flex items-center justify-center gap-1 h-7 px-2',
                                !borderless && 'bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50',
                                borderless && 'hover:bg-muted/30',
                                'transition-colors',
                                disabled && 'opacity-50 cursor-not-allowed'
                            )}
                        >
                            <TriggerIcon className="h-4 w-4" />
                            <ChevronDown className="h-3 w-3 opacity-50" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className="w-48 p-1 gap-0">
                        {dropdownTitle && (
                            <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1">
                                {dropdownTitle}
                            </div>
                        )}
                        {options.map((option) => {
                            const OptIcon = option.icon;
                            const isSelected = value === option.value;
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        handleSelect(option.value);
                                        setIconDropdownOpen(false);
                                    }}
                                    className={cn(
                                        'w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors',
                                        isSelected
                                            ? 'bg-accent text-accent-foreground'
                                            : 'hover:bg-muted'
                                    )}
                                >
                                    {OptIcon && <OptIcon className="h-3.5 w-3.5" />}
                                    <span className="flex-1 text-left">{option.label}</span>
                                    {isSelected && <Check className="h-3.5 w-3.5" />}
                                </button>
                            );
                        })}
                    </PopoverContent>
                </Popover>
            );
        }

        // Standard dropdown using Select
        return (
            <Select value={value || ''} onValueChange={handleSelect} disabled={disabled}>
                <SelectTrigger className="h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border transition-colors">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {dropdownTitle && (
                        <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border mb-1">
                            {dropdownTitle}
                        </div>
                    )}
                    {options.map((option) => {
                        const OptIcon = option.icon;
                        return (
                            <SelectItem key={option.value} value={option.value} className="text-xs">
                                <div className="flex items-center gap-2">
                                    {OptIcon && <OptIcon className="h-3.5 w-3.5" />}
                                    {option.label}
                                </div>
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        );
    }

    // ========================================================================
    // Button Variant
    // ========================================================================
    const needsOverflow = maxInline !== undefined && options.length > maxInline;
    const inlineOptions = needsOverflow ? options.slice(0, maxInline - 1) : options;
    const overflowOptions = needsOverflow ? options.slice(maxInline - 1) : [];
    const selectedInOverflow = overflowOptions.find(opt => opt.value === value);

    const renderButton = (option: EnumOption, isFirst: boolean, isLast: boolean) => {
        const isSelected = value === option.value;
        const Icon = option.icon;

        const showIcon = Icon && (buttonDisplay === 'icon' || buttonDisplay === 'both');
        const showText = buttonDisplay === 'text' || buttonDisplay === 'both';

        const button = (
            <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                disabled={disabled}
                className={cn(
                    'flex items-center justify-center gap-1.5 font-medium transition-all',
                    'h-6 px-2.5 text-xs',
                    isFirst && 'rounded-l-md',
                    isLast && !needsOverflow && 'rounded-r-md',
                    !isFirst && !isLast && 'rounded-none',
                    isSelected
                        ? 'bg-background text-foreground shadow-sm'
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
            {/* Inline buttons */}
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
                                'h-6 px-2.5 text-xs',
                                selectedInOverflow
                                    ? 'bg-background text-foreground shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50',
                                disabled && 'cursor-not-allowed'
                            )}
                        >
                            {selectedInOverflow ? (
                                <>
                                    {selectedInOverflow.icon && buttonDisplay !== 'text' && (
                                        <selectedInOverflow.icon className="h-3.5 w-3.5" />
                                    )}
                                    {buttonDisplay !== 'icon' && (
                                        <span className="truncate">{selectedInOverflow.label}</span>
                                    )}
                                </>
                            ) : (
                                <span>More</span>
                            )}
                            <ChevronDown className="h-3 w-3" />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-44 p-1 gap-0">
                        {overflowOptions.map((option) => {
                            const Icon = option.icon;
                            const isSelected = value === option.value;
                            return (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        handleSelect(option.value);
                                        setOverflowOpen(false);
                                    }}
                                    className={cn(
                                        'w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors',
                                        isSelected
                                            ? 'bg-accent text-accent-foreground'
                                            : 'hover:bg-muted'
                                    )}
                                >
                                    {Icon && <Icon className="h-3.5 w-3.5" />}
                                    <span className="flex-1 text-left truncate">{option.label}</span>
                                    {isSelected && <Check className="h-3.5 w-3.5" />}
                                </button>
                            );
                        })}
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
}
