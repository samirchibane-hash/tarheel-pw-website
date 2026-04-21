// Free Water Test booking page
const BookHero = () => (
  <section style={{ paddingTop: 110, paddingBottom: 40, position: "relative", overflow: "hidden" }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .4,
      background: "radial-gradient(ellipse 700px 500px at 90% 10%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{ position: "relative" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 18 }}>
        <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
        <span style={{ color: "var(--ink-4)" }}>/</span>
        <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Free water test</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40, alignItems: "start" }}>
        {/* Left: copy + trust */}
        <div style={{ position: "sticky", top: 110, alignSelf: "start" }}>
          <span className="badge" style={{ marginBottom: 18, background: "var(--blue-soft)", color: "var(--blue)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--blue)" }}></span> No cost · No obligation
          </span>
          <h1 style={{ marginBottom: 18, lineHeight: 1.05, fontSize: "clamp(36px, 4.4vw, 60px)" }}>
            Book your free,<br/>
            <span style={{ fontStyle: "italic", color: "var(--blue)" }}>in-home</span> water test.
          </h1>
          <p style={{ fontSize: 16, color: "var(--ink-2)", maxWidth: 480, lineHeight: 1.5, marginBottom: 22 }}>
            A certified Tarheel tech will come to your home, test for 42 contaminants on-site,
            and walk you through exactly what's in your water. 45 minutes. Zero pressure.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 22, maxWidth: 480 }}>
            {[
              { n: "45 min", l: "on-site" },
              { n: "42", l: "contaminants" },
              { n: "$0", l: "you pay" },
            ].map(s => (
              <div key={s.l} style={{
                padding: "12px 14px", background: "var(--paper)",
                borderRadius: 12, border: "1px solid var(--rule)",
              }}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 22, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, maxWidth: 480 }}>
            {[
              "Certified, background-checked tech",
              "Printed water report to keep",
              "No-pressure, no-obligation quote",
            ].map(t => (
              <li key={t} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "var(--ink-2)" }}>
                <span style={{
                  width: 18, height: 18, borderRadius: 999,
                  background: "var(--sage-soft)", color: "var(--sage)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}><Icon name="check" size={10} stroke={2.5} /></span>
                {t}
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: 22, padding: "14px 16px",
            background: "var(--bg-2)", borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
            maxWidth: 480,
          }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>Prefer to talk?</div>
              <a href="tel:+19103806339" style={{ fontFamily: "var(--f-display)", fontSize: 20, color: "var(--ink)" }}>(910) 380-6339</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--ink-3)", fontSize: 11 }}>
              <Stars n={5} size={10} /> 4.9 · 800+
            </div>
          </div>
        </div>

        {/* Right: calendar embedded above the fold */}
        <BookingEmbed />
      </div>
    </div>
  </section>
);

// Self-resizing calendar iframe — listens for GoHighLevel's height messages
// and falls back to a tall min-height with internal scroll so no step ever
// gets clipped.
const BookingEmbed = () => {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(760);

  React.useEffect(() => {
    const handler = (e) => {
      const d = e?.data;
      if (!d) return;
      let h = null;
      if (typeof d === "number") h = d;
      else if (typeof d === "object") {
        h = d.height || d.contentHeight || d.frameHeight || null;
      } else if (typeof d === "string" && d.includes("height")) {
        const m = d.match(/(\d{3,5})/);
        if (m) h = parseInt(m[1], 10);
      }
      if (h && h > 400 && h < 4000) setHeight(h + 24);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <div style={{
      background: "var(--paper)", borderRadius: 20,
      border: "1px solid var(--rule)", padding: 12,
      boxShadow: "var(--shadow-md)",
      overflow: "visible",
    }}>
      <iframe
        ref={ref}
        src="https://api.leadconnectorhq.com/widget/booking/9ChL9qG6yCQh9l8RwgPO"
        style={{
          width: "100%", border: "none", borderRadius: 12, display: "block",
          height: `${height}px`,
        }}
        scrolling="yes"
        id="9ChL9qG6yCQh9l8RwgPO_1776775433096"
        title="Book your free water test">
      </iframe>
    </div>
  );
};

// What to expect — three concise steps
const WhatToExpect = () => {
  const steps = [
    {
      n: "01", icon: "phone",
      t: "Pick a time",
      d: "Choose any 45-minute slot that works. You'll get a text confirmation and a short questionnaire about your water concerns.",
    },
    {
      n: "02", icon: "beaker",
      t: "In-home testing",
      d: "Your tech tests your water on-site for 42 parameters — hardness, pH, chlorine, TDS, iron, bacteria indicators, and more.",
    },
    {
      n: "03", icon: "check",
      t: "Honest recommendation",
      d: "You'll get a printed water report and a walk-through of your options. No pressure to buy. Decide on your own time.",
    },
  ];
  return (
    <section style={{ paddingTop: 40 }}>
      <div className="container-wide">
        <div style={{ marginBottom: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>// What to expect</div>
          <h2 style={{ maxWidth: 720 }}>Three simple steps, start to finish.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {steps.map(s => (
            <article key={s.n} style={{
              background: "var(--paper)", borderRadius: 18,
              border: "1px solid var(--rule)", padding: 28,
              display: "flex", flexDirection: "column", minHeight: 240,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "var(--blue-soft)", color: "var(--blue)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}><Icon name={s.icon} size={20} /></div>
                <span className="kbd-num">{s.n}</span>
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Calendar embed section
const BookCalendar = () => (
  <section id="calendar">
    <div className="container-wide">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }}>
        {/* Left panel — trust reinforcement */}
        <div style={{ position: "sticky", top: 120 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>// Pick a time</div>
          <h2 style={{ marginBottom: 16, fontSize: "clamp(28px, 3.4vw, 42px)" }}>Select the slot<br/>that works for you.</h2>
          <p style={{ color: "var(--ink-2)", marginBottom: 28, maxWidth: 380 }}>
            Same-week appointments usually available. You'll get a text confirmation the moment you book.
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            {[
              "Certified, background-checked tech",
              "Clean, shoes-off home visit",
              "Printed water report to keep",
              "No-pressure, no-obligation quote",
            ].map(t => (
              <li key={t} style={{ display: "flex", gap: 12, alignItems: "start", fontSize: 14, color: "var(--ink-2)" }}>
                <span style={{
                  width: 22, height: 22, borderRadius: 999,
                  background: "var(--sage-soft)", color: "var(--sage)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: 1,
                }}><Icon name="check" size={12} stroke={2} /></span>
                {t}
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: 32, padding: 20,
            background: "var(--bg-2)", borderRadius: 14,
          }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
              <Icon name="phone" size={14} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>Prefer to talk?</span>
            </div>
            <a href="tel:+19103806339" style={{ fontFamily: "var(--f-display)", fontSize: 22, color: "var(--ink)" }}>
              (910) 380-6339
            </a>
            <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>
              Mon–Sat · 8am–7pm · Eastern
            </p>
          </div>
        </div>

        {/* Right panel — embedded calendar */}
        <div style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", padding: 16,
          boxShadow: "var(--shadow-sm)",
          overflow: "hidden",
          minHeight: 780,
        }}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/9ChL9qG6yCQh9l8RwgPO"
            style={{ width: "100%", border: "none", minHeight: 760, borderRadius: 12 }}
            scrolling="no"
            id="9ChL9qG6yCQh9l8RwgPO_1776775433096"
            title="Book your free water test">
          </iframe>
        </div>
      </div>
    </div>
  </section>
);

// Quick FAQ to address booking-blockers
const BookFaq = () => {
  const faqs = [
    { q: "Is it really free?", a: "Yes — the test, the report, and the consultation are all free. We cover the cost because we know a real water test is the only honest way to recommend a system. You're under zero obligation to buy anything." },
    { q: "How long does the visit take?", a: "About 45 minutes. Your tech will collect samples from your main line and a representative tap, run on-site tests, and walk you through the results before leaving." },
    { q: "Do I need to do anything to prepare?", a: "Nothing — just be home and have access to your main water line (often in a utility room, basement, or garage). We'll bring everything else." },
    { q: "What areas do you serve?", a: "We service the Raleigh–Durham–Chapel Hill triangle, Charlotte metro, Asheville, and most of central and western North Carolina. If you're outside our service map, we'll refer you to a trusted partner." },
    { q: "Do you test well water?", a: "Yes. Well water tests include additional parameters (iron, sulfur, tannins, bacteria indicators, nitrates) at no extra cost. About 60% of the homes we test are on well." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>// Common questions</div>
            <h2>Before you book.</h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: "100%", textAlign: "left", padding: "22px 0",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
                }}>
                  <span style={{ fontFamily: "var(--f-display)", fontSize: 20, color: "var(--ink)" }}>{f.q}</span>
                  <span style={{
                    width: 34, height: 34, borderRadius: 999,
                    border: "1px solid var(--rule)", background: open === i ? "var(--ink)" : "var(--paper)",
                    color: open === i ? "var(--paper)" : "var(--ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, transition: "all .2s ease",
                  }}>
                    <Icon name={open === i ? "minus" : "plus"} size={14} />
                  </span>
                </button>
                <div style={{
                  maxHeight: open === i ? 400 : 0, overflow: "hidden",
                  transition: "max-height .4s ease, padding .3s ease",
                  paddingBottom: open === i ? 24 : 0,
                }}>
                  <p style={{ color: "var(--ink-2)", fontSize: 15, maxWidth: 640 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Social proof mini-strip
const BookProof = () => (
  <section style={{ paddingTop: 0, paddingBottom: 60 }}>
    <div className="container-wide">
      <div style={{
        padding: "28px 36px", background: "var(--paper)",
        border: "1px solid var(--rule)", borderRadius: 18,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        gap: 40, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Stars n={5} size={16} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 500 }}>4.9 · 800+ reviews</div>
            <div style={{ fontSize: 12, color: "var(--ink-3)" }}>Google · Angi · BBB A+</div>
          </div>
        </div>
        <div style={{ fontSize: 14, color: "var(--ink-2)", fontStyle: "italic", maxWidth: 560 }}>
          "The water report alone was worth more than what most companies charge. Real data, honest recommendation."
          <span style={{ color: "var(--ink-3)", fontStyle: "normal" }}> — Annie M., Chapel Hill</span>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { BookHero, WhatToExpect, BookCalendar, BookFaq, BookProof, BookingEmbed });
