'use client';

import { useState } from 'react';
import {
    Type, AlignLeft, CheckSquare, Image, Hash, Calculator, Braces,
    List, ListChecks, Bold, Italic, Underline, AlignCenter, AlignJustify,
    AlignRight, CircleSlash, type LucideIcon, Layers
} from 'lucide-react';
import type { ComponentConfig, ExampleItem, CategoryRegistry } from '../types';
import { generateCodeSnippet } from '../serialization';

// Component imports
import { TextInput } from '@/spectra/ui/input-primitives/TextInput';
import { TextAreaInput } from '@/spectra/ui/input-primitives/TextAreaInput';
import { BooleanInput } from '@/spectra/ui/input-primitives/BooleanInput';
import { IconInput } from '@/spectra/ui/input-primitives/IconInput';
import { NumericalInput } from '@/spectra/ui/input-primitives/NumericalInput';
import { NumberInput } from '@/spectra/ui/input-primitives/NumberInput';
import { ObjectInput } from '@/spectra/ui/input-primitives/ObjectInput';
import { EnumInput } from '@/spectra/ui/input-primitives/EnumInput';
import { MultiEnumSelect } from '@/spectra/ui/input-primitives/MultiEnumSelect';
import { DynamicInput } from '@/spectra/ui/input-primitives/DynamicInput';

// ============================================================================
// Base path for all primitives
// ============================================================================
export const PRIMITIVES_BASE_PATH = '@/spectra/ui/input-primitives';

// ============================================================================
// Helper: Stateful Example Wrapper
// ============================================================================
interface StatefulExampleProps<T> {
    initialValue: T;
    render: (value: T, onChange: (v: T) => void) => React.ReactNode;
}

function StatefulExample<T>({ initialValue, render }: StatefulExampleProps<T>) {
    const [value, setValue] = useState<T>(initialValue);
    return <>{render(value, setValue)}</>;
}

// ============================================================================
// Variant definition (internal use for building examples)
// ============================================================================
interface VariantDef {
    title: string;
    description?: string;
    props?: Record<string, any>;
    initialValue?: any;
}

// ============================================================================
// Helper function to create ExampleItem from variant
// ============================================================================
function createExample(
    componentName: string,
    Component: React.ComponentType<any>,
    variant: VariantDef
): ExampleItem {
    const code = generateCodeSnippet(componentName, variant.props);
    return {
        title: variant.title,
        description: variant.description,
        code,
        preview: (
            <StatefulExample
                initialValue={variant.initialValue ?? ''}
                render={(value, onChange) => (
                    <Component
                        {...(variant.props || {})}
                        value={value}
                        onChange={onChange}
                    />
                )}
            />
        ),
    };
}

// ============================================================================
// Helper function to build ComponentConfig
// ============================================================================
function buildComponentConfig(
    id: string,
    name: string,
    description: string,
    icon: LucideIcon,
    Component: React.ComponentType<any>,
    variants: VariantDef[]
): ComponentConfig {
    return {
        id,
        name,
        description,
        icon,
        importPath: `${PRIMITIVES_BASE_PATH}/${name}`,
        examples: variants.map(v => createExample(name, Component, v)),
    };
}

