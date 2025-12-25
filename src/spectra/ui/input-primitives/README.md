# Input Primitives

A collection of primitive UI components for building forms and inputs.

---

## TextInput

Single-line text input with optional suggestions.

### Import

```tsx
import { TextInput } from '@/spectra/ui/input-primitives/TextInput';
```

#### Examples

### Default

```tsx
<TextInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Start typing..."
/>
```

### With Placeholder

```tsx
<TextInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Enter text..."
/>
```

### Disabled

```tsx
<TextInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Disabled input"
  disabled
/>
```

### No Ring

```tsx
<TextInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Focus me (no ring)"
  noRing
/>
```

### With Suggestions

```tsx
<TextInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Type "temp"..."
  suggestions={[
    "Template A",
    "Template B",
    "Template C",
    "Temporary"
  ]}
/>
```

### Frozen

Click to thaw and enable editing (like Candy Crush ice blocks)

```tsx
<TextInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Frozen until clicked..."
  frozen
/>
```

---

## TextAreaInput

Multi-line text input with optional suggestions.

### Import

```tsx
import { TextAreaInput } from '@/spectra/ui/input-primitives/TextAreaInput';
```

#### Examples

### Default (Auto-grow)

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Start typing..."
/>
```

### With Placeholder

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Enter description..."
/>
```

### Disabled

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Disabled textarea"
  disabled
/>
```

### No Ring

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Focus me (no ring)"
  noRing
/>
```

### Fixed Height (No Auto-grow)

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Fixed 5 rows"
  rows={5}
  autoGrow={false}
/>
```

### No Resize Handle

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Cannot resize manually"
  noResize
/>
```

### With Suggestions (Word-based)

```tsx
<TextAreaInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Type "temp"..."
  suggestions={[
    "Template A",
    "Template B",
    "Template C"
  ]}
/>
```

---

## BooleanInput

Boolean input with checkbox, switch, or radio variants.

### Import

```tsx
import { BooleanInput } from '@/spectra/ui/input-primitives/BooleanInput';
```

#### Examples

### Checkbox (Default)

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Checkbox (Checked)

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Checkbox (Disabled)

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
  disabled
/>
```

### Switch

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="switch"
/>
```

### Switch (On)

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="switch"
/>
```

### Switch (Disabled)

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="switch"
  disabled
/>
```

### Radio

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="radio"
/>
```

### Radio (True)

```tsx
<BooleanInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="radio"
/>
```

---

## IconInput

Icon picker with search across multiple icon libraries.

### Import

```tsx
import { IconInput } from '@/spectra/ui/input-primitives/IconInput';
```

#### Examples

### Default

```tsx
<IconInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Search icons..."
/>
```

### With Value

```tsx
<IconInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Disabled

```tsx
<IconInput
  value={value}
  onChange={(val) => setValue(val)}
  disabled
/>
```

---

## NumericalInput

Free-form number input without steppers. Best for arbitrary numeric values.

### Import

```tsx
import { NumericalInput } from '@/spectra/ui/input-primitives/NumericalInput';
```

#### Examples

### Default

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### With Value

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### With Placeholder

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
  placeholder="Enter value..."
/>
```

### Negative Value

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Disabled

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
  disabled
/>
```

### Slider

Slider variant for range selection

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="slider"
  min={0}
  max={100}
/>
```

### Slider (Custom Range)

Slider with custom min/max

```tsx
<NumericalInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="slider"
  min={-50}
  max={50}
  step={5}
/>
```

---

## NumberInput

Number input with +/- stepper buttons for precise control.

### Import

```tsx
import { NumberInput } from '@/spectra/ui/input-primitives/NumberInput';
```

#### Examples

### Default

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### With Value

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### With Min/Max

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  min={0}
  max={100}
/>
```

### Custom Step

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  step={5}
/>
```

### At Min Boundary

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  min={0}
  max={10}
/>
```

