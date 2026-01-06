'use client';

import { useState } from 'react';
import {
    Beaker,
    Globe,
    Clock,
    Shield,
    RefreshCw,
    Code,
    Braces,
    Hash,
    Plus,
    Trash2,
    Server,
    AlertTriangle,
    FileJson,
    Variable,
    Layers,
} from 'lucide-react';
import type { CategoryRegistry, ComponentConfig } from '../types';
import { Group, GroupItem, GroupTab } from '@/spectra/ui/group';
import { LabeledInput, LabeledInputGroup } from '@/spectra/ui/labeled-input';
import {
    TextInput,
    EnumInput,
    TextAreaInput,
    BooleanInput,
    NumberInput,
    ObjectInput,
    UrlInput,
    MultiEnumSelect,
    DynamicInput,
    PythonInput,
    JsonPathInput,
    IconInput,
    NumericalInput,
    type PathSegment,
    type DynamicValue,
} from '@/spectra/ui/input-primitives';
import { NoContent } from '@/spectra/ui/state';

// ============================================================================
// Types
// ============================================================================

interface Header {
    id: string;
    name: string;
    value: string;
    enabled: boolean;
}

interface Extractor {
    id: string;
    key: string;
    path: PathSegment[];
    type: 'jsonpath' | 'regex' | 'function';
    pattern?: string;
    code?: string;
}

// ============================================================================
// API Endpoint Configuration Panel
// A comprehensive example showcasing all input primitives in a realistic use case
// ============================================================================

