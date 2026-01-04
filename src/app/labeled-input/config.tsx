'use client';

import { useState } from 'react';
import {
    Tag, Mail, Smartphone, Tablet, Monitor, Maximize,
    SlidersHorizontal, ArrowUpRight, Layers, User, Key, Send
} from 'lucide-react';
import type { CategoryConfig, CategoryRegistry, ComponentConfig } from '../types';
import { LabeledInput } from '@/spectra/ui/labeled-input/LabeledInput';
import { LabeledInputGroup } from '@/spectra/ui/labeled-input/LabeledInputGroup';
import { TextInput } from '@/spectra/ui/input-primitives/TextInput';
import { EnumInput } from '@/spectra/ui/input-primitives/EnumInput';
import { BooleanInput } from '@/spectra/ui/input-primitives/BooleanInput';

// ============================================================================
// Preview Components
// ============================================================================

function BasicPreview({ label, placeholder, icon, helpText, helpUrl, error, warning }: any) {
    const [value, setValue] = useState('');
    return (
        <LabeledInput label={label} icon={icon} helpText={helpText} helpUrl={helpUrl} error={error} warning={warning}>
            <TextInput value={value} onChange={setValue} placeholder={placeholder} />
        </LabeledInput>
    );
}

function ErrorPreview() {
    const [value, setValue] = useState('invalid-email');
    return (
        <LabeledInput label="Email" icon={Mail} error="Invalid email format">
            <TextInput value={value} onChange={setValue} placeholder="you@example.com" />
        </LabeledInput>
    );
}

function WarningPreview() {
    const [value, setValue] = useState('sk-1234...');
    return (
        <LabeledInput label="API Key" icon={Key} warning="This key expires in 7 days">
            <TextInput value={value} onChange={setValue} />
        </LabeledInput>
    );
}

function CanvasToolbarPreview() {
    const [viewMode, setViewMode] = useState('full');
    const [sidebar, setSidebar] = useState(true);
    const [canvasBg, setCanvasBg] = useState('bg-background');

    return (
        <LabeledInput label="CANVAS">
            <EnumInput
                borderless
                variant="buttons"
                buttonDisplay="both"
                value={viewMode}
                onChange={setViewMode}
                options={[
                    { value: '320', label: '320', icon: Smartphone },
                    { value: '480', label: '480', icon: Tablet },
                    { value: '640', label: '640', icon: Monitor },
                    { value: '800', label: '800', icon: Monitor },
                    { value: 'full', label: 'Full', icon: Maximize },
                ]}
            />
            <EnumInput
                borderless
                variant="buttons"
                buttonDisplay="icon"
                value={sidebar ? 'sidebar' : 'expand'}
                onChange={(v) => v === 'sidebar' ? setSidebar(!sidebar) : {}}
                options={[
                    { value: 'sidebar', label: 'Toggle Sidebar', icon: SlidersHorizontal },
                    { value: 'expand', label: 'Expand', icon: ArrowUpRight },
                ]}
            />
            <EnumInput
                borderless
                variant="dropdown"
                iconTrigger={Layers}
                dropdownTitle="CANVAS SURFACE"
                value={canvasBg}
                onChange={setCanvasBg}
                options={[
                    { value: 'bg-background', label: 'bg-background', hoverText: 'Default page background' },
                    { value: 'bg-card', label: 'bg-card', hoverText: 'Elevated card surface' },
                    { value: 'bg-muted', label: 'bg-muted', hoverText: 'Subtle muted surface' },
                    { value: 'bg-popover', label: 'bg-popover', hoverText: 'Overlay/dialog surface' },
                    { value: 'bg-sidebar', label: 'bg-sidebar', hoverText: 'Sidebar panel surface' },
                ]}
            />
        </LabeledInput>
    );
}

function FormGroupPreview() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    return (
        <LabeledInputGroup>
            <LabeledInput label="Name" icon={User}>
                <TextInput value={name} onChange={setName} placeholder="Your name" />
            </LabeledInput>
            <LabeledInput label="Email" icon={Mail}>
                <TextInput value={email} onChange={setEmail} placeholder="you@example.com" />
            </LabeledInput>
            <LabeledInput label="Subscribe">
                <BooleanInput value={subscribe} onChange={setSubscribe} variant="switch" />
            </LabeledInput>
        </LabeledInputGroup>
    );
}

