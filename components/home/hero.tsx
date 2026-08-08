import Image from "next/image";

const grooveRadii = Array.from({ length: 25 }, (_, index) => 54 + index * 25);
const signalLines = Array.from({ length: 15 }, (_, index) => index);
const contourLines = Array.from({ length: 24 }, (_, index) => index);
const softContourLines = Array.from({ length: 12 }, (_, index) => index);

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
        <clipPath id="left-wave-clip"><path d="M0 606C137 619 244 674 374 700C503 726 612 706 748 728V760H0Z" /></clipPath>
        <clipPath id="right-wave-clip"><path d="M692 760C845 743 966 696 1084 650C1215 609 1326 589 1440 580V760Z" /></clipPath>
        <clipPath id="middle-wave-clip"><path d="M0 688C178 693 281 735 436 731C576 727 646 706 754 710C886 715 953 742 1071 729C1212 713 1306 695 1440 711V760H0Z" /></clipPath>
      </defs>

      <rect width="1440" height="760" fill="url(#hero-ivory)" />

      <g className="hero-backdrop__grooves">
        {grooveRadii.map((radius) => <circle key={radius} cx="720" cy="315" r={radius} />)}
      </g>

      <g className="hero-backdrop__signals" stroke="url(#left-signal)">
        {signalLines.map((line) => {
          const height = 300 - line * 18;
          return <line key={line} x1={2 + line * 11} x2={2 + line * 11} y1={390 - height / 2} y2={390 + height / 2} />;
        })}
      </g>
      <g className="hero-backdrop__signals" stroke="url(#right-signal)">
        {signalLines.map((line) => {
          const height = 300 - line * 18;
          return <line key={line} x1={1438 - line * 11} x2={1438 - line * 11} y1={390 - height / 2} y2={390 + height / 2} />;
        })}
      </g>

      <g filter="url(#crest-shadow)">
        <path d="M0 606C137 619 244 674 374 700C503 726 612 706 748 728V760H0Z" fill="url(#terrain-deep)" />
        <path d="M692 760C845 743 966 696 1084 650C1215 609 1326 589 1440 580V760Z" fill="url(#terrain-deep)" />
        <path d="M0 688C178 693 281 735 436 731C576 727 646 706 754 710C886 715 953 742 1071 729C1212 713 1306 695 1440 711V760H0Z" fill="url(#terrain-mid)" opacity=".78" />
      </g>

      <g clipPath="url(#left-wave-clip)" className="hero-backdrop__contours">
        {contourLines.map((line) => <path key={line} d={`M-20 ${608 + line * 5.2}C137 ${621 + line * 4.4} 244 ${676 + line * 3.1} 374 ${702 + line * 2.4}C503 ${728 + line * 1.8} 612 ${708 + line * 2.4} 768 ${730 + line * 1.4}`} />)}
      </g>
      <g clipPath="url(#right-wave-clip)" className="hero-backdrop__contours">
        {contourLines.map((line) => <path key={line} d={`M672 ${762 + line * .25}C845 ${745 + line * 1.25} 966 ${698 + line * 2.2} 1084 ${652 + line * 2.9}C1215 ${611 + line * 3.7} 1326 ${591 + line * 4.4} 1460 ${582 + line * 5}`} />)}
      </g>
      <g clipPath="url(#middle-wave-clip)" className="hero-backdrop__contours hero-backdrop__contours--soft">
        {softContourLines.map((line) => <path key={line} d={`M-20 ${690 + line * 5.5}C178 ${695 + line * 4.5} 281 ${737 + line * 2.5} 436 ${733 + line * 2.2}C576 ${729 + line * 2} 646 ${708 + line * 3} 754 ${712 + line * 2.7}C886 ${717 + line * 2.3} 953 ${744 + line * 1.7} 1071 ${731 + line * 2.1}C1212 ${715 + line * 2.8} 1306 ${697 + line * 3.4} 1460 ${713 + line * 2.2}`} />)}
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