function APIEndpointConfigPanel() {
    // === Request Configuration ===
    const [endpointName, setEndpointName] = useState('Get User Profile');
    const [endpointUrl, setEndpointUrl] = useState('https://api.example.com/users/{userId}');
    const [httpMethod, setHttpMethod] = useState('GET');
    const [contentType, setContentType] = useState('application/json');
    const [endpointIcon, setEndpointIcon] = useState('lucide:user');

    // === Timeouts & Retries ===
    const [connectTimeout, setConnectTimeout] = useState(5000);
    const [readTimeout, setReadTimeout] = useState(30000);
    const [retryCount, setRetryCount] = useState(3);
    const [retryDelay, setRetryDelay] = useState(1000);

    // === Options ===
    const [followRedirects, setFollowRedirects] = useState(true);
    const [validateSSL, setValidateSSL] = useState(true);
    const [cacheResponse, setCacheResponse] = useState(false);
    const [cacheTTL, setCacheTTL] = useState(60);

    // === Headers ===
    const [headers, setHeaders] = useState<Header[]>([
        { id: '1', name: 'Authorization', value: 'Bearer ${accessToken}', enabled: true },
        { id: '2', name: 'X-Request-ID', value: '${requestId}', enabled: true },
        { id: '3', name: 'Accept-Language', value: 'en-US', enabled: false },
    ]);

    // === Request Body ===
    const [requestBody, setRequestBody] = useState<Record<string, unknown>>({
        includeMetadata: true,
        fields: ['name', 'email', 'avatar'],
    });

    // === Dependencies & Variables ===
    const [dependencies, setDependencies] = useState<string[]>(['accessToken', 'userId']);
    const [pathVariables, setPathVariables] = useState<PathSegment[]>(['data', 'user', 0, 'profile']);

    // === Extractors ===
    const [extractors, setExtractors] = useState<Extractor[]>([
        { id: '1', key: 'userId', path: ['data', 'id'], type: 'jsonpath' },
        { id: '2', key: 'authToken', path: ['headers', 'x-auth-token'], type: 'jsonpath' },
    ]);

    // === Advanced ===
    const [customCode, setCustomCode] = useState(`def transform_response(response):
    """Custom response transformation"""
    data = response.json()
    return {
        'user': data.get('data'),
        'metadata': data.get('meta')
    }`);
    const [maxResponseSize, setMaxResponseSize] = useState(1024);
    const [conditionValue, setConditionValue] = useState<DynamicValue>('active');

    // === Helpers ===
    const availableVariables = ['accessToken', 'userId', 'requestId', 'timestamp', 'environment'];
    const variableSuggestions = availableVariables.map(v => `\${${v}}`);

    const addHeader = () => {
        const newHeader: Header = {
            id: Date.now().toString(),
            name: '',
            value: '',
            enabled: true,
        };
        setHeaders([...headers, newHeader]);
    };

    const updateHeader = (id: string, field: keyof Header, value: string | boolean) => {
        setHeaders(headers.map(h =>
            h.id === id ? { ...h, [field]: value } : h
        ));
    };

    const deleteHeader = (id: string) => {
        setHeaders(headers.filter(h => h.id !== id));
    };

    const addExtractor = (type: 'jsonpath' | 'regex' | 'function') => {
        const newExtractor: Extractor = {
            id: Date.now().toString(),
            key: `extractor_${extractors.length + 1}`,
            path: [],
            type,
            ...(type === 'regex' && { pattern: '' }),
            ...(type === 'function' && { code: '' }),
        };
        setExtractors([...extractors, newExtractor]);
    };

    const updateExtractor = (id: string, field: keyof Extractor, value: unknown) => {
        setExtractors(extractors.map(e =>
            e.id === id ? { ...e, [field]: value } : e
        ));
    };

    const deleteExtractor = (id: string) => {
        setExtractors(extractors.filter(e => e.id !== id));
    };

    // =========================================================================
    // Tab: General Configuration
    // =========================================================================
    const GeneralTab = (
        <Group>
            {/* Basic Info */}
            <GroupItem title="Endpoint" icon={Globe} defaultExpanded indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Name" helpText="Human-readable name for this endpoint">
                        <TextInput
                            value={endpointName}
                            onChange={setEndpointName}
                            placeholder="Enter endpoint name"
                        />
                    </LabeledInput>

                    <LabeledInput label="URL" helpText="Use ${variable} for path parameters">
                        <UrlInput
                            value={endpointUrl}
                            onChange={setEndpointUrl}
                            placeholder="https://api.example.com/..."
                        />
                    </LabeledInput>

                    <LabeledInput label="Method">
                        <EnumInput
                            value={httpMethod}
                            onChange={setHttpMethod}
                            variant="buttons"
                            maxInline={5}
                            options={[
                                { value: 'GET', label: 'GET' },
                                { value: 'POST', label: 'POST' },
                                { value: 'PUT', label: 'PUT' },
                                { value: 'PATCH', label: 'PATCH' },
                                { value: 'DELETE', label: 'DELETE' },
                            ]}
                        />
                    </LabeledInput>

                    <LabeledInput label="Content Type">
                        <EnumInput
                            value={contentType}
                            onChange={setContentType}
                            variant="dropdown"
                            options={[
                                { value: 'application/json', label: 'application/json' },
                                { value: 'application/x-www-form-urlencoded', label: 'form-urlencoded' },
                                { value: 'multipart/form-data', label: 'multipart/form-data' },
                                { value: 'text/plain', label: 'text/plain' },
                            ]}
                        />
                    </LabeledInput>

                    <LabeledInput label="Icon" helpText="Iconify icon name">
                        <IconInput
                            value={endpointIcon}
                            onChange={setEndpointIcon}
                            placeholder="Search icons..."
                        />
                    </LabeledInput>

                    <LabeledInput label="Response Path" helpText="JSON path to target data">
                        <JsonPathInput
                            value={pathVariables}
                            onChange={setPathVariables}
                            placeholder="Add path segments..."
                        />
                    </LabeledInput>

                    <LabeledInput label="Default Value" helpText="Dynamic typed default">
                        <DynamicInput
                            value={conditionValue}
                            onChange={setConditionValue}
                            allowedTypes={['string', 'number', 'boolean', 'null']}
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>

            {/* Timeouts & Retries */}
            <GroupItem title="Timeouts & Retries" icon={Clock} indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Connect Timeout" helpText="Milliseconds to wait for connection">
                        <NumberInput
                            value={connectTimeout}
                            onChange={setConnectTimeout}
                            min={1000}
                            max={60000}
                            step={1000}
                        />
                    </LabeledInput>

                    <LabeledInput label="Read Timeout" helpText="Milliseconds to wait for response">
                        <NumberInput
                            value={readTimeout}
                            onChange={setReadTimeout}
                            min={1000}
                            max={120000}
                            step={1000}
                        />
                    </LabeledInput>

                    <LabeledInput label="Max Retries">
                        <NumberInput
                            value={retryCount}
                            onChange={setRetryCount}
                            min={0}
                            max={10}
                        />
                    </LabeledInput>

                    <LabeledInput label="Retry Delay" helpText="Milliseconds between retries">
                        <NumberInput
                            value={retryDelay}
                            onChange={setRetryDelay}
                            min={100}
                            max={30000}
                            step={500}
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>

            {/* Options */}
            <GroupItem title="Options" icon={Shield} indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Follow Redirects">
                        <BooleanInput
                            value={followRedirects}
                            onChange={setFollowRedirects}
                            variant="switch"
                        />
                    </LabeledInput>

                    <LabeledInput label="Validate SSL" helpText="Verify SSL certificate">
                        <BooleanInput
                            value={validateSSL}
                            onChange={setValidateSSL}
                            variant="switch"
                        />
                    </LabeledInput>

                    <LabeledInput label="Cache Response">
                        <BooleanInput
                            value={cacheResponse}
                            onChange={setCacheResponse}
                            variant="switch"
                        />
                    </LabeledInput>

                    {cacheResponse && (
                        <LabeledInput label="Cache TTL" helpText="Seconds to cache response">
                            <NumericalInput
                                value={cacheTTL}
                                onChange={setCacheTTL}
                            />
                        </LabeledInput>
                    )}
                </LabeledInputGroup>
            </GroupItem>

            {/* Dependencies */}
            <GroupItem title="Dependencies" icon={Variable} indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Required Variables" helpText="Variables this endpoint depends on">
                        <MultiEnumSelect
                            value={dependencies}
                            onChange={setDependencies}
                            variant="dropdown"
                            placeholder="Select dependencies..."
                            options={availableVariables.map(v => ({ value: v, label: v }))}
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>
        </Group>
    );

    // =========================================================================
    // Tab: Headers
    // =========================================================================
    const HeadersTab = (
        <Group>
            <GroupItem
                title="Request Headers"
                icon={Layers}
                defaultExpanded
                collapsible={false}
                actionIcon={Plus}
                onActionIconClick={addHeader}
                badgeText={`${headers.filter(h => h.enabled).length} active`}
            >
                {headers.length === 0 ? (
                    <NoContent
                        title="No headers configured"
                        actionLabel="Add Header"
                        onAction={addHeader}
                    />
                ) : (
                    <Group>
                        {headers.map((header) => (
                            <GroupItem
                                key={header.id}
                                title={header.name || 'Unnamed Header'}
                                defaultExpanded
                                indentChildren
                                actionIcon={Trash2}
                                onActionIconClick={() => deleteHeader(header.id)}
                            >
                                <LabeledInputGroup>
                                    <LabeledInput label="Enabled">
                                        <BooleanInput
                                            value={header.enabled}
                                            onChange={(v) => updateHeader(header.id, 'enabled', v)}
                                            variant="switch"
                                        />
                                    </LabeledInput>

                                    <LabeledInput label="Name">
                                        <TextInput
                                            value={header.name}
                                            onChange={(v) => updateHeader(header.id, 'name', v)}
                                            placeholder="Header-Name"
                                            suggestions={['Authorization', 'Content-Type', 'Accept', 'X-Request-ID', 'X-API-Key']}
                                        />
                                    </LabeledInput>

                                    <LabeledInput label="Value">
                                        <TextInput
                                            value={header.value}
                                            onChange={(v) => updateHeader(header.id, 'value', v)}
                                            placeholder="Header value..."
                                            suggestions={variableSuggestions}
                                        />
                                    </LabeledInput>
                                </LabeledInputGroup>
                            </GroupItem>
                        ))}
                    </Group>
                )}
            </GroupItem>
        </Group>
    );

    // =========================================================================
    // Tab: Body
    // =========================================================================
    const BodyTab = (
        <Group>
            <GroupItem title="JSON Request Body" icon={FileJson} defaultExpanded collapsible={false}>
                <LabeledInputGroup>
                    <LabeledInput label="Edit Body">
                        <ObjectInput
                            value={requestBody}
                            onChange={(val) => setRequestBody(val as Record<string, unknown>)}
                            label="Click to edit JSON"
                            suggestions={variableSuggestions}
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>

            <GroupItem title="Path Variables" icon={Hash} collapsible={false}>
                <LabeledInputGroup>
                    <LabeledInput label="Response Path" helpText="JSON path to extract data from response">
                        <JsonPathInput
                            value={pathVariables}
                            onChange={setPathVariables}
                            placeholder="Add path segments..."
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>
        </Group>
    );

    // =========================================================================
    // Tab: Extractors
    // =========================================================================
    const ExtractorsTab = (
        <Group>
            {/* JSON Path Extractors */}
            <GroupItem
                title="JSON Path Extractors"
                icon={Braces}
                defaultExpanded
                actionIcon={Plus}
                onActionIconClick={() => addExtractor('jsonpath')}
                badgeText={`${extractors.filter(e => e.type === 'jsonpath').length}`}
            >
                {extractors.filter(e => e.type === 'jsonpath').length === 0 ? (
                    <NoContent
                        title="No JSON path extractors"
                        actionLabel="Add Extractor"
                        onAction={() => addExtractor('jsonpath')}
                    />
                ) : (
                    <Group>
                        {extractors.filter(e => e.type === 'jsonpath').map((extractor) => (
                            <GroupItem
                                key={extractor.id}
                                title={extractor.key}
                                indentChildren
                                actionIcon={Trash2}
                                onActionIconClick={() => deleteExtractor(extractor.id)}
                            >
                                <LabeledInputGroup>
                                    <LabeledInput label="Variable Key">
                                        <TextInput
                                            value={extractor.key}
                                            onChange={(v) => updateExtractor(extractor.id, 'key', v)}
                                            placeholder="e.g., user_id"
                                        />
                                    </LabeledInput>

                                    <LabeledInput label="JSON Path">
                                        <JsonPathInput
                                            value={extractor.path}
                                            onChange={(v) => updateExtractor(extractor.id, 'path', v)}
                                        />
                                    </LabeledInput>
                                </LabeledInputGroup>
                            </GroupItem>
                        ))}
                    </Group>
                )}
            </GroupItem>

            {/* Function Extractors */}
            <GroupItem
                title="Function Extractors"
                icon={Code}
                actionIcon={Plus}
                onActionIconClick={() => addExtractor('function')}
                badgeText={`${extractors.filter(e => e.type === 'function').length}`}
            >
                {extractors.filter(e => e.type === 'function').length === 0 ? (
                    <NoContent
                        title="No function extractors"
                        actionLabel="Add Extractor"
                        onAction={() => addExtractor('function')}
                    />
                ) : (
                    <Group>
                        {extractors.filter(e => e.type === 'function').map((extractor) => (
                            <GroupItem
                                key={extractor.id}
                                title={extractor.key}
                                indentChildren
                                actionIcon={Trash2}
                                onActionIconClick={() => deleteExtractor(extractor.id)}
                            >
                                <LabeledInputGroup>
                                    <LabeledInput label="Variable Key">
                                        <TextInput
                                            value={extractor.key}
                                            onChange={(v) => updateExtractor(extractor.id, 'key', v)}
                                            placeholder="e.g., custom_value"
                                        />
                                    </LabeledInput>

                                    <LabeledInput label="Python Code">
                                        <PythonInput
                                            value={extractor.code || ''}
                                            onChange={(v) => updateExtractor(extractor.id, 'code', v)}
                                            label="Edit extraction function"
                                        />
                                    </LabeledInput>
                                </LabeledInputGroup>
                            </GroupItem>
                        ))}
                    </Group>
                )}
            </GroupItem>
        </Group>
    );

    // =========================================================================
    // Tab: Advanced
    // =========================================================================
    const AdvancedTab = (
        <Group>
            <GroupItem title="Response Processing" icon={RefreshCw} defaultExpanded indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Max Response Size" helpText="KB limit for response body">
                        <NumberInput
                            value={maxResponseSize}
                            onChange={setMaxResponseSize}
                            min={1}
                            max={10240}
                            step={256}
                        />
                    </LabeledInput>

                    <LabeledInput label="Condition Value" helpText="Dynamic typed value">
                        <DynamicInput
                            value={conditionValue}
                            onChange={setConditionValue}
                            allowedTypes={['string', 'number', 'boolean', 'null']}
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>

            <GroupItem title="Custom Transform" icon={Code} indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Transform Function">
                        <PythonInput
                            value={customCode}
                            onChange={setCustomCode}
                            label="Edit transform code"
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>

            <GroupItem title="Notes" icon={AlertTriangle} indentChildren>
                <LabeledInputGroup>
                    <LabeledInput label="Description">
                        <TextAreaInput
                            value="This endpoint fetches user profile data. Requires valid authentication token. Rate limited to 100 requests per minute."
                            onChange={() => { }}
                            rows={4}
                            placeholder="Add notes about this endpoint..."
                        />
                    </LabeledInput>
                </LabeledInputGroup>
            </GroupItem>
        </Group>
    );

    // =========================================================================
    // Render
    // =========================================================================
    return (
        <div className="w-full max-w-2xl">
            <GroupTab
                orientation="horizontal"
                items={[
                    { title: 'General', children: GeneralTab },
                    { title: 'Headers', children: HeadersTab },
                    { title: 'Body', children: BodyTab },
                    { title: 'Extractors', children: ExtractorsTab },
                    { title: 'Advanced', children: AdvancedTab },
                ]}
            />
        </div>
    );
}

