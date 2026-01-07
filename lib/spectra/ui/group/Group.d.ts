import { ReactNode } from 'react';
import { GroupItemProps } from './GroupItem';
import { GroupSize } from './sizeConfig';
export interface GroupProps {
    /** Group content - should be GroupItem components */
    children: ReactNode;
    /** Optional description text for the group */
    description?: string;
    /** Size variant */
    size?: GroupSize;
}
export declare function Group({ children, description, size }: GroupProps): import("react/jsx-runtime").JSX.Element;
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
    /** Optional info popover with description and reference link */
    info?: GroupItemProps['info'];
}
export interface GroupConfigProps {
    /** Array of group item configurations */
    items: GroupItemConfig[];
    /** Optional description text for the group */
    description?: string;
    /** Size variant */
    size?: GroupSize;
}
export declare function GroupConfig({ items, description, size }: GroupConfigProps): import("react/jsx-runtime").JSX.Element;
export { GroupItem, type GroupItemProps } from './GroupItem';
