import type { TreeNode } from './TreeItem';

/**
 * Build tree structure from flat file paths
 */
export function buildTree(filePaths: string[]): TreeNode[] {
    const root: TreeNode[] = [];

    if (!Array.isArray(filePaths)) return root;

    for (const filepath of filePaths) {
        if (typeof filepath !== 'string') continue;

        const parts = filepath.split('/').filter(Boolean);
        if (parts.length === 0) continue;

        let currentLevel = root;
        let currentPath = '';

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            currentPath = currentPath ? `${currentPath}/${part}` : part;
            const isFile = i === parts.length - 1;

            let existing = currentLevel.find(n => n.name === part);

            if (!existing) {
                existing = {
                    name: part,
                    path: currentPath,
                    isFolder: !isFile,
                    children: [],
                };
                currentLevel.push(existing);
            }

            if (!isFile) {
                currentLevel = existing.children;
            }
        }
    }

    return sortNodes(root);
}

/**
 * Sort nodes: folders first, then files, alphabetically
 */
function sortNodes(nodes: TreeNode[]): TreeNode[] {
    return nodes
        .map(n => ({ ...n, children: sortNodes(n.children) }))
        .sort((a, b) => {
            if (a.isFolder && !b.isFolder) return -1;
            if (!a.isFolder && b.isFolder) return 1;
            return a.name.localeCompare(b.name);
        });
}