// ============================================================================
// Component Configuration for Registry
// ============================================================================

const API_ENDPOINT_EXAMPLE: ComponentConfig = {
    id: 'api-endpoint-config',
    name: 'API Endpoint Config',
    description: 'A comprehensive example panel demonstrating all input primitives working together in a realistic API endpoint configuration scenario. Includes text inputs, enums, booleans, numbers, URLs, icons, JSON editors, path inputs, dynamic values, and code editors.',
    icon: Server,
    importPath: 'spectra/input-primitives',
    examples: [
        {
            title: 'Full Configuration Panel',
            description: 'Interactive API endpoint configuration with 5 tabs covering all aspects: general settings, headers, request body, response extractors, and advanced options. Uses every input primitive type.',
            code: `// This example uses:
// - TextInput, UrlInput, IconInput
// - EnumInput (buttons & dropdown variants)
// - MultiEnumSelect
// - BooleanInput (switch variant)
// - NumberInput, NumericalInput
// - ObjectInput (JSON editor)
// - JsonPathInput
// - DynamicInput
// - PythonInput
// - TextAreaInput

// All organized with:
// - GroupTab for horizontal tabs
// - Group & GroupItem for sections
// - LabeledInput & LabeledInputGroup for forms

<GroupTab
    orientation="horizontal"
    items={[
        { title: 'General', children: <GeneralConfig /> },
        { title: 'Headers', children: <HeadersConfig /> },
        { title: 'Body', children: <BodyConfig /> },
        { title: 'Extractors', children: <ExtractorsConfig /> },
        { title: 'Advanced', children: <AdvancedConfig /> },
    ]}
/>`,
            preview: <APIEndpointConfigPanel />,
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================

export const categoryRegistry: CategoryRegistry = {
    id: 'examples',
    name: 'Examples',
    icon: Beaker,
    getComponents: () => [API_ENDPOINT_EXAMPLE],
};
