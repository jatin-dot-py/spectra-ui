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
export declare function TreeItem({ node, depth, selectedPath, onSelect, expandedFolders, toggleFolder, showFileIcons, showTreeLines, }: TreeItemProps): import("react/jsx-runtime").JSX.Element;
export {};
