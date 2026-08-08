import Image from "next/image";

const grooveRadii = Array.from({ length: 25 }, (_, index) => 54 + index * 25);
const signalLines = Array.from({ length: 15 }, (_, index) => index);
const contourLines = Array.from({ length: 30 }, (_, index) => index);
const softContourLines = Array.from({ length: 15 }, (_, index) => index);

function HeroBackdrop() {
  return (
    <svg className="hero-backdrop" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="hero-ivory" cx="50%" cy="42%" r="72%">
          <stop offset="0" stopColor="#fffdfa" />
          <stop offset=".48" stopColor="#f8f4ee" />
          <stop offset=".78" stopColor="#f1ece5" />
          <stop offset="1" stopColor="#e8e1d9" />
        </radialGradient>
        <linearGradient id="left-signal" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#1a4d54" stopOpacity=".72" />
          <stop offset="1" stopColor="#438a94" stopOpacity=".18" />
        </linearGradient>
        <linearGradient id="right-signal" x1="1" y1="0" x2="0" y2="0">
          <stop stopColor="#d98d73" stopOpacity=".82" />
          <stop offset="1" stopColor="#d98d73" stopOpacity=".18" />
        </linearGradient>
        <linearGradient id="terrain-deep" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#174f59" />
          <stop offset="1" stopColor="#07323b" />
        </linearGradient>
        <linearGradient id="terrain-mid" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#7e9396" />
          <stop offset=".48" stopColor="#526f75" />
          <stop offset="1" stopColor="#214f59" />
        </linearGradient>
        <filter id="crest-shadow" x="-10%" y="-30%" width="120%" height="160%">
          <feDropShadow dx="0" dy="-7" stdDeviation="13" floodColor="#0e3d4a" floodOpacity=".2" />
        </filter>
        <clipPath id="left-wave-clip"><path d="M0 512C126 530 220 605 345 640C485 680 593 663 734 699V760H0Z" /></clipPath>
        <clipPath id="right-wave-clip"><path d="M704 760C840 731 946 657 1050 610C1195 544 1307 514 1440 501V760Z" /></clipPath>
        <clipPath id="middle-wave-clip"><path d="M0 642C178 650 266 714 429 711C568 708 626 675 744 680C874 685 932 726 1058 704C1201 679 1283 652 1440 679V760H0Z" /></clipPath>
      </defs>

      <rect width="1440" height="760" fill="url(#hero-ivory)" />

      <g className="hero-backdrop__grooves">
        {grooveRadii.map((radius) => <circle key={radius} cx="720" cy="315" r={radius} />)}
      </g>

      <g className="hero-backdrop__signals hero-backdrop__signals--left">
        {signalLines.map((line) => {
          const height = 260 - line * 16;
          return <line key={line} x1={line * 10} x2={line * 10} y1={330 - height / 2} y2={330 + height / 2} />;
        })}
      </g>
      <g className="hero-backdrop__signals hero-backdrop__signals--right">
        {signalLines.map((line) => {
          const height = 260 - line * 16;
          return <line key={line} x1={1440 - line * 10} x2={1440 - line * 10} y1={330 - height / 2} y2={330 + height / 2} />;
        })}
      </g>

      <g filter="url(#crest-shadow)">
        <path d="M0 512C126 530 220 605 345 640C485 680 593 663 734 699V760H0Z" fill="url(#terrain-deep)" />
        <path d="M704 760C840 731 946 657 1050 610C1195 544 1307 514 1440 501V760Z" fill="url(#terrain-deep)" />
        <path d="M0 642C178 650 266 714 429 711C568 708 626 675 744 680C874 685 932 726 1058 704C1201 679 1283 652 1440 679V760H0Z" fill="url(#terrain-mid)" opacity=".88" />
      </g>

      <g clipPath="url(#left-wave-clip)" className="hero-backdrop__contours">
        {contourLines.map((line) => <path key={line} d={`M-20 ${514 + line * 7}C126 ${532 + line * 6.2} 220 ${607 + line * 4.4} 345 ${642 + line * 3.2}C485 ${682 + line * 2.5} 593 ${665 + line * 3} 754 ${701 + line * 2.1}`} />)}
      </g>
      <g clipPath="url(#right-wave-clip)" className="hero-backdrop__contours">
        {contourLines.map((line) => <path key={line} d={`M684 ${762 + line * .3}C840 ${733 + line * 1.9} 946 ${659 + line * 3} 1050 ${612 + line * 3.7}C1195 ${546 + line * 4.8} 1307 ${516 + line * 5.7} 1460 ${503 + line * 6.4}`} />)}
      </g>
      <g clipPath="url(#middle-wave-clip)" className="hero-backdrop__contours hero-backdrop__contours--soft">
        {softContourLines.map((line) => <path key={line} d={`M-20 ${644 + line * 8}C178 ${652 + line * 6} 266 ${716 + line * 3.4} 429 ${713 + line * 3.1}C568 ${710 + line * 2.8} 626 ${677 + line * 4.1} 744 ${682 + line * 3.6}C874 ${687 + line * 3.2} 932 ${728 + line * 2.2} 1058 ${706 + line * 3}C1201 ${681 + line * 3.8} 1283 ${654 + line * 4.8} 1460 ${681 + line * 3.1}`} />)}
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <HeroBackdrop />
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
