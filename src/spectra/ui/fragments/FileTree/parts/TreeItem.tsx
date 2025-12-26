import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AsyncIconLoader } from '@/spectra/ui/input-primitives/parts/icons';
import { getFileIconName, getFolderIconName } from '../../../../utils/fileExtensions';

export interface TreeNode {
    name: string;
    path: string;
    isFolder: boolean;
    children: TreeNode[];
}

interface TreeItemProps {
    node: TreeNode;
    depth: number;
    selectedPath: string | null;
    onSelect: (path: string) => void;
    expandedFolders: Set<string>;
    toggleFolder: (path: string) => void;
    showFileIcons?: boolean;
    showTreeLines?: boolean;
}

export function TreeItem({
    node,
    depth,
    selectedPath,
    onSelect,
    expandedFolders,
    toggleFolder,
    showFileIcons = true,
    showTreeLines = false,
}: TreeItemProps) {
    const isExpanded = expandedFolders.has(node.path);
    const isSelected = selectedPath === node.path;

    const indent = depth * 14;

    if (node.isFolder) {
        const folderIconName = getFolderIconName(node.name, isExpanded);

        return (
            <div className="relative">
                {/* Tree line for this item */}
                {showTreeLines && depth > 0 && (
                    <div
                        className="absolute top-0 bottom-0 border-l border-border"
                        style={{ left: `${(depth - 1) * 14 + 14}px` }}
                    />
                )}

                <button
                    onClick={() => toggleFolder(node.path)}
                    className={cn(
                        'w-full flex items-center gap-1.5 px-2 py-1 text-xs hover:bg-accent/50 rounded-sm transition-colors relative whitespace-nowrap',
                        'text-foreground'
                    )}
                    style={{ paddingLeft: `${indent + 6}px` }}
                >
                    {isExpanded ? (
                        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                    ) : (
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                    )}
                    <AsyncIconLoader
                        name={folderIconName}
                        size={15}
                        className="text-muted-foreground flex-shrink-0"
                        showSpinner={false}
                    />
                    <span>{node.name}</span>
                </button>

                {isExpanded && (
                    <div className="relative">
                        {/* Vertical line for children */}
                        {showTreeLines && (
                            <div
                                className="absolute top-0 bottom-0 border-l border-border"
                                style={{ left: `${depth * 14 + 14}px` }}
                            />
                        )}
                        {node.children.map(child => (
                            <TreeItem
                                key={child.path}
                                node={child}
                                depth={depth + 1}
                                selectedPath={selectedPath}
                                onSelect={onSelect}
                                expandedFolders={expandedFolders}
                                toggleFolder={toggleFolder}
                                showFileIcons={showFileIcons}
                                showTreeLines={showTreeLines}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    const iconName = getFileIconName(node.name);

    return (
        <div className="relative">
            {/* Tree line for this item */}
            {showTreeLines && depth > 0 && (
                <div
                    className="absolute top-0 bottom-0 border-l border-border"
                    style={{ left: `${(depth - 1) * 14 + 14}px` }}
                />
            )}

            <button
                onClick={() => onSelect(node.path)}
                className={cn(
                    'w-full flex items-center gap-1.5 px-2 py-1 text-xs rounded-sm transition-colors relative whitespace-nowrap',
                    isSelected
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground hover:bg-accent/50'
                )}
                style={{ paddingLeft: `${indent + 24}px` }}
            >
                {showFileIcons && (
                    <AsyncIconLoader
                        name={iconName}
                        size={15}
                        className="text-muted-foreground flex-shrink-0"
                        showSpinner={false}
                    />
                )}
                <span>{node.name}</span>
            </button>
        </div>
    );
}
