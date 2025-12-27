import { LucideIcon } from 'lucide-react';
import { SpectraIconType } from '../../types';
export interface EnumOption {
    /** The actual value stored */
    value: string;
    /** Display text shown to user */
    label: string;
    /** Optional icon component */
    icon?: SpectraIconType;
    /** Tooltip text on hover */
    hoverText?: string;
}
export interface EnumInputProps {
    /** Current selected value */
    value: string;
    /** Called when value changes */
    onChange: (value: string) => void;
    /** Available options */
    options: EnumOption[];
    /** Variant: 'dropdown' for select, 'buttons' for inline button group */
    variant?: 'dropdown' | 'buttons';
    /** For buttons: what to display - 'icon', 'text', or 'both' */
    buttonDisplay?: 'icon' | 'text' | 'both';
    /** Max buttons to show inline (rest go to overflow dropdown) */
    maxInline?: number;
    /** Placeholder text for dropdown */
    placeholder?: string;
    /** Title shown in dropdown (above options) */
    dropdownTitle?: string;
    /** Icon to use as compact dropdown trigger. When provided, only shows this icon + chevron */
    iconTrigger?: LucideIcon;
    /** Disabled state */
    disabled?: boolean;
    /** Remove border/shadow for seamless grouping in LabeledInput */
    borderless?: boolean;
}
export declare function EnumInput({ value, onChange, options, variant, buttonDisplay, maxInline, placeholder, dropdownTitle, iconTrigger: TriggerIcon, disabled, borderless, }: EnumInputProps): import("react/jsx-runtime").JSX.Element;
