/**
 * File extension mapping for icons and languages
 * Uses lazy icon syntax (pack:IconName) instead of bundled imports
 */

export interface ExtensionInfo {
    iconName: string;
    language: string;
    label: string;
}

// Extension to icon/language mapping using lazy syntax
const extensionMap: Record<string, ExtensionInfo> = {
    // JavaScript/TypeScript
    'js': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'JavaScript' },
    'mjs': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'JavaScript' },
    'cjs': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'JavaScript' },
    'jsx': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'React JSX' },
    'ts': { iconName: 'react-icons/si:SiTypescript', language: 'typescript', label: 'TypeScript' },
    'tsx': { iconName: 'react-icons/si:SiTypescript', language: 'typescript', label: 'React TSX' },
    'd.ts': { iconName: 'react-icons/si:SiTypescript', language: 'typescript', label: 'TypeScript Definition' },

    // Web
    'html': { iconName: 'react-icons/si:SiHtml5', language: 'html', label: 'HTML' },
    'htm': { iconName: 'react-icons/si:SiHtml5', language: 'html', label: 'HTML' },
    'css': { iconName: 'react-icons/si:SiCss3', language: 'css', label: 'CSS' },
    'scss': { iconName: 'react-icons/si:SiCss3', language: 'css', label: 'SCSS' },
    'sass': { iconName: 'react-icons/si:SiCss3', language: 'css', label: 'Sass' },
    'less': { iconName: 'react-icons/si:SiCss3', language: 'css', label: 'Less' },
    'svg': { iconName: 'lucide-react:Image', language: 'html', label: 'SVG' },

    // Python
    'py': { iconName: 'react-icons/si:SiPython', language: 'python', label: 'Python' },
    'pyw': { iconName: 'react-icons/si:SiPython', language: 'python', label: 'Python' },
    'pyi': { iconName: 'react-icons/si:SiPython', language: 'python', label: 'Python Stub' },
    'ipynb': { iconName: 'react-icons/si:SiPython', language: 'python', label: 'Jupyter Notebook' },

    // Java/Kotlin/Scala
    'java': { iconName: 'lucide-react:File', language: 'java', label: 'Java' },
    'kt': { iconName: 'react-icons/si:SiKotlin', language: 'kotlin', label: 'Kotlin' },
    'kts': { iconName: 'react-icons/si:SiKotlin', language: 'kotlin', label: 'Kotlin Script' },
    'scala': { iconName: 'react-icons/si:SiScala', language: 'scala', label: 'Scala' },

    // C/C++/C#
    'c': { iconName: 'react-icons/si:SiC', language: 'c', label: 'C' },
    'h': { iconName: 'react-icons/si:SiC', language: 'c', label: 'C Header' },
    'cpp': { iconName: 'react-icons/si:SiCplusplus', language: 'cpp', label: 'C++' },
    'cc': { iconName: 'react-icons/si:SiCplusplus', language: 'cpp', label: 'C++' },
    'cxx': { iconName: 'react-icons/si:SiCplusplus', language: 'cpp', label: 'C++' },
    'hpp': { iconName: 'react-icons/si:SiCplusplus', language: 'cpp', label: 'C++ Header' },
    'cs': { iconName: 'lucide-react:File', language: 'csharp', label: 'C#' },

    // Go/Rust
    'go': { iconName: 'react-icons/si:SiGo', language: 'go', label: 'Go' },
    'rs': { iconName: 'react-icons/si:SiRust', language: 'rust', label: 'Rust' },

    // Ruby/PHP
    'rb': { iconName: 'react-icons/si:SiRuby', language: 'ruby', label: 'Ruby' },
    'php': { iconName: 'react-icons/si:SiPhp', language: 'php', label: 'PHP' },

    // Shell
    'sh': { iconName: 'react-icons/si:SiGnubash', language: 'bash', label: 'Shell' },
    'bash': { iconName: 'react-icons/si:SiGnubash', language: 'bash', label: 'Bash' },
    'zsh': { iconName: 'react-icons/si:SiGnubash', language: 'bash', label: 'Zsh' },
    'fish': { iconName: 'lucide-react:Terminal', language: 'bash', label: 'Fish' },
    'ps1': { iconName: 'react-icons/vsc:VscTerminalPowershell', language: 'powershell', label: 'PowerShell' },
    'bat': { iconName: 'lucide-react:Terminal', language: 'batch', label: 'Batch' },
    'cmd': { iconName: 'lucide-react:Terminal', language: 'batch', label: 'Batch' },

    // Data/Config
    'json': { iconName: 'react-icons/vsc:VscJson', language: 'json', label: 'JSON' },
    'jsonc': { iconName: 'react-icons/vsc:VscJson', language: 'json', label: 'JSON with Comments' },
    'json5': { iconName: 'react-icons/vsc:VscJson', language: 'json', label: 'JSON5' },
    'yaml': { iconName: 'react-icons/si:SiYaml', language: 'yaml', label: 'YAML' },
    'yml': { iconName: 'react-icons/si:SiYaml', language: 'yaml', label: 'YAML' },
    'toml': { iconName: 'react-icons/si:SiToml', language: 'toml', label: 'TOML' },
    'xml': { iconName: 'lucide-react:FileText', language: 'xml', label: 'XML' },
    'csv': { iconName: 'lucide-react:FileText', language: 'text', label: 'CSV' },
    'tsv': { iconName: 'lucide-react:FileText', language: 'text', label: 'TSV' },

    // Markdown/Text
    'md': { iconName: 'react-icons/si:SiMarkdown', language: 'markdown', label: 'Markdown' },
    'mdx': { iconName: 'react-icons/si:SiMarkdown', language: 'markdown', label: 'MDX' },
    'txt': { iconName: 'lucide-react:FileText', language: 'text', label: 'Text' },
    'rst': { iconName: 'lucide-react:FileText', language: 'text', label: 'reStructuredText' },

    // SQL
    'sql': { iconName: 'lucide-react:Database', language: 'sql', label: 'SQL' },

    // Docker/DevOps
    'dockerfile': { iconName: 'react-icons/si:SiDocker', language: 'dockerfile', label: 'Dockerfile' },
    'dockerignore': { iconName: 'react-icons/si:SiDocker', language: 'text', label: 'Docker Ignore' },

    // Git
    'gitignore': { iconName: 'lucide-react:FileText', language: 'text', label: 'Git Ignore' },
    'gitattributes': { iconName: 'lucide-react:FileText', language: 'text', label: 'Git Attributes' },

    // Swift/Objective-C
    'swift': { iconName: 'react-icons/si:SiSwift', language: 'swift', label: 'Swift' },
    'm': { iconName: 'lucide-react:File', language: 'objectivec', label: 'Objective-C' },
    'mm': { iconName: 'lucide-react:File', language: 'objectivec', label: 'Objective-C++' },

    // Dart/Flutter
    'dart': { iconName: 'react-icons/si:SiDart', language: 'dart', label: 'Dart' },

    // Vue/Svelte
    'vue': { iconName: 'react-icons/si:SiVuedotjs', language: 'vue', label: 'Vue' },
    'svelte': { iconName: 'react-icons/si:SiSvelte', language: 'svelte', label: 'Svelte' },

    // GraphQL
    'graphql': { iconName: 'react-icons/si:SiGraphql', language: 'graphql', label: 'GraphQL' },
    'gql': { iconName: 'react-icons/si:SiGraphql', language: 'graphql', label: 'GraphQL' },

    // Lua
    'lua': { iconName: 'react-icons/si:SiLua', language: 'lua', label: 'Lua' },

    // R
    'r': { iconName: 'react-icons/si:SiR', language: 'r', label: 'R' },
    'rmd': { iconName: 'react-icons/si:SiMarkdown', language: 'markdown', label: 'R Markdown' },

    // Makefile
    'makefile': { iconName: 'lucide-react:Terminal', language: 'makefile', label: 'Makefile' },
    'mk': { iconName: 'lucide-react:Terminal', language: 'makefile', label: 'Makefile' },

    // Environment
    'env': { iconName: 'lucide-react:FileText', language: 'text', label: 'Environment' },
    'env.local': { iconName: 'lucide-react:FileText', language: 'text', label: 'Environment' },
    'env.development': { iconName: 'lucide-react:FileText', language: 'text', label: 'Environment' },
    'env.production': { iconName: 'lucide-react:FileText', language: 'text', label: 'Environment' },

    // Lock files
    'lock': { iconName: 'lucide-react:File', language: 'text', label: 'Lock File' },

    // License
    'license': { iconName: 'lucide-react:FileText', language: 'text', label: 'License' },
    'licence': { iconName: 'lucide-react:FileText', language: 'text', label: 'License' },

    // Images
    'png': { iconName: 'lucide-react:Image', language: 'image', label: 'PNG Image' },
    'jpg': { iconName: 'lucide-react:Image', language: 'image', label: 'JPEG Image' },
    'jpeg': { iconName: 'lucide-react:Image', language: 'image', label: 'JPEG Image' },
    'gif': { iconName: 'lucide-react:Image', language: 'image', label: 'GIF Image' },
    'webp': { iconName: 'lucide-react:Image', language: 'image', label: 'WebP Image' },
    'ico': { iconName: 'lucide-react:Image', language: 'image', label: 'Icon' },
};

