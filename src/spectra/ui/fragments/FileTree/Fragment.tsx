import { useState, useMemo } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { buildTree } from './parts/buildTree';
import { TreeItem } from './parts/TreeItem';


export interface FileTreeProps {
    /** Array of file paths like ["src/app.tsx", "src/utils/helpers.ts"] */
    filePaths: string[];
    /** Called when a file item is clicked */
    onFileItemClick: (path: string) => void;
    /** Currently selected file path */
    selectedPath?: string;
    /** Optional title for the tree header */
    title?: string;
    /** Show file type icons (default: true) */
    showFileIcons?: boolean;
    /** Show tree indent lines (default: false) */
    showTreeLines?: boolean;
}


export function FileTree({
    filePaths,
    onFileItemClick,
    selectedPath,
    title = 'Explorer',
    showFileIcons = true,
    showTreeLines = false,
}: FileTreeProps) {
    const tree = useMemo(() => buildTree(filePaths), [filePaths]);

    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(() => {
        // Auto-expand folders containing the selected path
        const expanded = new Set<string>();
        if (selectedPath) {
            const parts = selectedPath.split('/');
            let path = '';
            for (let i = 0; i < parts.length - 1; i++) {
                path = path ? `${path}/${parts[i]}` : parts[i];
                expanded.add(path);
            }
        }
        return expanded;
    });

    const toggleFolder = (path: string) => {
        setExpandedFolders(prev => {
            const next = new Set(prev);
            if (next.has(path)) {
                next.delete(path);
            } else {
                next.add(path);
            }
            return next;
        });
    };

    return (
        <div className="flex flex-col h-full border border-border rounded-lg overflow-hidden bg-background">
            {/* Header */}
            <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-muted/20 flex-shrink-0">
                {title}
            </div>

            {/* Tree */}
            <div className="flex-1 min-h-0 overflow-hidden">
                <ScrollArea className="h-full w-full">
                    <div className="py-1 min-w-max">
                        {tree.map(node => (
                            <TreeItem
                                key={node.path}
                                node={node}
                                depth={0}
                                selectedPath={selectedPath ?? null}
                                onSelect={onFileItemClick}
                                expandedFolders={expandedFolders}
                                toggleFolder={toggleFolder}
                                showFileIcons={showFileIcons}
                                showTreeLines={showTreeLines}
                            />
                        ))}
                    </div>
                    <ScrollBar orientation="vertical" />
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
}
