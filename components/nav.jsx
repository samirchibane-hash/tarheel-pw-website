// Top navigation — sticky with scroll state
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const links = [
    { label: "Solutions", items: [
      { label: "Custom Whole Home Filters", href: "Custom Whole Home Filters.html" },
      { label: "Quantum Disinfection", href: "Quantum Disinfection.html" },
      { label: "Whole Home PFAS/PFOA Filters", href: "Whole Home PFAS PFOA.html" },
      { label: "Reverse Osmosis", href: "Reverse Osmosis.html" },
    ] },
    { label: "How it works", href: "How It Works.html", items: null },
    { label: "Service areas", items: ["Raleigh", "Durham", "Chapel Hill", "Charlotte", "Asheville"] },
    { label: "About", href: "About.html", items: null },
  ];

  return (
    <>
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
          <a href="index.html" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Logo size={40} />
            <span style={{ fontFamily: "var(--f-display)", fontSize: 19, letterSpacing: "-0.01em", lineHeight: 1 }}>
              Tarheel Pure Water
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: "flex", gap: 4 }}>
            {links.map(l => {
              const ButtonTag = l.href ? "a" : "button";
              return (
                <div key={l.label}
                     onMouseEnter={() => l.items && setMenuOpen(l.label)}
                     onMouseLeave={() => setMenuOpen(null)}
                     style={{ position: "relative" }}>
                  <ButtonTag
                    href={l.href}
                    style={{
                      padding: "10px 14px", fontSize: 14, color: "var(--ink-2)",
                      display: "inline-flex", alignItems: "center", gap: 6,
                      textDecoration: "none",
                    }}>
                    {l.label}
                    {l.items && <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 3.5 3 3 3-3"/></svg>}
                  </ButtonTag>
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
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="nav-cta" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn btn-sm" style={{ color: "var(--ink-2)" }}>Sign in</button>
            <a href="Book Free Water Test.html" className="btn btn-primary btn-sm">Book free water test</a>
          </div>

          {/* Hamburger — mobile only */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen
              ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4l12 12M16 4L4 16"/></svg>
              : <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5h14M3 10h14M3 15h14"/></svg>
            }
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 49,
          background: "var(--bg)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}>
          <div style={{ height: 72, flexShrink: 0 }} />
          <div style={{ flex: 1, padding: "24px 20px" }}>
            {links.map(l => (
              <div key={l.label} style={{ borderBottom: "1px solid var(--rule)" }}>
                {l.items ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                      style={{
                        width: "100%", textAlign: "left",
                        padding: "20px 0",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        fontFamily: "var(--f-display)", fontSize: 28, color: "var(--ink)",
                      }}>
                      {l.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"
                        style={{ transform: mobileExpanded === l.label ? "rotate(180deg)" : "none", transition: "transform .2s ease" }}>
                        <path d="m3 6 5 5 5-5"/>
                      </svg>
                    </button>
                    {mobileExpanded === l.label && (
                      <div style={{ paddingBottom: 12 }}>
                        {l.items.map(it => {
                          const label = typeof it === "string" ? it : it.label;
                          const href = typeof it === "string" ? "#" : it.href;
                          return (
                            <a key={label} href={href} style={{
                              display: "block", padding: "12px 16px",
                              fontSize: 16, color: "var(--ink-2)",
                              borderRadius: 8,
                            }}>{label}</a>
                          );
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={l.href} style={{
                    display: "block", padding: "20px 0",
                    fontFamily: "var(--f-display)", fontSize: 28, color: "var(--ink)",
                    textDecoration: "none",
                  }}>{l.label}</a>
                )}
              </div>
            ))}
          </div>
          <div style={{ padding: "24px 20px", borderTop: "1px solid var(--rule)" }}>
            <a href="Book Free Water Test.html" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 22px" }}>
              Book free water test <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

const Logo = ({ size = 36 }) => (
  <img src="assets/logo.png" alt="Tarheel Pure Water" width={size} height={size} style={{ display: "block", borderRadius: "50%" }} />
);

Object.assign(window, { Nav, Logo });
