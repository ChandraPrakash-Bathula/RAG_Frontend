import { useState, useRef, useEffect } from "react";
import { askQuestion } from "./api";
import Message from "./Message";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [sources, setSources] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim()) return;

    setMessages((m) => [...m, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    try {
      const res = await askQuestion(input);
      setMessages((m) => [
        ...m,
        { role: "assistant", text: res.answer },
      ]);
      setSources(res.sources || []);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "❌ Error contacting backend." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-main">
        <div className="messages">
          {messages.map((m, i) => (
            <Message key={i} role={m.role} text={m.text} />
          ))}
          {loading && <Message role="assistant" text="Thinking…" />}
          <div ref={endRef} />
        </div>

        <div className="input-bar">
          <input
            value={input}
            placeholder="Ask about human nutrition…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button onClick={send} disabled={loading}>Send</button>
        </div>
      </div>

      <div className="sidebar">
        <h4>📌 Sources</h4>
        {sources.length === 0 && <div>No sources yet.</div>}
        {sources.map((s, i) => (
          <div className="source" key={i}>
            Page {s.page} · score {s.score}
          </div>
        ))}
      </div>
    </div>
  );
}
