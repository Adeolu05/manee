import React from "react";

import recipient1 from "../../assets/avatars/recipient-1.png";
import recipient2 from "../../assets/avatars/recipient-2.png";
import recipient3 from "../../assets/avatars/recipient-3.png";
import recipient4 from "../../assets/avatars/recipient-4.png";
import recipient5 from "../../assets/avatars/recipient-5.png";

const recipients = [
    { id: 1, name: "Recipient 1", avatar: recipient1 },
    { id: 2, name: "Recipient 2", avatar: recipient2 },
    { id: 3, name: "Recipient 3", avatar: recipient3 },
    { id: 4, name: "Recipient 4", avatar: recipient4 },
    { id: 5, name: "Recipient 5", avatar: recipient5 },
];

export function FrequentRecipients() {
    return (
        <div>
            <div className="mb-3 text-sm font-medium text-text">Frequent recipient</div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {recipients.map((r) => (
                    <button
                        key={r.id}
                        className="group flex shrink-0 flex-col items-center gap-1 transition active:scale-95"
                        title={r.name}
                    >
                        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-soft transition group-hover:border-primary">
                            <img
                                src={r.avatar}
                                alt={r.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
