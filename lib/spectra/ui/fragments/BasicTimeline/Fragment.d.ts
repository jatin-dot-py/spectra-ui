import { SpectraIconType } from '../../../types';
import * as React from 'react';
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
export declare function BasicTimeline({ items, className }: BasicTimelineProps): import("react/jsx-runtime").JSX.Element;
