import { ActionButtonProps } from './ActionButton';
export interface ActionDropdownProps {
    /** Trigger button label */
    label?: string;
    /** Dropdown menu items - same props as ActionButton */
    items: ActionButtonProps[];
}
export declare function ActionDropdown({ label, items }: ActionDropdownProps): import("react/jsx-runtime").JSX.Element;
