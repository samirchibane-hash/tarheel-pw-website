// Custom Whole Home Refiner page — 4-stage filtration
const RefinerHero = () => (
  <section style={{ paddingTop: 140, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .4,
      background: "radial-gradient(ellipse 900px 600px at 85% 30%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center", position: "relative",
    }}>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Solutions</a>
          <span style={{ color: "var(--ink-4)" }}>/</span>
          <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Custom Whole-Home Refiner</span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge" style={{ background: "var(--blue-soft)", color: "var(--blue)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--blue)" }}></span> Tarheel's flagship system
          </span>
          <span className="badge">4 stages · one tank</span>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          Four layers.<br/>
          <span style={{ fontStyle: "italic", color: "var(--blue)" }}>Every drop, refined.</span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 560, marginBottom: 32, lineHeight: 1.5 }}>
          Our Premium Custom 4-Stage Whole-Home Refiner stacks catalytic carbon, fine-mesh resin,
          KDF-85, and silica gravel into a single efficient tank — filtering, dechlorinating, and
          polishing every gallon that enters your home.
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
            { n: "4", l: "specialized media layers" },
            { n: "1", l: "compact tank footprint" },
            { n: "Metered", l: "valve saves salt + water" },
            { n: "Whole-home", l: "every tap, every fixture" },
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

      <RefinerDeviceVisual />
    </div>
  </section>
);

