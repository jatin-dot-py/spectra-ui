import { Checkbox } from '../../../components/ui/checkbox';
import * as React from 'react';
export interface BooleanInputProps extends Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, 'checked' | 'onCheckedChange' | 'value' | 'onChange'> {
    value: boolean;
    onChange: (value: boolean) => void;
    /** Visual variant of the input */
    variant?: 'checkbox' | 'switch' | 'radio';
}
export declare function BooleanInput({ value, onChange, className, variant, ...props }: BooleanInputProps): import("react/jsx-runtime").JSX.Element;
