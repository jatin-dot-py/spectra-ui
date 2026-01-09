'use client';

import { useState } from 'react';
import { Zap, Plus, Trash2, Download, RefreshCw, Save, Send, Copy, Settings, Layers } from 'lucide-react';
import type { CategoryRegistry, ComponentConfig } from '../types';
import { ActionButton, ActionButtonGroup } from '@/spectra/ui/actions';

// ============================================================================
// Preview Components - ActionButton
// ============================================================================

function BasicActionButtonPreview() {
    return (
        <div className="flex flex-wrap gap-2">
            <ActionButton
                label="Create"
                icon={Plus}
                onClick={() => console.log('Create clicked')}
            />
            <ActionButton
                label="Save"
                icon={Save}
                variant="secondary"
                onClick={() => console.log('Save clicked')}
            />
            <ActionButton
                label="Delete"
                icon={Trash2}
                variant="destructive"
                onClick={() => console.log('Delete clicked')}
            />
        </div>
    );
}

function VariantsPreview() {
    return (
        <div className="flex flex-wrap gap-2">
            <ActionButton
                label="Default"
                icon={Zap}
                variant="default"
                onClick={() => { }}
            />
            <ActionButton
                label="Secondary"
                icon={Copy}
                variant="secondary"
                onClick={() => { }}
            />
            <ActionButton
                label="Outline"
                icon={Download}
                variant="outline"
                onClick={() => { }}
            />
            <ActionButton
                label="Ghost"
                icon={Settings}
                variant="ghost"
                onClick={() => { }}
            />
            <ActionButton
                label="Destructive"
                icon={Trash2}
                variant="destructive"
                onClick={() => { }}
            />
        </div>
    );
}

function SizesPreview() {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <ActionButton
                label="Extra Small"
                icon={Plus}
                size="xs"
                onClick={() => { }}
            />
            <ActionButton
                label="Small"
                icon={Plus}
                size="sm"
                onClick={() => { }}
            />
            <ActionButton
                label="Default"
                icon={Plus}
                size="default"
                onClick={() => { }}
            />
            <ActionButton
                label="Large"
                icon={Plus}
                size="lg"
                onClick={() => { }}
            />
        </div>
    );
}

function WithTooltipPreview() {
    return (
        <div className="flex flex-wrap gap-2">
            <ActionButton
                label="Send"
                icon={Send}
                tooltip="Send message to all recipients"
                onClick={() => console.log('Sent!')}
            />
            <ActionButton
                label="Refresh"
                icon={RefreshCw}
                variant="outline"
                tooltip="Refresh data from server"
                onClick={() => console.log('Refreshed!')}
            />
        </div>
    );
}

function LoadingStatePreview() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="flex flex-wrap gap-2">
            <ActionButton
                label="Submit"
                icon={Send}
                loading={loading}
                onClick={handleClick}
            />
            <ActionButton
                label="Always Loading"
                icon={RefreshCw}
                variant="outline"
                loading={true}
                onClick={() => { }}
            />
        </div>
    );
}

function IconOnlyPreview() {
    return (
        <div className="flex flex-wrap gap-2">
            <ActionButton
                label="Add"
                icon={Plus}
                iconOnly
                tooltip="Add new item"
                onClick={() => { }}
            />
            <ActionButton
                label="Copy"
                icon={Copy}
                iconOnly
                variant="outline"
                tooltip="Copy to clipboard"
                onClick={() => { }}
            />
            <ActionButton
                label="Delete"
                icon={Trash2}
                iconOnly
                variant="ghost"
                tooltip="Delete item"
                onClick={() => { }}
            />
            <ActionButton
                label="Settings"
                icon={Settings}
                iconOnly
                variant="secondary"
                tooltip="Open settings"
                onClick={() => { }}
            />
        </div>
    );
}

// ============================================================================
// Preview Components - ActionButtonGroup
// ============================================================================

function HorizontalGroupPreview() {
    return (
        <ActionButtonGroup orientation="horizontal" gap="sm">
            <ActionButton label="Save" icon={Save} onClick={() => { }} />
            <ActionButton label="Download" icon={Download} variant="outline" onClick={() => { }} />
            <ActionButton label="Delete" icon={Trash2} variant="destructive" onClick={() => { }} />
        </ActionButtonGroup>
    );
}

function VerticalGroupPreview() {
    return (
        <ActionButtonGroup orientation="vertical" gap="sm">
            <ActionButton label="Create New" icon={Plus} onClick={() => { }} />
            <ActionButton label="Import" icon={Download} variant="outline" onClick={() => { }} />
            <ActionButton label="Settings" icon={Settings} variant="ghost" onClick={() => { }} />
        </ActionButtonGroup>
    );
}

function ToolbarGroupPreview() {
    return (
        <ActionButtonGroup orientation="horizontal" gap="none">
            <ActionButton label="Copy" icon={Copy} iconOnly variant="ghost" tooltip="Copy" onClick={() => { }} />
            <ActionButton label="Refresh" icon={RefreshCw} iconOnly variant="ghost" tooltip="Refresh" onClick={() => { }} />
            <ActionButton label="Download" icon={Download} iconOnly variant="ghost" tooltip="Download" onClick={() => { }} />
            <ActionButton label="Delete" icon={Trash2} iconOnly variant="ghost" tooltip="Delete" onClick={() => { }} />
        </ActionButtonGroup>
    );
}