const RefinerDeviceVisual = () => (
  <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 680 }}>
    <div style={{
      position: "absolute", width: 460, height: 460, borderRadius: "50%",
      border: "1px dashed var(--rule)",
    }}/>
    <div style={{
      position: "absolute", width: 580, height: 580, borderRadius: "50%",
      border: "1px dashed var(--rule)", opacity: .5,
    }}/>
    <div style={{
      position: "absolute", width: 380, height: 380, borderRadius: "50%",
      background: "radial-gradient(circle, var(--blue-soft), transparent 70%)",
      opacity: .7,
    }}/>

    <img src="assets/refiner-system.png" alt="Tarheel whole-home refiner system"
      style={{
        height: 640, width: "auto", position: "relative", zIndex: 2,
        filter: "drop-shadow(0 30px 50px rgba(20,22,18,.2))",
      }}/>

    <div style={{
      position: "absolute", top: 60, right: -10, zIndex: 3,
      background: "var(--ink)", color: "var(--paper)",
      padding: "10px 14px", borderRadius: 12, boxShadow: "var(--shadow-md)",
    }}>
      <div className="kbd-num" style={{ fontSize: 10, color: "rgba(251,248,241,0.6)" }}>METERED VALVE</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Regenerates on usage, not timer</div>
    </div>

    <div style={{
      position: "absolute", top: 200, left: -10, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 190,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>BRINE TANK</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Low-salt, low-waste design</div>
    </div>

    <div style={{
      position: "absolute", bottom: 120, right: -10, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 200,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>4 MEDIA STACKED</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Carbon · Resin · KDF-85 · Silica</div>
    </div>
  </div>
);

// Benefits — the life upgrade
const RefinerBenefits = () => {
  const items = [
    { icon: "drop", t: "Soft, silky skin & hair", d: "No more chlorine dryness. Notice the difference in your first shower." },
    { icon: "shield", t: "Appliances last longer", d: "Dishwashers, washing machines, water heaters — all protected from scale and corrosion." },
    { icon: "sparkle", t: "Spotless dishes & glassware", d: "No more cloudy spots. Soft water rinses cleaner with less detergent." },
    { icon: "beaker", t: "Brighter, softer laundry", d: "Fabrics stay vibrant longer. Whites stay white. Towels stay fluffy." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// What changes on day one</div>
          <h2 style={{ maxWidth: 760, margin: "0 auto" }}>The water you've been living with,<br/><span style={{ fontStyle: "italic" }}>quietly upgraded.</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {items.map(b => (
            <div key={b.t} style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 20, padding: 32, minHeight: 240,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon name={b.icon} size={20} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>{b.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// The 4 stages — the heart of this page
const RefinerStages = () => {
  const [active, setActive] = React.useState(0);
  const stages = [
    {
      n: "01",
      name: "Activated Carbon",
      sub: "Catalytic grade",
      color: "#2A2A2A",
      removes: ["Chlorine", "Chloramine", "Hydrogen sulfide", "Odors"],
      d: "Supreme-grade catalytic carbon strips the chlorine and chloramine added by municipal treatment — the harshness you feel in your skin and hair, gone. Also eliminates rotten-egg sulfur odors common on well water.",
    },
    {
      n: "02",
      name: "Fine Mesh Resin",
      sub: "High-capacity ion exchange",
      color: "#B4722B",
      removes: ["Hardness (Ca/Mg)", "Iron", "Turbidity", "Radium / chromium-6", "Uranium · vanadium"],
      d: "The filtration layer. High-capacity fine-mesh resin reduces hardness ions, protecting plumbing and appliances. Our resin also reduces heavy radionuclides — radium, hexavalent chromium, uranium, and vanadium — that standard softeners miss.",
    },
    {
      n: "03",
      name: "KDF-85",
      sub: "Bi-metal redox media",
      color: "#C49A6C",
      removes: ["Heavy metals", "Bacteria", "Algae", "Fungi"],
      d: "A bi-metal copper-zinc media that uses redox chemistry to reduce heavy metals and knock out bacteria, algae, and fungi. KDF-85 also extends the life of the carbon and resin above it by keeping microbial growth at bay.",
    },
    {
      n: "04",
      name: "Silica Gravel",
      sub: "Polishing bed",
      color: "#D8D1BE",
      removes: ["Fine sediment", "Impurities", "Flow distribution"],
      d: "The polishing layer. Silica gravel gives water that sparkling, bubble-rich clarity you notice in stemware. It also captures residual sediment and distributes flow evenly through the bed above — which keeps the system from ever clogging.",
    },
  ];

  return (
    <section>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Inside the tank</div>
          <h2 style={{ marginBottom: 16 }}>Four media.<br/><span style={{ fontStyle: "italic" }}>One compact tank.</span></h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 580, margin: "0 auto" }}>
            Most systems do one job. Ours stacks four specialized layers so water passes through
            every kind of treatment on its way to your tap.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "420px 1fr", gap: 60, alignItems: "start" }}>
          {/* Stack visual */}
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 32, position: "sticky", top: 100,
          }}>
            <StageStack active={active} setActive={setActive} stages={stages} />
          </div>

          {/* Detail panel */}
          <div>
            {stages.map((s, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "28px 32px", borderRadius: 18, marginBottom: 12,
                  background: active === i ? "var(--bg-2)" : "transparent",
                  border: `1px solid ${active === i ? "var(--rule)" : "transparent"}`,
                  transition: "all .25s ease", cursor: "pointer",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
                  <span style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: s.color,
                    color: "var(--paper)",
                    fontSize: 12, fontFamily: "var(--f-mono)", fontWeight: 500,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, margin: 0 }}>{s.name}</h3>
                    <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)", marginTop: 2 }}>{s.sub}</div>
                  </div>
                </div>
                {active === i && (
                  <div style={{ marginLeft: 54 }}>
                    <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.55, marginBottom: 14 }}>{s.d}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.removes.map(r => (
                        <span key={r} style={{
                          padding: "5px 10px", borderRadius: 999, fontSize: 12,
                          background: "var(--paper)", border: "1px solid var(--rule)",
                          color: "var(--ink-2)", fontFamily: "var(--f-mono)",
                        }}>{r}</span>
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StageStack = ({ active, setActive, stages }) => (
  <svg viewBox="0 0 340 460" style={{ width: "100%", height: "auto" }}>
    {/* Tank shell */}
    <rect x="80" y="30" width="180" height="400" rx="90"
      fill="var(--bg)" stroke="var(--rule)" strokeWidth="1.5" />
    {/* Top cap */}
    <rect x="100" y="14" width="140" height="24" rx="6"
      fill="var(--ink)" />
    <rect x="130" y="2" width="80" height="18" rx="4" fill="var(--ink-2)" />
    <circle cx="170" cy="11" r="3" fill="var(--blue)" />

    {/* Layers top → bottom: carbon (dark), resin (amber), kdf (bronze), silica (pale) */}
    {stages.map((s, i) => {
      const y = 40 + i * 92;
      const h = 92;
      const isActive = active === i;
      return (
        <g key={i} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
          <rect x="82" y={y} width="176" height={h}
            fill={s.color}
            opacity={isActive ? 1 : 0.7}
            style={{ transition: "opacity .3s ease" }} />
          {/* Dot pattern suggesting granular media */}
          {[...Array(18)].map((_, j) => (
            <circle key={j}
              cx={95 + (j % 6) * 26 + (Math.floor(j / 6) % 2) * 13}
              cy={y + 20 + Math.floor(j / 6) * 26}
              r="2"
              fill="rgba(255,255,255,0.3)" />
          ))}
          {/* Label bracket */}
          <line x1="258" y1={y + h / 2} x2="290" y2={y + h / 2}
            stroke={isActive ? "var(--ink)" : "var(--rule)"} strokeWidth="1" />
          <circle cx="290" cy={y + h / 2} r="12"
            fill={isActive ? "var(--ink)" : "var(--paper)"}
            stroke={isActive ? "var(--ink)" : "var(--rule)"} strokeWidth="1" />
          <text x="290" y={y + h / 2 + 4} textAnchor="middle" fontSize="10"
            fill={isActive ? "var(--paper)" : "var(--ink-3)"}
            fontFamily="var(--f-mono)">{s.n}</text>
        </g>
      );
    })}

    {/* Flow arrow — water path */}
    <g opacity=".5">
      <path d="M 50 60 L 50 400" stroke="var(--blue)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="40" y="55" fontSize="9" fill="var(--ink-3)" fontFamily="var(--f-mono)">IN</text>
      <text x="40" y="415" fontSize="9" fill="var(--ink-3)" fontFamily="var(--f-mono)">OUT</text>
      <polygon points="47,400 53,400 50,406" fill="var(--blue)" />
    </g>
  </svg>
);

// Comparison
const RefinerCompare = () => {
  const rows = [
    { f: "Primary job",        us: "Filter + condition + polish", soft: "Hardness only", carbon: "Filter only", none: "Untreated" },
    { f: "Chlorine / chloramine", us: "Removed (catalytic carbon)", soft: "Not removed", carbon: "Removed", none: "Not removed" },
    { f: "Hardness / scale",   us: "Removed (fine-mesh resin)", soft: "Removed", carbon: "Not removed", none: "Not removed" },
    { f: "Heavy metals",       us: "Reduced (KDF-85)", soft: "Minimal", carbon: "Minimal", none: "—" },
    { f: "Bacteria / algae",   us: "Reduced (KDF-85)", soft: "No", carbon: "No", none: "—" },
    { f: "Sediment polishing", us: "Silica gravel layer", soft: "No", carbon: "Partial", none: "—" },
    { f: "Footprint",          us: "One tank + brine", soft: "Two tanks", carbon: "One tank", none: "—" },
    { f: "Regeneration",       us: "Metered (usage-based)", soft: "Timer or metered", carbon: "None", none: "—" },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 48, flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Why not just a basic filter?</div>
            <h2 style={{ maxWidth: 680 }}>One system for the whole job.</h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 360 }}>
            Most homes stack a hardness filter and a separate carbon filter. Ours does both in one tank
            — smaller footprint, lower cost, fewer service calls.
          </p>
        </div>

        <div style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", overflow: "hidden",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
            padding: "20px 28px", background: "var(--bg-2)",
            fontSize: 12, fontFamily: "var(--f-mono)",
            letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)",
          }}>
            <div>Feature</div>
            <div style={{ color: "var(--blue)", fontWeight: 600 }}>Tarheel Refiner</div>
            <div>Hardness filter</div>
            <div>Carbon only</div>
            <div>No system</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
              padding: "16px 28px", borderTop: "1px solid var(--rule)",
              fontSize: 14, alignItems: "center",
            }}>
              <div style={{ color: "var(--ink-2)" }}>{row.f}</div>
              <div style={{ fontWeight: 500, color: "var(--blue)" }}>{row.us}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.soft}</div>
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
const RefinerSpecs = () => {
  const groups = [
    {
      title: "System design",
      items: [
        ["Configuration", "4-stage stacked media"],
        ["Form factor", "Single tank + brine tank"],
        ["Valve", "Metered (usage-based regen)"],
        ["Installation", "Point-of-entry (whole home)"],
      ],
    },
    {
      title: "Media stack",
      items: [
        ["Stage 1", "Catalytic activated carbon"],
        ["Stage 2", "Fine-mesh ion-exchange resin"],
        ["Stage 3", "KDF-85 bi-metal redox media"],
        ["Stage 4", "Silica gravel polisher"],
      ],
    },
    {
      title: "Contaminants addressed",
      items: [
        ["Chlorine / chloramines", "Removed"],
        ["Hardness / iron / turbidity", "Removed"],
        ["Heavy metals, bacteria", "Reduced via KDF-85"],
        ["Radium · chromium-6 · uranium", "Reduced"],
      ],
    },
    {
      title: "Efficiency & care",
      items: [
        ["Salt usage", "Low — metered regeneration"],
        ["Water usage", "Low — regenerates on demand"],
        ["Footprint", "Compact — one tank"],
        ["Availability", "Custom sized to your home"],
      ],
    },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Specifications</div>
          <h2>System at a glance.</h2>
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

// FAQ
const RefinerFaq = () => {
  const faqs = [
    { q: "How is this different from a basic hardness filter?", a: "A traditional hardness filter only removes hardness. Our refiner combines hardness reduction with catalytic carbon (for chlorine and chloramines), KDF-85 (for heavy metals and bacteria), and a silica polishing bed — all in one tank. It's a hardness filter and a whole-home filter in one footprint." },
    { q: "Will I taste or feel a difference?", a: "Yes — within the first shower. Skin and hair feel better without chlorine stripping them. Dishes dry spot-free. Soap and shampoo lather with far less product. Laundry comes out brighter and towels fluffier." },
    { q: "What's the 'metered valve' and why does it matter?", a: "The system regenerates based on actual water usage — not a fixed timer. That means it doesn't waste salt or water when you're on vacation, and it regenerates more often when you have guests. It pays for itself over time compared to timer-based systems." },
    { q: "How much maintenance does it need?", a: "You add salt to the brine tank every few weeks (amount depends on household size and water hardness). That's it. Media lifespan is typically 8–12 years. Your Tarheel tech will confirm a schedule after your water test." },
    { q: "Does it remove PFAS?", a: "The carbon stage will capture some PFAS, but for guaranteed non-detect levels we pair this system with the NWS-PFAS-8 dedicated PFAS tank. Your water test determines whether you need one or both." },
    { q: "Will it work with my plumbing?", a: "In almost every case, yes. The system is custom-sized to your flow rate and household usage — we confirm fit during the on-site water test and walk you through installation requirements before you commit." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Common questions</div>
            <h2>Questions we hear often.</h2>
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

// CTA
const RefinerCta = () => (
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
              Your refiner, sized to your water.
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Every home's water is different. Book a free on-site test — we'll measure your
              hardness, chlorine, iron, and everything else, then spec a system exactly for your house.
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

Object.assign(window, { RefinerHero, RefinerBenefits, RefinerStages, RefinerCompare, RefinerSpecs, RefinerFaq, RefinerCta });
