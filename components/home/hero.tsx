import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-backdrop-image" aria-hidden="true" />
      <div className="hero__inner frame">
        <h1 id="hero-title" className="sr-only">OUMATRA — From Sound. Beyond Silence.</h1>
        <Image className="hero__lockup" src="/brand/logo/oumatra-logo-stacked-tagline.svg" alt="OUMATRA — From Sound. Beyond Silence." width={860} height={480} priority />
        <h2>We build what deserves to endure.</h2>
        <p>OUMATRA is home to ideas and companies built with purpose, patience, and a long view.</p>
        <a className="hero__button" href="#origin">Discover OUMATRA <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}
