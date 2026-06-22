// Hero — split layout: editorial left, product/lead-capture right
const BOOKING_URL = "https://www.tarheelpurewaterservices.co/Book%20Free%20Water%20Test";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-wide grid-hero">
        {/* Left column */}
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
            <span className="badge"><span className="dot"></span> Serving NC since 2011</span>
            <span className="badge" style={{ background: "transparent" }}>
              <Stars n={5} size={12} /> 4.9 · 800+ reviews
            </span>
          </div>
          <h1 style={{ marginBottom: 24 }}>
            The cleanest water<br/>
            <span style={{ fontStyle: "italic", color: "var(--blue)" }}>your home</span> has ever poured.
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 520, marginBottom: 32, lineHeight: 1.5 }}>
            Custom-built filtration, reverse osmosis, bacteria removal, problem well water and PFAS
            systems installed by our Master Plumber — backed for life.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginBottom: 20 }}>
            <a href={BOOKING_URL} className="btn btn-primary" style={{ padding: "16px 26px", fontSize: 16 }}>
              Book my free water test <Icon name="arrow" size={15} />
            </a>
            <span style={{ fontSize: 13, color: "var(--ink-3)" }}>
              Free · no obligation · results on the spot
            </span>
          </div>

          <a href="tel:+19103806339" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, color: "var(--ink-3)",
          }}>
            <Icon name="phone" size={13} /> Or call us directly: (910) 380-6339
          </a>

          {/* Trust strip */}
          <div style={{
            display: "flex", gap: 28, marginTop: 56, paddingTop: 28,
            borderTop: "1px solid var(--rule)", maxWidth: 540,
          }}>
            {[
              { n: "12k+", l: "homes served" },
              { n: "NSF", l: "certified systems" },
              { n: "Lifetime", l: "equipment warranty" },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 28, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — product hero */}
        <HeroVisual />
      </div>
    </section>
  );
};

const HeroVisual = () => {
  const [before, setBefore] = React.useState(50);

  return (
    <div style={{ position: "relative" }}>
      {/* Background plate */}
      <div style={{
        position: "absolute", inset: "-40px -40px -40px 0",
        background: "radial-gradient(ellipse at 30% 20%, rgba(31,74,160,0.08), transparent 60%)",
        pointerEvents: "none",
      }}/>

      {/* Main image */}
      <div style={{ position: "relative" }}>
        <div style={{
          aspectRatio: "4/5",
          borderRadius: 22,
          overflow: "hidden",
          background: "var(--bg-2)",
          boxShadow: "var(--shadow-md)",
        }}>
          <img
            src="assets/hero-softener-install.jpeg"
            alt="Tarheel Pure Water whole-home filtration system installed in a customer's utility room"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }}
          />
        </div>

        {/* Floating annotation 1 */}
        <div className="hero-annotation"><div style={{
          position: "absolute", top: 40, left: -24,
          background: "var(--paper)",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--rule)",
          display: "flex", gap: 10, alignItems: "center",
          minWidth: 200,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "var(--sage-soft)", color: "var(--sage)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="beaker" size={18} /></div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>hardness</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>
              12 gpg → <span style={{ color: "var(--sage)" }}>0 gpg</span>
            </div>
          </div>
        </div></div>

        {/* Floating annotation 2 */}
        <div className="hero-annotation"><div style={{
          position: "absolute", bottom: 90, right: -24,
          background: "var(--paper)",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--rule)",
          display: "flex", gap: 10, alignItems: "center",
          minWidth: 220,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "var(--blue-soft)", color: "var(--blue)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="shield" size={18} /></div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>protects</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>fixtures · appliances</div>
          </div>
        </div></div>

        {/* Bottom ticker */}
        <div style={{
          position: "absolute", bottom: 20, left: 20, right: 20,
          background: "rgba(20,22,18,0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "var(--paper)",
          padding: "14px 18px",
          borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".1em", opacity: .6, textTransform: "uppercase", fontFamily: "var(--f-mono)" }}>recent install</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>Whole Home Filtration · Leland, NC</div>
          </div>
          <a href="Custom Whole Home Refiner" style={{
            padding: "8px 14px", borderRadius: 999,
            background: "var(--paper)", color: "var(--ink)", fontSize: 12, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 6,
            textDecoration: "none",
          }}>
            See system <Icon name="arrow-ne" size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Hero });