// ============================================================================
// Input Primitives Configuration
// ============================================================================
export function getInputPrimitivesComponents(): ComponentConfig[] {
    return [
        buildComponentConfig(
            'text-input',
            'TextInput',
            'Single-line text input with optional suggestions.',
            Type,
            TextInput,
            [
                { title: 'Default', props: { placeholder: 'Start typing...' } },
                { title: 'With Placeholder', props: { placeholder: 'Enter text...' } },
                { title: 'Disabled', props: { placeholder: 'Disabled input', disabled: true } },
                { title: 'No Ring', props: { placeholder: 'Focus me (no ring)', noRing: true } },
                {
                    title: 'With Suggestions',
                    props: {
                        placeholder: 'Type "temp"...',
                        suggestions: ['Template A', 'Template B', 'Template C', 'Temporary'],
                    },
                },
                {
                    title: 'Frozen',
                    description: 'Click to thaw and enable editing (like Candy Crush ice blocks)',
                    props: { placeholder: 'Frozen until clicked...', frozen: true },
                    initialValue: 'Click me to edit',
                },
            ]
        ),

        buildComponentConfig(
            'text-area-input',
            'TextAreaInput',
            'Multi-line text input with optional suggestions.',
            AlignLeft,
            TextAreaInput,
            [
                { title: 'Default (Auto-grow)', props: { placeholder: 'Start typing...' } },
                { title: 'With Placeholder', props: { placeholder: 'Enter description...' } },
                { title: 'Disabled', props: { placeholder: 'Disabled textarea', disabled: true } },
                { title: 'No Ring', props: { placeholder: 'Focus me (no ring)', noRing: true } },
                { title: 'Fixed Height (No Auto-grow)', props: { placeholder: 'Fixed 5 rows', rows: 5, autoGrow: false } },
                { title: 'No Resize Handle', props: { placeholder: 'Cannot resize manually', noResize: true } },
                {
                    title: 'With Suggestions (Word-based)',
                    props: { placeholder: 'Type "temp"...', suggestions: ['Template A', 'Template B', 'Template C'] },
                },
            ]
        ),

        buildComponentConfig(
            'boolean-input',
            'BooleanInput',
            'Boolean input with checkbox, switch, or radio variants.',
            CheckSquare,
            BooleanInput,
            [
                { title: 'Checkbox (Default)', initialValue: false },
                { title: 'Checkbox (Checked)', initialValue: true },
                { title: 'Checkbox (Disabled)', props: { disabled: true }, initialValue: false },
                { title: 'Switch', props: { variant: 'switch' }, initialValue: false },
                { title: 'Switch (On)', props: { variant: 'switch' }, initialValue: true },
                { title: 'Switch (Disabled)', props: { variant: 'switch', disabled: true }, initialValue: false },
                { title: 'Radio', props: { variant: 'radio' }, initialValue: false },
                { title: 'Radio (True)', props: { variant: 'radio' }, initialValue: true },
            ]
        ),

        buildComponentConfig(
            'icon-input',
            'IconInput',
            'Icon picker with search across multiple icon libraries.',
            Image,
            IconInput,
            [
                { title: 'Default', props: { placeholder: 'Search icons...' }, initialValue: '' },
                { title: 'With Value', initialValue: 'lucide-react:ArrowRight' },
                { title: 'Disabled', props: { disabled: true }, initialValue: 'lucide-react:Star' },
            ]
        ),

        buildComponentConfig(
            'numerical-input',
            'NumericalInput',
            'Free-form number input without steppers. Best for arbitrary numeric values.',
            Hash,
            NumericalInput,
            [
                { title: 'Default', initialValue: 0 },
                { title: 'With Value', initialValue: 42.5 },
                { title: 'With Placeholder', props: { placeholder: 'Enter value...' }, initialValue: 0 },
                { title: 'Negative Value', initialValue: -100 },
                { title: 'Disabled', props: { disabled: true }, initialValue: 123 },
                { title: 'Slider', description: 'Slider variant for range selection', props: { variant: 'slider', min: 0, max: 100 }, initialValue: 50 },
                { title: 'Slider (Custom Range)', description: 'Slider with custom min/max', props: { variant: 'slider', min: -50, max: 50, step: 5 }, initialValue: 0 },
            ]
        ),

        buildComponentConfig(
            'number-input',
            'NumberInput',
            'Number input with +/- stepper buttons for precise control.',
            Calculator,
            NumberInput,
            [
                { title: 'Default', initialValue: 0 },
                { title: 'With Value', initialValue: 10 },
                { title: 'With Min/Max', props: { min: 0, max: 100 }, initialValue: 50 },
                { title: 'Custom Step', props: { step: 5 }, initialValue: 25 },
                { title: 'At Min Boundary', props: { min: 0, max: 10 }, initialValue: 0 },
                { title: 'At Max Boundary', props: { min: 0, max: 10 }, initialValue: 10 },
                { title: 'Disabled', props: { disabled: true }, initialValue: 5 },
                { title: 'Slider', description: 'Slider variant for range selection', props: { variant: 'slider', min: 0, max: 100 }, initialValue: 50 },
                { title: 'Slider (Custom Step)', description: 'Slider with step of 10', props: { variant: 'slider', min: 0, max: 100, step: 10 }, initialValue: 30 },
            ]
        ),

        buildComponentConfig(
            'object-input',
            'ObjectInput',
            'JSON object editor with Monaco Editor in a dialog. For complex data structures.',
            Braces,
            ObjectInput,
            [
                { title: 'Empty Object', initialValue: {} },
                { title: 'Simple Object', initialValue: { name: 'John', age: 30 } },
                { title: 'Nested Object', initialValue: { user: { name: 'Jane', email: 'jane@example.com' }, settings: { theme: 'dark' } } },
                { title: 'Array Value', initialValue: ['apple', 'banana', 'cherry'] },
                { title: 'Custom Label', props: { label: 'Edit Configuration' }, initialValue: { debug: true, verbose: false } },
                {
                    title: 'With Suggestions',
                    description: 'Autocomplete suggestions appear as you type (try typing or press Ctrl+Space)',
                    props: {
                        label: 'Edit with Variables',
                        suggestions: [
                            '{{step1.response.body}}',
                            '{{step1.response.status}}',
                            '{{env.BASE_URL}}',
                            '{{env.API_KEY}}',
                            '{{variables.userId}}',
                            '{{variables.token}}',
                        ],
                    },
                    initialValue: { url: '{{env.BASE_URL}}/api', headers: { Authorization: 'Bearer {{variables.token}}' } },
                },
                { title: 'Disabled', props: { disabled: true }, initialValue: { locked: true } },
            ]
        ),

        buildComponentConfig(
            'enum-input',
            'EnumInput',
            'Single-select from predefined options. Supports dropdown and button group variants.',
            List,
            EnumInput,
            [
                // Button variants
                {
                    title: 'Text Alignment',
                    description: 'Icon-only button group for text alignment',
                    props: {
                        variant: 'buttons',
                        buttonDisplay: 'icon',
                        options: [
                            { value: 'left', label: 'Align Left', icon: AlignLeft, hoverText: 'Left align text' },
                            { value: 'center', label: 'Align Center', icon: AlignCenter, hoverText: 'Center align text' },
                            { value: 'right', label: 'Align Right', icon: AlignRight, hoverText: 'Right align text' },
                            { value: 'justify', label: 'Justify', icon: AlignJustify, hoverText: 'Justify text' },
                        ],
                    },
                    initialValue: 'left',
                },
                {
                    title: 'View Mode',
                    description: 'Text-only button group for view selection',
                    props: {
                        variant: 'buttons',
                        options: [
                            { value: 'grid', label: 'Grid' },
                            { value: 'list', label: 'List' },
                            { value: 'kanban', label: 'Kanban' },
                        ],
                    },
                    initialValue: 'grid',
                },
                {
                    title: 'Priority Level',
                    description: 'Icon + text for priority selection',
                    props: {
                        variant: 'buttons',
                        buttonDisplay: 'both',
                        options: [
                            { value: 'low', label: 'Low', icon: AlignLeft },
                            { value: 'medium', label: 'Medium', icon: AlignCenter },
                            { value: 'high', label: 'High', icon: AlignRight },
                        ],
                    },
                    initialValue: 'medium',
                },
                {
                    title: 'Font Weight',
                    description: 'Overflow dropdown for many options',
                    props: {
                        variant: 'buttons',
                        maxInline: 4,
                        options: [
                            { value: '100', label: 'Thin' },
                            { value: '300', label: 'Light' },
                            { value: '400', label: 'Regular' },
                            { value: '500', label: 'Medium' },
                            { value: '600', label: 'Semibold' },
                            { value: '700', label: 'Bold' },
                            { value: '800', label: 'Extrabold' },
                            { value: '900', label: 'Black' },
                        ],
                    },
                    initialValue: '400',
                },
                // Dropdown variants
                {
                    title: 'Status',
                    description: 'Standard dropdown for status selection',
                    props: {
                        variant: 'dropdown',
                        placeholder: 'Select status...',
                        options: [
                            { value: 'draft', label: 'Draft' },
                            { value: 'pending', label: 'Pending Review' },
                            { value: 'approved', label: 'Approved' },
                            { value: 'published', label: 'Published' },
                            { value: 'archived', label: 'Archived' },
                        ],
                    },
                    initialValue: 'draft',
                },
                {
                    title: 'Block Type',
                    description: 'Dropdown with icons for block type',
                    props: {
                        variant: 'dropdown',
                        dropdownTitle: 'Select Block Type',
                        options: [
                            { value: 'text', label: 'Text Block', icon: Type },
                            { value: 'image', label: 'Image Block', icon: Image },
                            { value: 'list', label: 'List Block', icon: List },
                            { value: 'code', label: 'Code Block', icon: Braces },
                        ],
                    },
                    initialValue: 'text',
                },
                {
                    title: 'Alignment Picker',
                    description: 'Compact icon trigger for alignment',
                    props: {
                        variant: 'dropdown',
                        iconTrigger: AlignJustify,
                        dropdownTitle: 'Text Alignment',
                        options: [
                            { value: 'left', label: 'Align Left', icon: AlignLeft },
                            { value: 'center', label: 'Align Center', icon: AlignCenter },
                            { value: 'right', label: 'Align Right', icon: AlignRight },
                            { value: 'justify', label: 'Justify', icon: AlignJustify },
                        ],
                    },
                    initialValue: 'left',
                },
                {
                    title: 'Disabled State',
                    description: 'Locked dropdown field',
                    props: {
                        variant: 'dropdown',
                        disabled: true,
                        options: [
                            { value: 'locked', label: 'Locked Value' },
                            { value: 'other', label: 'Other Option' },
                        ],
                    },
                    initialValue: 'locked',
                },
            ]
        ),

        buildComponentConfig(
            'multi-enum-select',
            'MultiEnumSelect',
            'Multi-select from predefined options. Supports dropdown and toggle button variants.',
            ListChecks,
            MultiEnumSelect,
            [
                // Button variants (toggles)
                {
                    title: 'Text Formatting',
                    description: 'Icon toggle buttons for text styles',
                    props: {
                        variant: 'buttons',
                        buttonDisplay: 'icon',
                        options: [
                            { value: 'bold', label: 'Bold', icon: Bold, hoverText: 'Toggle bold (Ctrl+B)' },
                            { value: 'italic', label: 'Italic', icon: Italic, hoverText: 'Toggle italic (Ctrl+I)' },
                            { value: 'underline', label: 'Underline', icon: Underline, hoverText: 'Toggle underline (Ctrl+U)' },
                        ],
                    },
                    initialValue: ['bold'],
                },
                {
                    title: 'Days of Week',
                    description: 'Text toggle for day selection',
                    props: {
                        variant: 'buttons',
                        options: [
                            { value: 'mon', label: 'Mon' },
                            { value: 'tue', label: 'Tue' },
                            { value: 'wed', label: 'Wed' },
                            { value: 'thu', label: 'Thu' },
                            { value: 'fri', label: 'Fri' },
                            { value: 'sat', label: 'Sat' },
                            { value: 'sun', label: 'Sun' },
                        ],
                        maxInline: 5,
                    },
                    initialValue: ['mon', 'wed', 'fri'],
                },
                {
                    title: 'Feature Flags',
                    description: 'Toggle multiple features',
                    props: {
                        variant: 'buttons',
                        buttonDisplay: 'both',
                        options: [
                            { value: 'darkMode', label: 'Dark', icon: CheckSquare },
                            { value: 'autoSave', label: 'Auto-save', icon: CheckSquare },
                            { value: 'notify', label: 'Notify', icon: CheckSquare },
                        ],
                    },
                    initialValue: ['darkMode', 'autoSave'],
                },
                // Dropdown variants
                {
                    title: 'Tags',
                    description: 'Multi-select dropdown for tagging',
                    props: {
                        variant: 'dropdown',
                        placeholder: 'Add tags...',
                        dropdownTitle: 'Available Tags',
                        options: [
                            { value: 'bug', label: 'Bug' },
                            { value: 'feature', label: 'Feature' },
                            { value: 'enhancement', label: 'Enhancement' },
                            { value: 'documentation', label: 'Documentation' },
                            { value: 'urgent', label: 'Urgent' },
                            { value: 'help-wanted', label: 'Help Wanted' },
                        ],
                    },
                    initialValue: ['bug', 'urgent'],
                },
                {
                    title: 'Permissions',
                    description: 'Dropdown with icons for permissions',
                    props: {
                        variant: 'dropdown',
                        dropdownTitle: 'Grant Permissions',
                        options: [
                            { value: 'read', label: 'Read', icon: List },
                            { value: 'write', label: 'Write', icon: Type },
                            { value: 'delete', label: 'Delete', icon: Braces },
                            { value: 'admin', label: 'Admin', icon: CheckSquare },
                        ],
                    },
                    initialValue: ['read', 'write'],
                },
                {
                    title: 'Empty State',
                    description: 'No items selected initially',
                    props: {
                        variant: 'dropdown',
                        placeholder: 'Select categories...',
                        options: [
                            { value: 'tech', label: 'Technology' },
                            { value: 'design', label: 'Design' },
                            { value: 'business', label: 'Business' },
                            { value: 'marketing', label: 'Marketing' },
                        ],
                    },
                    initialValue: [],
                },
                {
                    title: 'Formatting Picker',
                    description: 'Compact icon trigger with count badge',
                    props: {
                        variant: 'dropdown',
                        iconTrigger: Type,
                        dropdownTitle: 'Text Formatting',
                        options: [
                            { value: 'bold', label: 'Bold', icon: Bold },
                            { value: 'italic', label: 'Italic', icon: Italic },
                            { value: 'underline', label: 'Underline', icon: Underline },
                        ],
                    },
                    initialValue: ['bold', 'italic'],
                },
                {
                    title: 'Disabled State',
                    description: 'Locked multi-select field',
                    props: {
                        variant: 'dropdown',
                        disabled: true,
                        options: [
                            { value: 'locked1', label: 'Locked Option 1' },
                            { value: 'locked2', label: 'Locked Option 2' },
                        ],
                    },
                    initialValue: ['locked1'],
                },
            ]
        ),

        buildComponentConfig(
            'dynamic-input',
            'DynamicInput',
            'Polymorphic input that supports multiple value types (null, string, number, boolean, object) with a type selector.',
            CircleSlash,
            DynamicInput,
            [
                { title: 'Null Value', description: 'Default null state', initialValue: null },
                { title: 'String Value', description: 'Text input mode', initialValue: 'Hello World' },
                { title: 'Number Value', description: 'Numeric input mode', initialValue: 42 },
                { title: 'Boolean Value', description: 'Toggle input mode', initialValue: true },
                { title: 'Object Value', description: 'JSON object editor mode', initialValue: { name: 'John', age: 30 } },
                { title: 'Restricted Types', description: 'Only allow string and number', props: { allowedTypes: ['string', 'number'] }, initialValue: 'Only text or numbers' },
                { title: 'Disabled', description: 'Disabled state', props: { disabled: true }, initialValue: 'Cannot change' },
            ]
        ),
    ];
}

// ============================================================================
// Category Registry Export
// ============================================================================
export const categoryRegistry: CategoryRegistry = {
    id: 'input-primitives',
    name: 'Input Primitives',
    icon: Layers,
    getComponents: getInputPrimitivesComponents,
};

// ============================================================================
// Legacy exports for backward compatibility during migration
// ============================================================================
export function getPrimitiveById(id: string): ComponentConfig | undefined {
    return getInputPrimitivesComponents().find(c => c.id === id);
}

export const primitivesConfig = getInputPrimitivesComponents();
