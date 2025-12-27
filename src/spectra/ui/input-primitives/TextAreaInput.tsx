import { useState, useRef, type TextareaHTMLAttributes } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface TextAreaInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
    /** Current value */
    value: string;
    /** Called when value changes — receives clean string, not event */
    onChange: (value: string) => void;
    /** Optional suggestions for autocomplete dropdown */
    suggestions?: string[];
    /** Disable focus ring */
    noRing?: boolean;
    /** Disable resize handle */
    noResize?: boolean;
    /** Auto-grow height based on content (default: true) */
    autoGrow?: boolean;
}

// Get the current word being typed (last word after whitespace)
function getCurrentWord(value: string): string {
    const words = value.split(/\s+/);
    return words[words.length - 1] || '';
}

export function TextAreaInput({
    value,
    onChange,
    suggestions = [],
    noRing = false,
    noResize = false,
    autoGrow = true,
    className,
    ...props
}: TextAreaInputProps) {
    const [open, setOpen] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Filter suggestions based on current word being typed
    const currentWord = getCurrentWord(value);
    const filtered = currentWord
        ? suggestions.filter((s) => s.toLowerCase().includes(currentWord.toLowerCase()))
        : suggestions;

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
        textareaRef.current?.focus();
    };

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (suggestions.length > 0) {
            setOpen(true);
        }
        props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        setTimeout(() => setOpen(false), 150);
        props.onBlur?.(e);
    };

    const hasSuggestions = suggestions.length > 0;

    return (
        <div className="relative flex-1">
            <div className="relative">
                <Textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={cn(
                        'min-h-[60px] text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors placeholder:text-muted-foreground/50 scrollbar-none',
                        hasSuggestions && 'pr-6',
                        noRing && 'focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-border',
                        noResize ? 'resize-none' : 'resize-y',
                        !autoGrow && 'field-sizing-fixed',
                        className
                    )}
                    {...props}
                />
                {hasSuggestions && (
                    <ChevronDown className="absolute right-2 top-3 h-3 w-3 text-muted-foreground/50" />
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
