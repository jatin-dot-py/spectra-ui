import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';
import { type GroupSize, sizeConfig } from './sizeConfig';

export interface GroupItemProps {
    /** Group item title */
    title: string;
    /** Optional icon displayed before the title */
    icon?: SpectraIconType;
    /** Group item content */
    children: ReactNode;
    /** Whether the group item can be collapsed (accordion mode) */
    collapsible?: boolean;
    /** Whether group item is expanded by default (only applies when collapsible is true) */
    defaultExpanded?: boolean;
    /** Whether to add left indentation to children */
    indentChildren?: boolean;
    /** Optional action icon displayed on the right */
    actionIcon?: SpectraIconType;
    /** Click handler for the action icon */
    onActionIconClick?: () => void;
    /** Optional badge text displayed next to the title */
    badgeText?: string;
    /** If true, action icon is always visible (not just on hover) */
    alwaysShowAction?: boolean;
    /** Size variant */
    size?: GroupSize;
}

export function GroupItem({
    title,
    icon: Icon,
    children,
    collapsible = true,
    defaultExpanded = true,
    indentChildren = true,
    actionIcon: ActionIcon,
    onActionIconClick,
    badgeText,
    alwaysShowAction = false,
    size = 'sm',
}: GroupItemProps) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const s = sizeConfig[size];

    // When not collapsible, always show content
    const isExpanded = collapsible ? expanded : true;

    const handleToggle = () => {
        if (collapsible) {
            setExpanded(!expanded);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if ((e.key === 'Enter' || e.key === ' ') && collapsible) {
            e.preventDefault();
            setExpanded(!expanded);
        }
    };

    return (
        <div>
            {/* Header */}
            <div
                role={collapsible ? 'button' : undefined}
                tabIndex={collapsible ? 0 : undefined}
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
                className={cn(
                    'w-full flex items-center justify-between font-medium text-muted-foreground transition-colors group  tracking-wider select-none',
                    s.headerPy,
                    s.text,
                    collapsible && 'hover:text-foreground cursor-pointer'
                )}
            >
                <div className={cn('flex items-center', s.gap)}>
                    {/* Chevron - always shown, but disabled look when not collapsible */}
                    <ChevronDown
                        className={cn(
                            'transition-transform',
                            s.iconSm,
                            !isExpanded && '-rotate-90',
                            !collapsible && 'opacity-30'
                        )}
                    />
                    {/* Optional Icon */}
                    {Icon && <Icon className={s.icon} />}
                    {/* Title */}
                    <span>{title}</span>
                    {/* Badge */}
                    {badgeText && (
                        <span className={cn('font-normal normal-case rounded-sm bg-muted text-muted-foreground/70', s.badgeText, s.badgePx, s.badgePy)}>
                            {badgeText}
                        </span>
                    )}
                </div>

                {/* Action Icon */}
                {ActionIcon && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onActionIconClick?.();
                        }}
                        className={cn(
                            'p-0.5 rounded-sm hover:bg-muted transition-all',
                            alwaysShowAction ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        )}
                    >
                        <ActionIcon className={s.icon} />
                    </button>
                )}
            </div>

            {/* Content */}
            {isExpanded && (
                <div className={cn(s.contentPb, s.contentPt, indentChildren && s.indent)}>
                    {children}
                </div>
            )}
        </div>
    );
}
