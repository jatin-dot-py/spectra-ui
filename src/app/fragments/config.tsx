'use client';

import { useState } from 'react';
import { FolderTree, Columns, Code } from 'lucide-react';
import type { CategoryRegistry, ComponentConfig } from '../types';
import { FileTree, ContentTab, FileCodeView } from '@/spectra/ui/fragments';

// ============================================================================
// Preview Components - FileTree
// ============================================================================

function FileTreeDefaultPreview() {
    const [selected, setSelected] = useState<string | undefined>('src/app/page.tsx');

    return (
        <div className="h-72 w-60">
            <FileTree
                filePaths={[
                    'src/app/layout.tsx',
                    'src/app/page.tsx',
                    'src/components/ui/button.tsx',
                    'src/components/ui/dialog.tsx',
                    'src/lib/utils.ts',
                    'src/hooks/useTheme.ts',
                    'tests/app.test.ts',
                    'docs/getting-started.md',
                    'package.json',
                    'tsconfig.json',
                ]}
                onFileItemClick={(path) => setSelected(path)}
                selectedPath={selected}
            />
        </div>
    );
}

// Deep nesting example to test limits
function FileTreeDeepNestingPreview() {
    const [selected, setSelected] = useState<string | undefined>('src/features/auth/components/forms/LoginForm/parts/InputField.tsx');

    return (
        <div className="h-80 w-52">
            <FileTree
                filePaths={[
                    'src/features/auth/components/forms/LoginForm/parts/InputField.tsx',
                    'src/features/auth/components/forms/LoginForm/parts/SubmitButton.tsx',
                    'src/features/auth/components/forms/LoginForm/parts/ErrorMessage.tsx',
                    'src/features/auth/components/forms/LoginForm/index.tsx',
                    'src/features/auth/components/forms/RegisterForm/parts/InputField.tsx',
                    'src/features/auth/components/forms/RegisterForm/index.tsx',
                    'src/features/auth/hooks/useAuth.ts',
                    'src/features/auth/api/login.ts',
                    'src/features/auth/api/register.ts',
                    'src/features/auth/types.ts',
                    'src/features/dashboard/components/Chart.tsx',
                    'src/features/dashboard/components/Stats.tsx',
                ]}
                onFileItemClick={(path) => setSelected(path)}
                selectedPath={selected}
                title="Deep Nesting"
                showTreeLines={true}
            />
        </div>
    );
}

function FileTreeWithLinesPreview() {
    const [selected, setSelected] = useState<string | undefined>('src/components/Header.tsx');

    return (
        <div className="h-64 w-56">
            <FileTree
                filePaths={[
                    'src/components/Header.tsx',
                    'src/components/Footer.tsx',
                    'src/components/Sidebar.tsx',
                    'src/lib/utils.ts',
                    'src/hooks/useTheme.ts',
                ]}
                onFileItemClick={(path) => setSelected(path)}
                selectedPath={selected}
                showTreeLines={true}
            />
        </div>
    );
}

function FileTreeNoIconsPreview() {
    const [selected, setSelected] = useState<string | undefined>();

    return (
        <div className="h-48 w-48">
            <FileTree
                filePaths={[
                    'api/users.ts',
                    'api/posts.ts',
                    'api/auth.ts',
                ]}
                onFileItemClick={(path) => setSelected(path)}
                selectedPath={selected}
                title="API Routes"
                showFileIcons={false}
            />
        </div>
    );
}

// ============================================================================
// Preview Components - ContentTab
// ============================================================================

function ContentTabDefaultPreview() {
    const [active, setActive] = useState('page.tsx');

    return (
        <div className="flex border border-border rounded-lg overflow-hidden">
            <ContentTab
                name="page.tsx"
                icon="react-icons/si:SiTypescript"
                onClick={() => setActive('page.tsx')}
                isActive={active === 'page.tsx'}
                onClose={() => { }}
            />
            <ContentTab
                name="utils.ts"
                icon="react-icons/si:SiTypescript"
                onClick={() => setActive('utils.ts')}
                isActive={active === 'utils.ts'}
                onClose={() => { }}
            />
            <ContentTab
                name="styles.css"
                icon="react-icons/si:SiCss3"
                onClick={() => setActive('styles.css')}
                isActive={active === 'styles.css'}
            />
        </div>
    );
}

