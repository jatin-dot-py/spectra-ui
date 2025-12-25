import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
    /** Display variant */
    variant?: 'stepper' | 'slider';
}

export function NumberInput({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className,
    variant = 'stepper',
}: NumberInputProps) {
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
                <span className="text-xs font-mono text-muted-foreground w-8 text-right">
                    {value}
                </span>
            </div>
        );
    }

    // Stepper variant (default)
    const handleIncrement = () => {
        if (disabled) return;
        const newValue = value + step;
        if (max === undefined || newValue <= max) {
            onChange(newValue);
        }
    };

    const handleDecrement = () => {
        if (disabled) return;
        const newValue = value - step;
        if (min === undefined || newValue >= min) {
            onChange(newValue);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = parseInt(e.target.value, 10);
        if (!isNaN(parsed)) {
            let clamped = parsed;
            if (min !== undefined) clamped = Math.max(min, clamped);
            if (max !== undefined) clamped = Math.min(max, clamped);
            onChange(clamped);
        }
    };

    return (
        <div className={cn('flex items-center gap-0.5 flex-1', className)}>
            <button
                type="button"
                onClick={handleDecrement}
                disabled={disabled || (min !== undefined && value <= min)}
                className="h-8 w-8 flex items-center justify-center rounded-md bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                <Minus className="h-3 w-3" />
            </button>
            <Input
                type="number"
                value={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                onChange={handleInputChange}
                className="h-8 text-center text-xs bg-muted/30 border-transparent hover:border-border focus:border-border focus:bg-background transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button
                type="button"
                onClick={handleIncrement}
                disabled={disabled || (max !== undefined && value >= max)}
                className="h-8 w-8 flex items-center justify-center rounded-md bg-muted/30 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                <Plus className="h-3 w-3" />
            </button>
        </div>
    );
}

