import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface LabeledInputGroupProps {
    children: ReactNode;
    className?: string;
}

export function LabeledInputGroup({ children, className }: LabeledInputGroupProps) {
    return (
        <div className={cn('space-y-2', className)}>
            {children}
        </div>
    );
}
