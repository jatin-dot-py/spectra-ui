import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { type SpectraIconType } from '@/spectra/types';

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

export function ActionButton({
    label,
    icon: Icon,
    tooltip,
    variant = 'default',
    size = 'default',
    onClick,
    disabled = false,
    loading = false,
    iconOnly = false,
}: ActionButtonProps) {
    const isDisabled = disabled || loading;

    const buttonContent = (
        <Button
            variant={variant}
            size={iconOnly ? `icon-${size === 'default' ? 'sm' : size}` as 'icon-xs' | 'icon-sm' | 'icon-lg' : size}
            onClick={onClick}
            disabled={isDisabled}
            aria-label={iconOnly ? label : undefined}
        >
            {loading ? (
                <Spinner className="h-3.5 w-3.5" />
            ) : (
                Icon && <Icon className="shrink-0" />
            )}
            {!iconOnly && <span>{label}</span>}
        </Button>
    );

    // Wrap with tooltip if tooltip text is provided
    if (tooltip) {
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    {buttonContent}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        );
    }

    return buttonContent;
}

