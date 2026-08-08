import Image from "next/image";

export function BrandShowcase() {
  return (
    <section className="showcase section" aria-labelledby="showcase-title">
      <div className="shell">
        <p className="eyebrow">Production system</p>
        <h2 id="showcase-title">One identity, built for every surface.</h2>

        <div className="showcase-grid">
          <figure className="showcase-primary">
            <Image
              src="/brand/logo/oumatra-logo-horizontal-tagline.svg"
              alt="OUMATRA — From Sound. Beyond Silence."
              width={1080}
              height={280}
              priority
            />
            <figcaption>Primary horizontal lockup with tagline</figcaption>
          </figure>

          <figure className="showcase-symbol showcase-light">
            <Image
              src="/brand/logo/oumatra-symbol.svg"
              alt="OUMATRA symbol"
              width={240}
              height={240}
            />
            <figcaption>Full colour · light surface</figcaption>
          </figure>

          <figure className="showcase-symbol showcase-dark">
            <Image
              src="/brand/logo/oumatra-symbol-on-dark.svg"
              alt=""
              aria-hidden="true"
              width={240}
              height={240}
            />
            <figcaption>Full colour · dark surface</figcaption>
          </figure>

          <div className="type-specimen">
            <p className="eyebrow">Typography</p>
            <p className="type-display">Built for generations.</p>
            <p className="type-body">
              Source Serif 4 gives OUMATRA an articulate editorial voice. Manrope
              keeps supporting information precise, contemporary, and readable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
