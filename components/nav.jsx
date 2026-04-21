// Top navigation — sticky with scroll state
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Solutions", items: [
      { label: "Custom Whole Home Filters", href: "#" },
      { label: "Quantum Disinfection", href: "Quantum Disinfection.html" },
      { label: "Whole Home PFAS/PFOA Filters", href: "#" },
      { label: "Reverse Osmosis", href: "#" },
    ] },
    { label: "How it works", items: null },
    { label: "Service areas", items: ["Raleigh", "Durham", "Chapel Hill", "Charlotte", "Asheville"] },
    { label: "About", items: null },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all .3s ease",
      background: scrolled ? "rgba(246,242,234,0.88)" : "transparent",
      backdropFilter: scrolled ? "saturate(160%) blur(16px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(160%) blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
    }}>
      <div className="container-wide" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 0",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Logo size={40} />
          <span style={{ fontFamily: "var(--f-display)", fontSize: 19, letterSpacing: "-0.01em", lineHeight: 1 }}>
            Tarheel Pure Water
          </span>
        </a>
        <nav style={{ display: "flex", gap: 4 }}>
          {links.map(l => (
            <div key={l.label}
                 onMouseEnter={() => l.items && setMenuOpen(l.label)}
                 onMouseLeave={() => setMenuOpen(null)}
                 style={{ position: "relative" }}>
              <button style={{
                padding: "10px 14px", fontSize: 14, color: "var(--ink-2)",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}>
                {l.label}
                {l.items && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 3.5 3 3 3-3"/></svg>}
              </button>
              {l.items && menuOpen === l.label && (
                <div style={{
                  position: "absolute", top: "100%", left: 0,
                  background: "var(--paper)", borderRadius: 14, padding: 8,
                  border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)",
                  minWidth: 240,
                }}>
                  {l.items.map(it => {
                    const label = typeof it === "string" ? it : it.label;
                    const href = typeof it === "string" ? "#" : it.href;
                    return (
                      <a key={label} href={href} style={{
                        display: "block", padding: "10px 12px", borderRadius: 8,
                        fontSize: 14, color: "var(--ink-2)",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "var(--bg-2)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        {label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button className="btn btn-sm" style={{ color: "var(--ink-2)" }}>Sign in</button>
          <a href="Book Free Water Test.html" className="btn btn-primary btn-sm">Book free water test</a>
        </div>
      </div>
    </header>
  );
};

const Logo = ({ size = 36 }) => (
  <img src="assets/logo.png" alt="Tarheel Pure Water" width={size} height={size} style={{ display: "block", borderRadius: "50%" }} />
);

Object.assign(window, { Nav, Logo });
