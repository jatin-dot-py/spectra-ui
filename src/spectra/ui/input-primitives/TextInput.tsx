import { useState, useRef, type InputHTMLAttributes } from 'react';
import { Input } from '@/components/ui/input';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
                        'h-7 text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50',
                        hasSuggestions && 'pr-6',
                        noRing && 'focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border',
                        isFrozen && 'opacity-60',
                        className
                    )}
                    {...props}
                />
                {hasSuggestions && (
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground/50" />
                )}
            </div>

            {open && filtered.length > 0 && (
                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-popover border border-border rounded-md shadow-md py-1">
                    <div className="max-h-40 overflow-auto">
                        {filtered.map((suggestion) => (
                            <button
                                key={suggestion}
                                type="button"
                                className={cn(
                                    'w-full px-2 py-1.5 text-xs text-left hover:bg-accent hover:text-accent-foreground',
                                    suggestion === value && 'bg-accent/50'
                                )}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => handleSelect(suggestion)}
                                title={suggestion}
                            >
                                <span className="block truncate">{suggestion}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
