/**
 * Centralized design tokens for input primitives.
 * All input components should import from here to ensure consistency.
 * 
 * IMPORTANT: When modifying these values, all components using them
 * will automatically update. This is the single source of truth.
 */

export const INPUT_TOKENS = {
    // ============================================
    // Base Input Appearance
    // ============================================

    /** Standard height for all inline inputs (28px) */
    height: 'h-7',

    /** Background color - matches Shadcn Input for consistency */
    bg: 'bg-transparent dark:bg-input/30',
    bgHover: 'hover:bg-muted/50',
    bgFocus: 'focus:bg-background',

    /** Border behavior */
    border: 'border border-transparent',
    borderHover: 'hover:border-border',
    borderFocus: 'focus:border-border',
    borderFocusWithin: 'focus-within:border-border',

    // ============================================
    // Text Styles
    // ============================================

    /** Standard text size */
    text: 'text-xs',

    /** Placeholder text */
    placeholder: 'placeholder:text-muted-foreground/50',

    // ============================================
    // States
    // ============================================

    /** Disabled state */
    disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
    disabledContainer: 'opacity-50 cursor-not-allowed',

    /** Transition */
    transition: 'transition-colors',

    // ============================================
    // Icons
    // ============================================

    /** Standard icon size (14px) */
    iconSize: 'h-3.5 w-3.5',

    /** Small icon size (12px) */
    iconSmall: 'h-3 w-3',

    /** Chevron (dropdown indicator) */
    chevron: 'h-3 w-3 opacity-50',

    // ============================================
    // Dropdown/Popover Content
    // ============================================

    /** Dropdown container padding */
    dropdownPadding: 'p-1',

    /** Dropdown gap override (removes default popover gap) */
    dropdownGap: 'gap-0',

    /** Dropdown item base styles */
    dropdownItem: 'w-full flex items-center gap-2 px-2 py-1.5 text-xs transition-colors',

    /** Dropdown selected state */
    dropdownSelected: 'bg-accent text-accent-foreground',

    /** Dropdown unselected state */
    dropdownUnselected: 'hover:bg-muted text-muted-foreground hover:text-foreground',

    /** Dropdown header */
    dropdownHeader: 'px-2 py-1.5 text-xs font-medium text-muted-foreground border-b border-border',

    // ============================================
    // Button Group (EnumInput, MultiEnumSelect buttons variant)
    // ============================================

    /** Button group container */
    buttonGroupContainer: 'inline-flex h-7 items-center bg-transparent dark:bg-input/30 border border-transparent hover:border-border',

    /** Individual button in group */
    buttonGroupItem: 'flex items-center justify-center gap-1.5 font-medium transition-colors h-full px-2.5 text-xs',

    /** Button selected state */
    buttonSelected: 'bg-accent text-accent-foreground',

    /** Button unselected state */
    buttonUnselected: 'text-muted-foreground hover:text-foreground hover:bg-muted/50',

    // ============================================
    // Trigger Buttons (ObjectInput, PythonInput, etc.)
    // ============================================

    /** Full-width trigger button */
    triggerButton: 'w-full flex items-center justify-between gap-2 h-7 px-2 text-xs bg-transparent dark:bg-input/30 border border-transparent hover:border-border hover:bg-muted/50 focus:border-border transition-colors',

    /** Trigger button disabled overrides */
    triggerButtonDisabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-transparent dark:disabled:hover:bg-input/30',

    /** Compact icon trigger (for iconTrigger prop) */
    iconTrigger: 'inline-flex items-center justify-center gap-1 h-7 px-2 bg-transparent dark:bg-input/30 border border-transparent hover:border-border hover:bg-muted/50 focus:border-border transition-colors',

} as const;

/** Type for accessing token keys */
export type InputTokenKey = keyof typeof INPUT_TOKENS;
