import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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

const gapStyles = {
    none: 'gap-0',
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3',
};

const alignStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
};

const itemsAlignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
};

export function ActionButtonGroup({
    children,
    orientation = 'horizontal',
    gap = 'sm',
    align = 'start',
    itemsAlign = 'start',
}: ActionButtonGroupProps) {
    return (
        <div
            className={cn(
                'flex',
                orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
                gapStyles[gap],
                alignStyles[align],
                itemsAlignStyles[itemsAlign]
            )}
        >
            {children}
        </div>
    );
}

