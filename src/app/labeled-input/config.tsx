import { useState } from 'react';
import {
    Tag, Mail, Smartphone, Tablet, Monitor, Maximize,
    SlidersHorizontal, ArrowUpRight, Layers
} from 'lucide-react';
import type { CategoryConfig, CategoryRegistry } from '../types';
import { LabeledInput } from '@/spectra/ui/labeled-input/LabeledInput';
import { TextInput } from '@/spectra/ui/input-primitives/TextInput';
import { EnumInput } from '@/spectra/ui/input-primitives/EnumInput';


function BasicPreview({ label, placeholder, icon, helpText, helpUrl }: any) {
    const [value, setValue] = useState('');
    return (
        <LabeledInput label={label} icon={icon} helpText={helpText} helpUrl={helpUrl}>
            <TextInput value={value} onChange={setValue} placeholder={placeholder} />
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

const LABELED_INPUT_CONFIG: CategoryConfig = {
    id: 'labeled-input',
    name: 'LabeledInput',
    description: 'A component for wrapping input primitives with a label and optional help text.',
    icon: Tag,
    importPath: '@/spectra/ui/labeled-input/LabeledInput',
    examples: [
        {
            title: 'Inline (Default)',
            description: 'Label and input side-by-side',
            code: `<LabeledInput label="Username">
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview label="Username" placeholder="Type here..." />
        },
        {
            title: 'Stacked',
            description: 'Label above input (form-style)',
            code: `<LabeledInput label="Description" variant="stacked">
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview label="Description" variant="stacked" placeholder="Type here..." />
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
            description: 'Tooltip with a reference link to external documentation',
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
            title: 'Canvas Toolbar',
            description: 'App bar with size buttons, sidebar toggle, expand, and surface dropdown',
            code: `<LabeledInput label="CANVAS" wrap>
  <EnumInput
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
    variant="buttons"
    buttonDisplay="icon"
    options={[
      { value: 'sidebar', icon: SlidersHorizontal },
      { value: 'expand', icon: ArrowUpRight },
    ]}
  />
  <EnumInput
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
</LabeledInput>`,
            preview: <CanvasToolbarPreview />
        },
        {
            title: 'Full Featured',
            description: 'All options combined: icon, help text, and help URL',
            code: `<LabeledInput 
  label="Callback URL"
  icon={Mail}
  helpText="Your server endpoint for receiving events"
  helpUrl="https://docs.example.com/callbacks"
>
  <TextInput value={value} onChange={setValue} />
</LabeledInput>`,
            preview: <BasicPreview
                label="Callback URL"
                icon={Mail}
                helpText="Your server endpoint for receiving events"
                helpUrl="https://docs.example.com/callbacks"
                placeholder="https://api.yoursite.com/callback"
            />
        }
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================
export const categoryRegistry: CategoryRegistry = {
    id: 'labeled-input',
    name: 'Labeled Input',
    icon: Tag,
    // Return the static config object directly
    getCategory: () => LABELED_INPUT_CONFIG,
};
