import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { type SpectraIconType } from '@/spectra/types';

export type TimelineIconVariant = 'primary' | 'destructive';

export interface TimelineItem {
    /** Icon to display in the timeline marker */
    icon: SpectraIconType;
    /** Color variant for the icon marker */
    iconVariant?: TimelineIconVariant;
    /** Title of the timeline step */
    title: string;
    /** Optional description */
    description?: string;
    /** Optional custom content */
    children?: React.ReactNode;
    /** Optional CTA button text */
    ctaText?: string;
    /** Optional CTA click handler */
    ctaOnClick?: () => void;
}

export interface BasicTimelineProps {
    /** Array of timeline items */
    items: TimelineItem[];
    /** Optional className for the container */
    className?: string;
}

export function BasicTimeline({ items, className }: BasicTimelineProps) {
    const variantStyles: Record<TimelineIconVariant, string> = {
        primary: 'bg-primary/10 text-primary border-primary/20',
        destructive: 'bg-destructive/10 text-destructive border-destructive/20',
    };

    return (
        <div className={cn('relative', className)}>
            {items.map((item, index) => {
                const Icon = item.icon;
                const variant = item.iconVariant ?? 'primary';
                const isLast = index === items.length - 1;

                return (
                    <div key={index} className="relative flex gap-4">
                        {/* Timeline connector line */}
                        {!isLast && (
                            <div
                                className="absolute left-[15px] top-[36px] bottom-0 w-px bg-border"
                                aria-hidden="true"
                            />
                        )}

                        {/* Icon marker */}
                        <div
                            className={cn(
                                'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border',
                                variantStyles[variant]
                            )}
                        >
                            <Icon className="h-4 w-4" />
                        </div>

                        {/* Content */}
                        <div className={cn('flex-1 pb-8', isLast && 'pb-0')}>
                            <h4 className="font-medium text-sm leading-8 text-foreground">
                                {item.title}
                            </h4>
                            {item.description && (
                                <p className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                </p>
                            )}
                            {item.children && (
                                <div className="mt-3">{item.children}</div>
                            )}
                            {item.ctaText && item.ctaOnClick && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={item.ctaOnClick}
                                    className="mt-3"
                                >
                                    {item.ctaText}
                                </Button>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
