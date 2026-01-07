import { SpectraIconType } from '../../../types';
export interface HttpRequestMetadataProps {
    /** HTTP Method (e.g., GET, POST) */
    method: string;
    /** Full request URL */
    url: string;
    /** Response status code (optional - badge hidden when undefined/0) */
    status?: number | string;
    /** Optional status text if not included in status string */
    statusText?: string;
    /** Response MIME type */
    mimeType?: string;
    /** Whether a redirect occurred */
    isRedirect?: boolean;
    /** Response time in milliseconds */
    responseTimeMs?: number;
    /** Content size in bytes */
    contentSizeBytes?: number;
    /** Whether the request failed */
    failed?: boolean;
    /** Failure reason if failed: true */
    failureReason?: string;
    showActionButton?: boolean;
    actionButtonText?: string;
    actionButtonIcon?: SpectraIconType;
    onActionButtonClick?: () => void;
    actionButtonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    actionButtonTitle?: string;
}
export declare function HttpRequestMetadata({ method, url, status, statusText, mimeType, isRedirect, responseTimeMs, contentSizeBytes, failed, failureReason, showActionButton, actionButtonText, actionButtonIcon: ActionIcon, onActionButtonClick, actionButtonVariant, actionButtonTitle, }: HttpRequestMetadataProps): import("react/jsx-runtime").JSX.Element;
