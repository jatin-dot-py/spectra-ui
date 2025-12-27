/**
 * File extension mapping for icons and languages
 * Uses lazy icon syntax (pack:IconName) instead of bundled imports
 */
export interface ExtensionInfo {
    iconName: string;
    language: string;
    label: string;
}
/**
 * Get extension info from a filepath
 */
export declare function getExtensionInfo(filepath: string): ExtensionInfo;
/**
 * Get icon name (lazy syntax) from filename
 */
export declare function getFileIconName(filename: string): string;
/**
 * Get language from filename
 */
export declare function getLanguageFromFilename(filename: string): string;
/**
 * Get folder icon name based on folder name
 */
export declare function getFolderIconName(folderName: string, isOpen?: boolean): string;
interface MimeTypeInfo {
    language: string;
    label: string;
}
/**
 * Get language info from MIME type / Content-Type header
 * Handles charset and other parameters (e.g., "application/json; charset=utf-8")
 */
export declare function getInfoFromMimeType(mimeType: string): MimeTypeInfo;
/**
 * Get just the language from MIME type
 */
export declare function getLanguageFromMimeType(mimeType: string): string;
export {};
