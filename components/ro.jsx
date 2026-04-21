// Reverse Osmosis Drinking Water page
const ROHero = () => (
  <section className="hero-section" style={{ paddingBottom: 60 }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .4,
      background: "radial-gradient(ellipse 900px 600px at 85% 30%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide grid-hero" style={{ position: "relative" }}>
      <div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 24 }}>
          <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Solutions</a>
          <span style={{ color: "var(--ink-4)" }}>/</span>
          <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Reverse Osmosis</span>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28, flexWrap: "wrap" }}>
          <span className="badge" style={{ background: "var(--blue-soft)", color: "var(--blue)", borderColor: "transparent" }}>
            <span className="dot" style={{ background: "var(--blue)" }}></span> Under-sink drinking system
          </span>
          <span className="badge">5-stage purification</span>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          Bottled-water purity,<br/>
          <span style={{ fontStyle: "italic", color: "var(--blue)" }}>from your kitchen tap.</span>
        </h1>
        <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 560, marginBottom: 32, lineHeight: 1.5 }}>
          A compact 5-stage reverse osmosis system sits under your sink and delivers
          near-laboratory-grade drinking water on demand — removing 90–99%+ of dozens of
          contaminants, including fluoride, lead, arsenic, nitrates, and pharmaceutical residues.
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
            { n: "5", l: "purification stages" },
            { n: "40+", l: "contaminants reduced" },
            { n: "10 yr", l: "limited warranty" },
            { n: "Under-sink", l: "out of sight install" },
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

      <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 620 }}>
        <div style={{
          position: "absolute", width: 540, height: 540, borderRadius: "50%",
          background: "radial-gradient(circle, var(--blue-soft), transparent 70%)",
          opacity: .6,
        }}/>
        <div style={{
          position: "absolute", width: 480, height: 480, borderRadius: "50%",
          border: "1px dashed var(--rule)",
        }}/>
        <img src="assets/ro-system.png" alt="Tarheel 5-stage reverse osmosis system"
          style={{
            width: "100%", maxWidth: 620, height: "auto", position: "relative", zIndex: 2,
            filter: "drop-shadow(0 20px 40px rgba(20,22,18,.22))",
          }}/>

        <div style={{
          position: "absolute", top: 40, right: 10, zIndex: 3,
          background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
          border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 180,
        }}>
          <div className="kbd-num" style={{ fontSize: 10 }}>STAGE 5</div>
          <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>GAC inline polish</div>
        </div>

        <div style={{
          position: "absolute", top: 220, left: -20, zIndex: 3,
          background: "var(--paper)", padding: "10px 14px", borderRadius: 12,
          border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)", maxWidth: 180,
        }}>
          <div className="kbd-num" style={{ fontSize: 10 }}>PRESSURE TANK</div>
          <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>On-demand reserve</div>
        </div>

        <div style={{
          position: "absolute", bottom: 40, right: 20, zIndex: 3,
          background: "var(--ink)", color: "var(--paper)",
          padding: "10px 14px", borderRadius: 12, boxShadow: "var(--shadow-md)",
        }}>
          <div className="kbd-num" style={{ fontSize: 10, color: "rgba(251,248,241,0.6)" }}>DEDICATED FAUCET</div>
          <div style={{ fontSize: 13, marginTop: 4, fontFamily: "var(--f-display)" }}>Beside your main tap</div>
        </div>
      </div>
    </div>
  </section>
);

