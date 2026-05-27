// hero.jsx — four hero layout variants. Each accepts {t, lang, palette}.
// t = i18n strings (window.COPY[lang]). All variants reuse the same image-slot
// id ("portrait") so a dropped photo persists across variants.

const { useState, useEffect } = React;

// Subtle animated decorative "AX" mark used as a watermark in hero variants.
function AxMark({ size = 220, color = "currentColor", style }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      style={{ display: "block", color, ...style }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ax-stroke" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="url(#ax-stroke)" strokeWidth="0.6" />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="'Newsreader', 'Noto Serif KR', serif"
        fontStyle="italic"
        fontWeight="500"
        fontSize="86"
        fill="currentColor"
        opacity="0.9"
      >
        AX
      </text>
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fontFamily="'Pretendard', sans-serif"
        fontWeight="500"
        fontSize="8"
        letterSpacing="0.32em"
        fill="currentColor"
        opacity="0.55"
      >
        AI · TRANSFORMATION
      </text>
    </svg>
  );
}

// A photo slot. Renders an SVG illustrative placeholder behind the user-fillable
// image-slot. The same `slotId` across variants means the user only has to
// drop their headshot once.
function Portrait({ slotId = "portrait", shape = "rounded", radius = 18, style }) {
  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: shape === "circle" ? "50%" : radius,
          overflow: "hidden",
          background:
            "linear-gradient(160deg, #d8c0a5 0%, #b89472 55%, #8a6648 100%)",
        }}
      >
        {/* very simple illustrative placeholder so the slot isn't empty */}
        <svg
          viewBox="0 0 200 240"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          style={{ display: "block" }}
          aria-hidden="true"
        >
          <rect width="200" height="240" fill="url(#g)" />
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e7d2bb" />
              <stop offset="100%" stopColor="#a37a5c" />
            </linearGradient>
          </defs>
          <ellipse cx="100" cy="240" rx="110" ry="60" fill="#7a5d44" />
          <rect x="40" y="160" width="120" height="100" rx="14" fill="#7a5d44" />
          <ellipse cx="100" cy="105" rx="44" ry="50" fill="#f5d9c0" />
          <ellipse cx="100" cy="78" rx="46" ry="32" fill="#3b2a1c" />
          <rect x="56" y="80" width="14" height="40" rx="6" fill="#3b2a1c" />
          <rect x="130" y="80" width="14" height="40" rx="6" fill="#3b2a1c" />
          <circle cx="86" cy="108" r="3.5" fill="#2a1a10" />
          <circle cx="114" cy="108" r="3.5" fill="#2a1a10" />
          <path
            d="M88 130 Q100 138 112 130"
            stroke="#7a4a32"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <rect x="86" y="160" width="28" height="22" fill="#f5d9c0" />
        </svg>
      </div>
      <image-slot
        id={slotId}
        shape={shape}
        radius={radius}
        placeholder="강사 사진을 여기에 놓으세요"
        style={{ position: "absolute", inset: 0 }}
      ></image-slot>
    </div>
  );
}

// Shared button style.
const btnStyle = (variant) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "13px 22px",
  borderRadius: 999,
  fontFamily: "'Pretendard', sans-serif",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "-0.01em",
  cursor: "pointer",
  textDecoration: "none",
  border: "0.5px solid",
  transition: "transform 0.08s ease, background 0.15s ease",
  ...(variant === "primary"
    ? {
        background: "var(--accent)",
        borderColor: "var(--accent)",
        color: "#fff",
      }
    : {
        background: "transparent",
        borderColor: "var(--ink)",
        color: "var(--ink)",
      }),
});

