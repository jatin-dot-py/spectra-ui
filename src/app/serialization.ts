// Serialization utilities for code generation
// Used by input-primitives which generates code from props

export function getFunctionName(fn: any): string {
    if (!fn) return 'Component';
    if (fn.displayName) return fn.displayName;
    if (fn.name && !fn.name.includes('(') && !fn.name.includes('{')) {
        return fn.name;
    }
    if (fn.render) return getFunctionName(fn.render);
    return 'Component';
}

export function serializeValue(value: any, indent: number = 0): string {
    const pad = '  '.repeat(indent);
    const padInner = '  '.repeat(indent + 1);

    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'boolean') return String(value);
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') return `"${value}"`;
    if (typeof value === 'function') return getFunctionName(value);
    if (value?.$$typeof || value?.render) return getFunctionName(value);

    if (Array.isArray(value)) {
        if (value.length === 0) return '[]';
        const items = value.map(item => `${padInner}${serializeValue(item, indent + 1)}`);
        return `[\n${items.join(',\n')}\n${pad}]`;
    }

    if (typeof value === 'object') {
        const entries = Object.entries(value).filter(([k]) =>
            !k.startsWith('$$') && k !== '_owner' && k !== '_store'
        );
        if (entries.length === 0) return '{}';
        const props = entries.map(([k, v]) => `${padInner}${k}: ${serializeValue(v, indent + 1)}`);
        return `{\n${props.join(',\n')}\n${pad}}`;
    }

    return 'unknown';
}

export function generateCodeSnippet(componentName: string, props: any = {}) {
    const lines: string[] = [
        'value={value}',
        'onChange={(val) => setValue(val)}'
    ];

    Object.entries(props).forEach(([key, value]) => {
        if (value === undefined) return;

        if (value === true) {
            lines.push(key);
        } else if (typeof value === 'string') {
            lines.push(`${key}="${value}"`);
        } else {
            const serialized = serializeValue(value, 1);
            lines.push(`${key}={${serialized}}`);
        }
    });

    return `<${componentName}\n  ${lines.join('\n  ')}\n/>`;
}
