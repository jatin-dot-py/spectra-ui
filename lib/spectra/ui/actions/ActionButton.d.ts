import { SpectraIconType } from '../../types';
export interface ActionButtonProps {
    /** Button label text */
    label: string;
    /** Optional icon displayed before the label */
    icon?: SpectraIconType;
    /** Tooltip text shown on hover */
    tooltip?: string;
    /** Button variant */
    variant?: 'default' | 'secondary' | 'ghost' | 'destructive' | 'outline';
    /** Button size */
    size?: 'xs' | 'sm' | 'default' | 'lg';
    /** Click handler */
    onClick: () => void;
    /** Disabled state */
    disabled?: boolean;
    /** Loading state - shows spinner and disables button */
    loading?: boolean;
    /** Icon-only mode - hides label, shows only icon */
    iconOnly?: boolean;
}
export declare function ActionButton({ label, icon: Icon, tooltip, variant, size, onClick, disabled, loading, iconOnly, }: ActionButtonProps): import("react/jsx-runtime").JSX.Element;
