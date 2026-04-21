// How It Works page — the four-step Tarheel process

const HowHero = () => (
  <section className="hero-section" style={{ paddingBottom: 60 }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .5,
      background: "radial-gradient(ellipse 1100px 600px at 80% 10%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{ position: "relative" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
        <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
        <span style={{ color: "var(--ink-4)" }}>/</span>
        <span style={{ fontSize: 13, color: "var(--ink-2)" }}>How it works</span>
      </div>

      <div className="grid-hero" style={{ alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>// The process</div>
          <h1 style={{ marginBottom: 28, fontSize: "clamp(48px, 6vw, 84px)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
            Four steps from<br/>
            <span style={{ fontStyle: "italic", color: "var(--blue)" }}>tap to trust.</span>
          </h1>
          <p style={{ fontSize: 20, color: "var(--ink-2)", maxWidth: 640, lineHeight: 1.5 }}>
            Every home's water is different. Here's exactly what happens after you book a free
            test — from the moment we pull the first sample to your first long, soft shower.
          </p>
        </div>

        <div style={{
          padding: 28, background: "var(--paper)",
          border: "1px solid var(--rule)", borderRadius: 20,
        }}>
          <div className="kbd-num" style={{ fontSize: 10, marginBottom: 14 }}>TYPICAL TIMELINE</div>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(90px, auto) 1fr", gap: "12px 20px", fontSize: 14 }}>
            <span style={{ color: "var(--ink-3)", fontFamily: "var(--f-mono)", whiteSpace: "nowrap" }}>Day 0</span><span>Book online, free</span>
            <span style={{ color: "var(--ink-3)", fontFamily: "var(--f-mono)", whiteSpace: "nowrap" }}>~Day 3</span><span>In-home water test</span>
            <span style={{ color: "var(--ink-3)", fontFamily: "var(--f-mono)", whiteSpace: "nowrap" }}>Same visit</span><span>Custom recommendation</span>
            <span style={{ color: "var(--ink-3)", fontFamily: "var(--f-mono)", whiteSpace: "nowrap" }}>1–2 weeks</span><span>Installation day</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowSteps = () => {
  const steps = [
    {
      n: "01",
      title: "Test your water",
      pitch: "Know what you're drinking.",
      d: "A Tarheel technician comes to your home with a lab kit and tests for 42 parameters — chlorine, hardness, iron, TDS, pH, heavy metals, bacterial indicators, PFAS screening. It's free, it takes about 45 minutes, and you walk away with a written report.",
      bullets: [
        "42-parameter lab-grade test",
        "Both municipal & well water",
        "Written results, same visit",
        "Zero obligation, zero upsell pressure",
      ],
      cta: { label: "Book your free test", href: "Book Free Water Test.html" },
    },
    {
      n: "02",
      title: "Customize your solution",
      pitch: "A system shaped to your water.",
      d: "Your results drive the design. If you're on city water with chloramines, we lead with catalytic carbon. Hard well water? Fine-mesh resin. Forever chemicals? The NWS-PFAS-8 tank. We spec the exact stages, sizing, and flow rate for your house — not a one-size-fits-all bundle.",
      bullets: [
        "Based on your actual test results",
        "Whole-home, point-of-use, or both",
        "Transparent pricing, written quote",
        "No pressure — review at your pace",
      ],
      cta: { label: "See our solutions", href: "index.html#solutions" },
    },
    {
      n: "03",
      title: "Professional installation",
      pitch: "Licensed plumbers doing plumbing work.",
      d: "Tarheel is a division of Paxton Plumbing — so it's a licensed NC plumber (L.34486) installing your system, not a commissioned sales rep. Most installs wrap in a single day. We cut in cleanly, pressure test everything, and walk you through the system before we leave.",
      bullets: [
        "NC licensed plumber on site",
        "Typically one-day install",
        "Full system walkthrough",
        "10-yr warranty on RO · lifetime on PFAS",
      ],
      cta: null,
    },
    {
      n: "04",
      title: "Live with better water",
      pitch: "Shower, drink, and cook — upgraded.",
      d: "The difference shows up in quiet ways. Skin and hair feel softer after the first shower. Coffee and tea taste cleaner. Laundry stays brighter. Dishwashers and water heaters last years longer. And we come back for service, salt, and filter swaps so you never have to think about it.",
      bullets: [
        "Soft, silky showers from day one",
        "Clean-tasting drinking water on tap",
        "Appliances protected from scale",
        "Ongoing service & maintenance plans",
      ],
      cta: null,
    },
  ];

  return (
    <section>
      <div className="container-wide">
        {steps.map((s, i) => (
          <StepRow key={s.n} step={s} flipped={i % 2 === 1} last={i === steps.length - 1} />
        ))}
      </div>
    </section>
  );
};

const StepRow = ({ step, flipped, last }) => {
  const isMobile = useIsMobile();
  return (
  <div style={{
    position: "relative", paddingBottom: last ? 0 : 80,
    marginBottom: last ? 0 : 40,
    borderBottom: last ? "none" : "1px solid var(--rule)",
  }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : (flipped ? "1fr 1.3fr" : "1.3fr 1fr"),
      gap: isMobile ? 40 : 80, alignItems: "center",
    }}>
      {!isMobile && flipped && <StepVisual step={step} />}

      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <span style={{
            fontFamily: "var(--f-mono)", fontSize: 13, letterSpacing: ".15em",
            color: "var(--blue)", fontWeight: 500, whiteSpace: "nowrap",
          }}>STEP {step.n}</span>
          <span style={{ flex: 1, height: 1, background: "var(--rule)" }}/>
        </div>

        <h2 style={{
          fontSize: "clamp(36px, 4.5vw, 56px)", letterSpacing: "-0.02em",
          lineHeight: 1, marginBottom: 14,
        }}>{step.title}</h2>
        <p style={{
          fontFamily: "var(--f-display)", fontSize: 22, fontStyle: "italic",
          color: "var(--ink-2)", marginBottom: 24,
        }}>{step.pitch}</p>
        <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 28, maxWidth: 560 }}>
          {step.d}
        </p>

        <ul style={{ listStyle: "none", margin: "0 0 28px", padding: 0 }}>
          {step.bullets.map((b, bi) => (
            <li key={bi} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 0", borderTop: bi === 0 ? "1px solid var(--rule)" : "none",
              borderBottom: "1px solid var(--rule)", fontSize: 14, color: "var(--ink)",
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: 999,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon name="check" size={12} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        {step.cta && (
          <a href={step.cta.href} className="btn btn-primary">
            {step.cta.label} <Icon name="arrow" size={14} />
          </a>
        )}
      </div>

      {(!flipped || isMobile) && <StepVisual step={step} />}
    </div>
  </div>
  );
};

const StepVisual = ({ step }) => {
  return (
    <div style={{
      background: "var(--bg-2)",
      border: "1px solid var(--rule)",
      borderRadius: 22, padding: 32, minHeight: 400,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: .4,
        background: "radial-gradient(circle at 70% 30%, var(--blue-soft), transparent 60%)",
      }}/>
      <div style={{ position: "relative", width: "100%" }}>
        {step.n === "01" && <VisualTest />}
        {step.n === "02" && <VisualCustomize />}
        {step.n === "03" && <VisualInstall />}
        {step.n === "04" && <VisualLive />}
      </div>
    </div>
  );
};

const VisualTest = () => (
  <svg viewBox="0 0 400 320" style={{ width: "100%" }}>
    {/* Beaker */}
    <path d="M 140 80 L 140 160 L 110 260 Q 110 280 130 280 L 270 280 Q 290 280 290 260 L 260 160 L 260 80"
      fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
    <path d="M 140 80 L 260 80"
      stroke="var(--ink)" strokeWidth="2" />
    {/* Water level */}
    <path d="M 125 200 L 275 200 L 285 255 Q 285 275 265 275 L 135 275 Q 115 275 115 255 Z"
      fill="var(--blue-soft)" opacity=".7" />
    <path d="M 125 200 Q 160 195 200 200 T 275 200"
      stroke="var(--blue)" strokeWidth="2" fill="none" />
    {/* Bubbles */}
    <circle cx="170" cy="235" r="5" fill="var(--paper)" opacity=".8" />
    <circle cx="215" cy="250" r="4" fill="var(--paper)" opacity=".8" />
    <circle cx="185" cy="260" r="3" fill="var(--paper)" opacity=".8" />
    {/* Measurement marks */}
    {[0, 1, 2, 3].map(i => (
      <line key={i} x1={135 + i * 6} y1={230 - i * 30} x2={145 + i * 6} y2={230 - i * 30}
        stroke="var(--ink-3)" strokeWidth="1" />
    ))}
    {/* Test strip floating */}
    <rect x="180" y="60" width="14" height="80" rx="2" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
    <rect x="181" y="75" width="12" height="8" fill="#E8B04A" />
    <rect x="181" y="88" width="12" height="8" fill="#D97757" />
    <rect x="181" y="101" width="12" height="8" fill="var(--blue)" />
    <rect x="181" y="114" width="12" height="8" fill="var(--sage)" />
    {/* Label */}
    <text x="200" y="310" textAnchor="middle" fontSize="11" fontFamily="var(--f-mono)" fill="var(--ink-3)" letterSpacing="2">
      42 PARAMETERS · ON-SITE
    </text>
  </svg>
);

const VisualCustomize = () => (
  <svg viewBox="0 0 400 320" style={{ width: "100%" }}>
    {/* Modular blocks stacked */}
    {[
      { y: 60, label: "Carbon", color: "#2A2A2A", active: true },
      { y: 110, label: "Resin", color: "#B4722B", active: true },
      { y: 160, label: "KDF-85", color: "#C49A6C", active: false },
      { y: 210, label: "PFAS tank", color: "var(--blue)", active: true },
      { y: 260, label: "RO", color: "#1F4AA0", active: true },
    ].map((b, i) => (
      <g key={i}>
        <rect x="80" y={b.y} width="160" height="36" rx="8"
          fill={b.active ? b.color : "var(--bg)"}
          stroke={b.active ? b.color : "var(--rule)"}
          strokeWidth="1.5"
          strokeDasharray={b.active ? "0" : "4 3"}
          opacity={b.active ? 1 : 0.5} />
        <text x="160" y={b.y + 23} textAnchor="middle"
          fontSize="13" fontFamily="var(--f-display)"
          fill={b.active ? "var(--paper)" : "var(--ink-3)"}>{b.label}</text>
        {b.active && (
          <g>
            <circle cx="260" cy={b.y + 18} r="10" fill="var(--blue-soft)" />
            <path d={`M 256 ${b.y + 18} l 3 3 l 6 -6`}
              stroke="var(--blue)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
        {!b.active && (
          <text x="276" y={b.y + 23} fontSize="11" fill="var(--ink-3)" fontFamily="var(--f-mono)">skip</text>
        )}
      </g>
    ))}
    {/* Selection bracket */}
    <path d="M 50 70 L 40 70 L 40 286 L 50 286"
      stroke="var(--blue)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <text x="25" y="180" fontSize="10" fontFamily="var(--f-mono)" fill="var(--blue)"
      transform="rotate(-90 25 180)" letterSpacing="2">
      YOUR STACK
    </text>
    <text x="200" y="310" textAnchor="middle" fontSize="11" fontFamily="var(--f-mono)" fill="var(--ink-3)" letterSpacing="2">
      SIZED TO YOUR WATER
    </text>
  </svg>
);

const VisualInstall = () => (
  <svg viewBox="0 0 400 320" style={{ width: "100%" }}>
    {/* Wall */}
    <rect x="40" y="40" width="320" height="240" fill="var(--paper)" stroke="var(--rule)" strokeWidth="1" />
    {/* Pipes */}
    <line x1="40" y1="100" x2="140" y2="100" stroke="var(--ink-3)" strokeWidth="10" strokeLinecap="round" />
    <line x1="260" y1="100" x2="360" y2="100" stroke="var(--ink-3)" strokeWidth="10" strokeLinecap="round" />
    <line x1="40" y1="100" x2="140" y2="100" stroke="var(--bg)" strokeWidth="6" strokeLinecap="round" />
    <line x1="260" y1="100" x2="360" y2="100" stroke="var(--bg)" strokeWidth="6" strokeLinecap="round" />
    {/* Tank */}
    <rect x="160" y="60" width="80" height="180" rx="36" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
    <rect x="170" y="55" width="60" height="14" rx="3" fill="var(--ink)" />
    <circle cx="200" cy="160" r="14" fill="var(--blue-soft)" stroke="var(--blue)" strokeWidth="1.5" />
    <path d="M 195 160 l 3 3 l 8 -8" stroke="var(--blue)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* Wrench */}
    <g transform="translate(290 180) rotate(-30)">
      <rect x="0" y="0" width="50" height="8" rx="2" fill="var(--ink-2)" />
      <circle cx="52" cy="4" r="10" fill="none" stroke="var(--ink-2)" strokeWidth="4" />
    </g>
    {/* Status ticks */}
    <g transform="translate(60 220)">
      <text x="0" y="0" fontSize="11" fontFamily="var(--f-mono)" fill="var(--ink-3)">INSTALL</text>
      <circle cx="72" cy="-3" r="4" fill="var(--blue)" />
      <text x="0" y="20" fontSize="11" fontFamily="var(--f-mono)" fill="var(--ink-3)">PRESSURE TEST</text>
      <circle cx="110" cy="17" r="4" fill="var(--blue)" />
      <text x="0" y="40" fontSize="11" fontFamily="var(--f-mono)" fill="var(--ink-3)">WALKTHROUGH</text>
      <circle cx="100" cy="37" r="4" fill="var(--rule)" />
    </g>
    <text x="200" y="305" textAnchor="middle" fontSize="11" fontFamily="var(--f-mono)" fill="var(--ink-3)" letterSpacing="2">
      NC LIC. L34486 · ONE-DAY INSTALL
    </text>
  </svg>
);

const VisualLive = () => (
  <svg viewBox="0 0 400 320" style={{ width: "100%" }}>
    {/* Four little vignettes around a central drop */}
    <circle cx="200" cy="160" r="42" fill="var(--blue-soft)" />
    <path d="M 200 130 Q 220 158 220 175 A 20 20 0 1 1 180 175 Q 180 158 200 130 Z"
      fill="var(--blue)" />
    {/* Rings */}
    <circle cx="200" cy="160" r="70" fill="none" stroke="var(--blue)" strokeWidth="1" opacity=".3" />
    <circle cx="200" cy="160" r="110" fill="none" stroke="var(--blue)" strokeWidth="1" opacity=".15" />

    {/* Shower icon — top left */}
    <g transform="translate(50 40)">
      <path d="M 30 8 L 30 22 M 14 22 L 46 22 M 18 22 L 16 32 M 30 22 L 30 34 M 42 22 L 44 32"
        stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="30" y="58" textAnchor="middle" fontSize="10" fontFamily="var(--f-mono)" fill="var(--ink-3)">SHOWER</text>
    </g>

    {/* Glass icon — top right */}
    <g transform="translate(310 40)">
      <path d="M 20 8 L 40 8 L 36 40 L 24 40 Z"
        fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 24 20 L 36 20" stroke="var(--blue)" strokeWidth="1.5" />
      <text x="30" y="58" textAnchor="middle" fontSize="10" fontFamily="var(--f-mono)" fill="var(--ink-3)">DRINK</text>
    </g>

    {/* Pot icon — bottom left */}
    <g transform="translate(50 240)">
      <path d="M 12 16 L 48 16 L 44 38 L 16 38 Z"
        fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 8 16 L 12 16 M 48 16 L 52 16" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 22 10 Q 25 4 28 10 M 32 10 Q 35 4 38 10" stroke="var(--ink-3)" strokeWidth="1" fill="none" />
      <text x="30" y="58" textAnchor="middle" fontSize="10" fontFamily="var(--f-mono)" fill="var(--ink-3)">COOK</text>
    </g>

    {/* Shirt icon — bottom right */}
    <g transform="translate(310 240)">
      <path d="M 12 12 L 24 8 L 30 14 L 36 8 L 48 12 L 44 22 L 38 20 L 38 44 L 22 44 L 22 20 L 16 22 Z"
        fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <text x="30" y="58" textAnchor="middle" fontSize="10" fontFamily="var(--f-mono)" fill="var(--ink-3)">LAUNDRY</text>
    </g>

    {/* Connecting lines */}
    <line x1="110" y1="80" x2="168" y2="130" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="290" y1="80" x2="232" y2="130" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="110" y1="260" x2="168" y2="190" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="290" y1="260" x2="232" y2="190" stroke="var(--rule)" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

const HowPromise = () => {
  const items = [
    { k: "No pressure", v: "Written quote, review at your pace. Real plumbers, not commissioned sales reps." },
    { k: "Transparent pricing", v: "Every system priced in writing up front. No surprises on installation day." },
    { k: "Ongoing service", v: "We come back for filter swaps, salt, and membrane changes so you never think about it." },
    { k: "Local, licensed", v: "NC licensed plumber L.34486. Insured and bonded. Based in the Cape Fear Region." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 40, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// The Tarheel promise</div>
          <h2 style={{ maxWidth: 720, margin: "0 auto" }}>What you can count on.</h2>
        </div>
        <div style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", overflow: "hidden",
        }}>
          {items.map((it, i) => (
            <div key={it.k} className="cols-1-2" style={{
              padding: "26px 32px", gap: 32, alignItems: "center",
              borderTop: i === 0 ? "none" : "1px solid var(--rule)",
            }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22 }}>{it.k}</div>
              <div style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowCta = () => (
  <section>
    <div className="container-wide">
      <div style={{
        background: "var(--ink)", color: "var(--paper)",
        borderRadius: 28, padding: "56px 56px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(28,155,188,0.22), transparent 60%)",
        }}/>
        <div className="grid-cta">
          <div>
            <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)", marginBottom: 16 }}>// Start with step 1</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 14, maxWidth: 640 }}>
              It all starts with a free water test.
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              45 minutes at your house, a written report in hand, zero obligation. Book any time
              that works — we'll take it from there.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="Book Free Water Test.html" className="btn btn-light" style={{ justifyContent: "center", padding: "16px 24px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
            <a href="tel:+19103806339" style={{
              padding: "16px 24px", borderRadius: 999,
              border: "1px solid rgba(251,248,241,0.25)", color: "var(--paper)",
              fontSize: 14, fontWeight: 500, whiteSpace: "nowrap",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>Call (910) 380-6339 <Icon name="phone" size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { HowHero, HowSteps, HowPromise, HowCta });
