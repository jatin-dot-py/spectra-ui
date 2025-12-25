import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/**
 * A single example with code and preview
 */
export interface ExampleItem {
    title: string;
    description?: string;
    code: string;
    preview: ReactNode;
}

/**
 * A component within a category (e.g., TextInput, NumberInput)
 * For categories with multiple components
 */
export interface ComponentConfig {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    importPath: string;
    examples: ExampleItem[];
}

/**
 * A category (e.g., Input Primitives, Labeled Input)
 * Can either have direct examples OR multiple components
 */
export interface CategoryConfig {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    /** For single-component categories (like LabeledInput) */
    importPath?: string;
    examples?: ExampleItem[];
    /** For multi-component categories (like Input Primitives) */
    components?: ComponentConfig[];
}

/**
 * Registry entry for a category to register with the ComponentDisplay orchestrator.
 * This provides a unified interface for both single-component and multi-component categories.
 */
export interface CategoryRegistry {
    id: string;
    name: string;
    icon: LucideIcon;
    /** For single-component categories - returns a CategoryConfig with examples */
    getCategory?: () => CategoryConfig;
    /** For multi-component categories - returns array of ComponentConfig */
    getComponents?: () => ComponentConfig[];
}

/**
 * Generate markdown for a single component
 */
export function generateComponentMarkdown(component: ComponentConfig): string {
    const lines: string[] = [];

    lines.push(`## ${component.name}`);
    lines.push('');
    lines.push(component.description);
    lines.push('');
    lines.push('### Import');
    lines.push('');
    lines.push('```tsx');
    lines.push(`import { ${component.name} } from '${component.importPath}';`);
    lines.push('```');
    lines.push('');
    lines.push('### Examples');
    lines.push('');

    for (const example of component.examples) {
        lines.push(`#### ${example.title}`);
        if (example.description) {
            lines.push('');
            lines.push(example.description);
        }
        lines.push('');
        lines.push('```tsx');
        lines.push(example.code);
        lines.push('```');
        lines.push('');
    }

    return lines.join('\n');
}

/**
 * Generate markdown for an entire category
 */
export function generateCategoryMarkdown(category: CategoryConfig): string {
    const lines: string[] = [];

    lines.push(`# ${category.name}`);
    lines.push('');
    lines.push(category.description);
    lines.push('');
    lines.push('---');
    lines.push('');

    // Single-component category
    if (category.examples && category.importPath) {
        lines.push('## Import');
        lines.push('');
        lines.push('```tsx');
        lines.push(`import { ${category.name} } from '${category.importPath}';`);
        lines.push('```');
        lines.push('');
        lines.push('## Examples');
        lines.push('');

        for (const example of category.examples) {
            lines.push(`### ${example.title}`);
            if (example.description) {
                lines.push('');
                lines.push(example.description);
            }
            lines.push('');
            lines.push('```tsx');
            lines.push(example.code);
            lines.push('```');
            lines.push('');
        }
    }

    // Multi-component category
    if (category.components) {
        for (const component of category.components) {
            lines.push(generateComponentMarkdown(component));
            lines.push('---');
            lines.push('');
        }
    }

    return lines.join('\n');
}
