import "./styles.css";
import Chat from "./Chat";

export default function App() {
  return (
    <div className="app-container">
      <div className="header">📄 Human Nutrition RAG</div>
      <div className="subtitle">
        Open-source Retrieval-Augmented QA using Gemma-2B
      </div>
      <Chat />
    </div>
  );
}
