export interface ContentTabProps {
    /** Tab display name */
    name: string;
    /** Tab icon - lazy icon name string */
    icon: string;
    /** Click handler when tab is clicked */
    onClick: () => void;
    /** Whether this tab is currently active */
    isActive?: boolean;
    /** Optional close button handler */
    onClose?: () => void;
}
export declare function ContentTab({ name, icon, onClick, isActive, onClose, }: ContentTabProps): import("react/jsx-runtime").JSX.Element;
