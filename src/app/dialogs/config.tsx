import { useState } from 'react';
import { MessageSquare, Settings } from 'lucide-react';
import type { CategoryRegistry, ComponentConfig } from '../types';
import { Button } from '@/components/ui/button';
import {
    ConfirmDialog,
    WarningDialog,
    ErrorDialog,
    InfoDialog,
    PanelDialog,
} from '@/spectra/ui/dialogs';
import { Group, GroupItem } from '@/spectra/ui/group';
import { LabeledInput, LabeledInputGroup } from '@/spectra/ui/labeled-input';
import { TextInput, BooleanInput, NumberInput } from '@/spectra/ui/input-primitives';

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

    // Realistic traceback with long file paths
    const errorDetails = `Unhandled exception in step execution: 'code' object has no attribute 'errors'

Traceback (most recent call last):
  File "C:\\Users\\jatin\\OneDrive\\Desktop\\projects\\httpchain\\backend\\src\\httpchain\\step\\executor\\_executor.py", line 91, in execute
    condition_result = await evaluate_condition(self.step.condition, self.variables)
  File "C:\\Users\\jatin\\OneDrive\\Desktop\\projects\\httpchain\\backend\\src\\httpchain\\step\\condition\\__init__.py", line 43, in evaluate_condition
    return await evaluate_condition_function(condition, variables)
  File "C:\\Users\\jatin\\OneDrive\\Desktop\\projects\\httpchain\\backend\\src\\httpchain\\step\\condition\\evaluator.py", line 78, in evaluate_condition_function
    result = code.errors
AttributeError: 'code' object has no attribute 'errors'`;

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Trigger Error
            </Button>
            <ErrorDialog
                open={open}
                onOpenChange={setOpen}
                onRetry={() => console.log('Retrying...')}
                title="Step Execution Failed"
                description="An error occurred while executing this step."
                error={errorDetails}
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

function PanelDialogPreview() {
    const [open, setOpen] = useState(false);
    const [appName, setAppName] = useState('My Application');
    const [theme, setTheme] = useState('dark');
    const [maxItems, setMaxItems] = useState(100);
    const [autoSave, setAutoSave] = useState(true);
    const [apiUrl, setApiUrl] = useState('https://api.example.com');
    const [debugMode, setDebugMode] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Open Full Settings Panel
            </Button>
            <PanelDialog
                open={open}
                onOpenChange={setOpen}
                title="Application Settings"
                description="Configure all aspects of your application."
                icon={Settings}
            >
                <Group>
                    <GroupItem title="General" defaultExpanded indentChildren>
                        <LabeledInputGroup>
                            <LabeledInput label="Application Name">
                                <TextInput value={appName} onChange={setAppName} />
                            </LabeledInput>
                            <LabeledInput label="Theme">
                                <TextInput value={theme} onChange={setTheme} />
                            </LabeledInput>
                            <LabeledInput label="Auto-Save" helpText="Automatically save changes">
                                <BooleanInput value={autoSave} onChange={setAutoSave} variant="switch" />
                            </LabeledInput>
                        </LabeledInputGroup>
                    </GroupItem>
                    <GroupItem title="Performance" indentChildren>
                        <LabeledInputGroup>
                            <LabeledInput label="Max Items" helpText="Maximum items to load">
                                <NumberInput value={maxItems} onChange={setMaxItems} min={10} max={1000} />
                            </LabeledInput>
                        </LabeledInputGroup>
                    </GroupItem>
                    <GroupItem title="Developer" indentChildren>
                        <LabeledInputGroup>
                            <LabeledInput label="API URL">
                                <TextInput value={apiUrl} onChange={setApiUrl} />
                            </LabeledInput>
                            <LabeledInput label="Debug Mode" helpText="Enable verbose logging">
                                <BooleanInput value={debugMode} onChange={setDebugMode} variant="switch" />
                            </LabeledInput>
                        </LabeledInputGroup>
                    </GroupItem>
                </Group>
            </PanelDialog>
        </div>
    );
}

function PanelDialogCompactPreview() {
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-2">
            <Button variant="outline" size="sm" onClick={() => setOpen(true)}>
                Open Compact Panel
            </Button>
            <PanelDialog
                open={open}
                onOpenChange={setOpen}
                title="Data Viewer"
                icon={Settings}
            >
                <div className="h-full flex items-center justify-center text-muted-foreground">
                    <p>No description = compact header. Maximum space for content.</p>
                </div>
            </PanelDialog>
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

const PANEL_DIALOG_CONFIG: ComponentConfig = {
    id: 'panel-dialog',
    name: 'PanelDialog',
    description: 'Full-screen panel for settings, dashboards, and complex forms.',
    icon: Settings,
    importPath: '@/spectra/ui/dialogs',
    examples: [
        {
            title: 'Settings Panel',
            description: 'Near full-screen dialog with scrollable content',
            code: `<PanelDialog
  open={open}
  onOpenChange={setOpen}
  title="Application Settings"
  description="Configure your application."
  icon={Settings}
>
  <Group>
    <GroupItem title="General" defaultExpanded>...</GroupItem>
    <GroupItem title="Advanced">...</GroupItem>
  </Group>
</PanelDialog>`,
            preview: <PanelDialogPreview />,
        },
        {
            title: 'Compact Mode',
            description: 'Omit description for minimal header — maximum content space',
            code: `<PanelDialog
  open={open}
  onOpenChange={setOpen}
  title="Data Viewer"
  icon={Settings}
>
  {/* No description = compact header */}
  <ContentHere />
</PanelDialog>`,
            preview: <PanelDialogCompactPreview />,
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
        PANEL_DIALOG_CONFIG,
    ],
};

