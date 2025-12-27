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
export declare function FileTree({ filePaths, onFileItemClick, selectedPath, title, showFileIcons, showTreeLines, }: FileTreeProps): import("react/jsx-runtime").JSX.Element;
