export interface KeyValuePairTableProps {
    /** Key-value data to display */
    data: Record<string, string>;
    /** Label for the key column (default: "Name") */
    keyLabel?: string;
    /** Label for the value column (default: "Value") */
    valueLabel?: string;
    /** Show copy button in table header (default: false) */
    showCopy?: boolean;
    /** Show copy-as-JSON button in table header (default: false) */
    /** Show copy-as-JSON button in table header (default: false) */
    showCopyJson?: boolean;
    /** Hide the table header entirely (default: false) */
    hideHeader?: boolean;
}
export declare function KeyValuePairTable({ data, keyLabel, valueLabel, showCopy, showCopyJson, hideHeader, }: KeyValuePairTableProps): import("react/jsx-runtime").JSX.Element;
