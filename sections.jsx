// sections.jsx — Below-the-fold sections.
// About, Programs, Work/Clients, Books, Content, Inquiry form, Footer.

const { useState: useStateS, useEffect: useEffectS } = React;

// ──────────────────────────────────────────────────────────────────────
// SectionHeading — shared section title format.
// ──────────────────────────────────────────────────────────────────────
function SectionHeading({ kicker, title, lead, align = "left" }) {
  return (
    <header className={"sec-head sec-head-" + align}>
      <div className="kicker">
        <span className="kicker-dot" />
        {kicker}
      </div>
      <h2 className="sec-h2">
        {title.split("\n").map((line, i) => (
          <span key={i} className="sec-h2-line">
            {line}
            {i < title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h2>
      {lead && <p className="sec-lead">{lead}</p>}
    </header>
  );
}

// ──────────────────────────────────────────────────────────────────────
// About — instructor intro, fields, audiences, contact.
// ──────────────────────────────────────────────────────────────────────
function AboutSection({ t, lang }) {
  return (
    <section id="about" className="sec sec-about" data-screen-label="About">
      <SectionHeading kicker={t.aboutKicker} title={t.aboutTitle} lead={t.aboutLead} />
      <div className="about-grid">
        <div className="about-col">
          <div className="col-label">{t.aboutFieldsLabel}</div>
          <div className="tag-row">
            {t.aboutFields.map((f) => (
              <span
                key={f}
                className={
                  "tag " + (t.aboutFieldsMain.includes(f) ? "tag-accent" : "")
                }
              >
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="about-col">
          <div className="col-label">{t.aboutAudienceLabel}</div>
          <div className="tag-row">
            {t.aboutAudience.map((a) => (
              <span key={a} className="tag">{a}</span>
            ))}
          </div>
        </div>
        <div className="about-col about-col-contact">
          <div className="col-label">{t.aboutContactLabel}</div>
          <a className="about-contact-row" href={"mailto:" + t.aboutEmail}>
            <IconMail />
            <span>{t.aboutEmail}</span>
          </a>
          <a className="about-contact-row" href="#">
            <IconInsta />
            <span>{t.aboutInsta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Programs — three signature tracks.
// ──────────────────────────────────────────────────────────────────────
function ProgramsSection({ t, lang }) {
  return (
    <section id="programs" className="sec sec-programs" data-screen-label="Programs">
      <SectionHeading
        kicker={t.programsKicker}
        title={t.programsTitle}
        lead={t.programsLead}
      />
      <div className="program-grid">
        {t.programs.map((p, i) => (
          <article key={i} className="program-card">
            <div className="program-head">
              <span className="program-tag">{p.tag}</span>
              <span className="program-duration">{p.duration}</span>
            </div>
            <h3 className="program-title">{p.title}</h3>
            <div className="program-for">
              <span className="program-for-label">
                {lang === "ko" ? "대상" : "For"}
              </span>
              <span>{p.for}</span>
            </div>
            <p className="program-desc">{p.desc}</p>
            <ul className="program-outcomes">
              {p.outcomes.map((o) => (
                <li key={o}>
                  <span className="check">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="programs-foot">
        <a href="#inquiry" className="program-link">
          {t.programsCta} <ArrowRight />
        </a>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Work — engagement history (table-ish list + client name marquee/grid).
// ──────────────────────────────────────────────────────────────────────
function WorkSection({ t, lang }) {
  return (
    <section id="work" className="sec sec-work" data-screen-label="Work">
      <SectionHeading kicker={t.workKicker} title={t.workTitle} lead={t.workLead} />
      <div className="work-table">
        {t.work.map((w, i) => (
          <div key={i} className="work-row">
            <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
            <span className="work-name">{w.name}</span>
            <span className="work-org">{w.org}</span>
            <span className="work-tag-cell">
              <span className="tag tag-sm">{w.tag}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="clients-strip">
        <div className="col-label">{t.workClientsLabel}</div>
        <div className="clients-grid">
          {t.workClients.map((c) => (
            <span key={c} className="client-name">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Books — two workbooks + content production services.
// ──────────────────────────────────────────────────────────────────────
function BooksSection({ t, lang }) {
  const coverGradients = [
    "linear-gradient(135deg, #c8531e 0%, #e08a4e 55%, #f3cfa3 100%)",
    "linear-gradient(135deg, #2a3e5a 0%, #4a6a96 55%, #8eb0d6 100%)",
  ];
  return (
    <section id="books" className="sec sec-books" data-screen-label="Books">
      <SectionHeading kicker={t.booksKicker} title={t.booksTitle} lead={t.booksLead} />
      <div className="books-grid">
        {t.books.map((b, i) => (
          <article key={i} className="book-card">
            <div className="book-cover" style={{ background: coverGradients[i] }}>
              <div className="book-cover-stamp">
                <div className="bc-stamp-line">{b.tag}</div>
                <div className="bc-stamp-title">{b.title}</div>
                <div className="bc-stamp-author">{t.heroNameKo}</div>
              </div>
              <div className="book-cover-mark">
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z" />
                  <path d="M4 4v12a4 4 0 0 0 4 4" />
                </svg>
              </div>
            </div>
            <div className="book-body">
              <div className="book-tag-row">
                <span className="tag tag-accent">{b.tag}</span>
                {b.sub && <span className="tag">{b.sub}</span>}
              </div>
              <h3 className="book-title">{b.title}</h3>
              <p className="book-desc">{b.desc}</p>
              <a className="book-link" href={b.link} target="_blank" rel="noreferrer">
                {b.linkLabel}
                <ArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="services">
        <div className="col-label">{t.booksServiceLabel}</div>
        <div className="services-grid">
          {t.booksServices.map((s) => (
            <div key={s.title} className="service-row">
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Content — youtube / instagram / newsletter feed-style.
// ──────────────────────────────────────────────────────────────────────
function ContentSection({ t, lang }) {
  const kindStyle = {
    YouTube: { bg: "#fee9e1", fg: "#a8341a" },
    Instagram: { bg: "#f4dfe9", fg: "#7a2c54" },
    Newsletter: { bg: "#e6e4dc", fg: "#3a3a34" },
  };
  return (
    <section id="content" className="sec sec-content" data-screen-label="Content">
      <SectionHeading
        kicker={t.contentKicker}
        title={t.contentTitle}
        lead={t.contentLead}
      />
      <div className="content-grid">
        {t.contentItems.map((c, i) => {
          const k = kindStyle[c.kind] || { bg: "#eee", fg: "#333" };
          return (
            <a key={i} href="#" className="content-card">
              <div className="content-thumb">
                <div
                  className="content-kind"
                  style={{ background: k.bg, color: k.fg }}
                >
                  {c.kind}
                </div>
                <ContentThumbArt kind={c.kind} />
              </div>
              <div className="content-meta">{c.meta}</div>
              <div className="content-title">{c.title}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ContentThumbArt({ kind }) {
  if (kind === "YouTube") {
    return (
      <svg viewBox="0 0 200 120" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="200" height="120" fill="#1c1a16" />
        <circle cx="100" cy="60" r="22" fill="#fff" opacity="0.92" />
        <polygon points="93,50 93,70 113,60" fill="#1c1a16" />
        <rect x="0" y="100" width="200" height="20" fill="rgba(0,0,0,0.5)" />
      </svg>
    );
  }
  if (kind === "Instagram") {
    return (
      <svg viewBox="0 0 200 120" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="ig" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f3cfa3" />
            <stop offset="100%" stopColor="#c8531e" />
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#ig)" />
        <rect x="60" y="20" width="80" height="80" rx="10" fill="rgba(255,255,255,0.25)" stroke="#fff" strokeWidth="1.5" />
        <circle cx="100" cy="60" r="18" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="124" cy="36" r="3" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="200" height="120" fill="#e6e4dc" />
      <rect x="24" y="24" width="152" height="8" fill="#1c1a16" />
      <rect x="24" y="42" width="120" height="4" fill="#87827a" />
      <rect x="24" y="54" width="140" height="4" fill="#87827a" />
      <rect x="24" y="66" width="100" height="4" fill="#87827a" />
      <rect x="24" y="86" width="50" height="14" rx="3" fill="#c8531e" />
    </svg>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Inquiry form — multi-step feel but single screen.
// ──────────────────────────────────────────────────────────────────────
function InquirySection({ t, lang }) {
  const [audience, setAudience] = useStateS(null);
  const [topic, setTopic] = useStateS(null);
  const [sent, setSent] = useStateS(false);

  function submit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="inquiry" className="sec sec-inquiry" data-screen-label="Inquiry">
      <div className="inquiry-grid">
        <div className="inquiry-intro">
          <SectionHeading
            kicker={t.formKicker}
            title={t.formTitle}
            lead={t.formLead}
          />
          <div className="inquiry-sidekicks">
            <div className="sk-row">
              <IconMail />
              <span>{t.aboutEmail}</span>
            </div>
            <div className="sk-row">
              <IconInsta />
              <span>{t.aboutInsta}</span>
            </div>
            <div className="sk-row sk-quote">
              <em>{t.heroQuote}</em>
            </div>
          </div>
        </div>

        <form className="inquiry-form" onSubmit={submit}>
          <label className="field">
            <span className="field-label">{t.formOrgLabel}</span>
            <input type="text" placeholder={t.formOrgPh} />
          </label>
          <label className="field">
            <span className="field-label">{t.formContactLabel}</span>
            <input type="text" placeholder={t.formContactPh} />
          </label>
          <div className="field">
            <span className="field-label">{t.formAudienceLabel}</span>
            <div className="chip-row">
              {t.formAudienceOpts.map((a) => (
                <button
                  type="button"
                  key={a}
                  className={"chip" + (audience === a ? " chip-on" : "")}
                  onClick={() => setAudience(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <span className="field-label">{t.formTopicLabel}</span>
            <div className="chip-row">
              {t.formTopicOpts.map((a) => (
                <button
                  type="button"
                  key={a}
                  className={"chip" + (topic === a ? " chip-on" : "")}
                  onClick={() => setTopic(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
          <label className="field">
            <span className="field-label">{t.formScheduleLabel}</span>
            <input type="text" placeholder={t.formSchedulePh} />
          </label>
          <label className="field">
            <span className="field-label">{t.formMessageLabel}</span>
            <textarea rows="4" placeholder={t.formMessagePh}></textarea>
          </label>
          <div className="inquiry-submit-row">
            <button type="submit" className="submit-btn">
              {t.formSubmit}
              <ArrowRight />
            </button>
            <span className="inquiry-note">{t.formNote}</span>
          </div>
          {sent && <div className="sent-banner">{t.formSent}</div>}
        </form>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────────────────
function SiteFooter({ t, lang }) {
  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="footer-inner">
        <div className="footer-mark">
          <AxMark size={88} color="rgba(28,26,22,0.65)" />
        </div>
        <div className="footer-line">{t.footerLine}</div>
        <div className="footer-links">
          <a href={"mailto:" + t.aboutEmail}>{t.footerEmailLabel}</a>
          <a href="#">{t.footerInstaLabel}</a>
          <a href="#">{t.footerYoutubeLabel}</a>
        </div>
        <div className="footer-copy">{t.footerCopy}</div>
        <a className="footer-top" href="#top">{t.backToTop} ↑</a>
      </div>
    </footer>
  );
}

Object.assign(window, {
  SectionHeading,
  AboutSection,
  ProgramsSection,
  WorkSection,
  BooksSection,
  ContentSection,
  InquirySection,
  SiteFooter,
});
