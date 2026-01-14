import React, { type ReactNode, Children, isValidElement } from 'react';
import { cn } from '@/lib/utils';
import { GroupItem, type GroupItemProps } from './GroupItem';
import { groupStyles } from './sizeConfig';

export interface GroupProps {
    /** Group content - should be GroupItem components */
    children: ReactNode;
    /** Optional description text for the group */
    description?: string;
}

function flattenChildren(children: ReactNode): ReactNode[] {
    return Children.toArray(children).flatMap((child) => {
        if (isValidElement(child) && child.type === React.Fragment) {
            return flattenChildren((child.props as any).children);
        }
        return child;
    });
}

export function Group({ children, description }: GroupProps) {
    const childArray = flattenChildren(children).filter(isValidElement);
    const s = groupStyles;

    return (
        <div className="space-y-1">
            {description && (
                <div className={cn("text-muted-foreground mb-2 px-1", s.text)}>
                    {description}
                </div>
            )}
            {childArray.map((child, index) => (
                <div key={index}>
                    {/* Separator - more visible border between items */}
                    {index > 0 && (
                        <div className="border-t border-border my-2" />
                    )}
                    {child}
                </div>
            ))}
        </div>
    );
}


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
}

export function GroupConfig({ items, description }: GroupConfigProps) {
    return (
        <Group description={description}>
            {items.map((item, index) => (
                <GroupItem
                    key={item.title + index}
                    title={item.title}
                    icon={item.icon}
                    collapsible={item.collapsible}
                    defaultExpanded={item.defaultExpanded}
                    indentChildren={item.indentChildren}
                    actionIcon={item.actionIcon}
                    onActionIconClick={item.onActionIconClick}
                    badgeText={item.badgeText}
                    info={item.info}
                >
                    {item.children}
                </GroupItem>
            ))}
        </Group>
    );
}

export { GroupItem, type GroupItemProps } from './GroupItem';
