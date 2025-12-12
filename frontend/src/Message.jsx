export default function Message({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      style={{
        marginBottom: 16,
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "75%",
          padding: "14px 18px",
          borderRadius: 14,
          background: isUser ? "#4f46e5" : "#f1f3f6",
          color: isUser ? "white" : "#111",
          lineHeight: 1.6,
        }}
      >
        {text}
      </div>
    </div>
  );
}
