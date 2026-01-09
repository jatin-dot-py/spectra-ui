import { ReactNode } from 'react';
import { SpectraIconType } from '../../types';
import { GroupSize } from './sizeConfig';
export interface GroupTabItem {
    /** Tab title */
    title: string;
    /** Optional icon displayed in the tab */
    icon?: SpectraIconType;
    /** Optional badge text */
    badgeText?: string;
    /** Tab panel content */
    children: ReactNode;
    /** Show warning indicator (amber triangle icon) */
    warning?: boolean;
    /** Show error indicator (red circle icon) - takes priority over warning */
    error?: boolean;
    /** Show notification indicator (accent bell icon), or pass a number to show count */
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
    /** Size variant */
    size?: GroupSize;
}
export declare function GroupTab({ items, orientation, defaultTab, description, className, size, }: GroupTabProps): import("react/jsx-runtime").JSX.Element;
