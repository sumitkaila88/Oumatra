import Image from "next/image";

const signalBars = Array.from({ length: 13 }, (_, index) => index);

function EdgeSignal({ side }: { side: "left" | "right" }) {
  return (
    <div className={`side-wave side-wave--${side}`} aria-hidden="true">
      {signalBars.map((bar) => <span key={bar} />)}
    </div>
  );
}

function ResonanceTerrain() {
  return (
    <svg className="hero-terrain" viewBox="0 0 1440 330" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="terrain-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#174d58" />
          <stop offset="1" stopColor="#062d37" />
        </linearGradient>
        <linearGradient id="terrain-soft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#99a4a5" />
          <stop offset="1" stopColor="#315966" />
        </linearGradient>
        <filter id="terrain-shadow" x="-10%" y="-30%" width="120%" height="150%">
          <feDropShadow dx="0" dy="-8" stdDeviation="12" floodColor="#0e3d4a" floodOpacity=".2" />
        </filter>
      </defs>
      <g filter="url(#terrain-shadow)">
        <path className="terrain-fill terrain-fill--left" d="M0 92C145 122 236 211 371 245C493 276 590 273 720 290V330H0Z" />
        <path className="terrain-fill terrain-fill--soft" d="M0 214C128 221 223 280 340 284C472 289 547 251 655 252C766 252 829 290 933 291C1020 292 1080 266 1161 251C1250 234 1330 256 1440 275V330H0Z" />
        <path className="terrain-fill terrain-fill--right" d="M778 330C904 317 1005 275 1100 237C1226 187 1312 129 1440 101V330Z" />
      </g>
      <g className="terrain-lines terrain-lines--left">
        {Array.from({ length: 24 }, (_, i) => <path key={i} d={`M0 ${95 + i * 6}C145 ${125 + i * 5} 236 ${211 + i * 3.1} 371 ${245 + i * 2.1}C493 ${276 + i * 1.5} 590 ${273 + i * 1.9} 720 ${290 + i * 1.65}`} />)}
      </g>
      <g className="terrain-lines terrain-lines--soft">
        {Array.from({ length: 11 }, (_, i) => <path key={i} d={`M0 ${217 + i * 8}C128 ${224 + i * 6} 223 ${283 + i * 3} 340 ${287 + i * 2}C472 ${292 + i * 1.3} 547 ${254 + i * 2.7} 655 ${255 + i * 2.3}C766 ${255 + i * 2.1} 829 ${293 + i * 1.5} 933 ${294 + i * 1.2}C1020 ${295 + i} 1080 ${269 + i * 2.2} 1161 ${254 + i * 2.5}C1250 ${237 + i * 3} 1330 ${259 + i * 2.1} 1440 ${278 + i * 1.4}`} />)}
      </g>
      <g className="terrain-lines terrain-lines--right">
        {Array.from({ length: 24 }, (_, i) => <path key={i} d={`M778 ${330 - i * .8}C904 ${317 - i * 1.5} 1005 ${275 - i * 2.4} 1100 ${237 - i * 2.8}C1226 ${187 - i * 3.1} 1312 ${129 - i * 2} 1440 ${101 - i * .8}`} />)}
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__rings" aria-hidden="true" />
      <EdgeSignal side="left" />
      <EdgeSignal side="right" />
      <div className="hero__inner frame">
        <h1 id="hero-title" className="sr-only">OUMATRA — From Sound. Beyond Silence.</h1>
        <Image className="hero__lockup" src="/brand/logo/oumatra-logo-stacked-tagline.svg" alt="OUMATRA — From Sound. Beyond Silence." width={860} height={480} priority />
        <h2>We build what deserves to endure.</h2>
        <p>OUMATRA is home to ideas and companies built with purpose, patience, and a long view.</p>
        <a className="hero__button" href="#origin">Discover OUMATRA <span aria-hidden="true">→</span></a>
      </div>
      <ResonanceTerrain />
    </section>
  );
}