function ContentTabLongNamesPreview() {
    const [active, setActive] = useState('MyVeryLongComponentName.tsx');

    return (
        <div className=" border border-border rounded-lg overflow-hidden">
            <div className="flex overflow-x-auto">
                <ContentTab
                    name="MyVeryLongComponentName.tsx"
                    icon="react-icons/si:SiTypescript"
                    onClick={() => setActive('MyVeryLongComponentName.tsx')}
                    isActive={active === 'MyVeryLongComponentName.tsx'}
                    onClose={() => { }}
                />
                <ContentTab
                    name="AnotherLongFilename.test.tsx"
                    icon="react-icons/si:SiTypescript"
                    onClick={() => setActive('AnotherLongFilename.test.tsx')}
                    isActive={active === 'AnotherLongFilename.test.tsx'}
                    onClose={() => { }}
                />
                <ContentTab
                    name="utils.ts"
                    icon="react-icons/si:SiTypescript"
                    onClick={() => setActive('utils.ts')}
                    isActive={active === 'utils.ts'}
                    onClose={() => { }}
                />
            </div>
        </div>
    );
}

// ============================================================================
// Preview Components - FileCodeView
// ============================================================================

// Example: React component
const REACT_COMPONENT = `import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
        </button>
    );
}`;

// Example: Long file with many lines (for scroll testing)
const LONG_FILE = Array.from({ length: 25 }, (_, i) =>
    `const value${i + 1} = ${i + 1};`
).join('\n');

// Example: Wide line (for horizontal scroll testing)
const WIDE_LINE = `export const API_CONFIG = { baseUrl: "https://api.example.com/v1", timeout: 30000, headers: { "Authorization": "Bearer token", "Content-Type": "application/json" } }; export const API_CONFIG = { baseUrl: "https://api.example.com/v1", timeout: 30000, headers: { "Authorization": "Bearer token", "Content-Type": "application/json" } }; export const API_CONFIG = { baseUrl: "https://api.example.com/v1", timeout: 30000, headers: { "Authorization": "Bearer token", "Content-Type": "application/json" } };`;

// Example: JSON response
const JSON_RESPONSE = `{"status":"success","data":{"id":1,"name":"John Doe","email":"john@example.com"}}`;

function FileCodeViewBasicPreview() {
    return (
        <FileCodeView
            filename="Counter.tsx"
            content={REACT_COMPONENT}
        />
    );
}

function FileCodeViewNoLineNumbersPreview() {
    return (
        <FileCodeView
            filename="greeting.ts"
            content={`const greeting = "Hello, World!";
console.log(greeting);`}
            showLineNumbers={false}
        />
    );
}

function FileCodeViewNoFooterPreview() {
    return (
        <FileCodeView
            filename="snippet.js"
            content={`function add(a, b) { return a + b; }`}
            showFooter={false}
        />
    );
}

function FileCodeViewCustomFooterPreview() {
    return (
        <FileCodeView
            filename="api/users.ts"
            content={`export async function getUsers() {
    return fetch('/api/users').then(r => r.json());
}`}
            footer={{ left: 'Modified 2 days ago', right: 'API' }}
        />
    );
}

function FileCodeViewJsonPreview() {
    return (
        <FileCodeView
            filename="response.json"
            content={JSON_RESPONSE}
        />
    );
}

function FileCodeViewMaxHeightPreview() {
    return (
        <div style={{ height: '180px' }}>
            <FileCodeView
                filename="constants.ts"
                content={LONG_FILE}
                maxHeight="180px"
            />
        </div>
    );
}

function FileCodeViewWrapLinesPreview() {
    return (
        <FileCodeView
            filename="config.ts"
            content={WIDE_LINE}
            wrapLines={true}
        />
    );
}

function FileCodeViewHorizontalScrollPreview() {
    return (
        <div style={{ width: '350px' }}>
            <FileCodeView
                filename="config.ts"
                content={WIDE_LINE}
                wrapLines={false}
            />
        </div>
    );
}

