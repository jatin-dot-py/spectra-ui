import { LucideIcon } from 'lucide-react';
export interface MultiEnumOption {
    /** The actual value stored */
    value: string;
    /** Display text shown to user */
    label: string;
    /** Optional icon component */
    icon?: LucideIcon;
    /** Tooltip text on hover */
    hoverText?: string;
}
export interface MultiEnumSelectProps {
    /** Currently selected values */
    value: string[];
    /** Called when selection changes */
    onChange: (value: string[]) => void;
    /** Available options */
    options: MultiEnumOption[];
    /** Variant: 'dropdown' for multi-select, 'buttons' for toggle button group */
    variant?: 'dropdown' | 'buttons';
    /** For buttons: what to display - 'icon', 'text', or 'both' */
    buttonDisplay?: 'icon' | 'text' | 'both';
    /** Max buttons to show inline (rest go to overflow dropdown) */
    maxInline?: number;
    /** Placeholder text for dropdown */
    placeholder?: string;
    /** Title shown in dropdown (above options) */
    dropdownTitle?: string;
    /** Icon to use as compact dropdown trigger. When provided, only shows this icon + count badge + chevron */
    iconTrigger?: LucideIcon;
    /** Disabled state */
    disabled?: boolean;
    /** Remove border/shadow for seamless grouping in LabeledInput */
    borderless?: boolean;
}
export declare function MultiEnumSelect({ value, onChange, options, variant, buttonDisplay, maxInline, placeholder, dropdownTitle, iconTrigger: TriggerIcon, disabled, borderless, }: MultiEnumSelectProps): import("react/jsx-runtime").JSX.Element;
