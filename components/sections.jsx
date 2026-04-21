// Middle-of-page sections: value props, work gallery, testimonials
const ValueProps = () => {
  const cards = [
    {
      tag: "01", icon: "home", tone: "blue",
      title: "Built for North Carolina water",
      body: "From well-heavy counties to municipal chlorine-heavy lines — every system is tuned to your local water chemistry.",
      stat: "37 county profiles", link: "Service areas",
    },
    {
      tag: "02", icon: "beaker", tone: "sage",
      title: "Lab-grade, in-home testing",
      body: "Our techs test for 42 contaminants on-site and send a detailed water report before we ever propose a system.",
      stat: "Free, 48hr results", link: "See sample report",
    },
    {
      tag: "03", icon: "shield", tone: "warm",
      title: "Installed for life",
      body: "Every system comes with lifetime parts, annual maintenance, and a no-fault workmanship guarantee.",
      stat: "Lifetime warranty", link: "How it works",
    },
  ];
  const tones = {
    blue: { bg: "var(--blue-soft)", fg: "var(--blue)" },
    sage: { bg: "var(--sage-soft)", fg: "var(--sage)" },
    warm: { bg: "var(--bg-3)", fg: "var(--amber)" },
  };
  return (
    <section id="value">
      <div className="container-wide">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "end",
          marginBottom: 56, gap: 40, flexWrap: "wrap",
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Why Tarheel</div>
            <h2 style={{ maxWidth: 760 }}>
              Better water.<br/>
              <span style={{ fontStyle: "italic", color: "var(--ink-3)" }}>Better living, pour by pour.</span>
            </h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 380, fontSize: 16 }}>
            We're a family-owned team of certified water specialists. We don't sell systems — we solve water problems.
          </p>
        </div>

        <div className="grid-3col">
          {cards.map(c => {
            const t = tones[c.tone];
            return (
              <article key={c.tag} style={{
                background: "var(--paper)",
                borderRadius: 22,
                padding: 28,
                border: "1px solid var(--rule)",
                display: "flex", flexDirection: "column",
                minHeight: 400,
                transition: "transform .3s ease, box-shadow .3s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-lg)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 32 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: t.bg, color: t.fg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name={c.icon} size={22} />
                  </div>
                  <span className="kbd-num">{c.tag} / 03</span>
                </div>
                <h3 style={{ marginBottom: 12 }}>{c.title}</h3>
                <p style={{ color: "var(--ink-2)", marginBottom: 24, fontSize: 15 }}>{c.body}</p>
                <div style={{
                  marginTop: "auto", paddingTop: 20,
                  borderTop: "1px solid var(--rule)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: 13, color: t.fg, fontWeight: 500 }}>{c.stat}</span>
                  <a href="#" style={{
                    fontSize: 13, color: "var(--ink)",
                    display: "inline-flex", alignItems: "center", gap: 6,
                  }}>
                    {c.link} <Icon name="arrow-ne" size={12} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Process / how-it-works
const Process = () => {
  const steps = [
    { n: "01", t: "Free water test", d: "We come to you. A certified tech collects samples and tests 42 parameters on-site." },
    { n: "02", t: "Custom proposal", d: "You get a water report and a system spec built around your home's chemistry — not a catalog." },
    { n: "03", t: "Install in a day", d: "Most systems are installed in 4–6 hours. We clean up, walk you through everything, and register your warranty." },
    { n: "04", t: "Lifetime support", d: "Annual filter service, remote TDS monitoring, and a direct line to your install tech." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }} id="how">
      <div className="container-wide">
        <div className="grid-sidebar">
          <div className="sticky-sidebar" style={{ top: 120 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
            <h2 style={{ marginBottom: 20 }}>Four steps.<br/>One clean install.</h2>
            <p style={{ color: "var(--ink-2)", maxWidth: 380, marginBottom: 28 }}>
              From the first sample to your first glass — we keep every step simple, documented, and honest.
            </p>
            <button className="btn btn-primary">Book your free test <Icon name="arrow" size={14} /></button>
          </div>
          <div>
            {steps.map((s, i) => (
              <div key={s.n} style={{
                display: "grid", gridTemplateColumns: "80px 1fr",
                gap: 24, padding: "32px 0",
                borderTop: i === 0 ? "1px solid var(--rule)" : "none",
                borderBottom: "1px solid var(--rule)",
                alignItems: "start",
              }}>
                <div className="kbd-num" style={{ fontSize: 13 }}>{s.n}</div>
                <div>
                  <h3 style={{ marginBottom: 8, fontFamily: "var(--f-display)" }}>{s.t}</h3>
                  <p style={{ color: "var(--ink-2)", maxWidth: 560 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Work in action — gallery with before/after slider
const Gallery = () => {
  const projects = [
    { loc: "Raleigh, NC", type: "Whole-home + RO", tone: "blue", aspect: "3/4", image: "assets/gallery-raleigh-install.jpeg" },
    { loc: "Cary, NC", type: "Well system overhaul", tone: "sage", aspect: "4/3", image: "assets/gallery-cary-well.jpeg" },
    { loc: "Durham, NC", type: "Under-sink RO", tone: "warm", aspect: "3/4", image: "assets/gallery-durham-ro.jpeg" },
    { loc: "Apex, NC", type: "Whole-home filtration", tone: "blue", aspect: "4/3", image: "assets/hero-softener-install.jpeg", imagePosition: "center 30%" },
  ];

  return (
    <section>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Field notes</div>
          <h2 style={{ marginBottom: 16 }}>See our work in action.</h2>
          <p style={{ color: "var(--ink-2)", maxWidth: 520, margin: "0 auto" }}>
            Two decades of installs across North Carolina. Every home a different water problem, every solution custom-built.
          </p>
        </div>

        <div className="grid-2col">
          {projects.slice(0, 2).map((p, i) => (
            <GalleryCard key={i} {...p} />
          ))}
        </div>
        <div className="grid-3col" style={{ marginTop: 20 }}>
          {projects.slice(2).map((p, i) => (
            <GalleryCard key={i} {...p} aspect="4/3" />
          ))}
          <article style={{
            background: "var(--ink)", color: "var(--paper)",
            borderRadius: 22, padding: 32,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
            aspectRatio: "4/3",
          }}>
            <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)" }}>// case study</div>
            <div>
              <h3 style={{ color: "var(--paper)", marginBottom: 16, fontFamily: "var(--f-display)" }}>
                How we brought a 412 ppm well down to drinking-glass clean.
              </h3>
              <a href="#" style={{ color: "var(--paper)", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Read case study <Icon name="arrow-ne" size={14} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const GalleryCard = ({ loc, type, tone, aspect = "3/4", image, imagePosition = "center" }) => {
  return (
    <article style={{ position: "relative" }}>
      {image ? (
        <div style={{
          aspectRatio: aspect,
          borderRadius: 22,
          overflow: "hidden",
          background: "var(--bg-2)",
        }}>
          <img
            src={image}
            alt={`${type} install in ${loc}`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition, display: "block" }}
          />
        </div>
      ) : (
        <Placeholder label={`${loc} — install`} aspect={aspect} tone={tone} rounded={22} />
      )}
      <div style={{
        position: "absolute", bottom: 16, left: 16, right: 16,
        display: "flex", justifyContent: "space-between", alignItems: "end",
      }}>
        <div>
          <div style={{
            display: "inline-block",
            background: "rgba(251,248,241,0.92)",
            padding: "6px 10px", borderRadius: 999,
            fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase",
            marginBottom: 8,
          }}>{loc}</div>
          <div style={{
            fontFamily: "var(--f-display)", fontSize: 22,
            background: "rgba(251,248,241,0.92)",
            padding: "4px 10px", borderRadius: 8, display: "inline-block",
          }}>{type}</div>
        </div>
      </div>
    </article>
  );
};

Object.assign(window, { ValueProps, Process, Gallery });
