// FileTree fragment
export { FileTree, type FileTreeProps } from './FileTree';

// ContentTab fragment
export { ContentTab, type ContentTabProps } from './ContentTab';

// FileCodeView fragment
export { FileCodeView, type FileCodeViewProps } from './FileCodeView';

// Utilities
export {
    getExtensionInfo,
    getFileIconName,
    getFolderIconName,
    getLanguageFromFilename,
    getInfoFromMimeType,
    getLanguageFromMimeType,
    type ExtensionInfo,
} from '../../utils/fileExtensions';
