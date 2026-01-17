import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { INPUT_TOKENS } from './input-tokens';

export interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    /** Minimum value. If undefined, no lower bound is enforced. */
    min?: number;
    /** Maximum value. If undefined, no upper bound is enforced. */
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
    /** Display variant. Note: 'slider' requires both min and max to be defined. */
    variant?: 'stepper' | 'slider';
}

export function NumberInput({
    value,
    onChange,
    min,
    max,
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
                className={cn(INPUT_TOKENS.height, 'w-7 flex items-center justify-center', INPUT_TOKENS.bg, 'hover:bg-muted', INPUT_TOKENS.disabled, INPUT_TOKENS.transition)}
            >
                <Minus className={INPUT_TOKENS.iconSmall} />
            </button>
            <Input
                type="number"
                value={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
                onChange={handleInputChange}
                className={cn(INPUT_TOKENS.height, 'text-center', INPUT_TOKENS.text, INPUT_TOKENS.bg, 'border-transparent', INPUT_TOKENS.borderHover, INPUT_TOKENS.borderFocus, 'focus:bg-background', INPUT_TOKENS.transition, '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none')}
            />
            <button
                type="button"
                onClick={handleIncrement}
                disabled={disabled || (max !== undefined && value >= max)}
                className={cn(INPUT_TOKENS.height, 'w-7 flex items-center justify-center', INPUT_TOKENS.bg, 'hover:bg-muted', INPUT_TOKENS.disabled, INPUT_TOKENS.transition)}
            >
                <Plus className={INPUT_TOKENS.iconSmall} />
            </button>
        </div>
    );
}

