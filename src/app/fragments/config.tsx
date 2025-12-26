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

const SAMPLE_CODE = `import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
        </button>
    );
}`;

function FileCodeViewDefaultPreview() {
    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <FileCodeView
                filename="src/Counter.tsx"
                content={SAMPLE_CODE}
                showLineNumbers={true}
            />
        </div>
    );
}

function FileCodeViewNoFooterPreview() {
    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <FileCodeView
                filename="example.ts"
                content={`const greeting = "Hello, World!";`}
                showLineNumbers={false}
                showFooter={false}
            />
        </div>
    );
}

function FileCodeViewLongTextPreview() {
    return (
        <div className="w-64 border border-border rounded-lg overflow-hidden">
            <FileCodeView
                filename="src/components/ui/very-long-component-name.tsx"
                content={`export function VeryLongComponentName() { return null; }`}
                showLineNumbers={false}
            />
        </div>
    );
}

// Minified JSON that will be auto-prettified
const MINIFIED_JSON = `{"name":"my-app","version":"1.0.0","dependencies":{"react":"^18.2.0","next":"^14.0.0"}}`;

function FileCodeViewJsonPreview() {
    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <FileCodeView
                filename="response"
                content={MINIFIED_JSON}
                showLineNumbers={true}
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
    description: 'Syntax-highlighted code content with optional footer.',
    icon: Code,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Default',
            description: 'Code view with line numbers and auto-generated footer',
            code: `const SAMPLE_CODE = \`import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
        </button>
    );
}\`;

<FileCodeView
    filename="src/Counter.tsx"
    content={SAMPLE_CODE}
    showLineNumbers={true}
/>`,
            preview: <FileCodeViewDefaultPreview />,
        },
        {
            title: 'No Footer',
            description: 'Code view with footer hidden using showFooter={false}',
            code: `<FileCodeView
    filename="example.ts"
    content={\`const greeting = "Hello, World!";\`}
    showLineNumbers={false}
    showFooter={false}
/>`,
            preview: <FileCodeViewNoFooterPreview />,
        },
        {
            title: 'Long File Path',
            description: 'Footer left text truncates with tooltip on hover',
            code: `<div className="w-64">
    <FileCodeView
        filename="src/components/ui/very-long-component-name.tsx"
        content={\`export function VeryLongComponentName() { return null; }\`}
        showLineNumbers={false}
    />
</div>`,
            preview: <FileCodeViewLongTextPreview />,
        },
        {
            title: 'Auto JSON Prettify',
            description: 'Minified JSON is auto-detected and prettified',
            code: `// Minified JSON input
const json = '{"name":"my-app","version":"1.0.0"}';

<FileCodeView
    filename="response"
    content={json}
    showLineNumbers={true}
/>`,
            preview: <FileCodeViewJsonPreview />,
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
