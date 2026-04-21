// Placeholder imagery — subtle striped SVG with monospace labels.
// Keeps the design honest; real photos can drop in later.
const Placeholder = ({ label, aspect = "4/3", tone = "blue", rounded = 14, style = {} }) => {
  const tones = {
    blue:  { a: "#D7E1F5", b: "#C4D1EC", ink: "#1F4AA0" },
    sage:  { a: "#DCE4D2", b: "#CBD6BD", ink: "#4E6B4A" },
    warm:  { a: "#ECE6D8", b: "#DDD3BE", ink: "#6B6D66" },
    ink:   { a: "#2A2C28", b: "#1C1E1A", ink: "#E6E2D6" },
    paper: { a: "#F4EFE3", b: "#E8E0CD", ink: "#6B6D66" },
  };
  const t = tones[tone] || tones.blue;
  return (
    <div style={{
      position: "relative",
      aspectRatio: aspect,
      borderRadius: rounded,
      overflow: "hidden",
      background: `repeating-linear-gradient(135deg, ${t.a} 0 14px, ${t.b} 14px 28px)`,
      ...style,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: t.ink,
        fontFamily: "var(--f-mono)",
        fontSize: 11,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        opacity: .8,
      }}>
        {label}
      </div>
      <div style={{
        position: "absolute", top: 10, left: 12,
        color: t.ink, fontFamily: "var(--f-mono)", fontSize: 10, opacity: .6,
      }}>▢ image</div>
    </div>
  );
};

// Tiny icon set — minimal line icons
const Icon = ({ name, size = 18, stroke = 1.5 }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "drop":
      return <svg {...props}><path d="M12 3s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12Z"/></svg>;
    case "arrow":
      return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-ne":
      return <svg {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>;
    case "check":
      return <svg {...props}><path d="m4 12 5 5L20 6"/></svg>;
    case "star":
      return <svg {...props}><path d="m12 3 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 3Z" fill="currentColor" stroke="none"/></svg>;
    case "sparkle":
      return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
    case "mail":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case "phone":
      return <svg {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L7.9 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c.8.3 1.7.5 2.5.6A2 2 0 0 1 22 17Z"/></svg>;
    case "pin":
      return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "plus":
      return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus":
      return <svg {...props}><path d="M5 12h14"/></svg>;
    case "play":
      return <svg {...props}><path d="M6 4v16l14-8L6 4Z" fill="currentColor" stroke="none"/></svg>;
    case "shield":
      return <svg {...props}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "beaker":
      return <svg {...props}><path d="M9 3h6M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 19l-5-10V3"/><path d="M7.5 14h9"/></svg>;
    case "leaf":
      return <svg {...props}><path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 7 7v1a8 8 0 0 1-8 8Z"/><path d="M4 4c6 2 10 6 12 12"/></svg>;
    case "home":
      return <svg {...props}><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/></svg>;
  }
  return null;
};

// Star rating
const Stars = ({ n = 5, size = 14 }) => (
  <div style={{ display: "inline-flex", gap: 2, color: "#B4722B" }}>
    {Array.from({ length: n }).map((_, i) => <Icon key={i} name="star" size={size} />)}
  </div>
);

Object.assign(window, { Placeholder, Icon, Stars });