// Special filenames (case-insensitive)
const specialFiles: Record<string, ExtensionInfo> = {
    'package.json': { iconName: 'react-icons/vsc:VscJson', language: 'json', label: 'Package JSON' },
    'tsconfig.json': { iconName: 'react-icons/si:SiTypescript', language: 'json', label: 'TypeScript Config' },
    'jsconfig.json': { iconName: 'react-icons/si:SiJavascript', language: 'json', label: 'JavaScript Config' },
    '.eslintrc': { iconName: 'lucide-react:FileText', language: 'json', label: 'ESLint Config' },
    '.eslintrc.json': { iconName: 'react-icons/vsc:VscJson', language: 'json', label: 'ESLint Config' },
    '.prettierrc': { iconName: 'lucide-react:FileText', language: 'json', label: 'Prettier Config' },
    'vite.config.ts': { iconName: 'react-icons/si:SiTypescript', language: 'typescript', label: 'Vite Config' },
    'vite.config.js': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'Vite Config' },
    'next.config.js': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'Next.js Config' },
    'next.config.mjs': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'Next.js Config' },
    'tailwind.config.js': { iconName: 'react-icons/si:SiJavascript', language: 'javascript', label: 'Tailwind Config' },
    'tailwind.config.ts': { iconName: 'react-icons/si:SiTypescript', language: 'typescript', label: 'Tailwind Config' },
    'dockerfile': { iconName: 'react-icons/si:SiDocker', language: 'dockerfile', label: 'Dockerfile' },
    'docker-compose.yml': { iconName: 'react-icons/si:SiDocker', language: 'yaml', label: 'Docker Compose' },
    'docker-compose.yaml': { iconName: 'react-icons/si:SiDocker', language: 'yaml', label: 'Docker Compose' },
    '.gitignore': { iconName: 'lucide-react:FileText', language: 'text', label: 'Git Ignore' },
    '.gitattributes': { iconName: 'lucide-react:FileText', language: 'text', label: 'Git Attributes' },
    'readme.md': { iconName: 'react-icons/si:SiMarkdown', language: 'markdown', label: 'Readme' },
    'readme': { iconName: 'lucide-react:FileText', language: 'text', label: 'Readme' },
    'license': { iconName: 'lucide-react:FileText', language: 'text', label: 'License' },
    'license.md': { iconName: 'react-icons/si:SiMarkdown', language: 'markdown', label: 'License' },
    'changelog.md': { iconName: 'react-icons/si:SiMarkdown', language: 'markdown', label: 'Changelog' },
    'makefile': { iconName: 'lucide-react:Terminal', language: 'makefile', label: 'Makefile' },
};

