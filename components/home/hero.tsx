import Image from "next/image";

export function Hero(){return <section className="hero" id="top" aria-labelledby="hero-title">
  <div className="hero__rings" aria-hidden="true"/><div className="side-wave side-wave--left" aria-hidden="true"/><div className="side-wave side-wave--right" aria-hidden="true"/>
  <div className="hero__inner frame">
    <h1 id="hero-title" className="sr-only">OUMATRA — From Sound. Beyond Silence.</h1>
    <Image className="hero__lockup" src="/brand/logo/oumatra-logo-stacked-tagline.svg" alt="OUMATRA — From Sound. Beyond Silence." width={860} height={480} priority />
    <h2>We build what deserves to endure.</h2>
    <p>OUMATRA is home to ideas and companies built with purpose, patience, and a long view.</p>
    <a className="hero__button" href="#origin">Discover OUMATRA <span aria-hidden="true">→</span></a>
  </div>
  <div className="wave-hill wave-hill--left" aria-hidden="true"/><div className="wave-hill wave-hill--middle" aria-hidden="true"/><div className="wave-hill wave-hill--right" aria-hidden="true"/>
</section>}
