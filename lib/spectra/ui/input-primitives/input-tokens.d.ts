/**
 * Centralized design tokens for input primitives.
 * All input components should import from here to ensure consistency.
 *
 * IMPORTANT: When modifying these values, all components using them
 * will automatically update. This is the single source of truth.
 */
export declare const INPUT_TOKENS: {
    /** Standard height for all inline inputs (28px) */
    readonly height: "h-7";
    /** Background color - matches Shadcn Input for consistency */
    readonly bg: "bg-transparent dark:bg-input/30";
    readonly bgHover: "hover:bg-muted/50";
    readonly bgFocus: "focus:bg-background";
    /** Border behavior */
    readonly border: "border border-transparent";
    readonly borderHover: "hover:border-border";
    readonly borderFocus: "focus:border-border";
    readonly borderFocusWithin: "focus-within:border-border";
    /** Standard text size */
    readonly text: "text-xs";
    /** Placeholder text */
    readonly placeholder: "placeholder:text-muted-foreground/50";
    /** Disabled state */
    readonly disabled: "disabled:opacity-50 disabled:cursor-not-allowed";
    readonly disabledContainer: "opacity-50 cursor-not-allowed";
    /** Transition */
    readonly transition: "transition-colors";
    /** Standard icon size (14px) */
    readonly iconSize: "h-3.5 w-3.5";
    /** Small icon size (12px) */
    readonly iconSmall: "h-3 w-3";
    /** Chevron (dropdown indicator) */
    readonly chevron: "h-3 w-3 opacity-50";
    /** Dropdown container padding */
    readonly dropdownPadding: "p-1";
    /** Dropdown gap override (removes default popover gap) */
    readonly dropdownGap: "gap-0";
    /** Dropdown item base styles */
    readonly dropdownItem: "w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors";
    /** Dropdown selected state */
    readonly dropdownSelected: "bg-accent text-accent-foreground";
    /** Dropdown unselected state */
    readonly dropdownUnselected: "hover:bg-muted text-muted-foreground hover:text-foreground";
    /** Dropdown header */
    readonly dropdownHeader: "px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border";
    /** Button group container */
    readonly buttonGroupContainer: "inline-flex h-7 items-center bg-transparent dark:bg-input/30 border border-transparent hover:border-border";
    /** Individual button in group */
    readonly buttonGroupItem: "flex items-center justify-center gap-1.5 font-medium transition-colors h-full px-2.5 text-xs";
    /** Button selected state */
    readonly buttonSelected: "bg-accent text-accent-foreground";
    /** Button unselected state */
    readonly buttonUnselected: "text-muted-foreground hover:text-foreground hover:bg-muted/50";
    /** Full-width trigger button */
    readonly triggerButton: "w-full flex items-center justify-between gap-2 h-7 px-2 text-xs bg-transparent dark:bg-input/30 border border-transparent hover:border-border hover:bg-muted/50 focus:border-border transition-colors";
    /** Trigger button disabled overrides */
    readonly triggerButtonDisabled: "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-transparent dark:disabled:hover:bg-input/30";
    /** Compact icon trigger (for iconTrigger prop) */
    readonly iconTrigger: "inline-flex items-center justify-center gap-1 h-7 px-2 bg-transparent dark:bg-input/30 border border-transparent hover:border-border hover:bg-muted/50 focus:border-border transition-colors";
};
/** Type for accessing token keys */
export type InputTokenKey = keyof typeof INPUT_TOKENS;
