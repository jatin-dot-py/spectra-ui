import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Type, Hash, ToggleLeft, Braces, CircleSlash, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { TextAreaInput } from './TextAreaInput';
import { NumericalInput } from './NumericalInput';
import { BooleanInput } from './BooleanInput';
import { ObjectInput } from './ObjectInput';
import { INPUT_TOKENS } from './input-tokens';

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
    /** Optional suggestions for autocomplete (used by string and object types) */
    suggestions?: string[];
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
    suggestions = [],
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
                    <div className={cn('flex-1 flex items-center px-3 italic text-muted-foreground', INPUT_TOKENS.height, INPUT_TOKENS.text, INPUT_TOKENS.bg)}>
                        null
                    </div>
                );
            case 'string':
                return (
                    <TextAreaInput
                        value={value as string}
                        onChange={onChange}
                        placeholder="Enter text..."
                        disabled={disabled}
                        suggestions={suggestions}
                        className="flex-1"
                        noResize
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
                        suggestions={suggestions}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className={cn(
            'flex flex-1 items-center gap-2',
            disabled && 'opacity-50'
        )}>
            {/* Type Selector */}
            <Popover open={typeDropdownOpen} onOpenChange={setTypeDropdownOpen} modal={true}>
                <PopoverTrigger asChild>
                    <button
                        disabled={disabled}
                        className={cn(
                            INPUT_TOKENS.iconTrigger,
                            disabled && 'cursor-not-allowed'
                        )}
                    >
                        <CurrentTypeIcon className="h-4 w-4" />
                        <ChevronDown className={INPUT_TOKENS.chevron} />
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start" className={cn('w-36', INPUT_TOKENS.dropdownPadding, INPUT_TOKENS.dropdownGap)}>
                    {allowedTypes.map((type) => {
                        const Icon = TYPE_CONFIG[type].icon;
                        const isSelected = type === currentType;
                        return (
                            <button
                                key={type}
                                onClick={() => handleTypeChange(type)}
                                className={cn(
                                    INPUT_TOKENS.dropdownItem,
                                    isSelected
                                        ? INPUT_TOKENS.dropdownSelected
                                        : INPUT_TOKENS.dropdownUnselected
                                )}
                            >
                                <Icon className={INPUT_TOKENS.iconSize} />
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
