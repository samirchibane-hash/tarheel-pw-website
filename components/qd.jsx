// Quantum Disinfection solutions page
const QDHero = () => (
  <section style={{ paddingTop: 140, paddingBottom: 60, position: "relative", overflow: "hidden" }}>
    {/* Background circuit decoration */}
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .35,
      background: "radial-gradient(ellipse 800px 600px at 80% 20%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{
      display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, alignItems: "center",
      position: "relative",
    }}>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Solutions</a>
          <span style={{ color: "var(--ink-4)" }}>/</span>
          <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Quantum Disinfection</span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge" style={{ background: "var(--blue-soft)", color: "var(--blue)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--blue)" }}></span> Ecological home disinfection
          </span>
          <span className="badge">NSF/ANSI 42 · 61 Certified</span>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          Kill pathogens<br/>
          <span style={{ fontStyle: "italic", color: "var(--blue)" }}>with physics,</span> not chemicals.
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 560, marginBottom: 32, lineHeight: 1.5 }}>
          Quantum Disinfection™ uses an engineered ceramic media that instantly eliminates
          bacteria, viruses, and microorganisms on contact — no UV lamp, no chlorine, no power,
          no waste water. Just clean water, for up to 200,000 gallons.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
          <button className="btn btn-primary">Book free water test <Icon name="arrow" size={14} /></button>
          <button className="btn btn-ghost">Download spec sheet <Icon name="arrow-ne" size={12} /></button>
        </div>

        {/* Key stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
        }}>
          {[
            { n: "Log 6", l: "pathogen reduction" },
            { n: "0", l: "chemicals or power" },
            { n: "12", l: "GPM max flow" },
            { n: "200k", l: "gallons of service" },
          ].map((s, i) => (
            <div key={s.l} style={{
              padding: "20px 16px 20px 0",
              borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              paddingLeft: i > 0 ? 16 : 0,
            }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 30, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <QDDeviceVisual />
    </div>
  </section>
);

const QDDeviceVisual = () => (
  <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 620 }}>
    {/* Decorative rings */}
    <div style={{
      position: "absolute", width: 420, height: 420, borderRadius: "50%",
      border: "1px dashed var(--rule)",
    }}/>
    <div style={{
      position: "absolute", width: 540, height: 540, borderRadius: "50%",
      border: "1px dashed var(--rule)", opacity: .5,
    }}/>
    <div style={{
      position: "absolute", width: 320, height: 320, borderRadius: "50%",
      background: "radial-gradient(circle, var(--blue-soft), transparent 70%)",
      opacity: .6,
    }}/>

    {/* Device */}
    <img src="assets/qd-device.png" alt="Quantum Disinfection device"
      style={{
        height: 600, width: "auto", position: "relative", zIndex: 2,
        filter: "drop-shadow(0 30px 40px rgba(20,22,18,.2))",
      }}/>

    {/* Annotations */}
    <div style={{
      position: "absolute", top: 100, right: 10, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)",
      maxWidth: 180,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>01 · CERAMIC CORE</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>650 g of engineered ceramic media</div>
    </div>

    <div style={{
      position: "absolute", bottom: 120, left: 0, zIndex: 3,
      background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)",
      maxWidth: 180,
    }}>
      <div className="kbd-num" style={{ fontSize: 10 }}>02 · FLOW</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Instant contact kill at up to 12 GPM</div>
    </div>

    <div style={{
      position: "absolute", bottom: 40, right: 20, zIndex: 3,
      background: "var(--ink)", color: "var(--paper)",
      padding: "10px 14px", borderRadius: 12,
      boxShadow: "var(--shadow-md)",
    }}>
      <div className="kbd-num" style={{ fontSize: 10, color: "rgba(251,248,241,0.6)" }}>MODEL</div>
      <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>TH-QD1 · 11 × 3 in</div>
    </div>
  </div>
);