// ============================================================================
// Component Configurations
// ============================================================================

const FILE_TREE_CONFIG: ComponentConfig = {
    id: 'file-tree',
    name: 'FileTree',
    description: 'Interactive file tree with auto folder icons and optional tree lines.',
    icon: FolderTree,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Default',
            description: 'File tree with auto folder icons',
            code: `const [selected, setSelected] = useState<string | undefined>('src/app/page.tsx');

<FileTree
    filePaths={[
        'src/app/layout.tsx',
        'src/app/page.tsx',
        'src/components/ui/button.tsx',
        'src/components/ui/dialog.tsx',
        'src/lib/utils.ts',
        'src/hooks/useTheme.ts',
        'tests/app.test.ts',
        'docs/getting-started.md',
        'package.json',
        'tsconfig.json',
    ]}
    onFileItemClick={(path) => setSelected(path)}
    selectedPath={selected}
/>`,
            preview: <FileTreeDefaultPreview />,
        },
        {
            title: 'Deep Nesting with Tree Lines',
            description: 'Testing 6+ levels of nesting with indent guide lines',
            code: `const [selected, setSelected] = useState<string | undefined>(
    'src/features/auth/components/forms/LoginForm/parts/InputField.tsx'
);

<FileTree
    filePaths={[
        'src/features/auth/components/forms/LoginForm/parts/InputField.tsx',
        'src/features/auth/components/forms/LoginForm/parts/SubmitButton.tsx',
        'src/features/auth/components/forms/LoginForm/parts/ErrorMessage.tsx',
        'src/features/auth/components/forms/LoginForm/index.tsx',
        'src/features/auth/components/forms/RegisterForm/parts/InputField.tsx',
        'src/features/auth/components/forms/RegisterForm/index.tsx',
        'src/features/auth/hooks/useAuth.ts',
        'src/features/auth/api/login.ts',
        'src/features/auth/api/register.ts',
        'src/features/auth/types.ts',
        'src/features/dashboard/components/Chart.tsx',
        'src/features/dashboard/components/Stats.tsx',
    ]}
    onFileItemClick={(path) => setSelected(path)}
    selectedPath={selected}
    title="Deep Nesting"
    showTreeLines={true}
/>`,
            preview: <FileTreeDeepNestingPreview />,
        },
        {
            title: 'With Tree Lines',
            description: 'File tree with indent guide lines',
            code: `const [selected, setSelected] = useState<string | undefined>('src/components/Header.tsx');

<FileTree
    filePaths={[
        'src/components/Header.tsx',
        'src/components/Footer.tsx',
        'src/components/Sidebar.tsx',
        'src/lib/utils.ts',
        'src/hooks/useTheme.ts',
    ]}
    onFileItemClick={(path) => setSelected(path)}
    selectedPath={selected}
    showTreeLines={true}
/>`,
            preview: <FileTreeWithLinesPreview />,
        },
        {
            title: 'Without File Icons',
            description: 'File tree with showFileIcons={false}',
            code: `const [selected, setSelected] = useState<string | undefined>();

<FileTree
    filePaths={[
        'api/users.ts',
        'api/posts.ts',
        'api/auth.ts',
    ]}
    onFileItemClick={(path) => setSelected(path)}
    selectedPath={selected}
    title="API Routes"
    showFileIcons={false}
/>`,
            preview: <FileTreeNoIconsPreview />,
        },
    ],
};