// 5 Stages
const ROStages = () => {
  const [active, setActive] = React.useState(0);
  const stages = [
    {
      n: "01", name: "Sediment pre-filter",
      sub: "5-micron polypropylene",
      d: "The first line of defense. Captures sand, rust, silt, and particulates that would otherwise clog and damage the downstream membrane. This is why the RO membrane lasts years instead of months.",
    },
    {
      n: "02", name: "Carbon block",
      sub: "Pre-membrane",
      d: "Strips chlorine, chloramines, and volatile organic compounds before they reach the RO membrane. Chlorine destroys RO membranes — this stage is critical to system longevity.",
    },
    {
      n: "03", name: "RO membrane",
      sub: "The workhorse",
      d: "The semi-permeable membrane with pores ~0.0001 microns — 1000× smaller than bacteria. Water molecules pass through; virtually everything else — salts, metals, PFAS, pharmaceuticals — gets rejected and flushed to drain.",
    },
    {
      n: "04", name: "Post-carbon",
      sub: "Polish filter",
      d: "A second carbon stage polishes the permeate, removing any residual taste or odor picked up from the pressure tank. This is why RO water tastes clean — not \"flat\" like some membrane-only systems.",
    },
    {
      n: "05", name: "GAC inline",
      sub: "Final polish at the faucet",
      d: "Granular activated carbon cartridge installed just before your dedicated faucet. Final polish ensures every glass tastes perfect — no matter how long the water has sat in the pressure tank.",
    },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
          <h2 style={{ marginBottom: 16 }}>Five stages.<br/><span style={{ fontStyle: "italic" }}>One perfect glass.</span></h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 580, margin: "0 auto" }}>
            Water passes through five specialized cartridges in sequence. Each one protects the
            next — and removes a different class of contaminant.
          </p>
        </div>

        <div className="grid-2col" style={{ gap: 60, alignItems: "start" }}>
          {/* Flow diagram */}
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 32, position: "sticky", top: 100,
          }}>
            <svg viewBox="0 0 360 500" style={{ width: "100%" }}>
              {/* Faucet at top */}
              <path d="M 180 20 L 180 40 L 200 40 L 200 60"
                stroke="var(--ink-3)" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="180" cy="20" r="4" fill="var(--ink)" />
              {stages.map((s, i) => {
                const y = 70 + i * 75;
                const isActive = active === i;
                return (
                  <g key={i} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>
                    <rect x="80" y={y} width="200" height="58" rx="14"
                      fill={isActive ? "var(--blue)" : "var(--bg-2)"}
                      stroke={isActive ? "var(--blue)" : "var(--rule)"}
                      strokeWidth="1.5"
                      style={{ transition: "all .25s ease" }} />
                    <text x="100" y={y + 26} fontSize="12" fontFamily="var(--f-mono)"
                      fill={isActive ? "rgba(251,248,241,0.7)" : "var(--ink-3)"}>{s.n}</text>
                    <text x="100" y={y + 44} fontSize="14" fontFamily="var(--f-display)"
                      fill={isActive ? "var(--paper)" : "var(--ink)"}>{s.name}</text>
                    {/* Flow dots */}
                    {i < stages.length - 1 && (
                      <g>
                        <line x1="180" y1={y + 58} x2="180" y2={y + 75}
                          stroke="var(--rule)" strokeWidth="2" strokeDasharray="3 3" />
                      </g>
                    )}
                  </g>
                );
              })}
              {/* Drain output */}
              <text x="180" y={70 + stages.length * 75 + 18} textAnchor="middle"
                fontSize="11" fill="var(--ink-3)" fontFamily="var(--f-mono)">
                → purified water to dedicated faucet
              </text>
            </svg>
          </div>

          {/* Detail panel */}
          <div>
            {stages.map((s, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "24px 28px", borderRadius: 18, marginBottom: 10,
                  background: active === i ? "var(--bg-2)" : "transparent",
                  border: `1px solid ${active === i ? "var(--rule)" : "transparent"}`,
                  transition: "all .25s ease", cursor: "pointer",
                }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: active === i ? "var(--blue)" : "var(--bg-3)",
                    color: active === i ? "var(--paper)" : "var(--ink-3)",
                    fontSize: 11, fontFamily: "var(--f-mono)", fontWeight: 500,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>{s.n}</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, margin: 0 }}>{s.name}</h3>
                    <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)", marginTop: 2 }}>{s.sub}</div>
                  </div>
                </div>
                {active === i && (
                  <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.55, marginLeft: 44, marginTop: 8 }}>{s.d}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contaminant removal table — the centerpiece
