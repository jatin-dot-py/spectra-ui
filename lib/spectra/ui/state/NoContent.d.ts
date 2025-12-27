import { SpectraIconType } from '../../types';
export interface NoContentProps {
    /** Custom icon (defaults to Inbox) */
    icon?: SpectraIconType;
    /** Empty state message title */
    title: string;
    /** Action button label */
    actionLabel: string;
    /** Action button click handler */
    onAction: () => void;
    /** Optional external help link */
    learnMoreUrl?: string;
}
export declare function NoContent({ icon: Icon, title, actionLabel, onAction, learnMoreUrl, }: NoContentProps): import("react/jsx-runtime").JSX.Element;
