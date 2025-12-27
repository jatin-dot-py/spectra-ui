import { SpectraIconType } from '../../types';
import { StateSize } from './sizeConfig';
export interface NoContentProps {
    /** Custom icon (defaults to Inbox) */
    icon?: SpectraIconType;
    /** Empty state message title */
    title: string;
    /** Action button label (optional) */
    actionLabel?: string;
    /** Action button click handler (optional) */
    onAction?: () => void;
    /** Optional external help link */
    learnMoreUrl?: string;
    /** Size variant */
    size?: StateSize;
}
export declare function NoContent({ icon: Icon, title, actionLabel, onAction, learnMoreUrl, size, }: NoContentProps): import("react/jsx-runtime").JSX.Element;
