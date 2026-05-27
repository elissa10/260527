// app.jsx — Root App. Owns:
//  - language toggle (KO / EN)
//  - hero variant selector (A/B/C/D) via Tweaks
//  - accent color tweak (curated swatches)
//  - dark mode tweak
//  - persists choices through the Tweaks host protocol

const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "editorial",
  "lang": "ko",
  "accent": "#c8531e",
  "dark": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const lang = t.lang;
  const copy = window.COPY[lang];

  // accent + dark mode applied as CSS variables on document root.
  useEffectA(() => {
    const r = document.documentElement;
    r.style.setProperty("--accent", t.accent);
    // derive a soft accent tint
    r.style.setProperty("--accent-soft", hexWithAlpha(t.accent, 0.12));
    r.style.setProperty("--accent-ink-on-soft", darken(t.accent, 0.25));
    r.classList.toggle("dark", !!t.dark);
  }, [t.accent, t.dark]);

  const Hero = pickHero(t.heroVariant);

  return (
    <div className="page" id="top">
      <TopNav t={copy} lang={lang} onLang={(v) => setTweak("lang", v)} />
      <main>
        <Hero t={copy} lang={lang} />
        <AboutSection t={copy} lang={lang} />
        <ProgramsSection t={copy} lang={lang} />
        <WorkSection t={copy} lang={lang} />
        <BooksSection t={copy} lang={lang} />
        <ContentSection t={copy} lang={lang} />
        <InquirySection t={copy} lang={lang} />
      </main>
      <SiteFooter t={copy} lang={lang} />

      <TweaksPanel title="Tweaks">
        <TweakSection label={lang === "ko" ? "히어로 레이아웃" : "Hero layout"} />
        <TweakRadio
          label={lang === "ko" ? "변형" : "Variant"}
          value={t.heroVariant}
          options={[
            { value: "editorial", label: "A · Editorial" },
            { value: "magazine", label: "B · Magazine" },
            { value: "bold", label: "C · Bold" },
            { value: "profile", label: "D · Profile" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)}
        />

        <TweakSection label={lang === "ko" ? "언어" : "Language"} />
        <TweakRadio
          label={lang === "ko" ? "표시 언어" : "Display"}
          value={t.lang}
          options={[
            { value: "ko", label: "한국어" },
            { value: "en", label: "English" },
          ]}
          onChange={(v) => setTweak("lang", v)}
        />

        <TweakSection label={lang === "ko" ? "테마" : "Theme"} />
        <TweakColor
          label={lang === "ko" ? "강조 색" : "Accent"}
          value={t.accent}
          options={["#c8531e", "#a23a55", "#3b6d11", "#1e3a8a", "#5a4a3e"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakToggle
          label={lang === "ko" ? "다크 모드" : "Dark mode"}
          value={t.dark}
          onChange={(v) => setTweak("dark", v)}
        />
      </TweaksPanel>
    </div>
  );
}

function pickHero(v) {
  if (v === "magazine") return HeroMagazine;
  if (v === "bold") return HeroBold;
  if (v === "profile") return HeroProfile;
  return HeroEditorial;
}

// ──────────────────────────────────────────────────────────────────────
// Top navigation.
// Sticky bar with name on the left, section links center, language pill right.
// Hides during initial scroll for a calmer above-the-fold feel.
// ──────────────────────────────────────────────────────────────────────
function TopNav({ t, lang, onLang }) {
  const [scrolled, setScrolled] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"topnav" + (scrolled ? " topnav-stick" : "")}>
      <a href="#top" className="brand">
        <span className="brand-mark">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <text
              x="12"
              y="17"
              textAnchor="middle"
              fontFamily="'Newsreader', serif"
              fontStyle="italic"
              fontSize="16"
              fill="currentColor"
            >
              ax
            </text>
          </svg>
        </span>
        <span className="brand-name">{t.siteName}</span>
        <span className="brand-role">{t.siteRole}</span>
      </a>
      <div className="nav-links">
        <a href="#about">{t.navAbout}</a>
        <a href="#programs">{t.navPrograms}</a>
        <a href="#work">{t.navWork}</a>
        <a href="#books">{t.navBooks}</a>
        <a href="#content">{t.navContent}</a>
      </div>
      <div className="nav-right">
        <div className="lang-pill" role="tablist" aria-label="Language">
          <button
            type="button"
            className={lang === "ko" ? "on" : ""}
            onClick={() => onLang("ko")}
          >
            KO
          </button>
          <button
            type="button"
            className={lang === "en" ? "on" : ""}
            onClick={() => onLang("en")}
          >
            EN
          </button>
        </div>
        <a href="#inquiry" className="nav-cta">
          {t.navInquiry}
          <ArrowRight />
        </a>
      </div>
    </nav>
  );
}

// ──────────────────────────────────────────────────────────────────────
// tiny color helpers (no deps)
// ──────────────────────────────────────────────────────────────────────
function hexWithAlpha(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
function darken(hex, amt) {
  const h = hex.replace("#", "");
  const r = Math.max(0, parseInt(h.slice(0, 2), 16) - 255 * amt);
  const g = Math.max(0, parseInt(h.slice(2, 4), 16) - 255 * amt);
  const b = Math.max(0, parseInt(h.slice(4, 6), 16) - 255 * amt);
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
