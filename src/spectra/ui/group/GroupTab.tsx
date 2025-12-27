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
                            {item.badgeText && (
                                <span className={cn('font-normal rounded-sm bg-muted text-muted-foreground/70 ml-auto', s.badgeText, s.badgePx, s.badgePy)}>
                                    {item.badgeText}
                                </span>
                            )}
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
