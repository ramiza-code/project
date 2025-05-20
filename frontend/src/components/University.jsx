
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
    { id: 1, content: "Hi Coder-One, This page is for what", isSent: false },
    { id: 2, content: "Just working on some new features.", isSent: true },
];

const University = () => {

    return (
        <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
            <div className="space-y-6">


                {/* Preview Section */}
                <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
                    <div className="p-4 bg-base-200">
                        <div className="max-w-lg mx-auto">
                            {/* Mock Chat UI */}
                            <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                                {/* Chat Header */}
                                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                                    <div className="flex items-center gap-3">


                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                                    {PREVIEW_MESSAGES.map((message) => (
                                        <div
                                            key={message.id}
                                            className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
                        `}
                                            >
                                                <p className="text-sm">{message.content}</p>
                                                <p
                                                    className={`
                            text-[10px] mt-1.5
                            ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                          `}
                                                >
                                                    12:00 PM
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default University;
