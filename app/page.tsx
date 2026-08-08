import { BrandMarkReserve } from "@/components/brand-mark-reserve";
import { Ecosystem } from "@/components/ecosystem";
import { Palette } from "@/components/palette";
import { Values } from "@/components/values";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="shell nav" aria-label="Primary navigation">
          <a className="nav-wordmark" href="#top" aria-label="OUMATRA home">
            OUMATRA
          </a>
          <span className="eyebrow">Brand foundation · v1</span>
        </nav>

        <div className="shell hero-content" id="top">
          <BrandMarkReserve />
          <p className="eyebrow">A global parent company</p>
          <h1 id="hero-title">OUMATRA</h1>
          <p className="tagline">
            From Sound. <span>Beyond Silence.</span>
          </p>
          <p className="hero-description">
            Created to build, nurture, and own enduring category-defining companies
            across technology and future industries.
          </p>
        </div>

        <div className="hero-orbit hero-orbit-left" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-right" aria-hidden="true" />
      </section>

      <section className="intro shell section" aria-labelledby="origin-title">
        <div>
          <p className="eyebrow">Origin &amp; intent</p>
          <h2 id="origin-title">From potential to enduring reality.</h2>
        </div>
        <div className="intro-copy">
          <p>
            OUMATRA brings together <strong>OM</strong> — primordial sound, origin,
            and creation — and <strong>Amatra</strong>, the silence beyond OM.
          </p>
          <p>
            The name expresses a journey from origin to creation, from sound to
            silence, and from potential to enduring reality.
          </p>
        </div>
      </section>

      <Palette />
      <Values />
      <Ecosystem />

      <footer className="footer">
        <div className="shell footer-inner">
          <p className="nav-wordmark">OUMATRA</p>
          <p>From Sound. Beyond Silence.</p>
          <p className="footer-note">Brand foundation preview · Step 1</p>
        </div>
      </footer>
    </main>
  );
}
