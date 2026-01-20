import { ReactNode } from 'react';
import { SpectraIconType } from '../../types';
export interface GroupTabItem {
    /** Tab title */
    title: string;
    /** Optional icon displayed in the tab */
    icon?: SpectraIconType;
    /** Optional badge text */
    badgeText?: string;
    /** Tab panel content (optional if using onClick only) */
    children?: ReactNode;
    /** Click handler - called when tab is clicked. If children also exist, tab switches after onClick. */
    onClick?: () => void;
    /** Show warning indicator (alert icon) */
    warning?: boolean;
    /** Show notification indicator (accent dot), or pass a number to show count */
    notification?: boolean | number;
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
}
export declare function GroupTab({ items, orientation, defaultTab, description, className, }: GroupTabProps): import("react/jsx-runtime").JSX.Element;