### At Max Boundary

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  min={0}
  max={10}
/>
```

### Disabled

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  disabled
/>
```

### Slider

Slider variant for range selection

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="slider"
  min={0}
  max={100}
/>
```

### Slider (Custom Step)

Slider with step of 10

```tsx
<NumberInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="slider"
  min={0}
  max={100}
  step={10}
/>
```

---

## ObjectInput

JSON object editor with Monaco Editor in a dialog. For complex data structures.

### Import

```tsx
import { ObjectInput } from '@/spectra/ui/input-primitives/ObjectInput';
```

#### Examples

### Empty Object

```tsx
<ObjectInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Simple Object

```tsx
<ObjectInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Nested Object

```tsx
<ObjectInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Array Value

```tsx
<ObjectInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Custom Label

```tsx
<ObjectInput
  value={value}
  onChange={(val) => setValue(val)}
  label="Edit Configuration"
/>
```

### Disabled

```tsx
<ObjectInput
  value={value}
  onChange={(val) => setValue(val)}
  disabled
/>
```

---

## EnumInput

Single-select from predefined options. Supports dropdown and button group variants.

### Import

```tsx
import { EnumInput } from '@/spectra/ui/input-primitives/EnumInput';
```

#### Examples

### Text Alignment

Icon-only button group for text alignment

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  buttonDisplay="icon"
  options={[
    { value: "left", label: "Align Left", icon: TextAlignStart, hoverText: "Left align text" },
    { value: "center", label: "Align Center", icon: TextAlignCenter, hoverText: "Center align text" },
    { value: "right", label: "Align Right", icon: TextAlignEnd, hoverText: "Right align text" },
    { value: "justify", label: "Justify", icon: TextAlignJustify, hoverText: "Justify text" }
  ]}
/>
```

### View Mode

Text-only button group for view selection

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  options={[
    { value: "grid", label: "Grid" },
    { value: "list", label: "List" },
    { value: "kanban", label: "Kanban" }
  ]}
/>
```

### Priority Level

Icon + text for priority selection

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  buttonDisplay="both"
  options={[
    { value: "low", label: "Low", icon: TextAlignStart },
    { value: "medium", label: "Medium", icon: TextAlignCenter },
    { value: "high", label: "High", icon: TextAlignEnd }
  ]}
/>
```

### Font Weight

Overflow dropdown for many options

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  maxInline={4}
  options={[
    { value: "100", label: "Thin" },
    { value: "300", label: "Light" },
    { value: "400", label: "Regular" },
    { value: "500", label: "Medium" },
    { value: "600", label: "Semibold" },
    { value: "700", label: "Bold" },
    { value: "800", label: "Extrabold" },
    { value: "900", label: "Black" }
  ]}
/>
```

### Status

Standard dropdown for status selection

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  placeholder="Select status..."
  options={[
    { value: "draft", label: "Draft" },
    { value: "pending", label: "Pending Review" },
    { value: "approved", label: "Approved" },
    { value: "published", label: "Published" },
    { value: "archived", label: "Archived" }
  ]}
/>
```

### Block Type

Dropdown with icons for block type

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  dropdownTitle="Select Block Type"
  options={[
    { value: "text", label: "Text Block", icon: Type },
    { value: "image", label: "Image Block", icon: Image },
    { value: "list", label: "List Block", icon: List },
    { value: "code", label: "Code Block", icon: Braces }
  ]}
/>
```

### Alignment Picker

Compact icon trigger for alignment

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  iconTrigger={TextAlignJustify}
  dropdownTitle="Text Alignment"
  options={[
    { value: "left", label: "Align Left", icon: TextAlignStart },
    { value: "center", label: "Align Center", icon: TextAlignCenter },
    { value: "right", label: "Align Right", icon: TextAlignEnd },
    { value: "justify", label: "Justify", icon: TextAlignJustify }
  ]}
/>
```

