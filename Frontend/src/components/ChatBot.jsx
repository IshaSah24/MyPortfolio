import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I’m Isha’s assistant. How can I help you?" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: "Thanks for your message! I’ll get back soon 😊" },
    ]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center
                   bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition"
        aria-label="Toggle chat"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
      </button>
      {open && (
        <div
          className="fixed bottom-36 right-6 z-50 w-80 max-h-[70vh]
                        bg-card border border-border rounded-xl shadow-xl flex flex-col"
        >
          <div className="p-3 font-semibold text-foreground border-b border-border">
            Chat with me 🤖
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 flex gap-2 border-t border-border">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm rounded-md
                         border border-border bg-background text-foreground
                         placeholder:text-muted-foreground focus:outline-none
                         focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={handleSend}
              className="px-3 rounded-md bg-primary text-primary-foreground
                         hover:opacity-90 transition"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