const defaultInfo: ExtensionInfo = {
    iconName: 'lucide-react:File',
    language: 'text',
    label: 'File',
};

/**
 * Get extension info from a filepath
 */
export function getExtensionInfo(filepath: string): ExtensionInfo {
    const filename = filepath.split('/').pop()?.toLowerCase() || '';

    // Check special filenames first
    if (specialFiles[filename]) {
        return specialFiles[filename];
    }

    // Extract extension (handle multi-part extensions like .d.ts)
    const parts = filename.split('.');
    if (parts.length > 2) {
        const multiExt = parts.slice(-2).join('.');
        if (extensionMap[multiExt]) {
            return extensionMap[multiExt];
        }
    }

    const ext = parts.pop() || '';
    return extensionMap[ext] || defaultInfo;
}

/**
 * Get icon name (lazy syntax) from filename
 */
export function getFileIconName(filename: string): string {
    return getExtensionInfo(filename).iconName;
}

/**
 * Get language from filename
 */
export function getLanguageFromFilename(filename: string): string {
    return getExtensionInfo(filename).language;
}

// ============================================================================
// Folder Icons - Auto-detect based on common folder names (VSCode-style)
// ============================================================================

const folderIconMap: Record<string, string> = {
    // Source folders
    'src': 'lucide-react:FolderCode',
    'source': 'lucide-react:FolderCode',
    'app': 'lucide-react:FolderCode',
    'pages': 'lucide-react:FolderCode',

    // Components
    'components': 'lucide-react:Component',
    'component': 'lucide-react:Component',
    'ui': 'lucide-react:Component',
    'widgets': 'lucide-react:Component',

    // Libraries & Utils
    'lib': 'lucide-react:Library',
    'libs': 'lucide-react:Library',
    'utils': 'lucide-react:Wrench',
    'util': 'lucide-react:Wrench',
    'helpers': 'lucide-react:Wrench',
    'hooks': 'lucide-react:Anchor',

    // Assets & Media
    'assets': 'lucide-react:FolderArchive',
    'images': 'lucide-react:Image',
    'img': 'lucide-react:Image',
    'icons': 'lucide-react:Smile',
    'fonts': 'lucide-react:Type',
    'media': 'lucide-react:Film',
    'public': 'lucide-react:Globe',
    'static': 'lucide-react:Globe',

    // Styles
    'styles': 'lucide-react:Palette',
    'style': 'lucide-react:Palette',
    'css': 'lucide-react:Palette',
    'scss': 'lucide-react:Palette',
    'themes': 'lucide-react:Palette',

    // Documentation
    'docs': 'lucide-react:BookOpen',
    'doc': 'lucide-react:BookOpen',
    'documentation': 'lucide-react:BookOpen',

    // Tests
    'tests': 'lucide-react:FlaskConical',
    'test': 'lucide-react:FlaskConical',
    '__tests__': 'lucide-react:FlaskConical',
    'spec': 'lucide-react:FlaskConical',
    'specs': 'lucide-react:FlaskConical',

    // Config
    'config': 'lucide-react:Settings',
    'configs': 'lucide-react:Settings',
    '.config': 'lucide-react:Settings',
    'settings': 'lucide-react:Settings',

    // API & Server
    'api': 'lucide-react:Cloud',
    'server': 'lucide-react:Server',
    'services': 'lucide-react:Server',
    'routes': 'lucide-react:Route',

    // Data & Types
    'types': 'lucide-react:FileType',
    'models': 'lucide-react:Database',
    'schemas': 'lucide-react:Database',
    'data': 'lucide-react:Database',

    // Build & Output
    'dist': 'lucide-react:Package',
    'build': 'lucide-react:Package',
    'out': 'lucide-react:Package',
    '.next': 'lucide-react:Package',

    // Dependencies
    'node_modules': 'lucide-react:Boxes',
    'vendor': 'lucide-react:Boxes',
    'packages': 'lucide-react:Boxes',

    // Git & Version Control
    '.git': 'lucide-react:GitBranch',
    '.github': 'lucide-react:Github',

    // Scripts
    'scripts': 'lucide-react:Terminal',
    'bin': 'lucide-react:Terminal',

    // Localization
    'locales': 'lucide-react:Languages',
    'i18n': 'lucide-react:Languages',
    'translations': 'lucide-react:Languages',

    // Redux/State
    'store': 'lucide-react:Container',
    'redux': 'lucide-react:Container',
    'state': 'lucide-react:Container',

    // Layouts
    'layouts': 'lucide-react:Layout',
    'layout': 'lucide-react:Layout',
    'templates': 'lucide-react:Layout',

    // Features
    'features': 'lucide-react:Puzzle',
    'modules': 'lucide-react:Puzzle',

    // Middleware
    'middleware': 'lucide-react:Layers',
    'middlewares': 'lucide-react:Layers',

    // Providers
    'providers': 'lucide-react:Share2',
    'contexts': 'lucide-react:Share2',
    'context': 'lucide-react:Share2',
};

