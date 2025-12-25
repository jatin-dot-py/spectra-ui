import { useState } from 'react';
import { FolderOpen, Type, Palette, Plus, Settings } from 'lucide-react';
import type { CategoryConfig, CategoryRegistry } from '../types';
import { Group, GroupItem, GroupTab } from '@/spectra/ui/group';
import { LabeledInput } from '@/spectra/ui/labeled-input/LabeledInput';
import { TextInput } from '@/spectra/ui/input-primitives/TextInput';
import { NumberInput } from '@/spectra/ui/input-primitives/NumberInput';
import { EnumInput } from '@/spectra/ui/input-primitives/EnumInput';

// ============================================================================
// Preview Components
// ============================================================================

function BasicGroupPreview() {
    const [fontSize, setFontSize] = useState('16');
    const [lineHeight, setLineHeight] = useState('1.5');
    const [primary, setPrimary] = useState('#3b82f6');

    return (
        <Group>
            <GroupItem title="Typography" icon={Type}>
                <div className="space-y-2">
                    <LabeledInput label="Font Size">
                        <TextInput value={fontSize} onChange={setFontSize} />
                    </LabeledInput>
                    <LabeledInput label="Line Height">
                        <TextInput value={lineHeight} onChange={setLineHeight} />
                    </LabeledInput>
                </div>
            </GroupItem>
            <GroupItem title="Colors" icon={Palette}>
                <div className="space-y-2">
                    <LabeledInput label="Primary">
                        <TextInput value={primary} onChange={setPrimary} />
                    </LabeledInput>
                </div>
            </GroupItem>
        </Group>
    );
}

function GroupDescriptionPreview() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Group description="Personal details and contact information for the user profile.">
            <GroupItem title="Profile" icon={Settings}>
                <LabeledInput label="Name">
                    <TextInput value={name} onChange={setName} />
                </LabeledInput>
            </GroupItem>
            <GroupItem title="Contact" icon={FolderOpen}>
                <LabeledInput label="Email">
                    <TextInput value={email} onChange={setEmail} />
                </LabeledInput>
            </GroupItem>
        </Group>
    );
}

function CollapsiblePreview() {
    const [apiKey, setApiKey] = useState('');
    const [name, setName] = useState('');

    return (
        <Group>
            <GroupItem title="Advanced" defaultExpanded={false}>
                <LabeledInput label="API Key">
                    <TextInput value={apiKey} onChange={setApiKey} />
                </LabeledInput>
            </GroupItem>
            <GroupItem title="Basic" defaultExpanded={true}>
                <LabeledInput label="Name">
                    <TextInput value={name} onChange={setName} />
                </LabeledInput>
            </GroupItem>
        </Group>
    );
}

function NonCollapsiblePreview() {
    const [status, setStatus] = useState('');

    return (
        <GroupItem title="Status" collapsible={false}>
            <LabeledInput label="Connection">
                <TextInput value={status} onChange={setStatus} />
            </LabeledInput>
        </GroupItem>
    );
}

function WithBadgePreview() {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

    return (
        <GroupItem title="Dimensions" badgeText="2 fields">
            <div className="space-y-2">
                <LabeledInput label="Width">
                    <NumberInput value={width} onChange={setWidth} />
                </LabeledInput>
                <LabeledInput label="Height">
                    <NumberInput value={height} onChange={setHeight} />
                </LabeledInput>
            </div>
        </GroupItem>
    );
}

function WithActionIconPreview() {
    const [layers, setLayers] = useState([{ id: 1, name: 'Layer 1' }, { id: 2, name: 'Layer 2' }]);

    const addLayer = () => {
        setLayers([...layers, { id: layers.length + 1, name: `Layer ${layers.length + 1}` }]);
    };

    return (
        <GroupItem
            title="Layers"
            actionIcon={Plus}
            onActionIconClick={addLayer}
            alwaysShowAction
        >
            <div className="space-y-1">
                {layers.map(layer => (
                    <div key={layer.id} className="text-xs text-muted-foreground px-2 py-1 bg-muted/50 rounded">
                        {layer.name}
                    </div>
                ))}
            </div>
        </GroupItem>
    );
}

function NoIndentPreview() {
    const [value, setValue] = useState('left');

    return (
        <GroupItem title="Alignment" indentChildren={false}>
            <EnumInput
                variant="buttons"
                buttonDisplay="text"
                value={value}
                onChange={setValue}
                options={[
                    { value: 'left', label: 'Left' },
                    { value: 'center', label: 'Center' },
                    { value: 'right', label: 'Right' },
                ]}
            />
        </GroupItem>
    );
}

function FullFeaturedPreview() {
    const [radius, setRadius] = useState(8);
    const [shadow, setShadow] = useState('md');
    const [bgColor, setBgColor] = useState('#ffffff');
    const [borderColor, setBorderColor] = useState('#e5e7eb');

    return (
        <Group>
            <GroupItem
                title="Appearance"
                icon={Palette}
                badgeText="Style"
                actionIcon={Settings}
                onActionIconClick={() => console.log('Open settings')}
            >
                <div className="space-y-2">
                    <LabeledInput label="Border Radius">
                        <NumberInput value={radius} onChange={setRadius} min={0} max={24} />
                    </LabeledInput>
                    <LabeledInput label="Shadow">
                        <EnumInput
                            variant="dropdown"
                            value={shadow}
                            onChange={setShadow}
                            options={[
                                { value: 'none', label: 'None' },
                                { value: 'sm', label: 'Small' },
                                { value: 'md', label: 'Medium' },
                                { value: 'lg', label: 'Large' },
                            ]}
                        />
                    </LabeledInput>
                </div>
            </GroupItem>
            <GroupItem
                title="Colors"
                icon={Palette}
                collapsible={false}
            >
                <div className="space-y-2">
                    <LabeledInput label="Background">
                        <TextInput value={bgColor} onChange={setBgColor} />
                    </LabeledInput>
                    <LabeledInput label="Border">
                        <TextInput value={borderColor} onChange={setBorderColor} />
                    </LabeledInput>
                </div>
            </GroupItem>
        </Group>
    );
}

