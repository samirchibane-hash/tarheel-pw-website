// Tweaks panel — toggle styles live
const Tweaks = ({ tweaks, setTweaks }) => {
  const [active, setActive] = React.useState(false);
  const [tab, setTab] = React.useState("theme");

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "__activate_edit_mode") setActive(true);
      if (e.data?.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", handler);
  }, []);

  const update = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  if (!active) return null;

  const accentOptions = [
    { id: "brand", label: "Brand teal",    color: "#1C9BBC" },
    { id: "blue",  label: "Deep water",    color: "#1F4AA0" },
    { id: "sage",  label: "Sage",          color: "#4E6B4A" },
    { id: "amber", label: "Carolina clay", color: "#B4722B" },
  ];

  return (
    <div style={{
      position: "fixed", bottom: 20, right: 20, zIndex: 200,
      background: "var(--paper)",
      border: "1px solid var(--rule)",
      borderRadius: 18,
      boxShadow: "var(--shadow-lg)",
      width: 320,
      fontFamily: "var(--f-text)",
      overflow: "hidden",
    }}>
      <div style={{
        padding: "14px 18px",
        borderBottom: "1px solid var(--rule)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--sage)" }}/>
          <span style={{ fontSize: 13, fontWeight: 500 }}>Tweaks</span>
        </div>
        <span className="kbd-num">live</span>
      </div>

      <div style={{ display: "flex", padding: "10px 10px 0", gap: 4 }}>
        {["theme", "type", "layout"].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{
              flex: 1, padding: "8px 0", borderRadius: 8,
              fontSize: 12, textTransform: "capitalize",
              background: tab === t ? "var(--bg-2)" : "transparent",
              color: tab === t ? "var(--ink)" : "var(--ink-3)",
            }}>{t}</button>
        ))}
      </div>

      <div style={{ padding: 18, display: "grid", gap: 18 }}>
        {tab === "theme" && (
          <>
            <Group label="Accent color">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                {accentOptions.map(o => (
                  <button key={o.id} onClick={() => update("accent", o.id)}
                    style={{
                      padding: 8, borderRadius: 10,
                      border: `1.5px solid ${tweaks.accent === o.id ? "var(--ink)" : "var(--rule)"}`,
                      background: "transparent",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                    }}>
                    <div style={{ width: 24, height: 24, borderRadius: 999, background: o.color }}/>
                    <span style={{ fontSize: 10, color: "var(--ink-3)" }}>{o.label}</span>
                  </button>
                ))}
              </div>
            </Group>
            <Group label="Background">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {[
                  { id: "warm",    label: "Warm",    color: "#F6F2EA" },
                  { id: "cool",    label: "Cool",    color: "#EEF1F5" },
                  { id: "dark",    label: "Dark",    color: "#141612" },
                ].map(o => (
                  <button key={o.id} onClick={() => update("bg", o.id)}
                    style={{
                      padding: 8, borderRadius: 10,
                      border: `1.5px solid ${tweaks.bg === o.id ? "var(--ink)" : "var(--rule)"}`,
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                    }}>
                    <div style={{ width: "100%", height: 22, borderRadius: 4, background: o.color, border: "1px solid var(--rule)" }}/>
                    <span style={{ fontSize: 10, color: "var(--ink-3)" }}>{o.label}</span>
                  </button>
                ))}
              </div>
            </Group>
          </>
        )}

        {tab === "type" && (
          <>
            <Group label="Display font">
              {[
                { id: "fraunces", label: "Fraunces (serif)" },
                { id: "ibmplex",  label: "IBM Plex Serif" },
                { id: "instrument", label: "Instrument Serif" },
                { id: "inter",    label: "Inter (sans)" },
              ].map(f => (
                <button key={f.id} onClick={() => update("display", f.id)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    width: "100%", padding: "10px 12px", borderRadius: 8,
                    background: tweaks.display === f.id ? "var(--bg-2)" : "transparent",
                    fontSize: 13, marginBottom: 4,
                  }}>
                  <span>{f.label}</span>
                  {tweaks.display === f.id && <Icon name="check" size={14} />}
                </button>
              ))}
            </Group>
            <Group label="Headline scale">
              <input type="range" min="0.85" max="1.2" step="0.05"
                value={tweaks.scale}
                onChange={e => update("scale", parseFloat(e.target.value))}
                style={{ width: "100%" }} />
              <div className="kbd-num">{(tweaks.scale * 100).toFixed(0)}%</div>
            </Group>
          </>
        )}

        {tab === "layout" && (
          <>
            <Group label="Hero layout">
              {[
                { id: "split",   label: "Split · text + product" },
                { id: "centered", label: "Centered editorial" },
              ].map(l => (
                <button key={l.id} onClick={() => update("hero", l.id)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    width: "100%", padding: "10px 12px", borderRadius: 8,
                    background: tweaks.hero === l.id ? "var(--bg-2)" : "transparent",
                    fontSize: 13, marginBottom: 4,
                  }}>
                  <span>{l.label}</span>
                  {tweaks.hero === l.id && <Icon name="check" size={14} />}
                </button>
              ))}
            </Group>
            <Group label="Card style">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {["outlined", "elevated", "filled"].map(s => (
                  <button key={s} onClick={() => update("cards", s)}
                    style={{
                      padding: "10px", borderRadius: 8,
                      border: `1.5px solid ${tweaks.cards === s ? "var(--ink)" : "var(--rule)"}`,
                      fontSize: 11, textTransform: "capitalize",
                      background: "var(--paper)",
                    }}>{s}</button>
                ))}
              </div>
            </Group>
          </>
        )}
      </div>
    </div>
  );
};

const Group = ({ label, children }) => (
  <div>
    <div style={{ fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 10 }}>
      {label}
    </div>
    {children}
  </div>
);

Object.assign(window, { Tweaks });