function AlignedGroupPreview() {
    return (
        <div className="space-y-4 w-full">
            <ActionButtonGroup align="start">
                <ActionButton label="Start" icon={Zap} size="sm" onClick={() => { }} />
            </ActionButtonGroup>
            <ActionButtonGroup align="center">
                <ActionButton label="Center" icon={Zap} size="sm" onClick={() => { }} />
            </ActionButtonGroup>
            <ActionButtonGroup align="end">
                <ActionButton label="End" icon={Zap} size="sm" onClick={() => { }} />
            </ActionButtonGroup>
        </div>
    );
}

// ============================================================================
// Component Configurations
// ============================================================================

const ACTION_BUTTON_CONFIG: ComponentConfig = {
    id: 'action-button',
    name: 'ActionButton',
    description: 'A button for triggering actions with icon, tooltip, and loading support.',
    icon: Zap,
    importPath: '@/spectra/ui/actions',
    examples: [
        {
            title: 'Basic Usage',
            description: 'Simple action buttons with icons and different variants',
            code: `<ActionButton
  label="Create"
  icon={Plus}
  onClick={() => console.log('Create clicked')}
/>`,
            preview: <BasicActionButtonPreview />,
        },
        {
            title: 'All Variants',
            description: 'Default, secondary, outline, ghost, and destructive variants',
            code: `<ActionButton label="Default" icon={Zap} variant="default" onClick={() => {}} />
<ActionButton label="Secondary" icon={Copy} variant="secondary" onClick={() => {}} />
<ActionButton label="Outline" icon={Download} variant="outline" onClick={() => {}} />
<ActionButton label="Ghost" icon={Settings} variant="ghost" onClick={() => {}} />
<ActionButton label="Destructive" icon={Trash2} variant="destructive" onClick={() => {}} />`,
            preview: <VariantsPreview />,
        },
        {
            title: 'Sizes',
            description: 'Extra small, small, default, and large sizes',
            code: `<ActionButton label="Extra Small" icon={Plus} size="xs" onClick={() => {}} />
<ActionButton label="Small" icon={Plus} size="sm" onClick={() => {}} />
<ActionButton label="Default" icon={Plus} size="default" onClick={() => {}} />
<ActionButton label="Large" icon={Plus} size="lg" onClick={() => {}} />`,
            preview: <SizesPreview />,
        },
        {
            title: 'With Tooltip',
            description: 'Hover to see tooltip text',
            code: `<ActionButton
  label="Send"
  icon={Send}
  tooltip="Send message to all recipients"
  onClick={() => console.log('Sent!')}
/>`,
            preview: <WithTooltipPreview />,
        },
        {
            title: 'Loading State',
            description: 'Shows spinner when loading, auto-disables button',
            code: `<ActionButton
  label="Submit"
  icon={Send}
  loading={loading}
  onClick={handleSubmit}
/>`,
            preview: <LoadingStatePreview />,
        },
        {
            title: 'Icon Only',
            description: 'Compact icon-only buttons, great for toolbars',
            code: `<ActionButton
  label="Add"
  icon={Plus}
  iconOnly
  tooltip="Add new item"
  onClick={() => {}}
/>`,
            preview: <IconOnlyPreview />,
        },
    ],
};

const ACTION_BUTTON_GROUP_CONFIG: ComponentConfig = {
    id: 'action-button-group',
    name: 'ActionButtonGroup',
    description: 'A container for stacking multiple ActionButtons with configurable orientation and spacing.',
    icon: Layers,
    importPath: '@/spectra/ui/actions',
    examples: [
        {
            title: 'Horizontal Group',
            description: 'Default horizontal layout with small gap',
            code: `<ActionButtonGroup orientation="horizontal" gap="sm">
  <ActionButton label="Save" icon={Save} onClick={() => {}} />
  <ActionButton label="Download" icon={Download} variant="outline" onClick={() => {}} />
  <ActionButton label="Delete" icon={Trash2} variant="destructive" onClick={() => {}} />
</ActionButtonGroup>`,
            preview: <HorizontalGroupPreview />,
        },
        {
            title: 'Vertical Group',
            description: 'Vertical stacking for sidebar-style layouts',
            code: `<ActionButtonGroup orientation="vertical" gap="sm">
  <ActionButton label="Create New" icon={Plus} onClick={() => {}} />
  <ActionButton label="Import" icon={Download} variant="outline" onClick={() => {}} />
  <ActionButton label="Settings" icon={Settings} variant="ghost" onClick={() => {}} />
</ActionButtonGroup>`,
            preview: <VerticalGroupPreview />,
        },
        {
            title: 'Toolbar (No Gap)',
            description: 'Icon-only buttons with no gap for compact toolbars',
            code: `<ActionButtonGroup orientation="horizontal" gap="none">
  <ActionButton label="Copy" icon={Copy} iconOnly variant="ghost" tooltip="Copy" onClick={() => {}} />
  <ActionButton label="Refresh" icon={RefreshCw} iconOnly variant="ghost" tooltip="Refresh" onClick={() => {}} />
  <ActionButton label="Delete" icon={Trash2} iconOnly variant="ghost" tooltip="Delete" onClick={() => {}} />
</ActionButtonGroup>`,
            preview: <ToolbarGroupPreview />,
        },
        {
            title: 'Alignment',
            description: 'Align buttons to start, center, or end',
            code: `<ActionButtonGroup align="start">...</ActionButtonGroup>
<ActionButtonGroup align="center">...</ActionButtonGroup>
<ActionButtonGroup align="end">...</ActionButtonGroup>`,
            preview: <AlignedGroupPreview />,
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================

export const categoryRegistry: CategoryRegistry = {
    id: 'actions',
    name: 'Actions',
    icon: Zap,
    getComponents: () => [ACTION_BUTTON_CONFIG, ACTION_BUTTON_GROUP_CONFIG],
};

