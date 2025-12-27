export type StateSize = 'sm' | 'md' | 'lg';

export const sizeConfig = {
    sm: {
        // Container
        padding: 'p-3',
        gap: 'gap-1.5',
        // Icon container
        iconContainer: 'h-8 w-8',
        icon: 'h-4 w-4',
        // Text
        text: 'text-xs',
        titleText: 'text-sm',
        linkText: 'text-[10px]',
        linkIcon: 'h-2.5 w-2.5',
        // Button
        buttonMargin: 'mt-0.5',
        // Skeleton
        skeletonGap: 'gap-2',
        avatarSize: 'h-8 w-8',
        lineHeight: 'h-3',
        inputHeight: 'h-6',
        labelWidth: 'w-16',
    },
    md: {
        // Container
        padding: 'p-4',
        gap: 'gap-2',
        // Icon container
        iconContainer: 'h-10 w-10',
        icon: 'h-5 w-5',
        // Text
        text: 'text-sm',
        titleText: 'text-sm',
        linkText: 'text-xs',
        linkIcon: 'h-3 w-3',
        // Button
        buttonMargin: 'mt-1',
        // Skeleton
        skeletonGap: 'gap-3',
        avatarSize: 'h-10 w-10',
        lineHeight: 'h-4',
        inputHeight: 'h-8',
        labelWidth: 'w-20',
    },
    lg: {
        // Container
        padding: 'p-5',
        gap: 'gap-2.5',
        // Icon container
        iconContainer: 'h-12 w-12',
        icon: 'h-6 w-6',
        // Text
        text: 'text-base',
        titleText: 'text-base',
        linkText: 'text-sm',
        linkIcon: 'h-3.5 w-3.5',
        // Button
        buttonMargin: 'mt-2',
        // Skeleton
        skeletonGap: 'gap-4',
        avatarSize: 'h-12 w-12',
        lineHeight: 'h-5',
        inputHeight: 'h-10',
        labelWidth: 'w-24',
    },
} as const;