const ROContaminants = () => {
  const contaminants = [
    ["Algae", "99.9%"], ["Aluminum", "96–99%"], ["Amoebic cysts", ">99%"],
    ["Arsenic", "93–98%"], ["Asbestos", ">99%"], ["Atrazine", "95%"],
    ["Bacteria", ">99%"], ["Barium", "93–98%"], ["Calcium", "93–98%"],
    ["Chloride", "95–98%"], ["Chlorine", "99.5%"], ["Chromate", "90–95%"],
    ["Copper", "93–98%"], ["Cryptosporidium", "99.9%"], ["Cyanide", "90–95%"],
    ["Fluoride", "95–98%"], ["Giardia", "99.9%"], ["Lead", "93–98%"],
    ["Manganese", "93–98%"], ["Magnesium", "93–98%"], ["Mercury", "93–98%"],
    ["Mold", "99.9%"], ["Nickel", "93–98%"], ["Nitrate", "85–90%"],
    ["Phosphate", "93–98%"], ["Potassium", "94–97%"], ["Protozoa", ">99%"],
    ["Radioactivity", "93–98%"], ["Sediment", ">99%"], ["Selenium", "94–96%"],
    ["Silicate", "85–90%"], ["Silver", "93–98%"], ["Sodium", "90–95%"],
    ["Strontium", "96–98%"], ["Sulfate", "93–98%"], ["Thiosulfate", "96–99%"],
    ["Trihalomethanes", "98%"], ["Total VOCs", "95%"], ["Zinc", "93–98%"], ["2,4-D", "95%"],
  ];
  const [query, setQuery] = React.useState("");
  const filtered = contaminants.filter(([n]) => n.toLowerCase().includes(query.toLowerCase()));

  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 40, flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// What comes out</div>
            <h2 style={{ maxWidth: 640 }}>40 contaminants.<br/><span style={{ fontStyle: "italic" }}>One system.</span></h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 380 }}>
            Typical reduction percentages across the spectrum of contaminants. Actual performance
            depends on raw water quality and pre-filtration.
          </p>
        </div>

        <div style={{
          background: "var(--paper)", borderRadius: 22,
          border: "1px solid var(--rule)", overflow: "hidden",
        }}>
          {/* Search bar */}
          <div style={{
            padding: "16px 24px", borderBottom: "1px solid var(--rule)",
            display: "flex", alignItems: "center", gap: 12,
            background: "var(--bg-2)",
          }}>
            <Icon name="search" size={14} color="var(--ink-3)" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search contaminants..."
              style={{
                flex: 1, border: "none", background: "transparent",
                fontSize: 14, color: "var(--ink)", outline: "none",
                fontFamily: "inherit",
              }}
            />
            <span style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)" }}>
              {filtered.length}/{contaminants.length}
            </span>
          </div>

          <div className="table-scroll"><div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, minWidth: 560 }}>
            {filtered.map(([name, pct], i) => {
              const highNum = parseFloat(pct.replace(/[^\d.]/g, "")) || 0;
              const isHigh = highNum >= 99;
              return (
                <div key={name} style={{
                  padding: "16px 20px",
                  borderRight: (i % 4 !== 3) ? "1px solid var(--rule)" : "none",
                  borderTop: i >= 4 ? "1px solid var(--rule)" : "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  gap: 12,
                }}>
                  <span style={{ fontSize: 14, color: "var(--ink-2)" }}>{name}</span>
                  <span style={{
                    fontSize: 13, fontFamily: "var(--f-mono)",
                    color: isHigh ? "var(--blue)" : "var(--ink-3)",
                    fontWeight: isHigh ? 600 : 400,
                  }}>{pct}</span>
                </div>
              );
            })}
            {filtered.length === 0 && (
              <div style={{ padding: 40, textAlign: "center", gridColumn: "1 / -1", color: "var(--ink-3)" }}>
                No matches for "{query}"
              </div>
            )}
          </div></div>
        </div>

        <p style={{ fontSize: 12, color: "var(--ink-3)", fontStyle: "italic", marginTop: 16, fontFamily: "var(--f-mono)" }}>
          *Exact reduction percentages vary based on raw water quality, temperature, pressure, and pre-filtration.
        </p>
      </div>
    </section>
  );
};

// When you'd want RO (vs the whole-home refiner)
const ROUseCase = () => (
  <section>
    <div className="container-wide">
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>// Where it fits</div>
        <h2 style={{ maxWidth: 720, margin: "0 auto" }}>Whole-home filters. RO finishes.</h2>
        <p style={{ color: "var(--ink-2)", maxWidth: 580, margin: "24px auto 0" }}>
          The two systems solve different problems. Most Tarheel homes have both: filtration
          everywhere, RO where you drink and cook.
        </p>
      </div>

      <div className="grid-2col">
        <div style={{
          padding: 40, background: "var(--paper)",
          border: "1px solid var(--rule)", borderRadius: 22,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: "var(--bg-2)", color: "var(--ink-2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20,
          }}>
            <Icon name="home" size={20} />
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-3)", fontFamily: "var(--f-mono)", marginBottom: 6 }}>WHOLE-HOME REFINER</div>
          <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, marginBottom: 14 }}>Every tap, every shower</h3>
          <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55, marginBottom: 16 }}>
            Filters water, strips chlorine, reduces heavy metals. Protects appliances, skin, and
            laundry. High flow rate — designed for bathing, cleaning, and washing.
          </p>
          <div style={{ fontSize: 13, color: "var(--ink-3)" }}>Flow: 8+ GPM · Installation: main water line</div>
        </div>

        <div style={{
          padding: 40, background: "var(--ink)", color: "var(--paper)",
          borderRadius: 22, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -80, right: -80, width: 300, height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(28,155,188,0.2), transparent 60%)",
          }}/>
          <div style={{
            width: 44, height: 44, borderRadius: 10,
            background: "rgba(28,155,188,0.2)", color: "var(--blue)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20, position: "relative",
          }}>
            <Icon name="drop" size={20} />
          </div>
          <div style={{ fontSize: 12, color: "rgba(251,248,241,0.5)", fontFamily: "var(--f-mono)", marginBottom: 6, position: "relative" }}>REVERSE OSMOSIS</div>
          <h3 style={{ fontFamily: "var(--f-display)", fontSize: 22, marginBottom: 14, color: "var(--paper)", position: "relative" }}>The water you drink & cook with</h3>
          <p style={{ fontSize: 15, color: "rgba(251,248,241,0.75)", lineHeight: 1.55, marginBottom: 16, position: "relative" }}>
            Near-laboratory purification for the handful of gallons a day you actually consume.
            Removes what whole-home can't — fluoride, nitrates, pharmaceutical residues, lead
            picked up from plumbing.
          </p>
          <div style={{ fontSize: 13, color: "rgba(251,248,241,0.5)", position: "relative" }}>Flow: slow · dedicated faucet · under-sink</div>
        </div>
      </div>
    </div>
  </section>
);