function HorizontalTabsPreview() {
    const [fontSize, setFontSize] = useState('16');
    const [primary, setPrimary] = useState('#3b82f6');
    const [name, setName] = useState('');

    return (
        <GroupTab
            orientation="horizontal"
            items={[
                {
                    title: 'Typography',
                    icon: Type,
                    children: (
                        <div className="space-y-2">
                            <LabeledInput label="Font Size">
                                <TextInput value={fontSize} onChange={setFontSize} />
                            </LabeledInput>
                        </div>
                    ),
                },
                {
                    title: 'Colors',
                    icon: Palette,
                    children: (
                        <div className="space-y-2">
                            <LabeledInput label="Primary">
                                <TextInput value={primary} onChange={setPrimary} />
                            </LabeledInput>
                        </div>
                    ),
                },
                {
                    title: 'Profile',
                    icon: Settings,
                    children: (
                        <div className="space-y-2">
                            <LabeledInput label="Name">
                                <TextInput value={name} onChange={setName} />
                            </LabeledInput>
                        </div>
                    ),
                },
            ]}
        />
    );
}

function VerticalTabsPreview() {
    const [fontSize, setFontSize] = useState('16');
    const [primary, setPrimary] = useState('#3b82f6');
    const [name, setName] = useState('');

    return (
        <GroupTab
            orientation="vertical"
            items={[
                {
                    title: 'Typography',
                    icon: Type,
                    children: (
                        <div className="space-y-2">
                            <LabeledInput label="Font Size">
                                <TextInput value={fontSize} onChange={setFontSize} />
                            </LabeledInput>
                        </div>
                    ),
                },
                {
                    title: 'Colors',
                    icon: Palette,
                    children: (
                        <div className="space-y-2">
                            <LabeledInput label="Primary">
                                <TextInput value={primary} onChange={setPrimary} />
                            </LabeledInput>
                        </div>
                    ),
                },
                {
                    title: 'Profile',
                    icon: Settings,
                    children: (
                        <div className="space-y-2">
                            <LabeledInput label="Name">
                                <TextInput value={name} onChange={setName} />
                            </LabeledInput>
                        </div>
                    ),
                },
            ]}
        />
    );
}

// ============================================================================
// Component Configurations
// ============================================================================

import type { ComponentConfig } from '../types';
import { Rows3 } from 'lucide-react';

const GROUP_CONFIG: ComponentConfig = {
    id: 'group',
    name: 'Group',
    description: 'Collapsible accordion sections for grouping related inputs.',
    icon: FolderOpen,
    importPath: '@/spectra/ui/group',
    examples: [
        {
            title: 'Basic Group',
            description: 'Multiple GroupItems with separators between them',
            code: `<Group>
  <GroupItem title="Typography" icon={Type}>
    <LabeledInput label="Font Size">
      <TextInput value={fontSize} onChange={setFontSize} />
    </LabeledInput>
  </GroupItem>
  <GroupItem title="Colors" icon={Palette}>
    <LabeledInput label="Primary">
      <TextInput value={primary} onChange={setPrimary} />
    </LabeledInput>
  </GroupItem>
</Group>`,
            preview: <BasicGroupPreview />
        },
        {
            title: 'Collapsible States',
            description: 'Control initial expanded/collapsed state with defaultExpanded',
            code: `<Group>
  <GroupItem title="Advanced" defaultExpanded={false}>
    ...
  </GroupItem>
  <GroupItem title="Basic" defaultExpanded={true}>
    ...
  </GroupItem>
</Group>`,
            preview: <CollapsiblePreview />
        },
        {
            title: 'With Badge & Action',
            description: 'Badge text and action icon with click handler',
            code: `<GroupItem 
  title="Layers" 
  badgeText="3 items"
  actionIcon={Plus}
  onActionIconClick={() => addLayer()}
  alwaysShowAction
>
  ...
</GroupItem>`,
            preview: <WithActionIconPreview />
        },
    ],
};

const GROUP_TAB_CONFIG: ComponentConfig = {
    id: 'group-tab',
    name: 'GroupTab',
    description: 'Tabbed interface for switching between content panels.',
    icon: Rows3,
    importPath: '@/spectra/ui/group',
    examples: [
        {
            title: 'Horizontal Tabs',
            description: 'Tab bar at the top',
            code: `<GroupTab
  orientation="horizontal"
  items={[
    { title: 'Typography', icon: Type, children: <Content /> },
    { title: 'Colors', icon: Palette, children: <Content /> },
  ]}
/>`,
            preview: <HorizontalTabsPreview />
        },
        {
            title: 'Vertical Tabs',
            description: 'Tab sidebar on the left',
            code: `<GroupTab
  orientation="vertical"
  items={[
    { title: 'Typography', icon: Type, children: <Content /> },
    { title: 'Colors', icon: Palette, children: <Content /> },
  ]}
/>`,
            preview: <VerticalTabsPreview />
        },
    ],
};

// ============================================================================
// Category Registry Export
// ============================================================================
export const categoryRegistry: CategoryRegistry = {
    id: 'group',
    name: 'Group',
    icon: FolderOpen,
    getComponents: () => [GROUP_CONFIG, GROUP_TAB_CONFIG],
};

