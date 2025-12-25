import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import * as React from 'react';

export interface BooleanInputProps extends Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, 'checked' | 'onCheckedChange' | 'value' | 'onChange'> {
    value: boolean;
    onChange: (value: boolean) => void;
    /** Visual variant of the input */
    variant?: 'checkbox' | 'switch' | 'radio';
}

export function BooleanInput({
    value,
    onChange,
    className,
    variant = 'checkbox',
    ...props
}: BooleanInputProps) {
    const id = React.useId();

    if (variant === 'switch') {
        return (
            <Switch
                checked={value}
                onCheckedChange={(val) => onChange(!!val)}
                className={className}
                {...(props as any)}
            />
        );
    }

    if (variant === 'radio') {
        return (
            <RadioGroup
                value={value ? 'true' : 'false'}
                onValueChange={(val) => onChange(val === 'true')}
                className={cn('flex flex-row gap-4', className)}
                {...(props as any)}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="true" id={`${id}-true`} />
                    <label htmlFor={`${id}-true`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">True</label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="false" id={`${id}-false`} />
                    <label htmlFor={`${id}-false`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">False</label>
                </div>
            </RadioGroup>
        );
    }

    return (
        <Checkbox
            checked={value}
            onCheckedChange={(val) => onChange(!!val)}
            className={cn('h-3.5 w-3.5', className)}
            {...props}
        />
    );
}
