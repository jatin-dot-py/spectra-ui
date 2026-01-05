import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Type, Hash, ToggleLeft, Braces, CircleSlash, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { TextInput } from './TextInput';
import { NumericalInput } from './NumericalInput';
import { BooleanInput } from './BooleanInput';
import { ObjectInput } from './ObjectInput';

export type ValueType = 'null' | 'string' | 'number' | 'boolean' | 'object';
export type DynamicValue = null | string | number | boolean | Record<string, unknown>;

const TYPE_CONFIG = {
    null: { label: 'Null', icon: CircleSlash, default: null },
    string: { label: 'String', icon: Type, default: '' },
    number: { label: 'Number', icon: Hash, default: 0 },
    boolean: { label: 'Boolean', icon: ToggleLeft, default: false },
    object: { label: 'Object', icon: Braces, default: {} },
} as const;

export interface DynamicInputProps {
    /** Current value */
    value: DynamicValue;
    /** Called when value changes */
    onChange: (value: DynamicValue) => void;
    /** Restrict which types are selectable */
    allowedTypes?: ValueType[];
    /** Disabled state */
    disabled?: boolean;
}

function detectValueType(value: DynamicValue): ValueType {
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'string') return 'string';
    if (typeof value === 'number') return 'number';
    if (typeof value === 'boolean') return 'boolean';
    if (typeof value === 'object') return 'object';
    return 'null';
}

export function DynamicInput({
    value,
    onChange,
    allowedTypes = ['null', 'string', 'number', 'boolean', 'object'],
    disabled = false,
}: DynamicInputProps) {
    const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

    const currentType = useMemo(() => detectValueType(value), [value]);

    const handleTypeChange = (newType: ValueType) => {
        if (newType === currentType) {
            setTypeDropdownOpen(false);
            return;
        }
        onChange(TYPE_CONFIG[newType].default as DynamicValue);
        setTypeDropdownOpen(false);
    };

    const CurrentTypeIcon = TYPE_CONFIG[currentType].icon;

    const renderValueInput = () => {
        switch (currentType) {
            case 'null':
                return (
                    <div className="flex-1 h-8 flex items-center px-3 text-xs text-muted-foreground italic bg-muted/20">
                        null
                    </div>
                );
            case 'string':
                return (
                    <TextInput
                        value={value as string}
                        onChange={onChange}
                        placeholder="Enter text..."
                        disabled={disabled}
                        className="flex-1"
                    />
                );
            case 'number':
                return (
                    <NumericalInput
                        value={value as number}
                        onChange={onChange}
                        disabled={disabled}
                        className="flex-1"
                    />
                );
            case 'boolean':
                return (
                    <div className="flex-1 flex items-center">
                        <BooleanInput
                            variant='radio'
                            value={value as boolean}
                            onChange={onChange}
                            disabled={disabled}
                        />
                    </div>
                );
            case 'object':
                return (
                    <ObjectInput
                        value={value as Record<string, unknown>}
                        onChange={(v) => onChange(v as DynamicValue)}
                        disabled={disabled}
                        label="Edit Object"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={cn(
            'inline-flex items-center gap-2',
            disabled && 'opacity-50'
        )}>
            {/* Type Selector */}
            <Popover open={typeDropdownOpen} onOpenChange={setTypeDropdownOpen}>
                <PopoverTrigger asChild>
                    <button
                        disabled={disabled}
                        className={cn(
                            'inline-flex items-center justify-center gap-1 h-8 px-2',
                            'bg-muted/30 border border-border/50 hover:border-border hover:bg-muted/50 transition-colors',
                            disabled && 'cursor-not-allowed'
                        )}
                    >
                        <CurrentTypeIcon className="h-4 w-4" />
                        <ChevronDown className="h-3 w-3 opacity-50" />
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-36 p-1 gap-0">
                    {allowedTypes.map((type) => {
                        const Icon = TYPE_CONFIG[type].icon;
                        const isSelected = type === currentType;
                        return (
                            <button
                                key={type}
                                onClick={() => handleTypeChange(type)}
                                className={cn(
                                    'w-full flex items-center gap-2 px-2 py-1.5 text-xs rounded-sm transition-colors',
                                    isSelected
                                        ? 'bg-accent text-accent-foreground'
                                        : 'hover:bg-muted'
                                )}
                            >
                                <Icon className="h-3.5 w-3.5" />
                                <span className="flex-1 text-left">{TYPE_CONFIG[type].label}</span>
                            </button>
                        );
                    })}
                </PopoverContent>
            </Popover>

            {/* Value Input */}
            {renderValueInput()}
        </div>
    );
}
