'use client';

import { useState } from 'react';
import { FolderTree, Columns, Code, FileX2, TableProperties, Globe, Bookmark, FileCode2, FileType2, Braces, Check, Info, AlertTriangle, Clock, Zap, XCircle, List } from 'lucide-react';
import type { CategoryRegistry, ComponentConfig } from '../types';
import { FileTree, ContentTab, FileCodeView, JsonCodeView, KeyValuePairTable, HttpRequestMetadata, HtmlCodeView, BasicTimeline, type TimelineItem } from '@/spectra/ui/fragments';
import { StatusDisplay } from '@/spectra/ui/fragments/StatusDisplay/Fragment';
import { NoContent } from '@/spectra/ui/state';

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
                icon={FileCode2}
                onClick={() => setActive('page.tsx')}
                isActive={active === 'page.tsx'}
                onClose={() => { }}
            />
            <ContentTab
                name="utils.ts"
                icon={FileCode2}
                onClick={() => setActive('utils.ts')}
                isActive={active === 'utils.ts'}
                onClose={() => { }}
            />
            <ContentTab
                name="styles.css"
                icon={FileType2}
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
                    icon={FileCode2}
                    onClick={() => setActive('MyVeryLongComponentName.tsx')}
                    isActive={active === 'MyVeryLongComponentName.tsx'}
                    onClose={() => { }}
                />
                <ContentTab
                    name="AnotherLongFilename.test.tsx"
                    icon={FileCode2}
                    onClick={() => setActive('AnotherLongFilename.test.tsx')}
                    isActive={active === 'AnotherLongFilename.test.tsx'}
                    onClose={() => { }}
                />
                <ContentTab
                    name="utils.ts"
                    icon={FileCode2}
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

