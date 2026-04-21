// About page — Tarheel Pure Water

const AboutHero = () => (
  <section style={{ paddingTop: 140, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .5,
      background: "radial-gradient(ellipse 1100px 600px at 80% 0%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{ position: "relative" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
        <a href="index.html" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
        <span style={{ color: "var(--ink-4)" }}>/</span>
        <span style={{ fontSize: 13, color: "var(--ink-2)" }}>About</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>// About Tarheel Pure Water</div>
          <h1 style={{ marginBottom: 28, fontSize: "clamp(48px, 6vw, 84px)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
            Clean water,<br/>
            <span style={{ fontStyle: "italic", color: "var(--blue)" }}>clean life.</span>
          </h1>
          <p style={{ fontSize: 20, color: "var(--ink-2)", maxWidth: 640, lineHeight: 1.5 }}>
            A licensed, insured water-purification specialist serving North Carolina homes with
            professional water treatment solutions — born out of a family plumbing business that's
            been working on Cape Fear Region pipes for decades.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        }}>
          {[
            { n: "L.34486", l: "NC plumbing license" },
            { n: "Free", l: "water testing" },
            { n: "Same-day", l: "service" },
          ].map((s, i) => (
            <div key={s.l} style={{
              padding: "20px 14px 20px 0",
              borderRight: i < 2 ? "1px solid var(--rule)" : "none",
              paddingLeft: i > 0 ? 14 : 0,
            }}>
              <div style={{ fontFamily: "var(--f-display)", fontSize: 22, lineHeight: 1, letterSpacing: "-0.02em" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutStory = () => (
  <section style={{ background: "var(--bg-2)" }}>
    <div className="container-wide">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Our story</div>
          <h2 style={{ marginBottom: 20 }}>Built from a<br/>family trade.</h2>
          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 18, padding: 24,
          }}>
            <div className="kbd-num" style={{ fontSize: 10, marginBottom: 10 }}>DBA</div>
            <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>Paxton Plumbing Services, LLC</h3>
            <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>
              Operating as a specialized division of our established plumbing company — bringing decades
              of experience to water-treatment solutions.
            </p>
          </div>
        </div>

        <div style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 680 }}>
          <p style={{ marginBottom: 24 }}>
            We started Tarheel Pure Water Services, LLC as a division of Paxton Plumbing Services,
            LLC to better service our filtration equipment and trust other brands in the greater
            Cape Fear Region.
          </p>
          <p style={{ marginBottom: 24 }}>
            With years of experience in plumbing and water treatment, we recognized the growing need
            for specialized water-purification services in North Carolina. Our mission is simple —
            provide every family access to clean, safe, great-tasting water.
          </p>
          <p style={{ fontFamily: "var(--f-display)", fontSize: 24, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.4, paddingLeft: 24, borderLeft: "3px solid var(--blue)" }}>
            As a licensed and insured company, we take pride in our professional approach and
            commitment to customer satisfaction. Clean water shouldn't be a luxury — it should be a
            standard for every home.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const AboutTrust = () => {
  const items = [
    { icon: "shield", t: "Licensed & insured", d: "Fully licensed plumbing contractor with comprehensive insurance coverage for your peace of mind." },
    { icon: "check", t: "Expert knowledge", d: "Specialized training in water-treatment technologies and up-to-date water-quality science." },
    { icon: "home", t: "Local service", d: "Proudly serving North Carolina families with personalized, community-focused service." },
    { icon: "beaker", t: "Reliable support", d: "Ongoing maintenance and support to keep your water systems running perfectly." },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Why families trust us</div>
          <h2 style={{ maxWidth: 720, margin: "0 auto" }}>Four reasons our neighbors call us back.</h2>
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

const AboutCredentials = () => {
  const creds = [
    "North Carolina Licensed Plumber — License # NC L34486",
    "EPA Water Treatment Specialist",
    "Water Quality Association Certified",
    "Fully Insured and Bonded",
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Credentials</div>
            <h2 style={{ marginBottom: 20 }}>Licensed &amp; certified professionals.</h2>
            <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 440 }}>
              Every technician who steps into your home carries the credentials that matter — and
              we back their work with full insurance.
            </p>
          </div>

          <div style={{
            background: "var(--paper)", border: "1px solid var(--rule)",
            borderRadius: 22, padding: 36,
          }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {creds.map((c, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "center", gap: 16,
                  padding: "18px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--rule)",
                }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: 999,
                    background: "var(--blue-soft)", color: "var(--blue)",
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon name="check" size={14} />
                  </span>
                  <span style={{ fontSize: 15, color: "var(--ink)" }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutAreas = () => {
  const cities = [
    { name: "Smithfield, NC", primary: true },
    { name: "Wilmington, NC", primary: true },
    { name: "Clayton, NC" },
    { name: "Raleigh, NC" },
    { name: "Garner, NC" },
    { name: "Apex, NC" },
    { name: "Cary, NC" },
    { name: "Durham, NC" },
    { name: "Chapel Hill, NC" },
    { name: "Fayetteville, NC" },
    { name: "Sanford, NC" },
    { name: "Goldsboro, NC" },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{
          display: "flex", alignItems: "end", justifyContent: "space-between",
          marginBottom: 40, flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Service areas</div>
            <h2 style={{ maxWidth: 680 }}>
              <Icon name="pin" size={28} color="var(--blue)" />
              &nbsp;&nbsp;Throughout North Carolina.
            </h2>
          </div>
          <p style={{ color: "var(--ink-2)", maxWidth: 380 }}>
            Proudly serving the greater Cape Fear Region and surrounding communities.
          </p>
        </div>

        <div style={{
          background: "var(--paper)", border: "1px solid var(--rule)",
          borderRadius: 22, padding: 8,
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}>
            {cities.map((city, i) => (
              <div key={city.name} style={{
                padding: "22px 24px",
                borderRight: (i % 4 !== 3) ? "1px solid var(--rule)" : "none",
                borderTop: i >= 4 ? "1px solid var(--rule)" : "none",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: 999,
                  background: city.primary ? "var(--blue)" : "var(--ink-4)",
                  flexShrink: 0,
                }}/>
                <span style={{
                  fontSize: 15,
                  color: city.primary ? "var(--blue)" : "var(--ink)",
                  fontWeight: city.primary ? 500 : 400,
                }}>{city.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p style={{
          fontSize: 14, color: "var(--ink-3)", marginTop: 20,
          fontStyle: "italic", fontFamily: "var(--f-display)",
        }}>
          Don't see your area listed? Give us a call — we're always expanding our service area and may be
          able to help you with your water-treatment needs.
        </p>
      </div>
    </section>
  );
};

const AboutCta = () => (
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
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 40 }}>
          <div>
            <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)", marginBottom: 16 }}>// Let's talk</div>
            <h2 style={{ color: "var(--paper)", marginBottom: 14, maxWidth: 640 }}>
              Ready to improve your water quality?
            </h2>
            <p style={{ maxWidth: 520, opacity: .8, fontSize: 17 }}>
              Contact us today for a free consultation and water-quality assessment. We'll help you
              find the perfect water-treatment solution for your home.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="Book Free Water Test.html" className="btn btn-light" style={{ justifyContent: "center", padding: "16px 24px" }}>
              Schedule water test <Icon name="arrow" size={14} />
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

Object.assign(window, { AboutHero, AboutStory, AboutTrust, AboutCredentials, AboutAreas, AboutCta });
