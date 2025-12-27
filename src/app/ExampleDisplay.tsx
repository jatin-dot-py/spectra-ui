'use client';

import { useState } from 'react';
import { Check, Copy, FileText, FileCode2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileCodeView, ContentTab } from '@/spectra/ui/fragments';
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
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            {/* Title - more prominent */}
            <div className="px-5 py-4 bg-muted/30">
                <h3 className="text-base font-semibold">{example.title}</h3>
                {example.description && (
                    <p className="text-sm text-muted-foreground mt-1">{example.description}</p>
                )}
            </div>

            {/* Code section */}
            <div className="border-t border-border">
                <div className="flex bg-muted/50">
                    <ContentTab
                        name="example.tsx"
                        icon={FileCode2}
                        onClick={() => { }}
                        isActive={true}
                    />
                </div>
                <FileCodeView
                    filename="example.tsx"
                    content={example.code}
                    showLineNumbers={true}
                    showFooter={false}
                />
            </div>

            {/* Preview section - clearly separated */}
            <div className="border-t-2 border-primary/20 bg-background p-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Preview</span>
                </div>
                <div className="overflow-visible">
                    {example.preview}
                </div>
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
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <Badge variant="secondary" className="text-xs">Component</Badge>
                    </div>
                </div>
            </div>
            <p className="text-lg text-muted-foreground">{description}</p>
            <CopyButton text={markdownText} label="Copy as Markdown" />
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
        <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Import</h2>
            <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
                <div className="flex bg-muted/50">
                    <ContentTab
                        name="import.tsx"
                        icon={FileCode2}
                        onClick={() => { }}
                        isActive={true}
                    />
                </div>
                <FileCodeView
                    filename="import.tsx"
                    content={importCode}
                    showLineNumbers={false}
                    showFooter={false}
                />
            </div>
        </section>
    );
}