function FormWithValidationPreview() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('bad-email');
    const [webhook, setWebhook] = useState('');

    return (
        <LabeledInputGroup>
            <LabeledInput label="Name" icon={User}>
                <TextInput value={name} onChange={setName} placeholder="Required" />
            </LabeledInput>
            <LabeledInput label="Email" icon={Mail} error="Invalid email format">
                <TextInput value={email} onChange={setEmail} />
            </LabeledInput>
            <LabeledInput label="Webhook" icon={Send} warning="No HTTPS detected">
                <TextInput value={webhook} onChange={setWebhook} placeholder="https://..." />
            </LabeledInput>
        </LabeledInputGroup>
    );
}

// ============================================================================
// LabeledInput Component Config
// ============================================================================

const LABELED_INPUT_COMPONENT: ComponentConfig = {
    id: 'labeled-input',
    name: 'LabeledInput',
    description: 'Wraps input primitives with a label, optional icon, help tooltip, and validation states.',
    icon: Tag,
    importPath: '@/spectra/ui/labeled-input/LabeledInput',
    examples: [
        {
            title: 'Basic',
            description: 'Label and input side-by-side',
            code: `<LabeledInput label="Username">
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview label="Username" placeholder="Type here..." />
        },
        {
            title: 'With Icon',
            description: 'Display an icon before the label',
            code: `<LabeledInput label="Email" icon={Mail}>
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview label="Email" icon={Mail} placeholder="you@example.com" />
        },
        {
            title: 'With Help Text',
            description: 'Tooltip on hover with dotted underline',
            code: `<LabeledInput label="API Key" helpText="Found in your dashboard settings">
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview label="API Key" helpText="Found in your dashboard settings" />
        },
        {
            title: 'With Help URL',
            description: 'Tooltip with a reference link',
            code: `<LabeledInput 
  label="Webhook" 
  helpText="Triggered on form submission" 
  helpUrl="https://docs.example.com/webhooks"
>
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview
                label="Webhook"
                helpText="Triggered on form submission"
                helpUrl="https://docs.example.com/webhooks"
                placeholder="https://your-endpoint.com/hook"
            />
        },
        {
            title: 'Error State',
            description: 'Shows destructive styling with error message',
            code: `<LabeledInput label="Email" icon={Mail} error="Invalid email format">
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <ErrorPreview />
        },
        {
            title: 'Warning State',
            description: 'Shows warning styling with message',
            code: `<LabeledInput label="API Key" icon={Key} warning="This key expires in 7 days">
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <WarningPreview />
        },
        {
            title: 'Multiple Inputs',
            description: 'Multiple children with separators',
            code: `<LabeledInput label="CANVAS">
  <EnumInput variant="buttons" ... />
  <EnumInput variant="dropdown" ... />
</LabeledInput>`,
            preview: <CanvasToolbarPreview />
        },
    ],
};

// ============================================================================
// LabeledInputGroup Component Config
// ============================================================================

const LABELED_INPUT_GROUP_COMPONENT: ComponentConfig = {
    id: 'labeled-input-group',
    name: 'LabeledInputGroup',
    description: 'Stack multiple LabeledInput components with consistent spacing.',
    icon: Layers,
    importPath: '@/spectra/ui/labeled-input/LabeledInputGroup',
    examples: [
        {
            title: 'Basic Form',
            description: 'Multiple labeled inputs stacked vertically',
            code: `<LabeledInputGroup>
  <LabeledInput label="Name" icon={User}>
    <TextInput value={name} onChange={setName} />
  </LabeledInput>
  <LabeledInput label="Email" icon={Mail}>
    <TextInput value={email} onChange={setEmail} />
  </LabeledInput>
  <LabeledInput label="Subscribe">
    <BooleanInput value={subscribe} onChange={setSubscribe} variant="switch" />
  </LabeledInput>
</LabeledInputGroup>`,
            preview: <FormGroupPreview />
        },
        {
            title: 'With Validation',
            description: 'Form with error and warning states',
            code: `<LabeledInputGroup>
  <LabeledInput label="Name" icon={User}>
    <TextInput value={name} onChange={setName} />
  </LabeledInput>
  <LabeledInput label="Email" icon={Mail} error="Invalid email format">
    <TextInput value={email} onChange={setEmail} />
  </LabeledInput>
  <LabeledInput label="Webhook" icon={Send} warning="No HTTPS detected">
    <TextInput value={webhook} onChange={setWebhook} />
  </LabeledInput>
</LabeledInputGroup>`,
            preview: <FormWithValidationPreview />
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================

export const categoryRegistry: CategoryRegistry = {
    id: 'labeled-input',
    name: 'Labeled Input',
    icon: Tag,
    getComponents: () => [LABELED_INPUT_COMPONENT, LABELED_INPUT_GROUP_COMPONENT],
};
