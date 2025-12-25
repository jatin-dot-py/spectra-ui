import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export interface NumericalInputProps {
    /** Current value */
    value: number;
    /** Called when value changes */
    onChange: (value: number) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Additional className */
    className?: string;
    /** Display variant */
    variant?: 'input' | 'slider';
    /** Min value (for slider) */
    min?: number;
    /** Max value (for slider) */
    max?: number;
    /** Step value */
    step?: number;
}

export function NumericalInput({
    value,
    onChange,
    placeholder = '0',
    disabled = false,
    className,
    variant = 'input',
    min = 0,
    max = 100,
    step = 1,
}: NumericalInputProps) {
    const [inputValue, setInputValue] = useState(String(value));

    // Sync with external value changes
    useEffect(() => {
        setInputValue(String(value));
    }, [value]);

    // Slider variant
    if (variant === 'slider') {
        return (
            <div className={cn('flex items-center gap-3 flex-1', className)}>
                <Slider
                    value={[value]}
                    onValueChange={(vals) => onChange(vals[0])}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    className="flex-1"
                />
                <span className="text-xs font-mono text-muted-foreground w-10 text-right">
                    {value}
                </span>
            </div>
        );
    }

    // Input variant (default)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);

        // Parse and emit valid numbers
        const parsed = parseFloat(newValue);
        if (!isNaN(parsed)) {
            onChange(parsed);
        } else if (newValue === '' || newValue === '-') {
            // Allow empty or just minus sign during typing
            onChange(0);
        }
    };

    const handleBlur = () => {
        // On blur, ensure we have a valid number displayed
        const parsed = parseFloat(inputValue);
        if (isNaN(parsed)) {
            setInputValue('0');
            onChange(0);
        } else {
            setInputValue(String(parsed));
        }
    };

    return (
        <Input
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className={cn(
                'h-8 text-xs flex-1 bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors font-mono',
                className
            )}
        />
    );
}

