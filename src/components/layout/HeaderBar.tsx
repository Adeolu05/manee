

type Props = {
    title: string;
    subtitle?: string;
    right?: React.ReactNode;
};

export function HeaderBar({ title, subtitle, right }: Props) {
    return (
        <div className="mb-5 flex items-start justify-between">
            <div>
                <div className="text-sm font-semibold text-text">{title}</div>
                {subtitle ? (
                    <div className="mt-1 text-xs text-muted">{subtitle}</div>
                ) : null}
            </div>

            {right ? (
                <div className="shrink-0">{right}</div>
            ) : null}
        </div>
    );
}
