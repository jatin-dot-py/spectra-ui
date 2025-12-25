'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import type { ExampleItem } from './types';

// ============================================================================
// Shared Copy Button - EXPORTED for use by other display components
// ============================================================================
export function CopyButton({ text, label }: { text: string; label?: string }) {
    const [copied, setCopied] = useState(false);
    const onCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (label) {
        return (
            <Button variant="outline" size="sm" className="h-7 text-xs gap-1.5" onClick={onCopy}>
                {copied ? <Check className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                {copied ? 'Copied!' : label}
            </Button>
        );
    }

    return (
        <button onClick={onCopy} className="text-muted-foreground hover:text-foreground transition-colors">
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
    );
}

// ============================================================================
// Shared Example Card
// ============================================================================
export function ExampleCard({ example }: { example: ExampleItem }) {
    return (
        <div className="rounded-lg border border-border min-w-0">
            {/* Title */}
            <div className="px-4 py-3 border-b border-border">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-medium">{example.title}</h3>
                        {example.description && (
                            <p className="text-xs text-muted-foreground mt-0.5">{example.description}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Code */}
            <div className="border-b border-border overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">Code</span>
                    <CopyButton text={example.code} />
                </div>
                <ScrollArea className="w-full" type="auto">
                    <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, padding: '1rem', background: '#0d0d0d', fontSize: '12px' }}
                    >
                        {example.code}
                    </SyntaxHighlighter>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            {/* Preview - overflow-visible ensures dropdowns aren't clipped */}
            <div className="p-6 overflow-visible">
                <div className="text-[10px] font-mono text-muted-foreground uppercase mb-3">Preview</div>
                {example.preview}
            </div>
        </div>
    );
}

// ============================================================================
// Shared Header Section
// ============================================================================
interface HeaderProps {
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    description: string;
    markdownText: string;
}

export function HeaderSection({ icon: Icon, name, description, markdownText }: HeaderProps) {
    return (
        <div className="space-y-3 min-w-0">
            <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                </div>
                <h1 className="text-2xl font-bold">{name}</h1>
                <Badge variant="secondary" className="text-[10px]">Component</Badge>
                <CopyButton text={markdownText} label="Copy as Markdown" />
            </div>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}

// ============================================================================
// Shared Import Section
// ============================================================================
interface ImportProps {
    importCode: string;
}

export function ImportSection({ importCode }: ImportProps) {
    return (
        <section className="space-y-3 min-w-0">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Import</h2>
            <div className="rounded-lg border border-border overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase">TSX</span>
                    <CopyButton text={importCode} />
                </div>
                <ScrollArea className="w-full" type="auto">
                    <SyntaxHighlighter
                        language="tsx"
                        style={vscDarkPlus}
                        customStyle={{ margin: 0, padding: '0.75rem', background: '#0d0d0d', fontSize: '12px' }}
                    >
                        {importCode}
                    </SyntaxHighlighter>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </section>
    );
}
