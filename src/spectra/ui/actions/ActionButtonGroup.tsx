import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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

export function ActionButtonGroup({
    children,
    orientation = 'horizontal',
    gap = 'sm',
    align = 'start',
}: ActionButtonGroupProps) {
    return (
        <div
            className={cn(
                'flex flex-wrap',
                orientation === 'vertical' ? 'flex-col' : 'flex-row',
                gapStyles[gap],
                alignStyles[align]
            )}
        >
            {children}
        </div>
    );
}
