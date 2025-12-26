import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { ChevronRight, Layers, Box, Copy, Check } from 'lucide-react';

// Shared UI Components
import { HeaderSection, ImportSection, ExampleCard } from './ExampleDisplay';
import type { CategoryRegistry, ComponentConfig, CategoryConfig } from './types';
import { generateCategoryMarkdown } from './types';

// Category registries
import { categoryRegistry as inputPrimitivesRegistry } from './input-primitives/config';
import { categoryRegistry as labeledInputRegistry } from './labeled-input/config';
import { categoryRegistry as groupRegistry } from './group/config';
import { categoryRegistry as stateRegistry } from './state/config';
import { categoryRegistry as dialogsRegistry } from './dialogs/config';
import { categoryRegistry as fragmentsRegistry } from './fragments/config';


// ============================================================================
// Category Registries - Add new categories here
// ============================================================================
const registries: CategoryRegistry[] = [
    inputPrimitivesRegistry,
    labeledInputRegistry,
    groupRegistry,
    stateRegistry,
    dialogsRegistry,
    fragmentsRegistry,
];

// ============================================================================
// Types for sidebar navigation
// ============================================================================
interface SidebarItem {
    id: string;
    name: string;
    icon?: React.ComponentType<{ className?: string }>;
    registryId: string;
}

interface SidebarCategory {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    items: SidebarItem[];
}

// ============================================================================
// Build sidebar categories from registries
// ============================================================================
function buildSidebarCategories(): SidebarCategory[] {
    return registries.map((registry) => {
        // Multi-component category
        if (registry.getComponents) {
            const components = registry.getComponents();
            return {
                id: registry.id,
                name: registry.name,
                icon: registry.icon,
                items: components.map((c) => ({
                    id: c.id,
                    name: c.name,
                    icon: c.icon,
                    registryId: registry.id,
                })),
            };
        }
        // Single-component category
        return {
            id: registry.id,
            name: registry.name,
            icon: registry.icon,
            items: [{
                id: registry.id,
                name: registry.name,
                icon: registry.icon,
                registryId: registry.id,
            }],
        };
    });
}

// ============================================================================
// Unified Content Renderer
// ============================================================================
interface UnifiedContentProps {
    registryId: string;
    itemId: string;
}

function UnifiedContent({ registryId, itemId }: UnifiedContentProps) {
    const registry = registries.find((r) => r.id === registryId);

    if (!registry) {
        return <div className="text-muted-foreground">Registry not found: {registryId}</div>;
    }

    // Multi-component category: find the specific component
    if (registry.getComponents) {
        const components = registry.getComponents();
        const component = components.find((c) => c.id === itemId);

        if (!component) {
            return <div className="text-muted-foreground">Component not found: {itemId}</div>;
        }

        return (
            <>
                <ComponentContent component={component} />
            </>
        );
    }

    // Single-component category
    if (registry.getCategory) {
        const category = registry.getCategory();
        return <CategoryContent category={category} />;
    }

    return <div className="text-muted-foreground">Invalid registry configuration</div>;
}

// ============================================================================
// Component Content (for multi-component categories)
// ============================================================================
function ComponentContent({ component }: { component: ComponentConfig }) {
    const importCode = `import { ${component.name} } from '${component.importPath}';`;
    const Icon = component.icon;

    return (
        <div className="space-y-8 min-w-0">
            <HeaderSection
                icon={Icon}
                name={component.name}
                description={component.description}
                markdownText={`## ${component.name}\n\n${component.description}`}
            />
            <div className="h-px bg-border" />
            <ImportSection importCode={importCode} />
            <section className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Examples</h2>
                {component.examples.map((example, index) => (
                    <ExampleCard key={index} example={example} />
                ))}
            </section>
        </div>

    );
}

// ============================================================================
// Category Content (for single-component categories)
// ============================================================================
function CategoryContent({ category }: { category: CategoryConfig }) {
    if (!category.examples || !category.importPath) {
        return <div className="text-muted-foreground">Invalid category config</div>;
    }

    const importCode = `import { ${category.name} } from '${category.importPath}';`;
    const Icon = category.icon;

    return (
        <div className="space-y-8 min-w-0">
            <HeaderSection
                icon={Icon}
                name={category.name}
                description={category.description}
                markdownText={`## ${category.name}\n\n${category.description}`}
            />
            <div className="h-px bg-border" />
            <ImportSection importCode={importCode} />
            <section className="space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Examples</h2>
                {category.examples.map((example, index) => (
                    <ExampleCard key={index} example={example} />
                ))}
            </section>
        </div>
    );
}

