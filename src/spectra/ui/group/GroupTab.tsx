import { type ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';
import { type SpectraIconType } from '@/spectra/types';

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
}

export function GroupTab({
    items,
    orientation = 'horizontal',
    defaultTab,
    description,
}: GroupTabProps) {
    const [activeTab, setActiveTab] = useState(
        defaultTab || (items.length > 0 ? items[0].title : '')
    );

    const activeItem = items.find((item) => item.title === activeTab);

    // Horizontal tabs
    if (orientation === 'horizontal') {
        return (
            <div className="space-y-0">
                {description && (
                    <div className="text-xs text-muted-foreground mb-2 px-1">
                        {description}
                    </div>
                )}
                {/* Tab headers */}
                <div className="flex border-b border-border">
                    {items.map((item) => {
                        const Icon = item.icon;
                        const isActive = item.title === activeTab;
                        return (
                            <button
                                key={item.title}
                                type="button"
                                onClick={() => setActiveTab(item.title)}
                                className={cn(
                                    'flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors border-b-2 -mb-px',
                                    isActive
                                        ? 'border-primary text-foreground'
                                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30'
                                )}
                            >
                                {Icon && <Icon className="h-3.5 w-3.5" />}
                                <span>{item.title}</span>
                                {item.badgeText && (
                                    <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground/70">
                                        {item.badgeText}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
                {/* Tab content */}
                <div className="pt-3">
                    {activeItem?.children}
                </div>
            </div>
        );
    }

    // Vertical tabs
    return (
        <div className="flex gap-0">
            {description && (
                <div className="text-xs text-muted-foreground mb-2 px-1 col-span-2">
                    {description}
                </div>
            )}
            {/* Tab headers - vertical sidebar */}
            <div className="flex flex-col border-r border-border pr-0 min-w-[120px]">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = item.title === activeTab;
                    return (
                        <button
                            key={item.title}
                            type="button"
                            onClick={() => setActiveTab(item.title)}
                            className={cn(
                                'flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors border-r-2 -mr-px text-left',
                                isActive
                                    ? 'border-primary text-foreground bg-muted/30'
                                    : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20'
                            )}
                        >
                            {Icon && <Icon className="h-3.5 w-3.5" />}
                            <span>{item.title}</span>
                            {item.badgeText && (
                                <span className="text-[10px] font-normal px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground/70 ml-auto">
                                    {item.badgeText}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
            {/* Tab content */}
            <div className="flex-1 pl-4">
                {activeItem?.children}
            </div>
        </div>
    );
}