const CONTENT_TAB_CONFIG: ComponentConfig = {
    id: 'content-tab',
    name: 'ContentTab',
    description: 'Single tab with lazy icon, active state, and optional close button.',
    icon: Columns,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Default',
            description: 'Tab bar with multiple tabs, active state, and close buttons',
            code: `const [active, setActive] = useState('page.tsx');

<ContentTab
    name="page.tsx"
    icon="react-icons/si:SiTypescript"
    onClick={() => setActive('page.tsx')}
    isActive={active === 'page.tsx'}
    onClose={() => {}}
/>
<ContentTab
    name="utils.ts"
    icon="react-icons/si:SiTypescript"
    onClick={() => setActive('utils.ts')}
    isActive={active === 'utils.ts'}
    onClose={() => {}}
/>
<ContentTab
    name="styles.css"
    icon="react-icons/si:SiCss3"
    onClick={() => setActive('styles.css')}
    isActive={active === 'styles.css'}
/>`,
            preview: <ContentTabDefaultPreview />,
        },
        {
            title: 'Long File Names',
            description: 'Tabs with long names expand fully, horizontal scroll when needed',
            code: `const [active, setActive] = useState('MyVeryLongComponentName.tsx');

<div className="w-80 overflow-hidden">
    <div className="flex overflow-x-auto">
        <ContentTab
            name="MyVeryLongComponentName.tsx"
            icon="react-icons/si:SiTypescript"
            onClick={() => setActive('MyVeryLongComponentName.tsx')}
            isActive={active === 'MyVeryLongComponentName.tsx'}
            onClose={() => {}}
        />
        <ContentTab
            name="AnotherLongFilename.test.tsx"
            icon="react-icons/si:SiTypescript"
            onClick={() => setActive('AnotherLongFilename.test.tsx')}
            isActive={active === 'AnotherLongFilename.test.tsx'}
            onClose={() => {}}
        />
    </div>
</div>`,
            preview: <ContentTabLongNamesPreview />,
        },
    ],
};

const FILE_CODE_VIEW_CONFIG: ComponentConfig = {
    id: 'file-code-view',
    name: 'FileCodeView',
    description: 'Syntax-highlighted code viewer with auto language detection, JSON prettification, and scrolling.',
    icon: Code,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Basic Usage',
            description: 'Display code with auto-detected language and footer',
            code: `<FileCodeView
    filename="Counter.tsx"
    content={code}
/>`,
            preview: <FileCodeViewBasicPreview />,
        },
        {
            title: 'Without Line Numbers',
            description: 'Hide line numbers for cleaner snippets',
            code: `<FileCodeView
    filename="greeting.ts"
    content={code}
    showLineNumbers={false}
/>`,
            preview: <FileCodeViewNoLineNumbersPreview />,
        },
        {
            title: 'Without Footer',
            description: 'Hide footer for embedded code blocks',
            code: `<FileCodeView
    filename="snippet.js"
    content={code}
    showFooter={false}
/>`,
            preview: <FileCodeViewNoFooterPreview />,
        },
        {
            title: 'Custom Footer',
            description: 'Override footer text with custom values',
            code: `<FileCodeView
    filename="api/users.ts"
    content={code}
    footer={{ left: 'Modified 2 days ago', right: 'API' }}
/>`,
            preview: <FileCodeViewCustomFooterPreview />,
        },
        {
            title: 'JSON Auto-Prettify',
            description: 'Minified JSON is automatically formatted',
            code: `<FileCodeView
    filename="response.json"
    content='{"status":"success","data":{"id":1}}'
/>`,
            preview: <FileCodeViewJsonPreview />,
        },
        {
            title: 'Max Height (Vertical Scroll)',
            description: 'Constrain height for long files',
            code: `<FileCodeView
    filename="constants.ts"
    content={longCode}
    maxHeight="180px"
/>`,
            preview: <FileCodeViewMaxHeightPreview />,
        },
        {
            title: 'Wrap Long Lines',
            description: 'Wrap at container boundary instead of scrolling',
            code: `<FileCodeView
    filename="config.ts"
    content={wideCode}
    wrapLines={true}
/>`,
            preview: <FileCodeViewWrapLinesPreview />,
        },
        {
            title: 'Horizontal Scroll',
            description: 'Default behavior for wide content',
            code: `<FileCodeView
    filename="config.ts"
    content={wideCode}
    wrapLines={false}
/>`,
            preview: <FileCodeViewHorizontalScrollPreview />,
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================
export const categoryRegistry: CategoryRegistry = {
    id: 'fragments',
    name: 'Fragments',
    icon: FolderTree,
    getComponents: () => [FILE_TREE_CONFIG, CONTENT_TAB_CONFIG, FILE_CODE_VIEW_CONFIG],
};
