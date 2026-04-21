// Quantum Disinfection page root
const QDApp = () => {
  const [tweaks, setTweaks] = React.useState(window.__TWEAK_DEFAULTS__);

  React.useEffect(() => {
    const root = document.documentElement;
    const accents = {
      brand: { a: "#1C9BBC", soft: "#CDE8EF" },
      blue:  { a: "#1F4AA0", soft: "#D7E1F5" },
      sage:  { a: "#4E6B4A", soft: "#DCE4D2" },
      amber: { a: "#B4722B", soft: "#EFDAB9" },
    };
    const acc = accents[tweaks.accent] || accents.brand;
    root.style.setProperty("--blue", acc.a);
    root.style.setProperty("--blue-soft", acc.soft);

    const bgs = {
      warm: { bg: "#F6F2EA", bg2: "#ECE6D8", paper: "#FBF8F1", ink: "#141612", ink2: "#3B3D37", ink3: "#6B6D66", rule: "#D8D1BE" },
      cool: { bg: "#EEF1F5", bg2: "#E3E8EF", paper: "#FFFFFF", ink: "#0F1419", ink2: "#2F3640", ink3: "#5E6773", rule: "#D6DCE4" },
      dark: { bg: "#141612", bg2: "#1C1E1A", paper: "#22241F", ink: "#F6F2EA", ink2: "#C9C6BC", ink3: "#9A9B93", rule: "#2E312B" },
    };
    const c = bgs[tweaks.bg] || bgs.warm;
    Object.entries({ "--bg": c.bg, "--bg-2": c.bg2, "--paper": c.paper, "--ink": c.ink, "--ink-2": c.ink2, "--ink-3": c.ink3, "--rule": c.rule }).forEach(([k, v]) => root.style.setProperty(k, v));

    const fonts = {
      fraunces: '"Fraunces", Georgia, serif',
      ibmplex: '"IBM Plex Serif", Georgia, serif',
      instrument: '"Instrument Serif", Georgia, serif',
      inter: '"Inter", -apple-system, sans-serif',
    };
    root.style.setProperty("--f-display", fonts[tweaks.display] || fonts.fraunces);
  }, [tweaks]);

  return (
    <>
      <Nav />
      <main>
        <QDHero />
        <QDHowItWorks />
        <QDBenefits />
        <QDSpecs />
        <QDApplications />
        <QDFaq />
        <QDCta />
      </main>
      <Footer />
      <Tweaks tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<QDApp />);
