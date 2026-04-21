// Whole Home PFAS/PFOA page
const PFASHero = () => (
  <section style={{ paddingTop: 140, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .35,
      background: "radial-gradient(ellipse 800px 600px at 80% 20%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center", position: "relative",
    }}>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Solutions</a>
          <span style={{ color: "var(--ink-4)" }}>/</span>
          <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Whole Home PFAS/PFOA</span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge" style={{ background: "var(--blue-soft)", color: "var(--blue)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--blue)" }}></span> Offered exclusively by Tarheel
          </span>
          <span className="badge">WQA Gold Seal</span>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          Forever chemicals,<br/>
          <span style={{ fontStyle: "italic", color: "var(--blue)" }}>finally filtered.</span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 560, marginBottom: 32, lineHeight: 1.5 }}>
          Our NWS-PFAS-8 whole-home system uses ResinTech's SIR-110-HP selective ion-exchange resin
          to pull PFAS and PFOA — "forever chemicals" — from every tap in your home, down to
          non-detect levels.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
          <a href="Book Free Water Test.html" className="btn btn-primary">Book free water test <Icon name="arrow" size={14} /></a>
          <button className="btn btn-ghost">Download spec sheet <Icon name="arrow-ne" size={12} /></button>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        }}>
          {[
            { n: "ND", l: "non-detect PFAS levels" },
            { n: "8 GPM", l: "flow capacity" },
            { n: "Whole-home", l: "point-of-entry" },
            { n: "Lifetime", l: "limited warranty" },
          ].map((s, i) => (
            <div key={s.l} style={{
              padding: "20px 16px 20px 0",
              borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              paddingLeft: i > 0 ? 16 : 0,
            }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 26, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <PFASDeviceVisual />
    </div>
  </section>
);

const PFASDeviceVisual = () => (
  <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 620 }}>
    <div style={{
      position: "absolute", width: 420, height: 420, borderRadius: "50%",
      border: "1px dashed var(--rule)",
    }}/>
    <div style={{
      position: "absolute", width: 540, height: 540, borderRadius: "50%",
      border: "1px dashed var(--rule)", opacity: .5,
    }}/>
    <div style={{
      position: "absolute", width: 340, height: 340, borderRadius: "50%",
      background: "radial-gradient(circle, var(--blue-soft), transparent 70%)",
      opacity: .6,
    }}/>

    <img src="assets/pfas-tank.png" alt="NWS-PFAS-8 whole-home system"
      style={{
        height: 600, width: "auto", position: "relative", zIndex: 2,
        filter: "drop-shadow(0 30px 40px rgba(20,22,18,.25))",
      }}/>

    <div style={{
      position: "absolute", top: 80, right: 0, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 190,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>01 · SELECTIVE RESIN</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>ResinTech SIR-110-HP ion exchange</div>
    </div>

    <div style={{
      position: "absolute", bottom: 180, left: 0, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 190,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>02 · FOOTPRINT</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>13" × 17" · fits most utility rooms</div>
    </div>

    <div style={{
      position: "absolute", bottom: 60, right: 10, zIndex: 3,
      background: "var(--ink)", color: "var(--paper)",
      padding: "10px 14px", borderRadius: 12, boxShadow: "var(--shadow-md)",
    }}>
      <div className="kbd-num" style={{ fontSize: 10, color: "rgba(251,248,241,0.6)" }}>MODEL</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>NWS-PFAS-8 · 12 × 48 in</div>
    </div>
  </div>
);

// What are PFAS — education section
const PFASExplainer = () => {
  const [step, setStep] = React.useState(0);
  const steps = [
    {
      t: "PFAS are in everyday products",
      d: "Short for per- and polyfluoroalkyl substances, PFAS are man-made chemicals that make consumer goods water-, stain-, and grease-resistant — from cookware to carpeting to fast-food wrappers.",
    },
    {
      t: "They're called 'forever chemicals'",
      d: "The carbon-fluorine bond that makes PFAS useful also makes them nearly indestructible. They don't break down in the environment — or in your body — which is why they accumulate in drinking water.",
    },
    {
      t: "They're toxic at minuscule levels",
      d: "PFAS pose significant health risks at concentrations measured in parts per quadrillion. The EPA has set enforceable maximum contaminant levels and continues to tighten them.",
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// What's the problem</div>
          <h2 style={{ marginBottom: 16 }}>What exactly are<br/><span style={{ fontStyle: "italic" }}>forever chemicals?</span></h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 580, margin: "0 auto" }}>
            PFAS and PFOA are a class of man-made chemicals that have quietly ended up in most
            municipal water supplies. Here's what you should know.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 40, minHeight: 420,
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
          }}>
            <PFASDiagram step={step} />
          </div>

          <div>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setStep(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "24px 28px", borderRadius: 16, marginBottom: 10,
                  background: step === i ? "var(--paper)" : "transparent",
                  border: `1px solid ${step === i ? "var(--rule)" : "transparent"}`,
                  boxShadow: step === i ? "var(--shadow-sm)" : "none",
                  transition: "all .25s ease", cursor: "pointer",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 999,
                    background: step === i ? "var(--blue)" : "var(--bg-3)",
                    color: step === i ? "var(--paper)" : "var(--ink-3)",
                    fontSize: 12, fontFamily: "var(--f-mono)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: 0 }}>{s.t}</h3>
                </div>
                {step === i && (
                  <p style={{ color: "var(--ink-2)", marginLeft: 40, fontSize: 15, lineHeight: 1.55 }}>{s.d}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PFASDiagram = ({ step }) => (
  <svg viewBox="0 0 400 300" style={{ width: "100%", maxHeight: 320 }}>
    {step === 0 && (
      <g>
        {/* Consumer products grid */}
        {[
          { x: 80, y: 80, l: "pan" },
          { x: 160, y: 80, l: "wrapper" },
          { x: 240, y: 80, l: "carpet" },
          { x: 320, y: 80, l: "jacket" },
          { x: 120, y: 170, l: "foam" },
          { x: 200, y: 170, l: "polish" },
          { x: 280, y: 170, l: "stain-guard" },
        ].map((p, i) => (
          <g key={i}>
            <rect x={p.x - 24} y={p.y - 24} width="48" height="48" rx="10"
              fill="var(--paper)" stroke="var(--rule)" strokeWidth="1" />
            <circle cx={p.x} cy={p.y} r={3} fill="var(--blue)" />
            <text x={p.x} y={p.y + 38} textAnchor="middle" fontSize="9" fill="var(--ink-3)" fontFamily="var(--f-mono)">{p.l}</text>
          </g>
        ))}
        <text x="200" y="260" textAnchor="middle" fontSize="13" fill="var(--ink-2)" fontFamily="var(--f-display)" fontStyle="italic">
          Engineered into thousands of everyday products
        </text>
      </g>
    )}
    {step === 1 && (
      <g>
        {/* C-F bond */}
        <circle cx="160" cy="140" r="40" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.5" />
        <text x="160" y="147" textAnchor="middle" fontSize="22" fontFamily="var(--f-display)" fill="var(--ink)">C</text>
        <line x1="200" y1="140" x2="240" y2="140" stroke="var(--blue)" strokeWidth="3" />
        <line x1="200" y1="135" x2="240" y2="135" stroke="var(--blue)" strokeWidth="3" />
        <line x1="200" y1="145" x2="240" y2="145" stroke="var(--blue)" strokeWidth="3" />
        <circle cx="280" cy="140" r="40" fill="var(--blue-soft)" stroke="var(--blue)" strokeWidth="1.5" />
        <text x="280" y="147" textAnchor="middle" fontSize="22" fontFamily="var(--f-display)" fill="var(--blue)">F</text>
        <text x="220" y="115" textAnchor="middle" fontSize="10" fill="var(--ink-3)" fontFamily="var(--f-mono)">strongest bond in organic chemistry</text>
        <text x="200" y="230" textAnchor="middle" fontSize="13" fill="var(--ink-2)" fontFamily="var(--f-display)" fontStyle="italic">
          Nearly indestructible — accumulates forever
        </text>
      </g>
    )}
    {step === 2 && (
      <g>
        {/* Scale bar */}
        <text x="200" y="60" textAnchor="middle" fontSize="12" fill="var(--ink-3)" fontFamily="var(--f-mono)" letterSpacing="1">PARTS PER QUADRILLION</text>
        <rect x="50" y="100" width="300" height="40" rx="8"
          fill="var(--bg)" stroke="var(--rule)" strokeWidth="1" />
        <rect x="50" y="100" width="12" height="40" rx="8"
          fill="#B84C3F" />
        <text x="68" y="95" fontSize="10" fill="#B84C3F" fontFamily="var(--f-mono)">HARMFUL</text>
        <text x="50" y="165" fontSize="10" fill="var(--ink-3)" fontFamily="var(--f-mono)">1 ppq</text>
        <text x="350" y="165" textAnchor="end" fontSize="10" fill="var(--ink-3)" fontFamily="var(--f-mono)">1000 ppq</text>
        <text x="200" y="215" textAnchor="middle" fontSize="12" fill="var(--ink-3)" fontFamily="var(--f-mono)">
          1 ppq = 1 grain of sugar in an Olympic pool
        </text>
        <text x="200" y="260" textAnchor="middle" fontSize="13" fill="var(--ink-2)" fontFamily="var(--f-display)" fontStyle="italic">
          Harmful even at extreme dilution
        </text>
      </g>
    )}
  </svg>
);

// How it works — the system
const PFASHowItWorks = () => {
  const [step, setStep] = React.useState(0);
  const steps = [
    {
      t: "Water enters the tank",
      d: "Your incoming main water line feeds directly into the 12 × 48 inch tank at up to 8 GPM — enough to supply every fixture in a typical home.",
    },
    {
      t: "SIR-110-HP resin grabs PFAS",
      d: "The ResinTech SIR-110-HP ion exchange media is engineered specifically to capture a wide spectrum of PFAS compounds. Fast kinetics mean contaminants are locked in on contact.",
    },
    {
      t: "Clean water to every tap",
      d: "PFAS concentrations drop below EPA criteria — often to non-detect. No additional stages, no chemicals, no wastewater stream.",
    },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
          <h2 style={{ marginBottom: 16 }}>Selective resin,<br/>not a catch-all filter.</h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 580, margin: "0 auto" }}>
            General carbon filters capture PFAS inconsistently and saturate fast. SIR-110-HP was
            designed specifically to target PFAS/PFOA molecules with fast kinetics and high capacity.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 40, minHeight: 440,
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <PFASFlowDiagram step={step} />
          </div>

          <div>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setStep(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "24px 28px", borderRadius: 16, marginBottom: 10,
                  background: step === i ? "var(--bg-2)" : "transparent",
                  border: `1px solid ${step === i ? "var(--rule)" : "transparent"}`,
                  transition: "all .25s ease", cursor: "pointer",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 999,
                    background: step === i ? "var(--blue)" : "var(--bg-3)",
                    color: step === i ? "var(--paper)" : "var(--ink-3)",
                    fontSize: 12, fontFamily: "var(--f-mono)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: 0 }}>{s.t}</h3>
                </div>
                {step === i && (
                  <p style={{ color: "var(--ink-2)", marginLeft: 40, fontSize: 15, lineHeight: 1.55 }}>{s.d}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PFASFlowDiagram = ({ step }) => (
  <svg viewBox="0 0 400 320" style={{ width: "100%", maxHeight: 340 }}>
    {/* Tank body */}
    <rect x="160" y="60" width="80" height="200" rx="40"
      fill="var(--bg)" stroke="var(--rule)" strokeWidth="1.5" />
    {/* Tank top cap */}
    <rect x="170" y="50" width="60" height="20" rx="4"
      fill="var(--ink)" />
    <rect x="155" y="45" width="30" height="12" rx="3" fill="#B84C3F" opacity=".8" />
    {/* Resin fill */}
    <rect x="162" y="80" width="76" height="170"
      fill={step >= 1 ? "var(--blue-soft)" : "var(--bg-2)"}
      opacity={step >= 1 ? 0.8 : 0.5}
      style={{ transition: "all .3s ease" }} />
    {step >= 1 && (
      <g>
        {[...Array(14)].map((_, i) => (
          <circle key={i}
            cx={172 + (i % 3) * 28}
            cy={100 + Math.floor(i / 3) * 30}
            r="3" fill="var(--blue)" opacity=".7" />
        ))}
      </g>
    )}

    {/* In pipe */}
    <line x1="40" y1="100" x2="160" y2="100"
      stroke="var(--rule)" strokeWidth="14" strokeLinecap="round" />
    <line x1="40" y1="100" x2="160" y2="100"
      stroke="var(--bg)" strokeWidth="10" strokeLinecap="round" />
    <text x="40" y="88" fontSize="10" fill="var(--ink-3)" fontFamily="var(--f-mono)">IN</text>

    {/* Out pipe */}
    <line x1="240" y1="100" x2="360" y2="100"
      stroke="var(--rule)" strokeWidth="14" strokeLinecap="round" />
    <line x1="240" y1="100" x2="360" y2="100"
      stroke="var(--bg)" strokeWidth="10" strokeLinecap="round" />
    <text x="360" y="88" textAnchor="end" fontSize="10" fill="var(--ink-3)" fontFamily="var(--f-mono)">OUT</text>

    {/* PFAS molecules entering */}
    {step === 0 && [0, 1, 2].map(i => (
      <circle key={i} cx={50 + i * 30} cy={100} r={4} fill="#B84C3F">
        <animate attributeName="cx" from={50 + i * 30} to={155} dur="1.8s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
      </circle>
    ))}
    {/* PFAS getting trapped in resin */}
    {step === 1 && [0, 1, 2].map(i => (
      <circle key={i} cx={180 + i * 20} cy={150} r={4} fill="#B84C3F" opacity=".8">
        <animate attributeName="opacity" values="0.8;0.3;0.1" dur="1.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
        <animate attributeName="r" values="4;5;2" dur="1.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
      </circle>
    ))}
    {/* Clean water out */}
    {step === 2 && [0, 1, 2, 3].map(i => (
      <circle key={i} cx={250 + i * 25} cy={100} r={4} fill="var(--sage)">
        <animate attributeName="cx" from={245} to={360} dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
      </circle>
    ))}

    <text x="200" y="295" textAnchor="middle" fontSize="12" fill="var(--ink-2)" fontFamily="var(--f-display)" fontStyle="italic">
      {step === 0 && "PFAS-laden water enters the tank"}
      {step === 1 && "SIR-110-HP resin captures PFAS molecules"}
      {step === 2 && "Clean water flows to every fixture"}
    </text>
  </svg>
);

// Comparison table
const PFASBenefits = () => {
  const features = [
    { f: "PFAS/PFOA reduction",      us: "Below EPA criteria (non-detect)", carbon: "Inconsistent, varies by brand", none: "None" },
    { f: "Media type",               us: "SIR-110-HP selective resin", carbon: "Generic activated carbon", none: "—" },
    { f: "Coverage",                 us: "Whole home (every tap)", carbon: "Usually point-of-use only", none: "—" },
    { f: "Flow rate",                us: "8 GPM (expandable in parallel)", carbon: "Typically 1–2 GPM", none: "—" },
    { f: "Certification",            us: "WQA Gold Seal", carbon: "Varies", none: "—" },
    { f: "Footprint",                us: "13\" × 17\" · 54\" tall", carbon: "Small", none: "—" },
    { f: "Warranty",                 us: "Limited lifetime (excl. media)", carbon: "Typically 1 year", none: "—" },
  ];

  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 48, flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Compared to</div>
            <h2 style={{ maxWidth: 640 }}>Built for PFAS. Nothing else comes close.</h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 360 }}>
            A side-by-side of the three common approaches to PFAS in residential water.
          </p>
        </div>

        <div style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", overflow: "hidden",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            padding: "20px 28px", background: "var(--bg-2)",
            fontSize: 12, fontFamily: "var(--f-mono)",
            letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)",
          }}>
            <div>Feature</div>
            <div style={{ color: "var(--blue)", fontWeight: 600 }}>NWS-PFAS-8</div>
            <div>Generic carbon</div>
            <div>No system</div>
          </div>
          {features.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              padding: "18px 28px", borderTop: "1px solid var(--rule)",
              fontSize: 14, alignItems: "center",
            }}>
              <div style={{ color: "var(--ink-2)" }}>{row.f}</div>
              <div style={{ fontWeight: 500, color: "var(--blue)" }}>{row.us}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.carbon}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.none}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Specs
const PFASSpecs = () => {
  const groups = [
    {
      title: "Performance",
      items: [
        ["Main use", "PFAS/PFOA removal"],
        ["Reduction level", "Below EPA criteria (often non-detect)"],
        ["Max flow rate", "8 GPM · expandable in parallel"],
        ["Contaminants targeted", "Wide spectrum of PFAS chemicals"],
      ],
    },
    {
      title: "Dimensions & fit",
      items: [
        ["Tank size", "12 × 48 in"],
        ["Compact footprint", "13 in W × 17 in D"],
        ["Overall height", "54 in"],
        ["Installation", "Point-of-entry (whole home)"],
      ],
    },
    {
      title: "Media",
      items: [
        ["Ion-exchange resin", "ResinTech SIR-110-HP"],
        ["Design", "Selective for PFAS/PFOA"],
        ["Kinetics", "Fast — immediate capture"],
        ["Certification", "WQA Gold Seal"],
      ],
    },
    {
      title: "Warranty & care",
      items: [
        ["Warranty", "Limited lifetime"],
        ["Excludes", "Media, acts of nature, neglect"],
        ["Regulatory fit", "Reduces PFAS below U.S. EPA criteria"],
        ["Availability", "Offered exclusively by Tarheel Pure Water"],
      ],
    },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Specifications</div>
          <h2>The full spec sheet.</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {groups.map(g => (
            <div key={g.title} style={{
              background: "var(--paper)", borderRadius: 18,
              border: "1px solid var(--rule)", padding: 28,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20 }}>{g.title}</h3>
                <span className="kbd-num">{g.items.length} items</span>
              </div>
              <dl style={{ margin: 0 }}>
                {g.items.map(([k, v]) => (
                  <div key={k} style={{
                    display: "grid", gridTemplateColumns: "1fr 1.2fr",
                    gap: 16, padding: "12px 0",
                    borderTop: "1px solid var(--rule)",
                  }}>
                    <dt style={{ fontSize: 13, color: "var(--ink-3)" }}>{k}</dt>
                    <dd style={{ margin: 0, fontSize: 14, color: "var(--ink)", fontWeight: 500 }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Applications
const PFASApplications = () => {
  const apps = [
    { icon: "home", title: "Homes on municipal water", body: "Most NC utilities have detectable PFAS. A whole-home system protects every tap — not just the kitchen." },
    { icon: "drop", title: "Well water homes near industrial sites", body: "Private wells downstream of manufacturing, military, or firefighting training sites are at elevated risk." },
    { icon: "shield", title: "Families with health concerns", body: "Pregnant mothers, young children, and anyone with immune or thyroid concerns benefit most from removing PFAS exposure." },
    { icon: "beaker", title: "Homes with high usage", body: "Run multiple NWS-PFAS-8 systems in parallel for flow rates above 8 GPM — large homes, multi-family, or light commercial." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Where it fits</div>
          <h2 style={{ maxWidth: 720 }}>Who needs PFAS filtration?</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {apps.map(a => (
            <div key={a.title} style={{
              padding: 28, background: "var(--paper)",
              border: "1px solid var(--rule)", borderRadius: 18,
              minHeight: 240,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon name={a.icon} size={20} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ
const PFASFaq = () => {
  const faqs = [
    { q: "Is PFAS in my water?", a: "Almost certainly at some concentration. PFAS have been detected in the majority of North Carolina public water utilities and in many private wells, particularly in the Cape Fear basin and near any industrial or military site. Your free water test will include PFAS screening." },
    { q: "What's special about SIR-110-HP resin?", a: "SIR-110-HP is a selective ion-exchange resin engineered specifically for PFAS and PFOA. Unlike generic carbon filters that capture PFAS inconsistently, SIR-110-HP has fast kinetics, high capacity, and holds its WQA Gold Seal certification." },
    { q: "How does this compare to a whole-home carbon filter?", a: "Carbon can remove some PFAS, but performance varies wildly by brand and saturates quickly. SIR-110-HP is designed for PFAS from the start, stays effective longer, and brings concentrations to non-detect levels — something most carbon systems cannot guarantee." },
    { q: "How often does the media need to be replaced?", a: "Media life depends on your PFAS load and water usage. Your Tarheel tech will estimate replacement cadence based on your water test results — typically multi-year cycles for most households." },
    { q: "Does it remove anything besides PFAS?", a: "The NWS-PFAS-8 is specialized for PFAS. For chlorine, hardness, iron, or bacteria, we pair it with the appropriate Tarheel stage — PFAS removal is usually one layer in a broader whole-home system." },
    { q: "What size home does it fit?", a: "The 8 GPM flow handles most typical households. For larger homes or higher peak demand, we add additional NWS-PFAS-8 units in parallel — the system scales cleanly." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Questions</div>
            <h2>PFAS, explained.</h2>
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

// Final CTA
const PFASCta = () => (
  <section>
    <div className="container-wide">
      <div style={{
        background: "var(--ink)", color: "var(--paper)",
        borderRadius: 28, padding: "64px 64px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -100, right: -100, width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(28,155,188,0.25), transparent 60%)",
        }}/>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)", marginBottom: 16 }}>// Next step</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 14, maxWidth: 640 }}>
              Find out if PFAS is in your water.
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Book a free lab-grade water test. We'll test for PFAS/PFOA and 40 other parameters,
              then tell you honestly whether the NWS-PFAS-8 belongs on your main line.
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

Object.assign(window, { PFASHero, PFASExplainer, PFASHowItWorks, PFASBenefits, PFASSpecs, PFASApplications, PFASFaq, PFASCta });