// ──────────────────────────────────────────────────────────────────────
// Variant A — "Editorial Split"
// Big portrait on the left, full intro stack on the right. Press-feature
// vibe: eyebrow, large name (KR + EN italic), deck, CTAs, meta strip.
// ──────────────────────────────────────────────────────────────────────
function HeroEditorial({ t, lang }) {
  return (
    <section className="hero hero-editorial">
      <div className="hero-grid">
        <div className="hero-portrait-wrap">
          <Portrait slotId="portrait" shape="rounded" radius={22} style={{ aspectRatio: "4/5" }} />
          <div className="hero-portrait-tag">
            <span className="dot" />
            {t.heroLocation}
          </div>
        </div>
        <div className="hero-body">
          <div className="eyebrow">
            <span>{t.heroEyebrow}</span>
            <span className="eyebrow-rule" />
            <span>{t.heroSince}</span>
          </div>
          <h1 className="hero-h1">
            <span className="hero-h1-ko">{t.heroTitle1}</span>
            <br />
            <span className="hero-h1-ko">{t.heroTitle2}</span>
          </h1>
          <div className="hero-byline">
            <span className="hero-name-ko">{t.heroNameKo}</span>
            <span className="hero-name-en">— {t.heroNameEn}</span>
          </div>
          <p className="hero-deck">{t.heroDeck}</p>
          <div className="hero-cta-row">
            <a href="#inquiry" style={btnStyle("primary")}>
              {t.heroCtaPrimary} <ArrowRight />
            </a>
            <a href="#about" style={btnStyle("ghost")}>
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>
      </div>
      <div className="hero-meta-strip">
        <HeroStat label={t.heroStat1Label} value={t.heroStat1Value} />
        <HeroStat label={t.heroStat2Label} value={t.heroStat2Value} />
        <HeroStat label={t.heroStat3Label} value={t.heroStat3Value} />
        <div className="hero-meta-quote">{t.heroQuote}</div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Variant B — "Magazine Cover"
// Big serif name as the centerpiece, portrait card centered below.
// Date / issue chips top-left + top-right. Newsstand feel.
// ──────────────────────────────────────────────────────────────────────
function HeroMagazine({ t, lang }) {
  return (
    <section className="hero hero-magazine">
      <div className="mag-chip mag-chip-tl">
        <div className="mag-chip-k">No. 01</div>
        <div className="mag-chip-v">{t.heroEyebrow}</div>
      </div>
      <div className="mag-chip mag-chip-tr">
        <div className="mag-chip-k">{t.heroLocation}</div>
        <div className="mag-chip-v">{t.heroSince}</div>
      </div>

      <div className="mag-name">
        <span className="mag-name-en">{t.heroNameEn}</span>
        <span className="mag-name-ko">{t.heroNameKo}</span>
      </div>

      <div className="mag-portrait">
        <Portrait slotId="portrait" shape="rounded" radius={20} style={{ aspectRatio: "4/5", width: 280 }} />
        <div className="mag-portrait-caption">
          <em>{lang === "ko" ? "표지의 사람" : "On the cover"}</em>
          <span>{t.siteRole}</span>
        </div>
      </div>

      <div className="mag-deck">
        <h1 className="mag-headline">
          {t.heroTitle1} {t.heroTitle2}
        </h1>
        <p className="mag-paragraph">{t.heroDeck}</p>
        <div className="hero-cta-row" style={{ justifyContent: "center" }}>
          <a href="#inquiry" style={btnStyle("primary")}>
            {t.heroCtaPrimary} <ArrowRight />
          </a>
          <a href="#about" style={btnStyle("ghost")}>
            {t.heroCtaSecondary}
          </a>
        </div>
      </div>

      <div className="mag-foot">
        <span>{t.heroStat1Value} {t.heroStat1Label}</span>
        <span>·</span>
        <span>{t.heroStat2Value} {t.heroStat2Label}</span>
        <span>·</span>
        <span>{t.heroStat3Value}</span>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Variant C — "Bold Type"
// A giant typographic statement dominates. Portrait is small, stamped to
// the side. Negative-space-heavy, confident. AX watermark behind.
// ──────────────────────────────────────────────────────────────────────
function HeroBold({ t, lang }) {
  return (
    <section className="hero hero-bold">
      <div className="bold-watermark" aria-hidden="true">
        <AxMark size={520} color="rgba(200,83,30,0.07)" />
      </div>
      <div className="bold-top">
        <div className="eyebrow">
          <span>{t.heroEyebrow}</span>
          <span className="eyebrow-rule" />
          <span>{t.heroSince}</span>
        </div>
        <div className="bold-portrait">
          <Portrait slotId="portrait" shape="circle" style={{ width: 96, height: 96 }} />
          <div>
            <div className="bold-portrait-name">{t.heroNameKo} · {t.heroNameEn}</div>
            <div className="bold-portrait-role">{t.siteRole}</div>
          </div>
        </div>
      </div>

      <h1 className="bold-h1">
        <span>{t.heroTitle1}</span>
        <br />
        <span>
          <em>{lang === "ko" ? "AI 활용" : "AI training"}</em>
          {lang === "ko" ? " 교육." : ""}
        </span>
      </h1>

      <div className="bold-bottom">
        <p className="bold-deck">{t.heroDeck}</p>
        <div className="bold-actions">
          <div className="hero-cta-row">
            <a href="#inquiry" style={btnStyle("primary")}>
              {t.heroCtaPrimary} <ArrowRight />
            </a>
            <a href="#about" style={btnStyle("ghost")}>
              {t.heroCtaSecondary}
            </a>
          </div>
          <div className="bold-stats">
            <HeroStat label={t.heroStat1Label} value={t.heroStat1Value} />
            <HeroStat label={t.heroStat2Label} value={t.heroStat2Value} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// Variant D — "Profile Sheet"
// Centered vCard. Personal-brand feel. Portrait top, name, role, tags,
// CTAs, contact row.
// ──────────────────────────────────────────────────────────────────────
function HeroProfile({ t, lang }) {
  return (
    <section className="hero hero-profile">
      <div className="profile-card">
        <div className="profile-portrait-row">
          <Portrait slotId="portrait" shape="circle" style={{ width: 132, height: 132 }} />
          <div className="profile-id">
            <div className="eyebrow eyebrow-tight">
              <span>{t.heroEyebrow}</span>
            </div>
            <div className="profile-name">{t.heroNameKo}</div>
            <div className="profile-name-en">{t.heroNameEn}</div>
            <div className="profile-role">{t.siteRole}</div>
          </div>
          <div className="profile-mark">
            <AxMark size={96} color="rgba(28,26,22,0.55)" />
          </div>
        </div>

        <p className="profile-deck">{t.heroDeck}</p>

        <div className="profile-tags">
          {t.aboutFieldsMain.map((f) => (
            <span key={f} className="tag tag-accent">{f}</span>
          ))}
          <span className="tag">{t.heroLocation}</span>
          <span className="tag">{t.heroSince}</span>
        </div>

        <div className="profile-divider" />

        <div className="profile-foot">
          <div className="profile-contact">
            <a href={"mailto:" + t.aboutEmail} className="profile-contact-item">
              <IconMail /> {t.aboutEmail}
            </a>
            <a href="#" className="profile-contact-item">
              <IconInsta /> {t.aboutInsta}
            </a>
          </div>
          <div className="hero-cta-row">
            <a href="#inquiry" style={btnStyle("primary")}>
              {t.heroCtaPrimary} <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────
// helpers
// ──────────────────────────────────────────────────────────────────────
function HeroStat({ label, value }) {
  return (
    <div className="hero-stat">
      <div className="hero-stat-v">{value}</div>
      <div className="hero-stat-l">{label}</div>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}
function IconInsta() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

// Export to window so app.jsx (separate script tag) can read them.
Object.assign(window, {
  HeroEditorial,
  HeroMagazine,
  HeroBold,
  HeroProfile,
  HeroStat,
  ArrowRight,
  IconMail,
  IconInsta,
  Portrait,
  AxMark,
  btnStyle,
});
