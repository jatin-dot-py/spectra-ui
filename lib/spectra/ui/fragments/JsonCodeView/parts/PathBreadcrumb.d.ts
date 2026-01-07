export type PathSegment = string | number;
interface PathBreadcrumbProps {
    data: unknown;
    path: PathSegment[];
    rootLabel?: string;
    onPathChange: (newPath: PathSegment[]) => void;
    onCopyPath: () => void;
    pathCopied: boolean;
}
export declare function PathBreadcrumb({ data, path, rootLabel, onPathChange, onCopyPath, pathCopied }: PathBreadcrumbProps): import("react/jsx-runtime").JSX.Element;
export {};