// "How it works" — ceramic technology explainer
const QDHowItWorks = () => {
  const [step, setStep] = React.useState(0);
  const steps = [
    {
      t: "Water enters the chamber",
      d: "Raw water flows through the inlet at any pressure up to 125 psi, reaching the ceramic core at up to 12 gallons per minute.",
    },
    {
      t: "Pathogens contact the ceramic",
      d: "The ceramic surface is engineered with an electron-exchange reactivity. Microorganisms touching the surface are instantly inactivated at the cellular level.",
    },
    {
      t: "Clean water exits",
      d: "Up to Log 6 reduction of E. coli, MS2, and similar pathogens — verified by IAPMO testing. No byproducts, no residuals, no retention.",
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
          <h2 style={{ marginBottom: 16 }}>Physics, not chemistry.</h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 560, margin: "0 auto" }}>
            Unlike UV (which needs power) or chlorine (which adds chemicals), Quantum Disinfection inactivates
            microorganisms through direct contact with a reactive ceramic surface.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          {/* Left: diagram */}
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 40, position: "relative", minHeight: 440,
            display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <QDDiagram step={step} />
          </div>

          {/* Right: steps */}
          <div>
            {steps.map((s, i) => (
              <button key={i} onClick={() => setStep(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "24px 28px", borderRadius: 16, marginBottom: 10,
                  background: step === i ? "var(--paper)" : "transparent",
                  border: `1px solid ${step === i ? "var(--rule)" : "transparent"}`,
                  boxShadow: step === i ? "var(--shadow-sm)" : "none",
                  transition: "all .25s ease",
                  cursor: "pointer",
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

const QDDiagram = ({ step }) => {
  return (
    <svg viewBox="0 0 400 300" style={{ width: "100%", maxHeight: 340 }}>
      {/* Pipe body */}
      <rect x="40" y="120" width="320" height="60" rx="30"
        fill="var(--bg)" stroke="var(--rule)" strokeWidth="1.5" />
      {/* Inlet / outlet labels */}
      <text x="20" y="156" textAnchor="end" fontSize="11" fill="var(--ink-3)" fontFamily="var(--f-mono)">IN</text>
      <text x="380" y="156" textAnchor="start" fontSize="11" fill="var(--ink-3)" fontFamily="var(--f-mono)">OUT</text>

      {/* Ceramic core */}
      <rect x="140" y="130" width="120" height="40" rx="8"
        fill="var(--blue-soft)" stroke="var(--blue)" strokeWidth="1.2"
        opacity={step >= 1 ? 1 : 0.4}
        style={{ transition: "opacity .3s ease" }} />
      <text x="200" y="154" textAnchor="middle" fontSize="11" fontFamily="var(--f-mono)"
        fill="var(--blue)" letterSpacing="1">CERAMIC</text>

      {/* Pathogens / water droplets */}
      {step === 0 && [0, 1, 2, 3].map(i => (
        <circle key={i} cx={50 + i * 20} cy={150} r={4}
          fill="#B84C3F">
          <animate attributeName="cx" from={50 + i * 20} to={140} dur="1.8s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
        </circle>
      ))}
      {step === 1 && [0, 1, 2].map(i => (
        <g key={i}>
          <circle cx={150 + i * 40} cy={150} r={5}
            fill="#B84C3F" opacity={0.8}>
            <animate attributeName="opacity" values="0.8;0.2;0" dur="1.2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
            <animate attributeName="r" values="5;6;2" dur="1.2s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </circle>
        </g>
      ))}
      {step === 2 && [0, 1, 2, 3].map(i => (
        <circle key={i} cx={270 + i * 20} cy={150} r={4}
          fill="var(--sage)">
          <animate attributeName="cx" from={260} to={360} dur="1.5s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
        </circle>
      ))}

      {/* Bottom label */}
      <text x="200" y="260" textAnchor="middle" fontSize="12" fill="var(--ink-2)" fontFamily="var(--f-display)" fontStyle="italic">
        {step === 0 && "Raw water enters"}
        {step === 1 && "Pathogens inactivated on contact"}
        {step === 2 && "Clean water exits — Log 6 reduction"}
      </text>
    </svg>
  );
};

// Benefits comparison
const QDBenefits = () => {
  const features = [
    { f: "Kills bacteria & viruses", qd: "Log 6 (99.9999%)", uv: "Effective", cl: "Effective" },
    { f: "Chemicals added to water", qd: "None", uv: "None", cl: "Chlorine" },
    { f: "Power required", qd: "None", uv: "Plugged in", cl: "None" },
    { f: "Contact time needed", qd: "Instant", uv: "Seconds", cl: "Minutes" },
    { f: "Waste water produced", qd: "None", uv: "None", cl: "None" },
    { f: "Typical lifespan", qd: "200,000 gal", uv: "1 yr (bulb)", cl: "Ongoing dose" },
    { f: "Affected by turbidity", qd: "No", uv: "Yes", cl: "No" },
  ];

  return (
    <section>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 48, flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Compared to</div>
            <h2 style={{ maxWidth: 640 }}>Why homeowners are switching from UV and chlorine.</h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 360 }}>
            A side-by-side of the three most common residential disinfection methods.
          </p>
        </div>

        <div style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", overflow: "hidden",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            padding: "20px 28px",
            background: "var(--bg-2)",
            fontSize: 12, fontFamily: "var(--f-mono)",
            letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)",
          }}>
            <div>Feature</div>
            <div style={{ color: "var(--blue)", fontWeight: 600 }}>Quantum Disinfection</div>
            <div>UV lamp</div>
            <div>Chlorination</div>
          </div>
          {features.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              padding: "18px 28px",
              borderTop: "1px solid var(--rule)",
              fontSize: 14,
              alignItems: "center",
            }}>
              <div style={{ color: "var(--ink-2)" }}>{row.f}</div>
              <div style={{ fontWeight: 500, color: "var(--blue)" }}>{row.qd}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.uv}</div>
              <div style={{ color: "var(--ink-3)" }}>{row.cl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Spec sheet — straight from the PDF
const QDSpecs = () => {
  const groups = [
    {
      title: "Performance",
      items: [
        ["Main use", "Water disinfection"],
        ["Pathogen reduction", "Up to Log 6 (E. coli, MS2, etc.)"],
        ["Maximum flow", "12 GPM · 44 L/min"],
        ["Expected life", "200,000 gal · 740,000 L"],
      ],
    },
    {
      title: "Dimensions & fit",
      items: [
        ["Unit dimensions", "11 × 3 in · 28.0 × 7.6 cm"],
        ["Inlet / outlet", "1 in NPT male (FTG type)*"],
        ["Ceramic quantity", "650 grams"],
        ["Applications", "Point-of-entry or point-of-use"],
      ],
    },
    {
      title: "Operating envelope",
      items: [
        ["Max operating pressure", "125 psi · 8.6 bar"],
        ["Water temperature", "41 – 100 °F · 5 – 38 °C"],
        ["Power requirements", "None"],
        ["Wastewater", "None"],
      ],
    },
    {
      title: "Certifications",
      items: [
        ["NSF/ANSI 42", "Component (material) · #C0292640-01"],
        ["NSF/ANSI 61", "Tested by IAPMO · #23033"],
        ["MOH — China", "Certificate #2015KF2513"],
        ["Best for", "Well, tap, and process water"],
      ],
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Specifications</div>
          <h2>Every number, on the table.</h2>
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
              <dl style={{ margin: 0, display: "grid", gap: 0 }}>
                {g.items.map(([k, v], i) => (
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

        <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 20, fontStyle: "italic" }}>
          * Multiple FTG connection types available — see Owner's Manual for options.
        </p>
      </div>
    </section>
  );
};

// Applications
const QDApplications = () => {
  const apps = [
    { icon: "home", title: "Well water homes", body: "A whole-home point-of-entry solution for any family on well water worried about bacterial contamination." },
    { icon: "drop", title: "Municipal tap water", body: "Added reassurance against boil-water advisories and distribution-line breaks — without adding chlorine taste." },
    { icon: "beaker", title: "Point-of-use taps", body: "Install at a single fixture — kitchen sink, fridge line, or ice machine — for a dedicated clean source." },
    { icon: "leaf", title: "Eco-sensitive homes", body: "Zero chemicals, zero power draw, and zero wastewater. The lowest-impact disinfection method available." },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Where it fits</div>
          <h2 style={{ maxWidth: 720 }}>One device. Many jobs.</h2>
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

// FAQ tailored to QD
const QDFaq = () => {
  const faqs = [
    { q: "How is this different from a UV system?", a: "UV systems require electricity and a functioning bulb, and their effectiveness drops with turbidity (cloudiness). Quantum Disinfection works purely through physical contact with the ceramic surface — no power, no bulb, and it's unaffected by turbidity within the rated operating range." },
    { q: "Does it add anything to my water?", a: "No. Unlike chlorination, Quantum Disinfection introduces no chemicals, no residuals, and no byproducts. The water coming out has the same chemistry as the water going in — minus the microorganisms." },
    { q: "How long does the ceramic media last?", a: "Up to 200,000 gallons — roughly 4 to 8 years for a typical household, depending on use. Your Tarheel tech will right-size the system based on your home's consumption." },
    { q: "Can it remove chemicals or heavy metals?", a: "Quantum Disinfection specifically targets microorganisms. For chemical contaminants like PFAS, chlorine taste, lead, or hardness, we pair it with the appropriate Tarheel filtration stage — it's typically one piece of a whole-home system." },
    { q: "Is it certified?", a: "Yes — it's an NSF Certified Component to NSF/ANSI 42 (material requirements, #C0292640-01), tested by IAPMO to NSF/ANSI 61 (#23033), and certified by MOH China (#2015KF2513)." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Questions</div>
            <h2>QD, explained.</h2>
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
const QDCta = () => (
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
              Not sure if QD is right for your water?
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Book a free lab-grade water test. A certified Tarheel tech will come out, test your water for
              42 contaminants, and tell you honestly whether Quantum Disinfection belongs in your system.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn btn-light" style={{ justifyContent: "center", padding: "16px 24px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </button>
            <button style={{
              padding: "16px 24px", borderRadius: 999,
              border: "1px solid rgba(251,248,241,0.25)", color: "var(--paper)",
              fontSize: 14, fontWeight: 500, whiteSpace: "nowrap",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>Call (910) 380-6339 <Icon name="phone" size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { QDHero, QDHowItWorks, QDBenefits, QDSpecs, QDApplications, QDFaq, QDCta });
