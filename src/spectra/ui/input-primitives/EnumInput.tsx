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
import { INPUT_TOKENS } from './input-tokens';

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
                                INPUT_TOKENS.iconTrigger,
                                borderless && 'bg-transparent border-transparent hover:bg-muted/30',
                                disabled && INPUT_TOKENS.disabledContainer
                            )}
                        >
                            <TriggerIcon className="h-4 w-4" />
                            <ChevronDown className={INPUT_TOKENS.chevron} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="start" className={cn('w-48', INPUT_TOKENS.dropdownPadding, INPUT_TOKENS.dropdownGap)}>
                        {dropdownTitle && (
                            <div className={cn(INPUT_TOKENS.dropdownHeader, 'mb-1')}>
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
                                        INPUT_TOKENS.dropdownItem,
                                        isSelected
                                            ? INPUT_TOKENS.dropdownSelected
                                            : INPUT_TOKENS.dropdownUnselected
                                    )}
                                >
                                    {OptIcon && <OptIcon className={INPUT_TOKENS.iconSize} />}
                                    <span className="flex-1 text-left">{option.label}</span>
                                    {isSelected && <Check className={INPUT_TOKENS.iconSize} />}
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
                <SelectTrigger size="sm" className={cn(INPUT_TOKENS.text, INPUT_TOKENS.bg, 'border-transparent', INPUT_TOKENS.borderHover, INPUT_TOKENS.borderFocus, INPUT_TOKENS.transition)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {dropdownTitle && (
                        <div className={cn(INPUT_TOKENS.dropdownHeader, 'mb-1')}>
                            {dropdownTitle}
                        </div>
                    )}
                    {options.map((option) => {
                        const OptIcon = option.icon;
                        return (
                            <SelectItem key={option.value} value={option.value} className={INPUT_TOKENS.text}>
                                <div className="flex items-center gap-2">
                                    {OptIcon && <OptIcon className={INPUT_TOKENS.iconSize} />}
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
                    INPUT_TOKENS.buttonGroupItem,
                    isFirst && 'rounded-l-md',
                    isLast && !needsOverflow && 'rounded-r-md',
                    !isFirst && !isLast && 'rounded-none',
                    isSelected
                        ? INPUT_TOKENS.buttonSelected
                        : INPUT_TOKENS.buttonUnselected,
                    disabled && INPUT_TOKENS.disabledContainer
                )}
            >
                {showIcon && <Icon className={INPUT_TOKENS.iconSize} />}
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
            INPUT_TOKENS.buttonGroupContainer,
            borderless && 'bg-transparent border-transparent',
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
                                INPUT_TOKENS.buttonGroupItem,
                                'rounded-r-md',
                                selectedInOverflow
                                    ? INPUT_TOKENS.buttonSelected
                                    : INPUT_TOKENS.buttonUnselected,
                                disabled && 'cursor-not-allowed'
                            )}
                        >
                            {selectedInOverflow ? (
                                <>
                                    {selectedInOverflow.icon && buttonDisplay !== 'text' && (
                                        <selectedInOverflow.icon className={INPUT_TOKENS.iconSize} />
                                    )}
                                    {buttonDisplay !== 'icon' && (
                                        <span className="truncate">{selectedInOverflow.label}</span>
                                    )}
                                </>
                            ) : (
                                <span>More</span>
                            )}
                            <ChevronDown className={INPUT_TOKENS.iconSmall} />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className={cn('w-44', INPUT_TOKENS.dropdownPadding, INPUT_TOKENS.dropdownGap)}>
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
                                        INPUT_TOKENS.dropdownItem,
                                        isSelected
                                            ? INPUT_TOKENS.dropdownSelected
                                            : INPUT_TOKENS.dropdownUnselected
                                    )}
                                >
                                    {Icon && <Icon className={INPUT_TOKENS.iconSize} />}
                                    <span className="flex-1 text-left truncate">{option.label}</span>
                                    {isSelected && <Check className={INPUT_TOKENS.iconSize} />}
                                </button>
                            );
                        })}
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
}
