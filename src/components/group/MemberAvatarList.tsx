import React from "react";

type Member = { name: string };

export function MemberAvatarList({ members }: { members: Member[] }) {
    return (
        <div className="flex items-center">
            <div className="flex -space-x-2">
                {members.slice(0, 5).map((m, i) => (
                    <div
                        key={i}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-xs font-semibold text-text shadow-soft ring-2 ring-bg"
                        title={m.name}
                    >
                        {initials(m.name)}
                    </div>
                ))}
            </div>

            {members.length > 5 ? (
                <div className="ml-2 text-xs text-muted">+{members.length - 5} more</div>
            ) : null}
        </div>
    );
}

function initials(name: string) {
    const parts = name.trim().split(" ");
    const a = parts[0]?.[0] ?? "";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase();
}
