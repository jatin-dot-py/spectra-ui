import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { X, Hash, Type } from 'lucide-react';
import { Popover, PopoverContent, PopoverAnchor } from '@/components/ui/popover';
import { INPUT_TOKENS } from './input-tokens';

export type PathSegment = string | number;

export interface JsonPathInputProps {
    /** Current path segments */
    value: PathSegment[];
    /** Called when path changes */
    onChange: (value: PathSegment[]) => void;
    /** Placeholder */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Additional className */
    className?: string;
}

/**
 * Try to parse pasted content as a JSON array of path segments.
 * Returns null if not valid.
 */
function tryParseJsonArray(input: string): PathSegment[] | null {
    const trimmed = input.trim();
    if (!trimmed.startsWith('[') || !trimmed.endsWith(']')) return null;

    try {
        const parsed = JSON.parse(trimmed);
        if (!Array.isArray(parsed)) return null;

        // Validate all elements are strings or numbers
        const isValid = parsed.every(
            (item) => typeof item === 'string' || typeof item === 'number'
        );
        if (!isValid) return null;

        return parsed as PathSegment[];
    } catch {
        return null;
    }
}

export function JsonPathInput({
    value,
    onChange,
    placeholder = 'Type and press Enter...',
    disabled = false,
    className,
}: JsonPathInputProps) {
    const [inputValue, setInputValue] = useState('');
    const [showTypeChoice, setShowTypeChoice] = useState(false);
    const [pendingNumber, setPendingNumber] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const addSegment = (segment: PathSegment) => {
        onChange([...value, segment]);
        setInputValue('');
        setShowTypeChoice(false);
        setPendingNumber('');
    };

    const addSegments = (segments: PathSegment[]) => {
        onChange([...value, ...segments]);
        setInputValue('');
        setShowTypeChoice(false);
        setPendingNumber('');
    };

    const removeSegment = (index: number) => {
        if (disabled) return;
        onChange(value.filter((_, i) => i !== index));
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pasted = e.clipboardData.getData('text');
        const parsed = tryParseJsonArray(pasted);

        if (parsed && parsed.length > 0) {
            e.preventDefault();
            addSegments(parsed);
        }
        // Otherwise let normal paste happen
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const trimmed = inputValue.trim();

        if (e.key === 'Enter' && trimmed) {
            e.preventDefault();

            // First check if it's a JSON array
            const parsed = tryParseJsonArray(trimmed);
            if (parsed && parsed.length > 0) {
                addSegments(parsed);
                return;
            }

            // Check if it's a pure number
            if (/^\d+$/.test(trimmed)) {
                setPendingNumber(trimmed);
                setShowTypeChoice(true);
                setInputValue('');
            } else {
                addSegment(trimmed);
            }
        }

        if (e.key === 'Backspace' && !inputValue && value.length > 0) {
            removeSegment(value.length - 1);
        }

        if (e.key === 'Escape' && showTypeChoice) {
            setShowTypeChoice(false);
            setPendingNumber('');
        }
    };

    const chooseAsString = () => {
        addSegment(pendingNumber);
    };

    const chooseAsNumber = () => {
        addSegment(parseInt(pendingNumber, 10));
    };

    return (
        <Popover open={showTypeChoice} onOpenChange={(open) => !open && setShowTypeChoice(false)} modal={false}>
            <PopoverAnchor asChild>
                <div className={cn('relative flex-1', className)}>
                    <div
                        className={cn(
                            'flex flex-wrap items-center gap-1.5 min-h-7 px-2 py-1',
                            INPUT_TOKENS.bg, INPUT_TOKENS.border, INPUT_TOKENS.transition,
                            INPUT_TOKENS.borderFocusWithin,
                            !disabled && INPUT_TOKENS.borderHover,
                            disabled && INPUT_TOKENS.disabledContainer
                        )}
                        onClick={() => inputRef.current?.focus()}
                    >
                        {/* Chips */}
                        {value.map((seg, i) => (
                            <span
                                key={i}
                                className={cn(
                                    'inline-flex items-center gap-1 h-5 px-1.5 rounded text-xs font-mono',
                                    typeof seg === 'number'
                                        ? 'bg-primary/20 text-primary'
                                        : 'bg-accent text-accent-foreground'
                                )}
                            >
                                {typeof seg === 'number' ? (
                                    <Hash className="h-2.5 w-2.5" />
                                ) : (
                                    <Type className="h-2.5 w-2.5" />
                                )}
                                {String(seg)}
                                {!disabled && (
                                    <button
                                        type="button"
                                        onClick={(e) => { e.stopPropagation(); removeSegment(i); }}
                                        className="opacity-50 hover:opacity-100 hover:text-destructive"
                                    >
                                        <X className="h-2.5 w-2.5" />
                                    </button>
                                )}
                            </span>
                        ))}

                        {/* Input */}
                        {!disabled && (
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                onPaste={handlePaste}
                                placeholder={value.length === 0 ? placeholder : ''}
                                className={cn('flex-1 min-w-[80px] h-5 bg-transparent outline-none', INPUT_TOKENS.text, INPUT_TOKENS.placeholder)}
                            />
                        )}
                    </div>
                </div>
            </PopoverAnchor>

            {/* Type choice dropdown */}
            <PopoverContent
                align="start"
                sideOffset={5}
                className={cn(INPUT_TOKENS.dropdownPadding, INPUT_TOKENS.dropdownGap, 'w-auto min-w-[200px]')}
                onOpenAutoFocus={(e) => e.preventDefault()}
            >
                <div className={cn(INPUT_TOKENS.dropdownHeader, 'mb-1')}>
                    Choose type for "{pendingNumber}"
                </div>
                <button
                    type="button"
                    onClick={chooseAsString}
                    className={cn(INPUT_TOKENS.dropdownItem, INPUT_TOKENS.dropdownUnselected)}
                >
                    <Type className={INPUT_TOKENS.iconSize} />
                    <span className="flex-1 text-left">String key</span>
                    <code className="text-muted-foreground font-mono">"{pendingNumber}"</code>
                </button>
                <button
                    type="button"
                    onClick={chooseAsNumber}
                    className={cn(INPUT_TOKENS.dropdownItem, INPUT_TOKENS.dropdownUnselected)}
                >
                    <Hash className={cn(INPUT_TOKENS.iconSize, 'text-primary')} />
                    <span className="flex-1 text-left">Array index</span>
                    <code className="text-primary font-mono">[{pendingNumber}]</code>
                </button>
            </PopoverContent>
        </Popover>
    );
}