// Specs & warranty
const ROSpecs = () => {
  const groups = [
    {
      title: "System configuration",
      items: [
        ["Stages", "5 · sediment → carbon → RO → post-carbon → GAC inline"],
        ["Install location", "Under-sink cabinet"],
        ["Dedicated faucet", "Included (chrome standard)"],
        ["Storage", "Pressurized bladder tank"],
      ],
    },
    {
      title: "Performance",
      items: [
        ["Contaminants reduced", "40+ (see removal table)"],
        ["Typical reduction", "93–99%+"],
        ["Best-in-class removal", "Bacteria, algae, mold, cysts (99.9%)"],
        ["Effective on", "Municipal & well water"],
      ],
    },
    {
      title: "Maintenance",
      items: [
        ["RO filters", "Replace every 12–18 months"],
        ["Bladder tank", "Replace every 5 years"],
        ["Service reminders", "Included with Tarheel installation"],
        ["DIY-friendly", "Cartridges swap without tools"],
      ],
    },
    {
      title: "Warranty",
      items: [
        ["System & components", "10 years"],
        ["Transferable", "Once, $100 transfer fee"],
        ["Excludes", "RO filters, bladder tank (wear items)"],
        ["Backed by", "Tarheel Pure Water directly"],
      ],
    },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Specifications</div>
          <h2>The full spec sheet.</h2>
        </div>

        <div className="grid-2col">
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
                    display: "grid", gridTemplateColumns: "1fr 1.3fr",
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
const ROFaq = () => {
  const faqs = [
    { q: "Does reverse osmosis remove healthy minerals?", a: "Yes — RO is thorough and removes nearly everything dissolved in water, including some minerals. The trade-off is worth it for most families: the minerals you get from food are vastly more significant than what comes from tap water, and what RO removes (lead, fluoride, nitrates, pharmaceutical residues) matters much more for health. We can add a remineralization stage if you prefer." },
    { q: "How much water does it 'waste'?", a: "Traditional RO systems produce 3–4 gallons of brine for every gallon of purified water. The brine goes down the drain. It's a small tradeoff — most households use only 1–2 gallons of drinking water a day. Modern efficient RO systems cut this ratio significantly." },
    { q: "Will it be fast enough for drinking and cooking?", a: "Yes. The pressurized storage tank holds 2–4 gallons of purified water ready to pour, refilling automatically. You'll never wait on the faucet." },
    { q: "Does it remove PFAS?", a: "RO is one of the few point-of-use systems that meaningfully reduces PFAS — typically 90%+ reduction. For guaranteed non-detect levels throughout the house, we pair it with our NWS-PFAS-8 whole-home tank." },
    { q: "What does maintenance look like?", a: "Change the three pre/post cartridges every 12–18 months (a five-minute job, no tools). The RO membrane itself lasts 2–5 years. The bladder tank goes every 5 years. We remind you when each is due." },
    { q: "How is the Tarheel RO different from what I'd buy online?", a: "Cheap online RO kits use generic membranes and housings. Ours uses commercial-grade components with a 10-year warranty, and we size and install it for your specific water chemistry after testing — which is why reduction percentages actually hold up in practice." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section>
      <div className="container-wide">
        <div className="grid-faq">
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
                  maxHeight: open === i ? 420 : 0, overflow: "hidden",
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
const ROCta = () => (
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
        <div className="grid-cta">
          <div>
            <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)", marginBottom: 16 }}>// Next step</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 14, maxWidth: 640 }}>
              Know what's in your tap water.
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Book a free on-site test. We'll show you exactly what's coming out of your faucet
              and whether an RO system belongs under your sink.
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

Object.assign(window, { ROHero, ROStages, ROContaminants, ROUseCase, ROSpecs, ROFaq, ROCta });
