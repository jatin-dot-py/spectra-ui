import { ReactNode } from 'react';
import { SpectraIconType } from '../../types';
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
}
export declare function GroupItem({ title, icon: Icon, children, collapsible, defaultExpanded, indentChildren, actionIcon: ActionIcon, onActionIconClick, badgeText, alwaysShowAction, }: GroupItemProps): import("react/jsx-runtime").JSX.Element;
