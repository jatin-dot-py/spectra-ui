import { ReactNode } from 'react';
import { SpectraIconType } from '../../types';
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
export declare function GroupTab({ items, orientation, defaultTab, description, }: GroupTabProps): import("react/jsx-runtime").JSX.Element;