function FileCodeViewEmptyStatePreview() {
    const content: string | undefined = undefined;
    return (
        <div className="border border-border rounded-lg overflow-hidden" style={{ width: '300px' }}>
            {content ? (
                <FileCodeView filename="example.ts" content={content} />
            ) : (
                <NoContent icon={FileX2} title="No content to display" />
            )}
        </div>
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
    description: 'Single tab with icon, active state, and optional close button.',
    icon: Columns,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Default',
            description: 'Tab bar with multiple tabs, active state, and close buttons',
            code: `const [active, setActive] = useState('page.tsx');

<ContentTab
    name="page.tsx"
    icon={FileCode2}
    onClick={() => setActive('page.tsx')}
    isActive={active === 'page.tsx'}
    onClose={() => {}}
/>
<ContentTab
    name="utils.ts"
    icon={FileCode2}
    onClick={() => setActive('utils.ts')}
    isActive={active === 'utils.ts'}
    onClose={() => {}}
/>
<ContentTab
    name="styles.css"
    icon={FileType2}
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
            icon={FileCode2}
            onClick={() => setActive('MyVeryLongComponentName.tsx')}
            isActive={active === 'MyVeryLongComponentName.tsx'}
            onClose={() => {}}
        />
        <ContentTab
            name="AnotherLongFilename.test.tsx"
            icon={FileCode2}
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
        {
            title: 'Empty State',
            description: 'Handle undefined/empty content with NoContent component',
            code: `const content: string | undefined = undefined;

{content ? (
    <FileCodeView filename="example.ts" content={content} />
) : (
    <NoContent icon={FileX2} title="No content to display" />
)}`,
            preview: <FileCodeViewEmptyStatePreview />,
        },
    ],
};

// ============================================================================
// Preview Components - KeyValuePairTable
// ============================================================================

// Mixed types to demonstrate type-based coloring
const SAMPLE_ENV_VARS = {
    'NODE_ENV': 'production',
    'API_URL': 'https://api.example.com/v1',
    'DEBUG_MODE': true,
    'MAX_CONNECTIONS': 100,
    'CACHE_TTL': null,
    'SECRET_KEY': 'sk_live_xxxxxxxxxxxxxxxxxxxxx',
};

const SAMPLE_HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    'X-Request-ID': 'req_abc123xyz',
    'X-Rate-Limit': 1000,
    'X-Cached': false,
};

function KeyValuePairTableDefaultPreview() {
    return (
        <div style={{ width: '400px' }}>
            <KeyValuePairTable data={SAMPLE_ENV_VARS} hideHeader={true} showCopy={true} showCopyJson={true} />
        </div>
    );
}

function KeyValuePairTableWithCopyPreview() {
    return (
        <div style={{ width: '450px' }}>
            <KeyValuePairTable
                data={SAMPLE_HEADERS}
                showCopy={true}
                showCopyJson={true}
            />
        </div>
    );
}

function KeyValuePairTableCustomLabelsPreview() {
    return (
        <div style={{ width: '450px' }}>
            <KeyValuePairTable
                data={SAMPLE_ENV_VARS}
                keyLabel="Variable"
                valueLabel="Value"
                showCopy={true}
                showCopyJson={true}
            />
        </div>
    );
}

const KEY_VALUE_PAIR_TABLE_CONFIG: ComponentConfig = {
    id: 'key-value-pair-table',
    name: 'KeyValuePairTable',
    description: 'Table for displaying key-value pairs with expandable rows and copy functionality.',
    icon: TableProperties,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Basic Usage',
            description: 'Simple key-value table, click rows to expand',
            code: `<KeyValuePairTable
    data={{
        'NODE_ENV': 'production',
        'API_URL': 'https://api.example.com/v1',
    }}
/>`,
            preview: <KeyValuePairTableDefaultPreview />,
        },
        {
            title: 'With Copy Buttons',
            description: 'Copy icons integrated in the table header',
            code: `<KeyValuePairTable
    data={headers}
    showCopy={true}
    showCopyJson={true}
/>`,
            preview: <KeyValuePairTableWithCopyPreview />,
        },
        {
            title: 'Custom Labels',
            description: 'Override default column headers',
            code: `<KeyValuePairTable
    data={envVars}
    keyLabel="Variable"
    valueLabel="Value"
    showCopy={true}
    showCopyJson={true}
/>`,
            preview: <KeyValuePairTableCustomLabelsPreview />,
        },
    ],
};
// ============================================================================
// Preview Components - HttpRequestMetadata
// ============================================================================

function HttpRequestMetadataDefaultPreview() {
    return (
        <div style={{ width: '500px' }}>
            <HttpRequestMetadata
                method="GET"
                url="https://api.example.com/v1/users/123"
                status={200}
                statusText="OK"
                mimeType="application/json"
                responseTimeMs={345}
                contentSizeBytes={2456}
                showActionButton={true}
                actionButtonText="Save"
                actionButtonIcon={Bookmark}
                onActionButtonClick={() => { }}
            />
        </div>
    );
}

function HttpRequestMetadataErrorPreview() {
    return (
        <div style={{ width: '500px' }}>
            <HttpRequestMetadata
                method="POST"
                url="https://api.example.com/v1/auth/login"
                status={401}
                statusText="Unauthorized"
                mimeType="application/json"
                responseTimeMs={156}
                contentSizeBytes={89}
            />
        </div>
    );
}

function HttpRequestMetadataFailedPreview() {
    return (
        <div style={{ width: '500px' }}>
            <HttpRequestMetadata
                method="POST"
                url="https://api.example.com/v1/webhooks/send"
                failed={true}
                failureReason="Connection Timeout - Server did not respond"
                responseTimeMs={30000}
            />
        </div>
    );
}

function HttpRequestMetadataRedirectPreview() {
    return (
        <div style={{ width: '500px' }}>
            <HttpRequestMetadata
                method="GET"
                url="https://api.example.com/v2/users/me"
                isRedirect={true}
                status={301}
                statusText="Moved Permanently"
                responseTimeMs={89}
            />
        </div>
    );
}

function HttpRequestMetadataNoStatusPreview() {
    return (
        <div style={{ width: '500px' }}>
            <HttpRequestMetadata
                method="GET"
                url="https://api.example.com/v1/stream/events"
                mimeType="text/event-stream"
                responseTimeMs={12}
            />
        </div>
    );
}

function HttpRequestMetadataDataUrlPreview() {
    return (
        <div style={{ width: '500px' }}>
            <HttpRequestMetadata
                method="GET"
                url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
                status={200}
                statusText="OK"
                mimeType="image/png"
                contentSizeBytes={68}
            />
        </div>
    );
}

const HTTP_REQUEST_METADATA_CONFIG: ComponentConfig = {
    id: 'http-request-metadata',
    name: 'HttpRequestMetadata',
    description: 'Displays HTTP request details with status badges, response time, content size, failure alerts, and redirect indicators.',
    icon: Globe,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Basic Usage',
            description: 'GET request with response time and content size',
            code: `<HttpRequestMetadata
    method="GET"
    url="https://api.example.com/v1/users/123"
    status={200}
    statusText="OK"
    mimeType="application/json"
    responseTimeMs={345}
    contentSizeBytes={2456}
    showActionButton={true}
    actionButtonText="Save"
    actionButtonIcon={Bookmark}
/>`,
            preview: <HttpRequestMetadataDefaultPreview />,
        },
        {
            title: 'Error State',
            description: 'Failed request with 4xx status code',
            code: `<HttpRequestMetadata
    method="POST"
    url="https://api.example.com/v1/auth/login"
    status={401}
    statusText="Unauthorized"
    responseTimeMs={156}
    contentSizeBytes={89}
/>`,
            preview: <HttpRequestMetadataErrorPreview />,
        },
        {
            title: 'Failed Request',
            description: 'Request failure with prominent error banner',
            code: `<HttpRequestMetadata
    method="POST"
    url="https://api.example.com/v1/webhooks/send"
    failed={true}
    failureReason="Connection Timeout - Server did not respond"
    responseTimeMs={30000}
/>`,
            preview: <HttpRequestMetadataFailedPreview />,
        },
        {
            title: 'Redirect',
            description: 'Shows redirect indicator',
            code: `<HttpRequestMetadata
    method="GET"
    url="https://api.example.com/v2/users/me"
    isRedirect={true}
    status={301}
    statusText="Moved Permanently"
    responseTimeMs={89}
/>`,
            preview: <HttpRequestMetadataRedirectPreview />,
        },
        {
            title: 'No Status',
            description: 'Status badge hidden when not provided',
            code: `<HttpRequestMetadata
    method="GET"
    url="https://api.example.com/v1/stream/events"
    mimeType="text/event-stream"
    responseTimeMs={12}
/>`,
            preview: <HttpRequestMetadataNoStatusPreview />,
        },
        {
            title: 'Data URL',
            description: 'Smart formatting for data URLs',
            code: `<HttpRequestMetadata
    method="GET"
    url="data:image/png;base64,..."
    status={200}
    statusText="OK"
    mimeType="image/png"
    contentSizeBytes={68}
/>`,
            preview: <HttpRequestMetadataDataUrlPreview />,
        },
    ],
};
// ============================================================================
// Preview Components - JsonCodeView
// ============================================================================

const SAMPLE_JSON_SIMPLE = {
    name: "John Doe",
    age: 32,
    email: "john@example.com",
    isActive: true,
    role: null,
};

const SAMPLE_JSON_NESTED = {
    user: {
        id: 1,
        profile: {
            name: "Jane Smith",
            avatar: "https://example.com/avatar.jpg",
            settings: {
                theme: "dark",
                notifications: true,
            },
        },
    },
    posts: [
        { id: 101, title: "First Post", likes: 42 },
        { id: 102, title: "Second Post", likes: 128 },
    ],
    metadata: {
        version: "2.0.0",
        tags: ["api", "user", "data"],
    },
};

const SAMPLE_JSON_LARGE_ARRAY = {
    items: Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        value: `Item ${i + 1}`,
        active: i % 2 === 0,
    })),
};

function JsonCodeViewBasicPreview() {
    return (
        <div style={{ height: '400px', width: '500px' }}>
            <JsonCodeView
                filename="user.json"
                data={SAMPLE_JSON_SIMPLE}
            />
        </div>
    );
}

function JsonCodeViewNestedPreview() {
    return (
        <div style={{ height: '500px', width: '600px' }}>
            <JsonCodeView
                filename="response.json"
                data={SAMPLE_JSON_NESTED}
                rootLabel="data"
            />
        </div>
    );
}

function JsonCodeViewExpandedPreview() {
    return (
        <div style={{ height: '500px', width: '600px' }}>
            <JsonCodeView
                filename="full.json"
                data={SAMPLE_JSON_NESTED}
                rootLabel="response"
            />
        </div>
    );
}

function JsonCodeViewLargeArrayPreview() {
    return (
        <div style={{ height: '500px', width: '600px' }}>
            <JsonCodeView
                filename="items.json"
                data={SAMPLE_JSON_LARGE_ARRAY}
                rootLabel="items"
            />
        </div>
    );
}

const JSON_CODE_VIEW_CONFIG: ComponentConfig = {
    id: 'json-code-view',
    name: 'JsonCodeView',
    description: 'Interactive JSON explorer with collapsible nodes, type coloring, and copy functionality.',
    icon: Braces,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Basic Usage',
            description: 'Simple JSON object with type-colored values',
            code: `<JsonCodeView
    filename="user.json"
    data={{ name: "John", age: 32, isActive: true }}
/>`,
            preview: <JsonCodeViewBasicPreview />,
        },
        {
            title: 'Nested Structure',
            description: 'Deep JSON with collapsible nodes, expands to maxDepth=2',
            code: `<JsonCodeView
    filename="response.json"
    data={nestedData}
    maxDepth={2}
/>`,
            preview: <JsonCodeViewNestedPreview />,
        },
        {
            title: 'Default Expanded',
            description: 'All nodes expanded by default',
            code: `<JsonCodeView
    filename="full.json"
    data={data}
    defaultExpanded={true}
/>`,
            preview: <JsonCodeViewExpandedPreview />,
        },
        {
            title: 'Large Array',
            description: 'Handle arrays with many items (collapsed for performance)',
            code: `<JsonCodeView
    filename="items.json"
    data={{ items: [...50 items] }}
    maxDepth={1}
/>`,
            preview: <JsonCodeViewLargeArrayPreview />,
        },
    ],
};


// ============================================================================
// Category Registry Export
// ============================================================================

// ============================================================================
// Preview Components - HtmlCodeView
// ============================================================================

const SAMPLE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Preview</title>
    <style>
        body { font-family: system-ui, sans-serif; padding: 2rem; background: #f0fdf4; color: #166534; }
        h1 { margin-top: 0; }
        .card { background: white; padding: 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
    </style>
</head>
<body>
    <div class="card">
        <h1>Hello from HTML!</h1>
        <p>This is a safely rendered preview using a sandboxed iframe.</p>
        <button style="padding: 0.5rem 1rem; background: #166534; color: white; border: none; border-radius: 0.25rem;">
            Static Button
        </button>
    </div>
</body>
</html>`;

function HtmlCodeViewBasicPreview() {
    return (
        <HtmlCodeView
            filename="index.html"
            content={SAMPLE_HTML}
            height="400px"
            width="500px"
        />
    );
}

function HtmlCodeViewPreviewModePreview() {
    return (
        <HtmlCodeView
            filename="preview.html"
            content={SAMPLE_HTML}
            initialMode="preview"
            height="400px"
            width="500px"
        />
    );
}

function HtmlCodeViewEditablePreview() {
    const [html, setHtml] = useState(SAMPLE_HTML);

    return (
        <div className="space-y-3" style={{ width: '600px' }}>
            <textarea
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                placeholder="Paste your HTML here..."
                className="w-full h-32 p-2 text-xs font-mono bg-muted border border-border rounded-md resize-none"
            />
            <HtmlCodeView
                filename="custom.html"
                content={html}
                initialMode="preview"
                height="400px"
            />
        </div>
    );
}

const HTML_CODE_VIEW_CONFIG: ComponentConfig = {
    id: 'html-code-view',
    name: 'HtmlCodeView',
    description: 'Code viewer for HTML with a secure preview toggle using a sandboxed iframe.',
    icon: Code,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Basic Usage',
            description: 'Starts in code view, can toggle to preview',
            code: `<HtmlCodeView
    filename="index.html"
    content={htmlContent}
/>`,
            preview: <HtmlCodeViewBasicPreview />,
        },
        {
            title: 'Initial Preview Mode',
            description: 'Starts directly in preview mode',
            code: `<HtmlCodeView
    filename="preview.html"
    content={htmlContent}
    initialMode="preview"
/>`,
            preview: <HtmlCodeViewPreviewModePreview />,
        },
        {
            title: 'Editable (Paste Custom HTML)',
            description: 'Paste your own HTML in the textarea to test the preview',
            code: `const [html, setHtml] = useState(defaultHtml);

<textarea value={html} onChange={(e) => setHtml(e.target.value)} />
<HtmlCodeView
    filename="custom.html"
    content={html}
    initialMode="preview"
/>`,
            preview: <HtmlCodeViewEditablePreview />,
        },
    ],
};



