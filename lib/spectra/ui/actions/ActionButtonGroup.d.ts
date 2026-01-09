import { ReactNode } from 'react';
export interface ActionButtonGroupProps {
    /** Action buttons to stack together */
    children: ReactNode;
    /** Orientation of the button group */
    orientation?: 'horizontal' | 'vertical';
    /** Gap size between buttons */
    gap?: 'none' | 'sm' | 'md' | 'lg';
    /** Alignment of buttons */
    align?: 'start' | 'center' | 'end';
}
export declare function ActionButtonGroup({ children, orientation, gap, align, }: ActionButtonGroupProps): import("react/jsx-runtime").JSX.Element;
