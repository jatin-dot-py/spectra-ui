import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AsyncIconLoader } from '@/spectra/ui/input-primitives/parts/icons';

export interface ContentTabProps {
    /** Tab display name */
    name: string;
    /** Tab icon - lazy icon name string */
    icon: string;
    /** Click handler when tab is clicked */
    onClick: () => void;
    /** Whether this tab is currently active */
    isActive?: boolean;
    /** Optional close button handler */
    onClose?: () => void;
}

export function ContentTab({
    name,
    icon,
    onClick,
    isActive = false,
    onClose,
}: ContentTabProps) {
    return (
        <div
            onClick={onClick}
            title={name}
            className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 text-xs border-r border-border flex-shrink-0 group cursor-pointer transition-colors',
                isActive
                    ? 'bg-background text-foreground'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
            )}
        >
            <AsyncIconLoader
                name={icon}
                size={14}
                className="text-muted-foreground flex-shrink-0"
                showSpinner={false}
            />

            <span className="max-w-32 truncate">{name}</span>

            {onClose && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="ml-1 p-0.5 rounded hover:bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <X className="h-3 w-3" />
                </button>
            )}
        </div>
    );
}
