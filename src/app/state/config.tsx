import { AlertCircle, FileQuestion, Layers, Inbox, Loader } from 'lucide-react';
import type { ComponentConfig, CategoryRegistry } from '../types';
import { Error, NoContent, Loading } from '@/spectra/ui/state';

// ============================================================================
// Preview Components - Error
// ============================================================================

function ErrorDefaultPreview() {
    return (
        <Error
            title="Failed to load data"
            actionLabel="Retry"
            onAction={() => console.log('Retry clicked')}
        />
    );
}

function ErrorCustomIconPreview() {
    return (
        <Error
            icon={FileQuestion}
            title="Resource not found"
            actionLabel="Go Back"
            onAction={() => console.log('Go back clicked')}
            learnMoreUrl="https://example.com/help"
        />
    );
}

// ============================================================================
// Preview Components - NoContent
// ============================================================================

function NoContentDefaultPreview() {
    return (
        <NoContent
            title="No projects yet"
            actionLabel="Create Project"
            onAction={() => console.log('Create clicked')}
        />
    );
}

function NoContentCustomIconPreview() {
    return (
        <NoContent
            icon={Layers}
            title="No layers added"
            actionLabel="Add Layer"
            onAction={() => console.log('Add layer clicked')}
            learnMoreUrl="https://example.com/docs"
        />
    );
}

// ============================================================================
// Preview Components - Loading
// ============================================================================

function LoadingSpinnerPreview() {
    return <Loading title="Loading..." />;
}

function LoadingInputPreview() {
    return <Loading variant="input" />;
}

function LoadingTextPreview() {
    return <Loading variant="text" lines={4} />;
}

function LoadingCardPreview() {
    return <Loading variant="card" />;
}

// ============================================================================
// Component Configurations
// ============================================================================

const ERROR_CONFIG: ComponentConfig = {
    id: 'error',
    name: 'Error',
    description: 'Displays an error state with actionable recovery options.',
    icon: AlertCircle,
    importPath: '@/spectra/ui/state',
    examples: [
        {
            title: 'Default',
            description: 'Error state with default AlertCircle icon',
            code: `<Error
  title="Failed to load data"
  actionLabel="Retry"
  onAction={() => retry()}
/>`,
            preview: <ErrorDefaultPreview />
        },
        {
            title: 'Custom Icon & Learn More',
            description: 'Error with custom icon and help link',
            code: `<Error
  icon={FileQuestion}
  title="Resource not found"
  actionLabel="Go Back"
  onAction={() => goBack()}
  learnMoreUrl="https://example.com/help"
/>`,
            preview: <ErrorCustomIconPreview />
        },
    ],
};

const NO_CONTENT_CONFIG: ComponentConfig = {
    id: 'no-content',
    name: 'NoContent',
    description: 'Displays an empty state prompting user action.',
    icon: Inbox,
    importPath: '@/spectra/ui/state',
    examples: [
        {
            title: 'Default',
            description: 'Empty state with default Inbox icon',
            code: `<NoContent
  title="No projects yet"
  actionLabel="Create Project"
  onAction={() => createProject()}
/>`,
            preview: <NoContentDefaultPreview />
        },
        {
            title: 'Custom Icon & Learn More',
            description: 'Empty state with custom icon and help link',
            code: `<NoContent
  icon={Layers}
  title="No layers added"
  actionLabel="Add Layer"
  onAction={() => addLayer()}
  learnMoreUrl="https://example.com/docs"
/>`,
            preview: <NoContentCustomIconPreview />
        },
    ],
};

const LOADING_CONFIG: ComponentConfig = {
    id: 'loading',
    name: 'Loading',
    description: 'Displays loading states with spinner or skeleton variants.',
    icon: Loader,
    importPath: '@/spectra/ui/state',
    examples: [
        {
            title: 'Spinner',
            description: 'Centered spinner with optional title',
            code: `<Loading title="Loading..." />`,
            preview: <LoadingSpinnerPreview />
        },
        {
            title: 'Input Skeleton',
            description: 'Skeleton mimicking a labeled input field',
            code: `<Loading variant="input" />`,
            preview: <LoadingInputPreview />
        },
        {
            title: 'Text Skeleton',
            description: 'Multiple lines of text skeleton',
            code: `<Loading variant="text" lines={4} />`,
            preview: <LoadingTextPreview />
        },
        {
            title: 'Card Skeleton',
            description: 'Card-like skeleton with avatar and content',
            code: `<Loading variant="card" />`,
            preview: <LoadingCardPreview />
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================
export const categoryRegistry: CategoryRegistry = {
    id: 'state',
    name: 'State',
    icon: AlertCircle,
    getComponents: () => [ERROR_CONFIG, NO_CONTENT_CONFIG, LOADING_CONFIG],
};
