import { useState, useRef, type InputHTMLAttributes } from 'react';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverAnchor } from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { INPUT_TOKENS } from './input-tokens';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    /** Current value */
    value: string;
    /** Called when value changes — receives clean string, not event */
    onChange: (value: string) => void;
    /** Optional suggestions for autocomplete dropdown */
    suggestions?: string[];
    /** Disable focus ring */
    noRing?: boolean;
    /** Frozen state - click to thaw and enable editing (like Candy Crush ice blocks) */
    frozen?: boolean;
}

// Get the current word being typed (last word after space)
function getCurrentWord(value: string): string {
    const words = value.split(/\s+/);
    return words[words.length - 1] || '';
}

export function TextInput({
    value,
    onChange,
    suggestions = [],
    noRing = false,
    frozen = false,
    className,
    ...props
}: TextInputProps) {
    const [open, setOpen] = useState(false);
    const [isThawed, setIsThawed] = useState(!frozen);
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter suggestions based on current word being typed
    const currentWord = getCurrentWord(value);
    const filtered = currentWord
        ? suggestions.filter((s) => s.toLowerCase().includes(currentWord.toLowerCase()))
        : suggestions;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);
        if (suggestions.length > 0) {
            setOpen(true);
        }
    };

    const handleSelect = (suggestion: string) => {
        // Replace the current word with the suggestion
        const words = value.split(/\s+/);
        words[words.length - 1] = suggestion;
        onChange(words.join(' '));
        setOpen(false);
        inputRef.current?.focus();
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (suggestions.length > 0) {
            setOpen(true);
        }
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setTimeout(() => setOpen(false), 150);
        props.onBlur?.(e);
    };

    const handleThaw = () => {
        if (frozen && !isThawed) {
            setIsThawed(true);
            setTimeout(() => inputRef.current?.focus(), 0);
        }
    };

    const hasSuggestions = suggestions.length > 0;
    const isFrozen = frozen && !isThawed;

    return (
        <Popover open={open && filtered.length > 0} onOpenChange={setOpen} modal={false}>
            <PopoverAnchor asChild>
                <div className="relative flex-1">
                    <div className="relative">
                        {/* Frozen overlay */}
                        {isFrozen && (
                            <div
                                onClick={handleThaw}
                                className={cn(
                                    'absolute inset-0 z-10 cursor-pointer',
                                    'bg-muted/50 border border-border/50',
                                    'flex items-center justify-center',
                                    'hover:bg-accent/50 hover:border-border transition-colors duration-150'
                                )}
                            >
                                <span className="text-[10px] text-muted-foreground"></span>
                            </div>
                        )}
                        <Input
                            ref={inputRef}
                            value={value}
                            onChange={handleInputChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            disabled={isFrozen || props.disabled}
                            className={cn(
                                INPUT_TOKENS.height, INPUT_TOKENS.text, INPUT_TOKENS.bg,
                                'border-transparent', INPUT_TOKENS.borderHover, INPUT_TOKENS.borderFocus,
                                'focus:bg-background', INPUT_TOKENS.transition, INPUT_TOKENS.placeholder,
                                hasSuggestions && 'pr-6',
                                noRing && 'focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border',
                                isFrozen && 'opacity-60',
                                className
                            )}
                            {...props}
                        />
                        {hasSuggestions && (
                            <ChevronDown className={cn('absolute right-2 top-1/2 -translate-y-1/2', INPUT_TOKENS.iconSmall, 'text-muted-foreground/50')} />
                        )}
                    </div>
                </div>
            </PopoverAnchor>

            <PopoverContent
                align="start"
                sideOffset={5}
                className={cn(INPUT_TOKENS.dropdownPadding, 'min-w-[var(--radix-popover-trigger-width)] bg-popover border border-border rounded-md shadow-lg')}
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <div className="max-h-40 overflow-auto">
                    {filtered.map((suggestion) => (
                        <button
                            key={suggestion}
                            type="button"
                            className={cn(
                                INPUT_TOKENS.dropdownItem,
                                'text-left',
                                suggestion === value ? INPUT_TOKENS.dropdownSelected : INPUT_TOKENS.dropdownUnselected
                            )}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => handleSelect(suggestion)}
                            title={suggestion}
                        >
                            <span className="block truncate">{suggestion}</span>
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
