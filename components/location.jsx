// Location landing page — SEO/CRO optimized template.
// All content driven by window.__LOCATION__ set in the .html file.
// To create a new city page: copy any City-ST.html, update window.__LOCATION__, done.

const loc = () => window.__LOCATION__;

// ─── Hero ────────────────────────────────────────────────────────────────────
const LocationHero = () => {
  const l = loc();
  return (
    <section style={{ paddingTop: 120, paddingBottom: 80 }}>
      <div className="container-wide">
        <div style={{ maxWidth: 780 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28, alignItems: "center" }}>
            <span className="badge"><span className="dot"></span> Serving {l.city} since 2011</span>
            <span className="badge" style={{ background: "transparent" }}>
              <Stars n={5} size={12} /> 4.9 · 800+ reviews
            </span>
          </div>
          <h1 style={{ marginBottom: 24 }}>
            Water filtration &amp; purification<br/>
            <span style={{ fontStyle: "italic", color: "var(--blue)" }}>in {l.city}, {l.state}.</span>
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 580, marginBottom: 36, lineHeight: 1.5 }}>
            {l.heroSubtitle}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{ padding: "16px 22px", fontSize: 15 }}>
              Book free water test — {l.city} <Icon name="arrow" size={14} />
            </a>
            <a href={l.phoneHref} className="btn" style={{
              padding: "16px 22px", fontSize: 15,
              border: "1px solid var(--rule)", background: "var(--paper)", color: "var(--ink)",
            }}>
              <Icon name="phone" size={14} /> Call {l.phone}
            </a>
          </div>
          <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 14 }}>
            Free lab-grade water test. No obligation. Results immediately.
          </p>
          <div style={{
            display: "flex", gap: 32, marginTop: 48, paddingTop: 28,
            borderTop: "1px solid var(--rule)", flexWrap: "wrap",
          }}>
            {[
              { n: l.installsCount, l: l.city + " area installs" },
              { n: "NSF", l: "certified systems" },
              { n: "Licensed", l: l.state + " Master Plumber" },
              { n: "Lifetime", l: "equipment warranty" },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 22, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4, textTransform: "uppercase", letterSpacing: ".06em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Local water problem ──────────────────────────────────────────────────────
const LocationProblem = () => {
  const l = loc();
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// {l.city} water quality</div>
            <h2 style={{ marginBottom: 20 }}>What's in {l.city}'s water?</h2>
            <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 32 }}>
              {l.waterContext}
            </p>
            <a href="Book Free Water Test.html" className="btn btn-primary">
              Get your free water report <Icon name="arrow" size={14} />
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {l.waterIssues.map((issue, i) => (
              <div key={issue} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "16px 20px", background: "var(--paper)",
                borderRadius: 14, border: "1px solid var(--rule)",
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 999, flexShrink: 0,
                  background: "var(--blue-soft)", color: "var(--blue)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--f-mono)", fontSize: 11, fontWeight: 500,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────
const LocationServices = () => {
  const l = loc();
  const services = [
    {
      icon: "home", title: "Whole Home Filtration",
      body: "Custom carbon and sediment systems built for " + l.city + " water chemistry — municipal or well.",
      href: "Custom Whole Home Filters.html",
    },
    {
      icon: "drop", title: "Reverse Osmosis",
      body: "Under-sink drinking water that tests clean. NSF-58 certified membranes, installed in 2–3 hours.",
      href: "Reverse Osmosis.html",
    },
    {
      icon: "shield", title: "PFAS / PFOA Removal",
      body: "Dedicated ion-exchange tank that removes PFAS to non-detect levels. Critical for " + l.city + " well and municipal users.",
      href: "Whole Home PFAS PFOA.html",
    },
    {
      icon: "beaker", title: "Well Water Treatment",
      body: "Multi-stage systems for iron, sulfur, bacteria, and hardness — sized to your exact well chemistry.",
      href: "How It Works.html",
    },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// What we install</div>
          <h2>Water solutions for {l.city} homes.</h2>
        </div>
        <div className="grid-4col" style={{ gap: 20 }}>
          {services.map(s => (
            <a key={s.title} href={s.href} style={{
              display: "flex", flexDirection: "column", padding: "28px 24px",
              background: "var(--paper)", borderRadius: 18, border: "1px solid var(--rule)",
              textDecoration: "none", transition: "transform .2s ease, box-shadow .2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, marginBottom: 20,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon name={s.icon} size={22} />
              </div>
              <h3 style={{ fontSize: 18, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 20, flex: 1 }}>{s.body}</p>
              <span style={{ fontSize: 13, color: "var(--blue)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                Learn more <Icon name="arrow-ne" size={11} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Process ──────────────────────────────────────────────────────────────────
const LocationProcess = () => {
  const l = loc();
  const steps = [
    {
      n: "01", t: "Book your free water test",
      d: "A licensed tech drives to your " + l.city + " home with a full lab kit. Same-week appointments usually available.",
    },
    {
      n: "02", t: "Get your written water report",
      d: "We test for 16 contaminants on-site and hand you a plain-English written report before we leave. No pressure.",
    },
    {
      n: "03", t: "We install in one day",
      d: "If you want a system, we build a custom spec and install it — typically 4–6 hours. Backed by a lifetime warranty.",
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div className="grid-sidebar">
          <div className="sticky-sidebar" style={{ top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
            <h2 style={{ marginBottom: 20 }}>Clean water in {l.city} — three steps.</h2>
            <p style={{ color: "var(--ink-2)", marginBottom: 32, lineHeight: 1.6 }}>
              From the first test to your first clean glass — every step is documented, honest, and handled by a licensed plumber.
            </p>
            <a href="Book Free Water Test.html" className="btn btn-primary">
              Book free test <Icon name="arrow" size={14} />
            </a>
          </div>
          <div>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                display: "grid", gridTemplateColumns: "80px 1fr",
                gap: 24, paddingBottom: 40,
                borderBottom: i < steps.length - 1 ? "1px solid var(--rule)" : "none",
                marginBottom: i < steps.length - 1 ? 40 : 0,
              }}>
                <div style={{ fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--blue)", paddingTop: 4 }}>{s.n}</div>
                <div>
                  <h3 style={{ marginBottom: 12 }}>{s.t}</h3>
                  <p style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Social proof ─────────────────────────────────────────────────────────────
const LocationProof = () => {
  const l = loc();
  return (
    <section>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>// What {l.city} homeowners say</div>
            <blockquote style={{
              fontSize: 22, lineHeight: 1.5, fontFamily: "var(--f-display)",
              fontStyle: "italic", marginBottom: 28, color: "var(--ink)",
            }}>
              "{l.testimonial.text}"
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Stars n={5} size={14} />
              <div>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{l.testimonial.name}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{l.testimonial.role}</div>
              </div>
            </div>
          </div>
          <div className="grid-2col" style={{ gap: 16 }}>
            {[
              { n: l.installsCount, l: "installs in the " + l.city + " area" },
              { n: "4.9★", l: "average Google rating" },
              { n: "1-day", l: "typical install time" },
              { n: "Lifetime", l: "parts & labor warranty" },
            ].map(s => (
              <div key={s.l} style={{ padding: "24px 20px", background: "var(--bg-2)", borderRadius: 16 }}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 30, marginBottom: 6, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const LocationFAQ = () => {
  const l = loc();
  const [open, setOpen] = React.useState(0);
  const faqs = [
    {
      q: "Do you serve all of " + l.city + " and surrounding areas?",
      a: "Yes — we cover all of " + l.city + " and nearby communities including " + l.nearbyAreas.join(", ") + ". Not sure? Call " + l.phone + " and we'll confirm.",
    },
    {
      q: "How quickly can I get a water test in " + l.city + "?",
      a: "Most customers get a same-week appointment. We have " + l.city + "-area technicians on staff, so scheduling is fast.",
    },
    {
      q: "Is the water test actually free?",
      a: "Yes — no credit card, no obligation. A licensed tech comes to your home, tests for 16 contaminants, and hands you a written report. You decide what to do from there.",
    },
    {
      q: "Are you licensed to work in " + l.state + "?",
      a: "Yes. Tarheel Pure Water is a division of Paxton Plumbing — NC Licensed Plumber #L34486. Every install is permitted, inspected, and backed by a licensed Master Plumber.",
    },
    {
      q: "What if I'm on well water in the " + l.city + " area?",
      a: "Well water is our specialty — around 60% of our installs are well systems. We test for iron, sulfur, bacteria, hardness, and heavy metals, then design a multi-stage system tuned to your specific well.",
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Questions</div>
            <h2>Common questions from {l.city} homeowners.</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={f.q} style={{ borderTop: "1px solid var(--rule)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left", padding: "20px 0",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontWeight: 500, fontSize: 16, gap: 16,
                }}>
                {f.q}
                <span style={{ fontSize: 22, color: "var(--ink-3)", flexShrink: 0, lineHeight: 1 }}>
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p style={{ paddingBottom: 24, color: "var(--ink-2)", lineHeight: 1.7, fontSize: 15 }}>{f.a}</p>
              )}
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--rule)" }} />
          <p style={{ marginTop: 24, fontSize: 14, color: "var(--ink-3)", fontStyle: "italic", fontFamily: "var(--f-display)" }}>
            Still have a question? Call a real person at <strong style={{ color: "var(--ink)" }}>{l.phone}</strong> or email <strong style={{ color: "var(--ink)" }}>info@tarheelpurewaterservices.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

// ─── Nearby areas ─────────────────────────────────────────────────────────────
const LocationNearby = () => {
  const l = loc();
  return (
    <section>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 64, alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Service coverage</div>
            <h2 style={{ marginBottom: 16 }}>Also serving areas near {l.city}.</h2>
            <p style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>
              Our {l.city}-area team covers a wide radius. If you're in a nearby community, there's a good chance we're already your neighbor.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {l.nearbyAreas.map(area => (
              <span key={area} style={{
                padding: "10px 18px", borderRadius: 999,
                background: "var(--paper)", border: "1px solid var(--rule)",
                fontSize: 14, color: "var(--ink-2)",
              }}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Final CTA ────────────────────────────────────────────────────────────────
const LocationCta = () => {
  const l = loc();
  return (
    <section style={{ paddingBottom: 80 }}>
      <div className="container-wide">
        <div style={{
          background: "var(--ink)", color: "var(--paper)",
          borderRadius: 28, padding: "clamp(40px, 6vw, 80px) clamp(32px, 5vw, 72px)",
          textAlign: "center",
        }}>
          <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)", marginBottom: 16 }}>// Get started in {l.city}</div>
          <h2 style={{ color: "var(--paper)", marginBottom: 16, maxWidth: 640, margin: "0 auto 16px" }}>
            Find out what's in your {l.city} water — free.
          </h2>
          <p style={{ color: "rgba(251,248,241,0.65)", maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.6 }}>
            A licensed Tarheel tech drives to your home, tests for 16 contaminants on-site, and leaves you with a written report. No pressure. No obligation.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{ padding: "16px 26px", fontSize: 15 }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href={l.phoneHref} className="btn" style={{
              padding: "16px 26px", fontSize: 15,
              border: "1px solid rgba(251,248,241,0.25)", color: "var(--paper)", background: "transparent",
            }}>
              <Icon name="phone" size={14} /> Call {l.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
