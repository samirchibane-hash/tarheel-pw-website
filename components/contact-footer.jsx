// Contact + Footer
const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Name required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (form.phone && !/^[\d\s\-\(\)\+]{7,}$/.test(form.phone)) errs.phone = "Invalid phone";
    if (form.message.trim().length < 10) errs.message = "Tell us a bit more";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section id="contact">
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 40, alignItems: "stretch" }}>
          {/* Left panel — image + info */}
          <div style={{ position: "relative", borderRadius: 28, overflow: "hidden" }}>
            <Placeholder label="creek running through NC forest" aspect="auto" tone="sage" rounded={0} style={{ minHeight: 600, height: "100%" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 0%, transparent 40%, rgba(20,22,18,0.75) 100%)",
              padding: 36,
              display: "flex", flexDirection: "column", justifyContent: "space-between",
              color: "var(--paper)",
            }}>
              <div>
                <div className="eyebrow" style={{ color: "rgba(251,248,241,0.7)", marginBottom: 16 }}>// Talk to a human</div>
                <h2 style={{ color: "var(--paper)", maxWidth: 420 }}>
                  Get in touch<br/>
                  <span style={{ fontStyle: "italic" }}>today.</span>
                </h2>
              </div>
              <div style={{ display: "grid", gap: 20, maxWidth: 380 }}>
                <InfoRow icon="mail" label="Email" value="info@tarheelpurewater.com" />
                <InfoRow icon="phone" label="Phone" value="(910) 380-6339" />
                <InfoRow icon="pin" label="Headquarters" value="128 Hillsborough St · Raleigh, NC" />
              </div>
            </div>
          </div>

          {/* Right panel — form */}
          <div style={{
            background: "var(--paper)", borderRadius: 28,
            padding: 40, border: "1px solid var(--rule)",
          }}>
            {!sent ? (
              <form onSubmit={submit}>
                <h3 style={{ marginBottom: 8 }}>Book a free water test</h3>
                <p style={{ color: "var(--ink-3)", fontSize: 14, marginBottom: 28 }}>
                  A certified tech will reach out within 24 hours to schedule.
                </p>

                <Field label="Name" error={errors.name}>
                  <input type="text" value={form.name} onChange={update("name")}
                    placeholder="Jane Appleseed"
                    style={inputStyle(errors.name)} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" value={form.email} onChange={update("email")}
                    placeholder="jane@home.com"
                    style={inputStyle(errors.email)} />
                </Field>
                <Field label="Phone (optional)" error={errors.phone}>
                  <input type="tel" value={form.phone} onChange={update("phone")}
                    placeholder="(910) 380-6339"
                    style={inputStyle(errors.phone)} />
                </Field>
                <Field label="What's going on with your water?" error={errors.message}>
                  <textarea value={form.message} onChange={update("message")}
                    rows={4}
                    placeholder="Smells like sulfur, hard water spots, well turned yellow…"
                    style={{ ...inputStyle(errors.message), resize: "vertical", fontFamily: "inherit" }} />
                </Field>

                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 24 }}>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, justifyContent: "center", padding: "16px 22px" }}>
                    Request my free test <Icon name="arrow" size={14} />
                  </button>
                </div>
                <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 14, textAlign: "center" }}>
                  By submitting, you agree to our privacy policy. No spam — ever.
                </p>
              </form>
            ) : (
              <div style={{
                height: "100%", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", textAlign: "center",
                padding: "40px 20px",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 999,
                  background: "var(--sage-soft)", color: "var(--sage)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 24,
                }}>
                  <Icon name="check" size={28} />
                </div>
                <h3 style={{ marginBottom: 8 }}>Request received.</h3>
                <p style={{ color: "var(--ink-2)", maxWidth: 320 }}>
                  A Tarheel tech will reach out within 24 hours to schedule your free water test.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="btn btn-ghost" style={{ marginTop: 28 }}>
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value }) => (
  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
    <div style={{
      width: 40, height: 40, borderRadius: 10,
      background: "rgba(251,248,241,0.15)",
      backdropFilter: "blur(8px)",
      color: "var(--paper)",
      display: "flex", alignItems: "center", justifyContent: "center",
      border: "1px solid rgba(251,248,241,0.2)",
    }}>
      <Icon name={icon} size={16} />
    </div>
    <div>
      <div style={{ fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".12em", textTransform: "uppercase", opacity: .6 }}>{label}</div>
      <div style={{ fontSize: 15, marginTop: 2 }}>{value}</div>
    </div>
  </div>
);

const Field = ({ label, error, children }) => (
  <label style={{ display: "block", marginBottom: 16 }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
      <span style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 500 }}>{label}</span>
      {error && <span style={{ fontSize: 12, color: "#B84C3F" }}>{error}</span>}
    </div>
    {children}
  </label>
);

const inputStyle = (err) => ({
  width: "100%",
  padding: "12px 14px",
  border: `1px solid ${err ? "#B84C3F" : "var(--rule)"}`,
  borderRadius: 10,
  background: "var(--bg)",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color .2s ease",
});

// Footer
const Footer = () => {
  const cols = [
    { title: "Solutions", links: ["Custom Whole Home Filters", "Quantum Disinfection", "Whole Home PFAS/PFOA Filters", "Reverse Osmosis"] },
    { title: "Company", links: ["About", "Our process", "Careers", "Blog", "Contact"] },
    { title: "Service areas", links: ["Raleigh", "Durham", "Chapel Hill", "Charlotte", "Asheville", "See all"] },
    { title: "Resources", links: ["Water test reports", "Warranty", "Financing", "Customer portal"] },
  ];
  return (
    <footer style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: 80, paddingBottom: 32 }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr repeat(4, 1fr)", gap: 40, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20, color: "var(--paper)" }}>
              <Logo size={44} />
              <span style={{ fontFamily: "var(--f-display)", fontSize: 22 }}>Tarheel Pure Water</span>
            </div>
            <p style={{ fontSize: 14, opacity: .7, maxWidth: 320, marginBottom: 24 }}>
              Family-owned water solutions for North Carolina homes. Since 2011.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {["IG", "FB", "YT", "LI"].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 999,
                  background: "rgba(251,248,241,0.08)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontFamily: "var(--f-mono)", letterSpacing: ".1em",
                }}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div className="eyebrow" style={{ color: "rgba(251,248,241,0.5)", marginBottom: 16 }}>{c.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {c.links.map(l => (
                  <li key={l}><a href="#" style={{ fontSize: 14, opacity: .75 }}
                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                    onMouseLeave={e => e.currentTarget.style.opacity = 0.75}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark */}
        <div style={{
          fontFamily: "var(--f-display)",
          fontSize: "clamp(80px, 15vw, 240px)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: "rgba(251,248,241,0.06)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          marginBottom: 32,
          fontStyle: "italic",
          fontWeight: 400,
        }}>
          Tarheel Pure.
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, borderTop: "1px solid rgba(251,248,241,0.1)",
          fontSize: 12, opacity: .5,
          flexWrap: "wrap", gap: 16,
        }}>
          <div>© {new Date().getFullYear()} Tarheel Pure Water, LLC · NC Plumbing Lic. #P-XXXXX</div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Contact, Footer });
