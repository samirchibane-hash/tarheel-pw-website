// Referral Program page — Tarheel Pure Water
// $500 bonus to plumbers & existing customers when a referral installs a whole-home system.

const ReferralHero = () => (
  <section className="hero-section">
    <div style={{
      position: "absolute", inset: 0, pointerEvents: "none", opacity: .5,
      background: "radial-gradient(ellipse 1100px 600px at 80% 0%, var(--blue-soft), transparent 60%)",
    }} />
    <div className="container-wide" style={{ position: "relative" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 28 }}>
        <a href="/" style={{ fontSize: 13, color: "var(--ink-3)" }}>Home</a>
        <span style={{ color: "var(--ink-4)" }}>/</span>
        <span style={{ fontSize: 13, color: "var(--ink-2)" }}>Referral Program</span>
      </div>

      <div className="grid-hero" style={{ alignItems: "end" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>// Referral Program</div>
          <h1 style={{ marginBottom: 28, fontSize: "clamp(48px, 6vw, 84px)", letterSpacing: "-0.03em", lineHeight: 0.96 }}>
            Earn <span style={{ fontStyle: "italic", color: "var(--blue)" }}>$500</span><br/>
            for every referral.
          </h1>
          <p style={{ fontSize: 20, color: "var(--ink-2)", maxWidth: 640, lineHeight: 1.5 }}>
            Plumbers and existing customers earn a <strong>$500 bonus</strong> whenever someone
            you refer has a whole-home water system installed by Tarheel Pure Water. Send us a name,
            we&rsquo;ll take care of the rest.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
            <a href="#refer" className="btn btn-primary" style={{ padding: "16px 24px" }}>
              Refer someone now <Icon name="arrow" size={14} />
            </a>
            <a href="tel:+19103806339" className="btn btn-ghost" style={{ padding: "16px 24px" }}>
              Call (910) 380-6339 <Icon name="phone" size={14} />
            </a>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
          borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
        }}>
          {[
            { n: "$500", l: "per qualified referral" },
            { n: "No limit", l: "refer as many as you like" },
            { n: "Fast", l: "paid after install" },
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

const ReferralHow = () => {
  const steps = [
    { n: "01", icon: "search", t: "Send us a name", d: "Tell us who could use cleaner water — a customer, neighbor, friend, or job-site you came across. Use the form below or just give us a call." },
    { n: "02", icon: "drop", t: "They get a whole-home system", d: "We reach out, test their water for free, and install a whole-home water system. No pressure — they only move forward if it's right for them." },
    { n: "03", icon: "check", t: "You get paid $500", d: "Once their whole-home system is installed and paid, we send you a $500 referral bonus. Simple as that — and there's no cap on how many you can earn." },
  ];
  return (
    <section style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// How it works</div>
          <h2 style={{ maxWidth: 720, margin: "0 auto" }}>Three steps to your bonus.</h2>
        </div>
        <div className="grid-3col">
          {steps.map(s => (
            <div key={s.n} style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 20, padding: 32, minHeight: 240, position: "relative",
            }}>
              <div className="kbd-num" style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 20 }}>{s.n}</div>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon name={s.icon} size={20} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 20, marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReferralWhoCanRefer = () => {
  const groups = [
    { icon: "beaker", t: "Plumbers", d: "Run into a home that needs whole-home water treatment? Send it our way. We'll handle the water side and you collect $500 — a clean win for jobs outside your wheelhouse." },
    { icon: "home", t: "Existing customers", d: "Love your Tarheel water? Tell a neighbor, friend, or family member. When they install a whole-home system, that's $500 in your pocket as a thank-you." },
  ];
  return (
    <section>
      <div className="container-wide">
        <div style={{ marginBottom: 48, textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>// Who can refer</div>
          <h2 style={{ maxWidth: 720, margin: "0 auto" }}>Built for the people who know us best.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {groups.map(g => (
            <div key={g.t} style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 20, padding: 36,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon name={g.icon} size={22} />
              </div>
              <h3 style={{ fontFamily: "var(--f-display)", fontSize: 24, marginBottom: 10 }}>{g.t}</h3>
              <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.55 }}>{g.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReferralForm = () => {
  const [form, setForm] = React.useState({
    referrerName: "", referrerEmail: "", referrerPhone: "", referrerType: "Existing customer",
    referredName: "", referredPhone: "", referredCity: "", notes: "",
  });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/wIhOgf9kvlvy0pp9SQ2y/webhook-trigger/LKZAFwxjB0wpYeaMYxXt";

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.referrerName.trim()) errs.referrerName = "Your name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.referrerEmail)) errs.referrerEmail = "Valid email required";
    if (!/^[\d\s\-\(\)\+]{7,}$/.test(form.referrerPhone)) errs.referrerPhone = "Valid phone required";
    if (!form.referredName.trim()) errs.referredName = "Referral's name is required";
    if (!/^[\d\s\-\(\)\+]{7,}$/.test(form.referredPhone)) errs.referredPhone = "Valid phone required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const [firstName, ...rest] = form.referrerName.trim().split(" ");
    try {
      await fetch(GHL_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName: rest.join(" ") || "",
          email: form.referrerEmail,
          phone: form.referrerPhone,
          message:
            `REFERRAL — $500 program\n` +
            `Referrer type: ${form.referrerType}\n` +
            `Referred: ${form.referredName} (${form.referredPhone})` +
            (form.referredCity ? `, ${form.referredCity}` : "") + `\n` +
            (form.notes ? `Notes: ${form.notes}` : ""),
          referrerType: form.referrerType,
          referredName: form.referredName,
          referredPhone: form.referredPhone,
          referredCity: form.referredCity,
          notes: form.notes,
          source: "Referral Program",
        }),
      });
    } catch (_) {}
    setSent(true);
  };

  return (
    <section id="refer" style={{ background: "var(--bg-2)" }}>
      <div className="container-wide">
        <div className="grid-sidebar" style={{ alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>// Refer someone</div>
            <h2 style={{ marginBottom: 20 }}>Send a referral,<br/>start earning.</h2>
            <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 440, marginBottom: 24 }}>
              Fill in your details and who you&rsquo;d like to refer. We&rsquo;ll reach out to them,
              and once their whole-home system is installed, your $500 bonus is on the way.
            </p>
            <div style={{
              background: "var(--paper)", border: "1px solid var(--rule)",
              borderRadius: 18, padding: 24,
            }}>
              <div className="kbd-num" style={{ fontSize: 10, marginBottom: 10 }}>QUESTIONS?</div>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5, marginBottom: 12 }}>
                Prefer to refer over the phone? Give us a call and we&rsquo;ll log it for you.
              </p>
              <a href="tel:+19103806339" style={{ fontSize: 16, fontWeight: 600, color: "var(--blue)" }}>
                (910) 380-6339
              </a>
            </div>
          </div>

          <div style={{
            background: "var(--paper)", borderRadius: 28,
            padding: 40, border: "1px solid var(--rule)",
          }}>
            {!sent ? (
              <form onSubmit={submit}>
                <h3 style={{ marginBottom: 24 }}>Your referral details</h3>

                <div className="kbd-num" style={{ fontSize: 10, color: "var(--ink-3)", marginBottom: 14, letterSpacing: ".12em" }}>YOUR INFO</div>
                <Field label="Your name" error={errors.referrerName}>
                  <input type="text" value={form.referrerName} onChange={update("referrerName")}
                    placeholder="Jane Appleseed" style={inputStyle(errors.referrerName)} />
                </Field>
                <Field label="Your email" error={errors.referrerEmail}>
                  <input type="email" value={form.referrerEmail} onChange={update("referrerEmail")}
                    placeholder="jane@home.com" style={inputStyle(errors.referrerEmail)} />
                </Field>
                <Field label="Your phone" error={errors.referrerPhone}>
                  <input type="tel" value={form.referrerPhone} onChange={update("referrerPhone")}
                    placeholder="(910) 380-6339" style={inputStyle(errors.referrerPhone)} />
                </Field>
                <Field label="I'm a…" error={errors.referrerType}>
                  <select value={form.referrerType} onChange={update("referrerType")}
                    style={{ ...inputStyle(errors.referrerType), fontFamily: "inherit" }}>
                    <option>Existing customer</option>
                    <option>Plumber</option>
                    <option>Other</option>
                  </select>
                </Field>

                <div className="kbd-num" style={{ fontSize: 10, color: "var(--ink-3)", margin: "8px 0 14px", letterSpacing: ".12em" }}>WHO YOU'RE REFERRING</div>
                <Field label="Their name" error={errors.referredName}>
                  <input type="text" value={form.referredName} onChange={update("referredName")}
                    placeholder="John Smith" style={inputStyle(errors.referredName)} />
                </Field>
                <Field label="Their phone" error={errors.referredPhone}>
                  <input type="tel" value={form.referredPhone} onChange={update("referredPhone")}
                    placeholder="(910) 555-0142" style={inputStyle(errors.referredPhone)} />
                </Field>
                <Field label="Their city (optional)" error={errors.referredCity}>
                  <input type="text" value={form.referredCity} onChange={update("referredCity")}
                    placeholder="Wilmington, NC" style={inputStyle(errors.referredCity)} />
                </Field>
                <Field label="Anything we should know? (optional)" error={errors.notes}>
                  <textarea value={form.notes} onChange={update("notes")} rows={3}
                    placeholder="Best time to reach them, water concerns, etc."
                    style={{ ...inputStyle(errors.notes), resize: "vertical", fontFamily: "inherit" }} />
                </Field>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 22px", marginTop: 8 }}>
                  Submit referral <Icon name="arrow" size={14} />
                </button>
                <p style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 14, textAlign: "center" }}>
                  We&rsquo;ll only contact your referral about water-treatment options. No spam — ever.
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
                <h3 style={{ marginBottom: 8 }}>Referral received.</h3>
                <p style={{ color: "var(--ink-2)", maxWidth: 340 }}>
                  Thanks! We&rsquo;ll reach out to your referral soon. Once their whole-home system is
                  installed, we&rsquo;ll send your $500 bonus.
                </p>
                <button onClick={() => { setSent(false); setForm({ referrerName: "", referrerEmail: "", referrerPhone: "", referrerType: "Existing customer", referredName: "", referredPhone: "", referredCity: "", notes: "" }); }}
                  className="btn btn-ghost" style={{ marginTop: 28 }}>
                  Refer someone else
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReferralTerms = () => (
  <section>
    <div className="container-wide">
      <div style={{
        background: "var(--paper)", border: "1px solid var(--rule)",
        borderRadius: 22, padding: 36, maxWidth: 860, margin: "0 auto",
      }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>// The fine print</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            "The $500 bonus is paid after a referred customer completes the purchase and installation of a whole-home water system.",
            "There's no limit on how many people you can refer — every qualified install earns its own $500.",
            "Your referral must be a new customer who hasn't already scheduled with us.",
            "Bonuses are typically sent within 30 days of the completed install.",
          ].map((c, i) => (
            <li key={i} style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              padding: "16px 0",
              borderTop: i === 0 ? "none" : "1px solid var(--rule)",
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: 999,
                background: "var(--blue-soft)", color: "var(--blue)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 2,
              }}>
                <Icon name="check" size={12} />
              </span>
              <span style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.5 }}>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

Object.assign(window, { ReferralHero, ReferralHow, ReferralWhoCanRefer, ReferralForm, ReferralTerms });