// ============================================================================
// Main Component Display - The Orchestrator
// ============================================================================
export function ComponentDisplay() {
    const categories = buildSidebarCategories();

    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
        new Set(categories.map((c) => c.id))
    );
    const [selectedItem, setSelectedItem] = useState<{ id: string; registryId: string } | null>(
        categories[0]?.items[0] ? { id: categories[0].items[0].id, registryId: categories[0].items[0].registryId } : null
    );
    const [copiedCategory, setCopiedCategory] = useState<string | null>(null);

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories((prev) => {
            const next = new Set(prev);
            if (next.has(categoryId)) {
                next.delete(categoryId);
            } else {
                next.add(categoryId);
            }
            return next;
        });
    };

    const handleCopyCategory = (categoryId: string) => {
        const registry = registries.find((r) => r.id === categoryId);
        if (registry) {
            let markdown = '';

            // Case 1: Single-component category
            if (registry.getCategory) {
                markdown = generateCategoryMarkdown(registry.getCategory());
            }
            // Case 2: Multi-component category (reconstruct a CategoryConfig on the fly)
            else if (registry.getComponents) {
                const config: CategoryConfig = {
                    id: registry.id,
                    name: registry.name,
                    description: 'A collection of UI components.',
                    icon: registry.icon,
                    components: registry.getComponents()
                };
                markdown = generateCategoryMarkdown(config);
            }

            if (markdown) {
                navigator.clipboard.writeText(markdown);
                setCopiedCategory(categoryId);
                setTimeout(() => setCopiedCategory(null), 2000);
            }
        }
    };

    const renderDisplay = () => {
        if (!selectedItem) {
            return (
                <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                    <Box className="h-12 w-12 mb-4 opacity-20" />
                    <p className="text-sm">Select a component from the sidebar</p>
                </div>
            );
        }

        // Key forces React to remount the entire component tree when selection changes,
        // ensuring fresh state for each component (prevents state leaking between different inputs)
        return (
            <UnifiedContent
                key={`${selectedItem.registryId}-${selectedItem.id}`}
                registryId={selectedItem.registryId}
                itemId={selectedItem.id}
            />
        );
    };

    return (
        <div className="h-screen w-screen flex bg-background text-foreground overflow-hidden">
            {/* Sidebar */}
            <div className="w-[240px] min-w-[200px] flex flex-col border-r border-border bg-card/50">
                <div className="h-12 px-4 flex items-center border-b border-border bg-muted/30">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
                            <Layers className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold tracking-tight">Components</span>
                    </div>
                </div>

                <ScrollArea className="flex-1 min-h-0">
                    <div className="p-2 space-y-1">
                        {categories.map((category) => {
                            const CategoryIcon = category.icon;
                            const isExpanded = expandedCategories.has(category.id);

                            return (
                                <div key={category.id}>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={() => toggleCategory(category.id)}
                                            className={cn(
                                                'flex-1 flex items-center gap-2 px-2 py-1.5 rounded-md transition-colors',
                                                'text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                            )}
                                        >
                                            <ChevronRight
                                                className={cn(
                                                    'h-3 w-3 transition-transform',
                                                    isExpanded && 'rotate-90'
                                                )}
                                            />
                                            <CategoryIcon className="h-3.5 w-3.5" />
                                            <span>{category.name}</span>
                                            <span className="ml-auto text-[10px] text-muted-foreground/60">
                                                {category.items.length}
                                            </span>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleCopyCategory(category.id);
                                            }}
                                            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                                            title="Copy all as Markdown"
                                        >
                                            {copiedCategory === category.id ? (
                                                <Check className="h-3 w-3 text-green-500" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </button>
                                    </div>

                                    {isExpanded && (
                                        <div className="ml-8 mt-0.5 space-y-0.5">
                                            {category.items.map((item) => {
                                                const Icon = item.icon || Box;
                                                const isSelected = selectedItem?.id === item.id && selectedItem?.registryId === item.registryId;

                                                return (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => setSelectedItem({ id: item.id, registryId: item.registryId })}
                                                        className={cn(
                                                            'w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-all text-xs',
                                                            isSelected
                                                                ? 'bg-primary/10 text-primary font-medium'
                                                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                                        )}
                                                    >
                                                        <Icon className="h-3.5 w-3.5" />
                                                        <span>{item.name}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </ScrollArea>

                <div className="h-10 px-4 flex items-center border-t border-border bg-muted/20">
                    <span className="text-[10px] text-muted-foreground">
                        Spectra UI • Development
                    </span>
                </div>
            </div>

            {/* Main Content with Resizable Width */}
            <div className="flex-1 flex min-w-0 min-h-0 overflow-hidden">
                {/* Content Panel */}
                <div
                    className="h-full overflow-hidden border-r border-border min-w-0"
                    style={{ width: `var(--preview-width, 100%)` }}
                >
                    <div className="h-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <div className="p-8 min-w-0 w-full overflow-hidden">
                            {renderDisplay()}
                        </div>
                    </div>
                </div>
                {/* Resize Handle */}
                <div
                    className="w-1 bg-border hover:bg-primary/50 cursor-col-resize transition-colors flex-shrink-0 group"
                    onMouseDown={(e) => {
                        e.preventDefault();
                        const container = e.currentTarget.parentElement;
                        const content = container?.firstElementChild as HTMLElement;
                        if (!container || !content) return;

                        const startX = e.clientX;
                        const startWidth = content.offsetWidth;

                        const onMouseMove = (moveEvent: MouseEvent) => {
                            const delta = moveEvent.clientX - startX;
                            const newWidth = Math.max(0, Math.min(startWidth + delta, container.offsetWidth - 10));
                            content.style.maxWidth = '';
                            content.style.width = `${newWidth}px`;
                        };

                        const onMouseUp = () => {
                            document.removeEventListener('mousemove', onMouseMove);
                            document.removeEventListener('mouseup', onMouseUp);
                        };

                        document.addEventListener('mousemove', onMouseMove);
                        document.addEventListener('mouseup', onMouseUp);
                    }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-0.5 h-8 bg-muted-foreground/30 group-hover:bg-primary rounded-full" />
                    </div>
                </div>
                {/* Empty Right Space */}
                <div className="flex-1 bg-muted/5 min-w-0" />
            </div>
        </div>
    );
}
