// Testimonials carousel
const Testimonials = () => {
  const quotes = [
    {
      q: "We'd been dealing with bad well water for years. Tarheel tested, explained exactly what was going on, and installed a system that actually solved the problem. Our water tastes like nothing — which is the best compliment.",
      name: "Annie M.", role: "Homeowner · Chapel Hill, NC", rating: 5,
    },
    {
      q: "The install crew was professional, respectful of our home, and walked my wife and me through every part of the system. One year in and it's been flawless.",
      name: "David R.", role: "Homeowner · Raleigh, NC", rating: 5,
    },
    {
      q: "Their water report was a revelation. I finally understood what I was drinking. The system they proposed wasn't the most expensive — it was the right one.",
      name: "Sarah K.", role: "Homeowner · Cary, NC", rating: 5,
    },
    {
      q: "We had three companies come out. Tarheel was the only one that actually tested the water before recommending anything. That's why we chose them.",
      name: "Marcus T.", role: "Homeowner · Durham, NC", rating: 5,
    },
  ];
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx((idx - 1 + quotes.length) % quotes.length);
  const next = () => setIdx((idx + 1) % quotes.length);

  return (
    <section id="testimonials">
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Voices</div>
          <h2>Trusted by North Carolina families.</h2>
        </div>

        <div style={{
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderRadius: 28,
          padding: "64px 72px",
          position: "relative",
          maxWidth: 960, margin: "0 auto",
        }}>
          <div style={{
            position: "absolute", top: 32, left: 40,
            fontFamily: "var(--f-display)", fontSize: 120, lineHeight: 1,
            color: "var(--blue-soft)", pointerEvents: "none",
          }}>"</div>

          <div style={{ position: "relative" }}>
            <Stars n={5} size={16} />
            <blockquote key={idx} style={{
              margin: "24px 0 32px",
              fontFamily: "var(--f-display)",
              fontSize: 26, lineHeight: 1.35, letterSpacing: "-0.01em",
              color: "var(--ink)",
              animation: "fadeUp .5s ease",
            }}>
              {quotes[idx].q}
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 999,
                  background: "var(--sage-soft)", color: "var(--sage)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--f-display)", fontSize: 18,
                }}>
                  {quotes[idx].name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15 }}>{quotes[idx].name}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{quotes[idx].role}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span className="kbd-num">{String(idx + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</span>
                <button onClick={prev} aria-label="Previous" style={{
                  width: 40, height: 40, borderRadius: 999,
                  border: "1px solid var(--rule)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "var(--ink-2)",
                }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 2-5 5 5 5"/></svg></button>
                <button onClick={next} aria-label="Next" style={{
                  width: 40, height: 40, borderRadius: 999,
                  background: "var(--ink)", color: "var(--paper)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 2 5 5-5 5"/></svg></button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos rail */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 40,
          marginTop: 64, alignItems: "center",
          borderTop: "1px solid var(--rule)",
          paddingTop: 40,
        }}>
          {["NSF", "WQA", "BBB A+", "EPA", "Google", "Angi"].map(l => (
            <div key={l} style={{
              textAlign: "center", fontFamily: "var(--f-mono)",
              fontSize: 13, color: "var(--ink-3)", letterSpacing: ".12em",
            }}>{l}</div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

// FAQ
const FAQ = () => {
  const faqs = [
    { q: "How much does a whole-home system typically cost?", a: "It depends on your water chemistry and home size. After your free test, we'll give you a fixed-price proposal — most whole-home systems range $2,400–$6,800 installed, with financing available at 0% APR for qualified buyers." },
    { q: "Do you handle well water?", a: "Yes — well water is our specialty. About 60% of our installs are well systems. We test for iron, sulfur, tannins, nitrates, bacteria, and heavy metals, then design a multi-stage system tuned to your specific well." },
    { q: "How long does installation take?", a: "Most whole-home systems install in 4–6 hours. Under-sink RO systems are usually 2–3 hours. We schedule one tech per home so your point of contact never changes." },
    { q: "What's covered under the lifetime warranty?", a: "All equipment parts, tanks, and housings are covered for life. Filters and membranes are consumables and are replaced on our annual service visits, which are included for the first two years." },
    { q: "Are your systems NSF certified?", a: "Every system we install uses NSF-42, 53, and 58 certified components. The full certification sheets are included in your customer portal after install." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "var(--bg-2)" }} id="faq">
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Questions</div>
            <h2 style={{ marginBottom: 20 }}>Straight answers.</h2>
            <p style={{ color: "var(--ink-2)", maxWidth: 320, marginBottom: 24 }}>
              Still have a question? Call a real person at <strong>(910) 380-6339</strong> or email <strong>info@tarheelpurewater.com</strong>.
            </p>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
              }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: "100%", textAlign: "left",
                  padding: "24px 0",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 20,
                }}>
                  <span style={{
                    fontFamily: "var(--f-display)", fontSize: 22,
                    color: "var(--ink)", letterSpacing: "-0.01em",
                  }}>{f.q}</span>
                  <span style={{
                    width: 36, height: 36, borderRadius: 999,
                    border: "1px solid var(--rule)", background: open === i ? "var(--ink)" : "var(--paper)",
                    color: open === i ? "var(--paper)" : "var(--ink)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, transition: "all .2s ease",
                  }}>
                    <Icon name={open === i ? "minus" : "plus"} size={16} />
                  </span>
                </button>
                <div style={{
                  maxHeight: open === i ? 300 : 0, overflow: "hidden",
                  transition: "max-height .4s ease, padding .3s ease",
                  paddingBottom: open === i ? 28 : 0,
                }}>
                  <p style={{ color: "var(--ink-2)", fontSize: 16, maxWidth: 640 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Testimonials, FAQ });
