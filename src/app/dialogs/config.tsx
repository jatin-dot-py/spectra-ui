import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import type { CategoryRegistry, ComponentConfig } from '../types';
import { Button } from '@/components/ui/button';
import {
    ConfirmDialog,
    WarningDialog,
    ErrorDialog,
    InfoDialog,
} from '@/spectra/ui/dialogs';
import { GroupItem } from '@/spectra/ui/group';
import { LabeledInput, LabeledInputGroup } from '@/spectra/ui/labeled-input';
import { TextInput, BooleanInput } from '@/spectra/ui/input-primitives';

// ============================================================================
// Preview Components
// ============================================================================

function ConfirmDialogPreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Open Confirm Dialog
            </Button>
            <ConfirmDialog
                open={open}
                onOpenChange={setOpen}
                onConfirm={() => console.log('Confirmed!')}
                title="Confirm action?"
                description="This action will proceed with the selected operation."
            />
        </div>
    );
}

function ConfirmDestructivePreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="destructive" size="sm" onClick={() => setOpen(true)}>
                Delete Item
            </Button>
            <ConfirmDialog
                open={open}
                onOpenChange={setOpen}
                onConfirm={() => console.log('Deleted!')}
                title="Delete this block?"
                description="This action cannot be undone."
                confirmText="Delete"
                variant="destructive"
            />
        </div>
    );
}

function ConfirmLoadingPreview() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 2000);
    };

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Async Confirm
            </Button>
            <ConfirmDialog
                open={open}
                onOpenChange={setOpen}
                onConfirm={handleConfirm}
                title="Save changes?"
                description="Your changes will be saved to the server."
                confirmText="Save"
                loading={loading}
            />
        </div>
    );
}

function ConfirmWithFormPreview() {
    const [open, setOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [makePublic, setMakePublic] = useState(false);

    const handleConfirm = () => {
        console.log('Creating project:', { projectName, makePublic });
        setProjectName('');
        setMakePublic(false);
    };

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Create Project
            </Button>
            <ConfirmDialog
                open={open}
                onOpenChange={setOpen}
                onConfirm={handleConfirm}
                title="Create New Project"
                description="Enter the details for your new project."
                confirmText="Create"
            >
                <GroupItem
                    title="Project Details"
                    defaultExpanded
                    collapsible={false}
                    indentChildren
                >
                    <LabeledInputGroup>
                        <LabeledInput label="Project Name" helpText="A unique name for your project">
                            <TextInput
                                value={projectName}
                                onChange={setProjectName}
                                placeholder="my-awesome-project"
                            />
                        </LabeledInput>
                        <LabeledInput label="Make Public" helpText="Allow others to view this project">
                            <BooleanInput
                                value={makePublic}
                                onChange={setMakePublic}
                                variant="switch"
                            />
                        </LabeledInput>
                    </LabeledInputGroup>
                </GroupItem>
            </ConfirmDialog>
        </div>
    );
}

function LargeSizeDialogPreview() {
    const [open, setOpen] = useState(false);
    const [appName, setAppName] = useState('My Application');
    const [debugMode, setDebugMode] = useState(false);
    const [apiUrl, setApiUrl] = useState('https://api.example.com');
    const [autoSave, setAutoSave] = useState(true);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Open Large Settings Dialog
            </Button>
            <ConfirmDialog
                open={open}
                onOpenChange={setOpen}
                onConfirm={() => console.log('Settings saved!', { appName, debugMode, apiUrl, autoSave })}
                title="Application Settings"
                description="Configure your application preferences."
                confirmText="Save Settings"
                size="lg"
            >
                <div className="space-y-4">
                    <GroupItem title="General" defaultExpanded collapsible={false} indentChildren>
                        <LabeledInputGroup>
                            <LabeledInput label="Application Name">
                                <TextInput value={appName} onChange={setAppName} placeholder="Enter app name" />
                            </LabeledInput>
                            <LabeledInput label="Auto-Save" helpText="Automatically save changes">
                                <BooleanInput value={autoSave} onChange={setAutoSave} variant="switch" />
                            </LabeledInput>
                        </LabeledInputGroup>
                    </GroupItem>
                    <GroupItem title="Developer" defaultExpanded collapsible={false} indentChildren>
                        <LabeledInputGroup>
                            <LabeledInput label="API URL">
                                <TextInput value={apiUrl} onChange={setApiUrl} placeholder="https://..." />
                            </LabeledInput>
                            <LabeledInput label="Debug Mode" helpText="Enable verbose logging">
                                <BooleanInput value={debugMode} onChange={setDebugMode} variant="switch" />
                            </LabeledInput>
                        </LabeledInputGroup>
                    </GroupItem>
                </div>
            </ConfirmDialog>
        </div>
    );
}

function WarningDialogPreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Show Warning
            </Button>
            <WarningDialog
                open={open}
                onOpenChange={setOpen}
                onProceed={() => console.log('Proceeded!')}
                title="Unsaved changes"
                description="You have changes that haven't been saved."
                details={['3 blocks modified', '1 new layout added']}
                proceedText="Discard Changes"
            />
        </div>
    );
}

function ErrorDialogPreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Trigger Error
            </Button>
            <ErrorDialog
                open={open}
                onOpenChange={setOpen}
                onRetry={() => console.log('Retrying...')}
                title="Failed to save"
                description="Your changes could not be saved. Please try again."
                error={new Error('Network request failed: Connection timeout after 30000ms')}
            />
        </div>
    );
}

function InfoDialogPreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Show Shortcuts
            </Button>
            <InfoDialog
                open={open}
                onOpenChange={setOpen}
                title="Keyboard Shortcuts"
                description="Use these shortcuts to work faster."
            >
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex justify-between">
                        <span>Undo</span>
                        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Ctrl+Z</kbd>
                    </li>
                    <li className="flex justify-between">
                        <span>Redo</span>
                        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Ctrl+Y</kbd>
                    </li>
                    <li className="flex justify-between">
                        <span>Save</span>
                        <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Ctrl+S</kbd>
                    </li>
                </ul>
            </InfoDialog>
        </div>
    );
}

// ============================================================================
// Component Configurations
// ============================================================================

const CONFIRM_DIALOG_CONFIG: ComponentConfig = {
    id: 'confirm-dialog',
    name: 'ConfirmDialog',
    description: '"Are you sure?" confirmation for actions.',
    icon: MessageSquare,
    importPath: '@/spectra/ui/dialogs',
    examples: [
        {
            title: 'Basic Confirm',
            description: 'Simple confirmation with default buttons',
            code: `<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  onConfirm={handleConfirm}
  title="Confirm action?"
  description="This action will proceed."
/>`,
            preview: <ConfirmDialogPreview />,
        },
        {
            title: 'Destructive Variant',
            description: 'Red confirm button for dangerous actions',
            code: `<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  onConfirm={handleDelete}
  title="Delete this block?"
  description="This action cannot be undone."
  confirmText="Delete"
  variant="destructive"
/>`,
            preview: <ConfirmDestructivePreview />,
        },
        {
            title: 'With Loading State',
            description: 'Spinner on confirm button during async operations',
            code: `<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  onConfirm={handleAsyncSave}
  title="Save changes?"
  confirmText="Save"
  loading={loading}
/>`,
            preview: <ConfirmLoadingPreview />,
        },
        {
            title: 'With Form Content',
            description: 'Custom form inputs using GroupItem and LabeledInputGroup as children',
            code: `<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  onConfirm={handleCreate}
  title="Create New Project"
  description="Enter the details for your new project."
  confirmText="Create"
>
  <GroupItem title="Project Details" defaultExpanded collapsible={false} indentChildren>
    <LabeledInputGroup>
      <LabeledInput label="Project Name" helpText="A unique name">
        <TextInput value={name} onChange={setName} />
      </LabeledInput>
      <LabeledInput label="Make Public">
        <BooleanInput value={isPublic} onChange={setIsPublic} variant="switch" />
      </LabeledInput>
    </LabeledInputGroup>
  </GroupItem>
</ConfirmDialog>`,
            preview: <ConfirmWithFormPreview />,
        },
        {
            title: 'Large Size',
            description: 'Use size="lg" or "xl" for settings dialogs with more content',
            code: `<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  onConfirm={handleSave}
  title="Application Settings"
  description="Configure your application preferences."
  confirmText="Save Settings"
  size="lg"
>
  <GroupItem title="General" defaultExpanded collapsible={false} indentChildren>
    <LabeledInputGroup>
      <LabeledInput label="Application Name">
        <TextInput value={name} onChange={setName} />
      </LabeledInput>
    </LabeledInputGroup>
  </GroupItem>
</ConfirmDialog>`,
            preview: <LargeSizeDialogPreview />,
        },
    ],
};

const WARNING_DIALOG_CONFIG: ComponentConfig = {
    id: 'warning-dialog',
    name: 'WarningDialog',
    description: 'Alert user about something that might cause issues.',
    icon: MessageSquare,
    importPath: '@/spectra/ui/dialogs',
    examples: [
        {
            title: 'With Details List',
            description: 'Amber warning icon with bullet points',
            code: `<WarningDialog
  open={open}
  onOpenChange={setOpen}
  onProceed={handleDiscard}
  title="Unsaved changes"
  description="You have changes that haven't been saved."
  details={["3 blocks modified", "1 new layout added"]}
  proceedText="Discard Changes"
/>`,
            preview: <WarningDialogPreview />,
        },
    ],
};

const ERROR_DIALOG_CONFIG: ComponentConfig = {
    id: 'error-dialog',
    name: 'ErrorDialog',
    description: 'Display an error that occurred with optional retry.',
    icon: MessageSquare,
    importPath: '@/spectra/ui/dialogs',
    examples: [
        {
            title: 'With Technical Details',
            description: 'Collapsible error details with retry option',
            code: `<ErrorDialog
  open={!!error}
  onOpenChange={() => setError(null)}
  onRetry={handleRetry}
  title="Failed to save"
  description="Your changes could not be saved."
  error={error}
/>`,
            preview: <ErrorDialogPreview />,
        },
    ],
};

const INFO_DIALOG_CONFIG: ComponentConfig = {
    id: 'info-dialog',
    name: 'InfoDialog',
    description: 'Display informational content (docs, help, announcements).',
    icon: MessageSquare,
    importPath: '@/spectra/ui/dialogs',
    examples: [
        {
            title: 'Keyboard Shortcuts',
            description: 'Rich content with custom children',
            code: `<InfoDialog
  open={showHelp}
  onOpenChange={setShowHelp}
  title="Keyboard Shortcuts"
>
  <ul>
    <li>Ctrl+Z - Undo</li>
    <li>Ctrl+S - Save</li>
  </ul>
</InfoDialog>`,
            preview: <InfoDialogPreview />,
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================
export const categoryRegistry: CategoryRegistry = {
    id: 'dialogs',
    name: 'Dialogs',
    icon: MessageSquare,
    getComponents: () => [
        CONFIRM_DIALOG_CONFIG,
        WARNING_DIALOG_CONFIG,
        ERROR_DIALOG_CONFIG,
        INFO_DIALOG_CONFIG,
    ],
};
