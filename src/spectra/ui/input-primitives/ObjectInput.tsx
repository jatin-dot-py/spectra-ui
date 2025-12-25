import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Code2, Check } from 'lucide-react';

export interface ObjectInputProps {
    /** Current JSON value (object or string) */
    value: unknown;
    /** Called when value is saved */
    onChange: (value: unknown) => void;
    /** Label shown in trigger button and dialog header */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
}

export function ObjectInput({
    value,
    onChange,
    label = 'Edit JSON',
    disabled = false,
}: ObjectInputProps) {
    const [open, setOpen] = useState(false);
    const [editValue, setEditValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    // Format value as string
    const storeValue = typeof value === 'object'
        ? JSON.stringify(value, null, 2)
        : typeof value === 'string' ? value : '';

    // Initialize edit value when dialog opens
    useEffect(() => {
        if (open) {
            setEditValue(storeValue);
            setError(null);
        }
    }, [open, storeValue]);

    // Validate JSON on change
    const handleChange = (newValue: string | undefined) => {
        const val = newValue || '';
        setEditValue(val);
        try {
            JSON.parse(val);
            setError(null);
        } catch (e) {
            setError((e as Error).message);
        }
    };

    // Save and close
    const handleSave = () => {
        try {
            const parsed = JSON.parse(editValue);
            onChange(parsed);
            setOpen(false);
        } catch (e) {
            setError((e as Error).message);
        }
    };

    const lineCount = storeValue.split('\n').length;
    const isValid = error === null;

    return (
        <Dialog open={open} onOpenChange={(o) => !disabled && setOpen(o)}>
            <DialogTrigger asChild>
                <button
                    disabled={disabled}
                    className="flex-1 flex items-center justify-between gap-2 h-8 px-2 text-xs rounded-md bg-muted/30 border border-transparent hover:border-border hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-transparent disabled:hover:bg-muted/30"
                >
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Code2 className="h-3.5 w-3.5" />
                        <span>{label}</span>
                    </span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                        {lineCount} lines
                    </span>
                </button>
            </DialogTrigger>
            <DialogContent
                className="p-0 gap-0 flex flex-col overflow-hidden"
                style={{
                    width: 'calc(100vw - 120px)',
                    maxWidth: '800px',
                    height: 'calc(100vh - 120px)',
                    maxHeight: '600px',
                }}
            >
                {/* Header */}
                <DialogHeader className="px-4 py-3 flex-shrink-0 bg-muted/50 border-b border-border">
                    <DialogTitle className="flex items-center gap-2 text-sm font-medium">
                        <Code2 className="h-4 w-4 text-primary" />
                        {label}
                    </DialogTitle>
                </DialogHeader>

                {/* Monaco Editor */}
                <div className="flex-1 min-h-0 bg-background">
                    <Editor
                        height="100%"
                        defaultLanguage="json"
                        value={editValue}
                        onChange={handleChange}
                        theme="vs-dark"
                        options={{
                            minimap: { enabled: false },
                            fontSize: 13,
                            fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
                            lineNumbers: 'on',
                            scrollBeyondLastLine: false,
                            wordWrap: 'on',
                            tabSize: 2,
                            automaticLayout: true,
                            padding: { top: 16, bottom: 16 },
                            scrollbar: {
                                horizontal: 'hidden',
                                verticalScrollbarSize: 8,
                            },
                            renderLineHighlight: 'line',
                            cursorBlinking: 'smooth',
                            smoothScrolling: true,
                        }}
                    />
                </div>

                {/* Footer */}
                <div className="px-4 py-3 flex-shrink-0 bg-muted/50 border-t border-border flex items-center justify-between">
                    {/* Status */}
                    <div className="flex items-center gap-2">
                        {error ? (
                            <>
                                <div className="h-2 w-2 rounded-full bg-destructive" />
                                <p className="text-xs text-destructive truncate max-w-[300px]">
                                    {error}
                                </p>
                            </>
                        ) : (
                            <>
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <span className="text-xs text-muted-foreground">Valid JSON</span>
                            </>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setOpen(false)}
                            className="h-7 px-3 text-xs"
                        >
                            Cancel
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleSave}
                            disabled={!isValid}
                            className="h-7 px-4 text-xs"
                        >
                            <Check className="h-3.5 w-3.5 mr-1.5" />
                            Save
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
