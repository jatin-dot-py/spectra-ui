import { SpectraIconType } from '../../types';
export interface ErrorProps {
    /** Custom icon (defaults to AlertCircle) */
    icon?: SpectraIconType;
    /** Error message title */
    title: string;
    /** Action button label */
    actionLabel: string;
    /** Action button click handler */
    onAction: () => void;
    /** Optional external help link */
    learnMoreUrl?: string;
}
export declare function Error({ icon: Icon, title, actionLabel, onAction, learnMoreUrl, }: ErrorProps): import("react/jsx-runtime").JSX.Element;
