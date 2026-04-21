// App root — composes all sections and applies Tweaks
const App = () => {
  const [tweaks, setTweaks] = React.useState(window.__TWEAK_DEFAULTS__);

  // Apply tweaks as CSS variables / body classes
  React.useEffect(() => {
    const root = document.documentElement;
    const accents = {
      brand: { a: "#1C9BBC", soft: "#CDE8EF" },
      blue:  { a: "#1F4AA0", soft: "#D7E1F5" },
      sage:  { a: "#4E6B4A", soft: "#DCE4D2" },
      amber: { a: "#B4722B", soft: "#EFDAB9" },
      ink:   { a: "#141612", soft: "#D8D1BE" },
    };
    const acc = accents[tweaks.accent] || accents.blue;
    root.style.setProperty("--blue", acc.a);
    root.style.setProperty("--blue-soft", acc.soft);

    const bgs = {
      warm: { bg: "#F6F2EA", bg2: "#ECE6D8", paper: "#FBF8F1", ink: "#141612", ink2: "#3B3D37", ink3: "#6B6D66", rule: "#D8D1BE" },
      cool: { bg: "#EEF1F5", bg2: "#E3E8EF", paper: "#FFFFFF", ink: "#0F1419", ink2: "#2F3640", ink3: "#5E6773", rule: "#D6DCE4" },
      dark: { bg: "#141612", bg2: "#1C1E1A", paper: "#22241F", ink: "#F6F2EA", ink2: "#C9C6BC", ink3: "#9A9B93", rule: "#2E312B" },
    };
    const c = bgs[tweaks.bg] || bgs.warm;
    root.style.setProperty("--bg", c.bg);
    root.style.setProperty("--bg-2", c.bg2);
    root.style.setProperty("--paper", c.paper);
    root.style.setProperty("--ink", c.ink);
    root.style.setProperty("--ink-2", c.ink2);
    root.style.setProperty("--ink-3", c.ink3);
    root.style.setProperty("--rule", c.rule);

    const fonts = {
      fraunces: '"Fraunces", Georgia, serif',
      ibmplex: '"IBM Plex Serif", Georgia, serif',
      instrument: '"Instrument Serif", Georgia, serif',
      inter: '"Inter", -apple-system, sans-serif',
    };
    root.style.setProperty("--f-display", fonts[tweaks.display] || fonts.fraunces);
    root.style.setProperty("--scale", tweaks.scale);
    document.body.dataset.cards = tweaks.cards;
  }, [tweaks]);

  return (
    <>
      <Nav />
      <main>
        {tweaks.hero === "centered" ? <HeroCentered /> : <Hero />}
        <hr className="rule" />
        <ValueProps />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
};

// Alt centered hero
const HeroCentered = () => (
  <section style={{ paddingTop: 160, paddingBottom: 80, textAlign: "center" }}>
    <div className="container">
      <span className="badge" style={{ marginBottom: 28 }}>
        <span className="dot"></span> Serving NC since 2011
      </span>
      <h1 style={{ marginBottom: 28, maxWidth: 920, margin: "0 auto 28px" }}>
        The cleanest water <span style={{ fontStyle: "italic", color: "var(--blue)" }}>your home</span><br/>
        has ever poured.
      </h1>
      <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.5 }}>
        Custom filtration and reverse osmosis systems for North Carolina homes —
        installed by certified local technicians, backed for life.
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 80 }}>
        <button className="btn btn-primary">Book free water test <Icon name="arrow" size={14} /></button>
        <button className="btn btn-ghost">Watch how it works <Icon name="play" size={12} /></button>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Placeholder label="family in kitchen · product hero" aspect="16/9" tone="blue" rounded={22} />
      </div>
    </div>
  </section>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