// ============================================================================
// Preview Components - StatusDisplay
// ============================================================================

function StatusDisplaySuccessPreview() {
    return (
        <div style={{ width: '400px' }}>
            <StatusDisplay
                variant="success"
                icon={Check}
                title="Operation Successful"
                description="The data has been successfully synchronized."
            />
        </div>
    );
}

function StatusDisplayWarningPreview() {
    return (
        <div style={{ width: '400px' }}>
            <StatusDisplay
                variant="warning"
                icon={AlertTriangle}
                title="Performance Warning"
                description="Response time exceeded 500ms threshold."
            />
        </div>
    );
}

function StatusDisplayDestructivePreview() {
    return (
        <div style={{ width: '400px' }}>
            <StatusDisplay
                variant="destructive"
                icon={AlertTriangle}
                title="Connection Failed"
                description="Could not establish connection to the remote server."
            />
        </div>
    );
}

function StatusDisplayNeutralPreview() {
    return (
        <div style={{ width: '400px' }}>
            <StatusDisplay
                variant="neutral"
                icon={Info}
                title="System Idle"
                description="Waiting for incoming requests."
            />
        </div>
    );
}

function StatusDisplayWithCtaPreview() {
    return (
        <div style={{ width: '400px' }}>
            <StatusDisplay
                variant="success"
                icon={Check}
                title="Sync Complete"
                description="Your data has been synchronized."
                ctaText="Learn more"
                ctaOnClick={() => console.log('Learn more clicked')}
            />
        </div>
    );
}

