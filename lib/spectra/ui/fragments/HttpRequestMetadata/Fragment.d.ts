import { SpectraIconType } from '../../../types';
export interface HttpRequestMetadataProps {
    /** HTTP Method (e.g., GET, POST) */
    method: string;
    /** Full request URL */
    url: string;
    /** Response status code (e.g., 200, 404) or string (e.g. "200 OK") */
    status: number | string;
    /** Optional status text if not included in status string */
    statusText?: string;
    /** Response MIME type */
    mimeType?: string;
    showActionButton?: boolean;
    actionButtonText?: string;
    actionButtonIcon?: SpectraIconType;
    onActionButtonClick?: () => void;
    actionButtonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    actionButtonTitle?: string;
}
export declare function HttpRequestMetadata({ method, url, status, statusText, mimeType, showActionButton, actionButtonText, actionButtonIcon: ActionIcon, onActionButtonClick, actionButtonVariant, actionButtonTitle, }: HttpRequestMetadataProps): import("react/jsx-runtime").JSX.Element;