### Disabled State

Locked dropdown field

```tsx
<EnumInput
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  disabled
  options={[
    { value: "locked", label: "Locked Value" },
    { value: "other", label: "Other Option" }
  ]}
/>
```

---

## MultiEnumSelect

Multi-select from predefined options. Supports dropdown and toggle button variants.

### Import

```tsx
import { MultiEnumSelect } from '@/spectra/ui/input-primitives/MultiEnumSelect';
```

#### Examples

### Text Formatting

Icon toggle buttons for text styles

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  buttonDisplay="icon"
  options={[
    { value: "bold", label: "Bold", icon: Bold, hoverText: "Toggle bold (Ctrl+B)" },
    { value: "italic", label: "Italic", icon: Italic, hoverText: "Toggle italic (Ctrl+I)" },
    { value: "underline", label: "Underline", icon: Underline, hoverText: "Toggle underline (Ctrl+U)" }
  ]}
/>
```

### Days of Week

Text toggle for day selection

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  options={[
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" }
  ]}
  maxInline={5}
/>
```

### Feature Flags

Toggle multiple features

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="buttons"
  buttonDisplay="both"
  options={[
    { value: "darkMode", label: "Dark", icon: SquareCheckBig },
    { value: "autoSave", label: "Auto-save", icon: SquareCheckBig },
    { value: "notify", label: "Notify", icon: SquareCheckBig }
  ]}
/>
```

### Tags

Multi-select dropdown for tagging

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  placeholder="Add tags..."
  dropdownTitle="Available Tags"
  options={[
    { value: "bug", label: "Bug" },
    { value: "feature", label: "Feature" },
    { value: "enhancement", label: "Enhancement" },
    { value: "documentation", label: "Documentation" },
    { value: "urgent", label: "Urgent" },
    { value: "help-wanted", label: "Help Wanted" }
  ]}
/>
```

### Permissions

Dropdown with icons for permissions

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  dropdownTitle="Grant Permissions"
  options={[
    { value: "read", label: "Read", icon: List },
    { value: "write", label: "Write", icon: Type },
    { value: "delete", label: "Delete", icon: Braces },
    { value: "admin", label: "Admin", icon: SquareCheckBig }
  ]}
/>
```

### Empty State

No items selected initially

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  placeholder="Select categories..."
  options={[
    { value: "tech", label: "Technology" },
    { value: "design", label: "Design" },
    { value: "business", label: "Business" },
    { value: "marketing", label: "Marketing" }
  ]}
/>
```

### Formatting Picker

Compact icon trigger with count badge

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  iconTrigger={Type}
  dropdownTitle="Text Formatting"
  options={[
    { value: "bold", label: "Bold", icon: Bold },
    { value: "italic", label: "Italic", icon: Italic },
    { value: "underline", label: "Underline", icon: Underline }
  ]}
/>
```

### Disabled State

Locked multi-select field

```tsx
<MultiEnumSelect
  value={value}
  onChange={(val) => setValue(val)}
  variant="dropdown"
  disabled
  options={[
    { value: "locked1", label: "Locked Option 1" },
    { value: "locked2", label: "Locked Option 2" }
  ]}
/>
```

---

## DynamicInput

Polymorphic input that supports multiple value types (null, string, number, boolean, object) with a type selector.

### Import

```tsx
import { DynamicInput } from '@/spectra/ui/input-primitives/DynamicInput';
```

#### Examples

### Null Value

Default null state

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### String Value

Text input mode

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Number Value

Numeric input mode

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Boolean Value

Toggle input mode

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Object Value

JSON object editor mode

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
/>
```

### Restricted Types

Only allow string and number

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
  allowedTypes={[
    "string",
    "number"
  ]}
/>
```

### Disabled

Disabled state

```tsx
<DynamicInput
  value={value}
  onChange={(val) => setValue(val)}
  disabled
/>
```

---