function StatusDisplayInlinePreview() {
    return (
        <div style={{ width: '500px' }}>
            <StatusDisplay
                variant="neutral"
                icon={Info}
                description="You are editing the request template before variable substitution."
                ctaText="Read Docs"
                ctaOnClick={() => console.log('Read docs clicked')}
            />
        </div>
    );
}

const STATUS_DISPLAY_CONFIG: ComponentConfig = {
    id: 'status-display',
    name: 'StatusDisplay',
    description: 'Displays status information with variant-based styling (success, warning, destructive, neutral) and consistent layout.',
    icon: Info,
    importPath: '@/spectra/ui/fragments/Status/Fragment',
    examples: [
        {
            title: 'Success',
            description: 'Success state with green styling',
            code: `<StatusDisplay
    variant="success"
    icon={Check}
    title="Operation Successful"
    description="The data has been successfully synchronized."
/>`,
            preview: <StatusDisplaySuccessPreview />,
        },
        {
            title: 'Warning',
            description: 'Warning state with amber styling',
            code: `<StatusDisplay
    variant="warning"
    icon={AlertTriangle}
    title="Performance Warning"
    description="Response time exceeded 500ms threshold."
/>`,
            preview: <StatusDisplayWarningPreview />,
        },
        {
            title: 'Destructive',
            description: 'Error state with destructive styling',
            code: `<StatusDisplay
    variant="destructive"
    icon={AlertTriangle}
    title="Connection Failed"
    description="Could not establish connection to the remote server."
/>`,
            preview: <StatusDisplayDestructivePreview />,
        },
        {
            title: 'Neutral',
            description: 'Neutral state for general information',
            code: `<StatusDisplay
    variant="neutral"
    icon={Info}
    title="System Idle"
    description="Waiting for incoming requests."
/>`,
            preview: <StatusDisplayNeutralPreview />,
        },
        {
            title: 'With CTA Link',
            description: 'Status with an inline "Learn more" style link',
            code: `<StatusDisplay
    variant="success"
    icon={Check}
    title="Sync Complete"
    description="Your data has been synchronized."
    ctaText="Learn more"
    ctaOnClick={() => {}}
/>`,
            preview: <StatusDisplayWithCtaPreview />,
        },
        {
            title: 'Inline (No Title)',
            description: 'Subtle inline message without title - great for contextual hints',
            code: `<StatusDisplay
    variant="neutral"
    icon={Info}
    description="You are editing the request template before variable substitution."
    ctaText="Read Docs"
    ctaOnClick={() => {}}
/>`,
            preview: <StatusDisplayInlinePreview />,
        },
    ],
};