const defaultFolderIcon = 'lucide-react:Folder';
const defaultFolderOpenIcon = 'lucide-react:FolderOpen';

/**
 * Get folder icon name based on folder name
 */
export function getFolderIconName(folderName: string, isOpen: boolean = false): string {
    const lowerName = folderName.toLowerCase();
    const mappedIcon = folderIconMap[lowerName];

    if (mappedIcon) {
        return mappedIcon;
    }

    return isOpen ? defaultFolderOpenIcon : defaultFolderIcon;
}

// ============================================================================
// MIME Type Mapping - Common Content-Type headers to language
// ============================================================================

interface MimeTypeInfo {
    language: string;
    label: string;
}

const mimeTypeMap: Record<string, MimeTypeInfo> = {
    // Text
    'text/plain': { language: 'text', label: 'Plain Text' },
    'text/html': { language: 'html', label: 'HTML' },
    'text/css': { language: 'css', label: 'CSS' },
    'text/csv': { language: 'text', label: 'CSV' },
    'text/xml': { language: 'xml', label: 'XML' },
    'text/markdown': { language: 'markdown', label: 'Markdown' },

    // JavaScript/TypeScript
    'text/javascript': { language: 'javascript', label: 'JavaScript' },
    'application/javascript': { language: 'javascript', label: 'JavaScript' },
    'application/x-javascript': { language: 'javascript', label: 'JavaScript' },
    'text/typescript': { language: 'typescript', label: 'TypeScript' },
    'application/typescript': { language: 'typescript', label: 'TypeScript' },

    // JSON
    'application/json': { language: 'json', label: 'JSON' },
    'text/json': { language: 'json', label: 'JSON' },
    'application/ld+json': { language: 'json', label: 'JSON-LD' },
    'application/manifest+json': { language: 'json', label: 'Web Manifest' },

    // XML variants
    'application/xml': { language: 'xml', label: 'XML' },
    'application/xhtml+xml': { language: 'html', label: 'XHTML' },
    'application/rss+xml': { language: 'xml', label: 'RSS' },
    'application/atom+xml': { language: 'xml', label: 'Atom' },
    'image/svg+xml': { language: 'xml', label: 'SVG' },

    // Python
    'text/x-python': { language: 'python', label: 'Python' },
    'application/x-python': { language: 'python', label: 'Python' },

    // Java
    'text/x-java': { language: 'java', label: 'Java' },
    'text/x-java-source': { language: 'java', label: 'Java' },

    // C/C++
    'text/x-c': { language: 'c', label: 'C' },
    'text/x-c++': { language: 'cpp', label: 'C++' },
    'text/x-csrc': { language: 'c', label: 'C' },
    'text/x-c++src': { language: 'cpp', label: 'C++' },

    // Ruby
    'text/x-ruby': { language: 'ruby', label: 'Ruby' },
    'application/x-ruby': { language: 'ruby', label: 'Ruby' },

    // PHP
    'text/x-php': { language: 'php', label: 'PHP' },
    'application/x-php': { language: 'php', label: 'PHP' },

    // Shell
    'text/x-sh': { language: 'bash', label: 'Shell' },
    'application/x-sh': { language: 'bash', label: 'Shell' },
    'text/x-shellscript': { language: 'bash', label: 'Shell Script' },

    // YAML
    'text/yaml': { language: 'yaml', label: 'YAML' },
    'text/x-yaml': { language: 'yaml', label: 'YAML' },
    'application/x-yaml': { language: 'yaml', label: 'YAML' },

    // SQL
    'text/x-sql': { language: 'sql', label: 'SQL' },
    'application/sql': { language: 'sql', label: 'SQL' },

    // Go
    'text/x-go': { language: 'go', label: 'Go' },

    // Rust
    'text/x-rust': { language: 'rust', label: 'Rust' },

    // GraphQL
    'application/graphql': { language: 'graphql', label: 'GraphQL' },

    // Form data
    'application/x-www-form-urlencoded': { language: 'text', label: 'Form Data' },
    'multipart/form-data': { language: 'text', label: 'Multipart Form' },
};

const defaultMimeInfo: MimeTypeInfo = { language: 'text', label: 'Plain Text' };

/**
 * Get language info from MIME type / Content-Type header
 * Handles charset and other parameters (e.g., "application/json; charset=utf-8")
 */
export function getInfoFromMimeType(mimeType: string): MimeTypeInfo {
    // Extract the base MIME type (before any semicolon)
    const baseMime = mimeType.split(';')[0].trim().toLowerCase();

    // Direct match
    if (mimeTypeMap[baseMime]) {
        return mimeTypeMap[baseMime];
    }

    // Pattern matching for common prefixes
    if (baseMime.startsWith('text/')) {
        return { language: 'text', label: 'Text' };
    }
    if (baseMime.includes('json')) {
        return { language: 'json', label: 'JSON' };
    }
    if (baseMime.includes('xml')) {
        return { language: 'xml', label: 'XML' };
    }
    if (baseMime.includes('javascript')) {
        return { language: 'javascript', label: 'JavaScript' };
    }

    return defaultMimeInfo;
}

/**
 * Get just the language from MIME type
 */
export function getLanguageFromMimeType(mimeType: string): string {
    return getInfoFromMimeType(mimeType).language;
}
