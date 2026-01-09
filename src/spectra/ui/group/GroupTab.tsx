import { type ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';
import { type GroupSize, sizeConfig } from './sizeConfig';

export interface GroupTabItem {
    /** Tab title */
    title: string;
    /** Optional icon displayed in the tab */
    icon?: SpectraIconType;
    /** Optional badge text */
    badgeText?: string;
    /** Tab panel content */
    children: ReactNode;
    /** Show warning indicator (amber dot) */
    warning?: boolean;
    /** Show error indicator (red dot) - takes priority over warning */
    error?: boolean;
    /** Show notification indicator (accent dot), or pass a number to show count */
    notification?: boolean | number;
}

/** Status indicator component for tab headers */
function TabStatusIndicator({
    warning,
    error,
    notification,
    size,
}: {
    warning?: boolean;
    error?: boolean;
    notification?: boolean | number;
    size: GroupSize;
}) {
    const dotSize = size === 'sm' ? 'h-2 w-2' : 'h-2.5 w-2.5';

    // Error takes priority, then warning, then notification
    if (error) {
        return (
            <span
                className={cn('rounded-full bg-destructive', dotSize)}
                aria-label="Error"
            />
        );
    }

    if (warning) {
        return (
            <span
                className={cn('rounded-full bg-amber-500', dotSize)}
                aria-label="Warning"
            />
        );
    }

    if (notification !== undefined && notification !== false) {
        const count = typeof notification === 'number' ? notification : null;
        const displayCount = count !== null ? (count > 99 ? '99+' : count.toString()) : null;

        if (displayCount) {
            return (
                <span
                    className={cn(
                        'inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium',
                        size === 'sm'
                            ? 'min-w-[16px] h-4 px-1 text-[10px]'
                            : 'min-w-[18px] h-[18px] px-1.5 text-[11px]'
                    )}
                    aria-label={`${count} notifications`}
                >
                    {displayCount}
                </span>
            );
        }

        // Simple dot for boolean notification
        return (
            <span
                className={cn(
                    'rounded-full bg-primary',
                    size === 'sm' ? 'h-2 w-2' : 'h-2.5 w-2.5'
                )}
                aria-label="New notification"
            />
        );
    }

    return null;
}

export interface GroupTabProps {
    /** Array of tab items */
    items: GroupTabItem[];
    /** Tab orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Default active tab (by title) */
    defaultTab?: string;
    /** Optional description text */
    description?: string;
    /** Optional className for the root element */
    className?: string;
    /** Size variant */
    size?: GroupSize;
}

export function GroupTab({
    items,
    orientation = 'horizontal',
    defaultTab,
    description,
    className,
    size = 'sm',
}: GroupTabProps) {
    const [activeTab, setActiveTab] = useState(
        defaultTab || (items.length > 0 ? items[0].title : '')
    );
    const s = sizeConfig[size];

    const activeItem = items.find((item) => item.title === activeTab);

    // Horizontal tabs
    if (orientation === 'horizontal') {
        return (
            <div className={cn("flex flex-col", className)}>
                {description && (
                    <div className={cn("text-muted-foreground mb-2 px-1", s.text)}>
                        {description}
                    </div>
                )}
                {/* Tab headers */}
                <div className="flex border-b border-border shrink-0">
                    {items.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.title === activeTab;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActiveTab(item.title)}
                                className={cn(
                                    'flex items-center font-medium transition-colors border-b-2 -mb-px',
                                    s.gap,
                                    s.tabPx,
                                    s.tabPy,
                                    s.text,
                                    isActive
                                        ? 'border-primary text-foreground'
                                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30'
                                )}
                            >
                                {Icon && <Icon className={s.icon} />}
                                <span>{item.title}</span>
                                {item.badgeText && (
                                    <span className={cn('font-normal rounded-sm bg-muted text-muted-foreground/70', s.badgeText, s.badgePx, s.badgePy)}>
                                        {item.badgeText}
                                    </span>
                                )}
                                <TabStatusIndicator
                                    warning={item.warning}
                                    error={item.error}
                                    notification={item.notification}
                                    size={size}
                                />
                            </button>
                        );
                    })}
                </div>
                {/* Tab content */}
                <div className={cn("flex-1 min-h-0 overflow-auto", s.contentPadding)}>
                    {activeItem?.children}
                </div>
            </div>
        );
    }

    // Vertical tabs
    return (
        <div className={cn("flex gap-0", className)}>
            {description && (
                <div className={cn("text-muted-foreground mb-2 px-1 col-span-2", s.text)}>
                    {description}
                </div>
            )}
            {/* Tab headers - vertical sidebar */}
            <div className={cn("flex flex-col border-r border-border pr-0 shrink-0", s.sidebarMinW)}>
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.title === activeTab;
                    return (
                        <button
                            key={item.title}
                            type="button"
                            onClick={() => setActiveTab(item.title)}
                            className={cn(
                                'flex items-center font-medium transition-colors border-r-2 -mr-px text-left',
                                s.gap,
                                s.tabPx,
                                s.tabPy,
                                s.text,
                                isActive
                                    ? 'border-primary text-foreground bg-muted/30'
                                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20'
                            )}
                        >
                            {Icon && <Icon className={s.icon} />}
                            <span>{item.title}</span>
                            <div className="flex items-center gap-1.5 ml-auto">
                                {item.badgeText && (
                                    <span className={cn('font-normal rounded-sm bg-muted text-muted-foreground/70', s.badgeText, s.badgePx, s.badgePy)}>
                                        {item.badgeText}
                                    </span>
                                )}
                                <TabStatusIndicator
                                    warning={item.warning}
                                    error={item.error}
                                    notification={item.notification}
                                    size={size}
                                />
                            </div>
                        </button>
                    );
                })}
            </div>
            {/* Tab content */}
            <div className={cn("flex-1 min-w-0 overflow-auto", s.contentPadding)}>
                {activeItem?.children}
            </div>
        </div>
    );
}