// ============================================================================
// Preview Components - BasicTimeline
// ============================================================================

const SAMPLE_TIMELINE_ITEMS: TimelineItem[] = [
    {
        icon: Check,
        iconVariant: 'primary',
        title: 'Request Initiated',
        description: 'API call started at 14:32:05 UTC',
    },
    {
        icon: Zap,
        iconVariant: 'primary',
        title: 'Processing Complete',
        description: 'Server processed the request in 245ms',
        ctaText: 'View Logs',
        ctaOnClick: () => console.log('View logs clicked'),
    },
    {
        icon: Check,
        iconVariant: 'primary',
        title: 'Response Delivered',
        description: 'Response successfully sent to client',
    },
];

const SAMPLE_TIMELINE_WITH_ERROR: TimelineItem[] = [
    {
        icon: Clock,
        iconVariant: 'primary',
        title: 'Step 1: Validation',
        description: 'Input data validated successfully',
    },
    {
        icon: XCircle,
        iconVariant: 'destructive',
        title: 'Step 2: Authentication Failed',
        description: 'Invalid API key provided',
        ctaText: 'Retry',
        ctaOnClick: () => console.log('Retry clicked'),
    },
];

function BasicTimelineDefaultPreview() {
    return (
        <div style={{ width: '400px' }}>
            <BasicTimeline items={SAMPLE_TIMELINE_ITEMS} />
        </div>
    );
}

