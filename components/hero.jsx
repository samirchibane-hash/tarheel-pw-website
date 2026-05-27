// Hero — split layout: editorial left, product/lead-capture right
const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/wIhOgf9kvlvy0pp9SQ2y/webhook-trigger/LKZAFwxjB0wpYeaMYxXt";
const BOOKING_URL = "https://www.tarheelpurewaterservices.co/Book%20Free%20Water%20Test.html";

const HeroForm = () => {
  const [form, setForm] = React.useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | submitting

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!/^[\d\s\-\(\)\+]{7,}$/.test(form.phone)) errs.phone = "Valid phone required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");
    const [firstName, ...rest] = form.name.trim().split(" ");
    const lastName = rest.join(" ") || "";

    try {
      await fetch(GHL_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email: form.email, phone: form.phone, source: "Hero Form" }),
      });
    } catch (_) {}

    window.location.href = BOOKING_URL;
  };

  const fieldStyle = (err) => ({
    width: "100%", padding: "12px 14px", borderRadius: 10, fontSize: 14,
    border: `1px solid ${err ? "#d9534f" : "var(--rule)"}`,
    background: "var(--paper)", color: "var(--ink)",
    outline: "none", fontFamily: "var(--f-text)",
    boxSizing: "border-box",
  });

  return (
    <form onSubmit={handleSubmit} noValidate style={{
      background: "var(--paper)", borderRadius: 18, padding: 24,
      border: "1px solid var(--rule)", boxShadow: "var(--shadow-md)",
      maxWidth: 480, marginBottom: 8,
    }}>
      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Get your free water test</div>
      <p style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 18 }}>
        A licensed tech comes to your home. No obligation, results immediately.
      </p>
      <div style={{ display: "grid", gap: 10, marginBottom: 12 }}>
        <div>
          <input
            type="text" placeholder="Full name" value={form.name}
            onChange={update("name")} style={fieldStyle(errors.name)}
          />
          {errors.name && <div style={{ fontSize: 11, color: "#d9534f", marginTop: 4 }}>{errors.name}</div>}
        </div>
        <div>
          <input
            type="tel" placeholder="Phone number" value={form.phone}
            onChange={update("phone")} style={fieldStyle(errors.phone)}
          />
          {errors.phone && <div style={{ fontSize: 11, color: "#d9534f", marginTop: 4 }}>{errors.phone}</div>}
        </div>
        <div>
          <input
            type="email" placeholder="Email address" value={form.email}
            onChange={update("email")} style={fieldStyle(errors.email)}
          />
          {errors.email && <div style={{ fontSize: 11, color: "#d9534f", marginTop: 4 }}>{errors.email}</div>}
        </div>
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{
        width: "100%", justifyContent: "center", padding: "14px 20px", fontSize: 15,
        opacity: status === "submitting" ? 0.7 : 1,
      }}>
        {status === "submitting" ? "Sending…" : <>Book my free water test <Icon name="arrow" size={14} /></>}
      </button>
      <p style={{ fontSize: 11, color: "var(--ink-4)", marginTop: 10, textAlign: "center" }}>
        Free. No obligation. We never sell your information.
      </p>
    </form>
  );
};

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-wide grid-hero">
        {/* Left column */}
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
            <span className="badge"><span className="dot"></span> Serving NC since 2011</span>
            <span className="badge" style={{ background: "transparent" }}>
              <Stars n={5} size={12} /> 4.9 · 800+ reviews
            </span>
          </div>
          <h1 style={{ marginBottom: 24 }}>
            The cleanest water<br/>
            <span style={{ fontStyle: "italic", color: "var(--blue)" }}>your home</span> has ever poured.
          </h1>
          <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 520, marginBottom: 32, lineHeight: 1.5 }}>
            Custom-built filtration, reverse osmosis, bacteria removal, problem well water and PFAS
            systems installed by our Master Plumber — backed for life.
          </p>

          <HeroForm />

          <a href="tel:+19103806339" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, color: "var(--ink-3)",
          }}>
            <Icon name="phone" size={13} /> Or call us directly: (910) 380-6339
          </a>

          {/* Trust strip */}
          <div style={{
            display: "flex", gap: 28, marginTop: 56, paddingTop: 28,
            borderTop: "1px solid var(--rule)", maxWidth: 540,
          }}>
            {[
              { n: "12k+", l: "homes served" },
              { n: "NSF", l: "certified systems" },
              { n: "Lifetime", l: "equipment warranty" },
            ].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "var(--f-display)", fontSize: 28, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — product hero */}
        <HeroVisual />
      </div>
    </section>
  );
};

const HeroVisual = () => {
  const [before, setBefore] = React.useState(50);

  return (
    <div style={{ position: "relative" }}>
      {/* Background plate */}
      <div style={{
        position: "absolute", inset: "-40px -40px -40px 0",
        background: "radial-gradient(ellipse at 30% 20%, rgba(31,74,160,0.08), transparent 60%)",
        pointerEvents: "none",
      }}/>

      {/* Main image */}
      <div style={{ position: "relative" }}>
        <div style={{
          aspectRatio: "4/5",
          borderRadius: 22,
          overflow: "hidden",
          background: "var(--bg-2)",
          boxShadow: "var(--shadow-md)",
        }}>
          <img
            src="assets/hero-softener-install.jpeg"
            alt="Tarheel Pure Water whole-home filtration system installed in a customer's utility room"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }}
          />
        </div>

        {/* Floating annotation 1 */}
        <div className="hero-annotation"><div style={{
          position: "absolute", top: 40, left: -24,
          background: "var(--paper)",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--rule)",
          display: "flex", gap: 10, alignItems: "center",
          minWidth: 200,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "var(--sage-soft)", color: "var(--sage)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="beaker" size={18} /></div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>hardness</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>
              12 gpg → <span style={{ color: "var(--sage)" }}>0 gpg</span>
            </div>
          </div>
        </div></div>

        {/* Floating annotation 2 */}
        <div className="hero-annotation"><div style={{
          position: "absolute", bottom: 90, right: -24,
          background: "var(--paper)",
          borderRadius: 14,
          padding: "12px 14px",
          boxShadow: "var(--shadow-md)",
          border: "1px solid var(--rule)",
          display: "flex", gap: 10, alignItems: "center",
          minWidth: 220,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "var(--blue-soft)", color: "var(--blue)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}><Icon name="shield" size={18} /></div>
          <div>
            <div style={{ fontSize: 11, color: "var(--ink-3)", fontFamily: "var(--f-mono)", letterSpacing: ".08em", textTransform: "uppercase" }}>protects</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>fixtures · appliances</div>
          </div>
        </div></div>

        {/* Bottom ticker */}
        <div style={{
          position: "absolute", bottom: 20, left: 20, right: 20,
          background: "rgba(20,22,18,0.82)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "var(--paper)",
          padding: "14px 18px",
          borderRadius: 14,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".1em", opacity: .6, textTransform: "uppercase", fontFamily: "var(--f-mono)" }}>recent install</div>
            <div style={{ fontFamily: "var(--f-display)", fontSize: 18 }}>Whole Home Filtration · Leland, NC</div>
          </div>
          <a href="Custom Whole Home Refiner.html" style={{
            padding: "8px 14px", borderRadius: 999,
            background: "var(--paper)", color: "var(--ink)", fontSize: 12, fontWeight: 500,
            display: "inline-flex", alignItems: "center", gap: 6,
            textDecoration: "none",
          }}>
            See system <Icon name="arrow-ne" size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Hero });
