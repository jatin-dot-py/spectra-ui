import { ReactNode } from 'react';
import { GroupItemProps } from './GroupItem';
export interface GroupProps {
    /** Group content - should be GroupItem components */
    children: ReactNode;
    /** Optional description text for the group */
    description?: string;
}
export declare function Group({ children, description }: GroupProps): import("react/jsx-runtime").JSX.Element;
export interface GroupItemConfig {
    /** Group item title */
    title: string;
    /** Optional icon */
    icon?: GroupItemProps['icon'];
    /** Group item content */
    children: ReactNode;
    /** Whether the group item can be collapsed */
    collapsible?: boolean;
    /** Whether expanded by default */
    defaultExpanded?: boolean;
    /** Whether to indent children */
    indentChildren?: boolean;
    /** Optional action icon */
    actionIcon?: GroupItemProps['actionIcon'];
    /** Action icon click handler */
    onActionIconClick?: () => void;
    /** Optional badge text */
    badgeText?: string;
}
export interface GroupConfigProps {
    /** Array of group item configurations */
    items: GroupItemConfig[];
    /** Optional description text for the group */
    description?: string;
}
export declare function GroupConfig({ items, description }: GroupConfigProps): import("react/jsx-runtime").JSX.Element;
export { GroupItem, type GroupItemProps } from './GroupItem';