function BasicTimelineWithErrorPreview() {
    return (
        <div style={{ width: '400px' }}>
            <BasicTimeline items={SAMPLE_TIMELINE_WITH_ERROR} />
        </div>
    );
}

function BasicTimelineWithChildrenPreview() {
    const items: TimelineItem[] = [
        {
            icon: Check,
            iconVariant: 'primary',
            title: 'Data Extracted',
            description: 'Successfully extracted 3 values',
            children: (
                <div className="text-xs text-muted-foreground bg-muted/50 rounded p-2 font-mono">
                    user_id: 12345<br />
                    session: abc-xyz<br />
                    token: eyJhbG...
                </div>
            ),
        },
        {
            icon: Clock,
            title: 'Pending Review',
            description: 'Awaiting manual approval',
        },
    ];

    return (
        <div style={{ width: '400px' }}>
            <BasicTimeline items={items} />
        </div>
    );
}

const BASIC_TIMELINE_CONFIG: ComponentConfig = {
    id: 'basic-timeline',
    name: 'BasicTimeline',
    description: 'Vertical timeline with customizable icons, variants, and optional CTAs for each step.',
    icon: List,
    importPath: '@/spectra/ui/fragments',
    examples: [
        {
            title: 'Default',
            description: 'Basic timeline with primary variant icons',
            code: `const items: TimelineItem[] = [
    {
        icon: Check,
        iconVariant: 'primary',
        title: 'Request Initiated',
        description: 'API call started',
    },
    {
        icon: Zap,
        iconVariant: 'primary',
        title: 'Processing Complete',
        description: 'Server processed the request',
        ctaText: 'View Logs',
        ctaOnClick: () => {},
    },
];

<BasicTimeline items={items} />`,
            preview: <BasicTimelineDefaultPreview />,
        },
        {
            title: 'With Error State',
            description: 'Timeline showing a destructive/error step',
            code: `const items: TimelineItem[] = [
    {
        icon: Clock,
        iconVariant: 'primary',
        title: 'Step 1: Validation',
        description: 'Input validated',
    },
    {
        icon: XCircle,
        iconVariant: 'destructive',
        title: 'Step 2: Authentication Failed',
        description: 'Invalid API key',
        ctaText: 'Retry',
        ctaOnClick: () => {},
    },
];

<BasicTimeline items={items} />`,
            preview: <BasicTimelineWithErrorPreview />,
        },
        {
            title: 'With Custom Children',
            description: 'Timeline items with custom content',
            code: `const items: TimelineItem[] = [
    {
        icon: Check,
        iconVariant: 'primary',
        title: 'Data Extracted',
        description: 'Successfully extracted 3 values',
        children: (
            <div className="text-xs bg-muted/50 rounded p-2">
                user_id: 12345<br />
                session: abc-xyz
            </div>
        ),
    },
];

<BasicTimeline items={items} />`,
            preview: <BasicTimelineWithChildrenPreview />,
        },
    ],
};

export const categoryRegistry: CategoryRegistry = {
    id: 'fragments',
    name: 'Fragments',
    icon: FolderTree,
    getComponents: () => [FILE_TREE_CONFIG, CONTENT_TAB_CONFIG, FILE_CODE_VIEW_CONFIG, JSON_CODE_VIEW_CONFIG, KEY_VALUE_PAIR_TABLE_CONFIG, HTTP_REQUEST_METADATA_CONFIG, HTML_CODE_VIEW_CONFIG, STATUS_DISPLAY_CONFIG, BASIC_TIMELINE_CONFIG],
};
