import { ReactNode } from 'react';
export interface ActionButtonGroupProps {
    /** Action buttons to stack together */
    children: ReactNode;
    /** Orientation of the button group */
    orientation?: 'horizontal' | 'vertical';
    /** Gap size between buttons */
    gap?: 'none' | 'sm' | 'md' | 'lg';
    /** Main axis alignment (justify) */
    align?: 'start' | 'center' | 'end';
    /** Cross axis alignment - how buttons align perpendicular to orientation */
    itemsAlign?: 'start' | 'center' | 'end' | 'stretch';
}
export declare function ActionButtonGroup({ children, orientation, gap, align, itemsAlign, }: ActionButtonGroupProps): import("react/jsx-runtime").JSX.Element;
