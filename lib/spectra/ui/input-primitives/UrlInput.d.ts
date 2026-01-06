import { TextInputProps } from './TextInput';
export interface UrlInputProps extends TextInputProps {
    /** Favicon size (16, 32, 64, etc.) */
    faviconSize?: number;
}
export declare function UrlInput({ value, onChange, faviconSize, className, ...props }: UrlInputProps): import("react/jsx-runtime").JSX.Element;
