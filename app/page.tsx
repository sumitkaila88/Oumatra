import Image from "next/image";
import { BrandShowcase } from "@/components/brand-showcase";
import { Ecosystem } from "@/components/ecosystem";
import { Palette } from "@/components/palette";
import { Values } from "@/components/values";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="shell nav" aria-label="Primary navigation">
          <a className="nav-logo" href="#top" aria-label="OUMATRA home">
            <Image
              src="/brand/logo/oumatra-logo-horizontal.svg"
              alt=""
              aria-hidden="true"
              width={1080}
              height={220}
              priority
            />
          </a>
          <span className="eyebrow">Brand foundation · v1</span>
        </nav>

        <div className="shell hero-content" id="top">
          <Image
            className="hero-logo"
            src="/brand/logo/oumatra-logo-stacked-tagline.svg"
            alt="OUMATRA — From Sound. Beyond Silence."
            width={860}
            height={480}
            priority
          />
          <p className="eyebrow">A global parent company</p>
          <h1 className="visually-hidden" id="hero-title">OUMATRA</h1>
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

      <BrandShowcase />
      <Palette />
      <Values />
      <Ecosystem />

      <footer className="footer">
        <div className="shell footer-inner">
          <Image
            className="footer-logo"
            src="/brand/logo/oumatra-logo-monochrome-light.svg"
            alt="OUMATRA"
            width={1080}
            height={220}
          />
          <p>From Sound. Beyond Silence.</p>
          <p className="footer-note">Production brand system · Step 2</p>
        </div>
      </footer>
    </main>
  );
}
