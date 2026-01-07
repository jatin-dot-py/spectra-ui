export interface InfoPopoverProps {
    /** Description text shown in the popover */
    description: string;
    /** Optional reference URL for "Learn more" link */
    referenceUrl?: string;
    /** Label for the reference link, defaults to "Learn more" */
    referenceLabel?: string;
    /** Additional className for the trigger icon */
    className?: string;
}
/**
 * A help icon that opens a popover with contextual information.
 * Used by LabeledInput and GroupItem for unified info UX.
 */
export declare function InfoPopover({ description, referenceUrl, referenceLabel, className, }: InfoPopoverProps): import("react/jsx-runtime").JSX.Element;
