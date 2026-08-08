import { writeFile } from "node:fs/promises";

const ROOT = new URL("../public/brand/", import.meta.url);
const teal = "#1A4D54";
const peach = "#D98D73";
const ivory = "#F3F0EB";

const depthDefs = ({ left = teal, mono = false, compact = false } = {}) => {
  const lightSurface = left === ivory;
  const leftLight = lightSurface ? "#FFFDF9" : "#438A94";
  const leftDark = lightSurface ? "#BDB7AE" : "#1A4D54";
  const rightLight = mono ? leftLight : "#D98D73";
  const rightDark = mono ? leftDark : "#8C4F3E";
  return `
  <defs>
    <linearGradient id="word-face" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${leftLight}"/><stop offset=".2" stop-color="${left}"/><stop offset=".72" stop-color="${left}"/><stop offset="1" stop-color="${leftDark}"/></linearGradient>
    <linearGradient id="word-highlight" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${leftLight}"/><stop offset="1" stop-color="${left}"/></linearGradient>
    <linearGradient id="word-shadow" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${left}"/><stop offset="1" stop-color="${leftDark}"/></linearGradient>
    <filter id="raised" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="${compact ? ".6" : "2"}" dy="${compact ? ".8" : "3"}" stdDeviation="${compact ? ".45" : "2"}" flood-color="#000000" flood-opacity=".46"/></filter>
    <filter id="word-depth" x="-8%" y="-20%" width="116%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="glowAlpha"/><feFlood flood-color="${left}" flood-opacity=".14"/><feComposite in2="glowAlpha" operator="in" result="glow"/><feDropShadow dx="1.6" dy="2.4" stdDeviation="1.1" flood-color="#061C22" flood-opacity=".38"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="dot-inset" x="-80%" y="-80%" width="260%" height="260%"><feDropShadow dx="0" dy="1.2" stdDeviation=".65" flood-color="#000000" flood-opacity=".55"/></filter>
    <radialGradient id="dot-face" cx="34%" cy="30%" r="72%" fx="30%" fy="26%"><stop stop-color="${leftLight}"/><stop offset=".52" stop-color="${left}"/><stop offset="1" stop-color="${leftDark}"/></radialGradient>
    <symbol id="left-wave-bar" viewBox="0 0 8 100" preserveAspectRatio="none"><path d="M4 0C3.2 10 0 29 0 50s3.2 40 4 50Z" fill="${leftLight}"/><path d="M4 0c.8 10 4 29 4 50s-3.2 40-4 50Z" fill="${leftDark}"/></symbol>
    <symbol id="right-wave-bar" viewBox="0 0 8 100" preserveAspectRatio="none"><path d="M4 0C3.2 10 0 29 0 50s3.2 40 4 50Z" fill="${rightLight}"/><path d="M4 0c.8 10 4 29 4 50s-3.2 40-4 50Z" fill="${rightDark}"/></symbol>
  </defs>`;
};

const leftHighlight = "M104 24C58 34 30 70 30 120C30 170 58 206 104 216C67 198 44 164 44 120C44 76 67 42 104 24Z";
const leftShadow = "M104 24C67 42 44 76 44 120C44 164 67 198 104 216C76 190 58 157 58 120C58 83 76 50 104 24Z";
const rightHighlight = "M136 24C164 50 182 83 182 120C182 157 164 190 136 216C173 198 196 164 196 120C196 76 173 42 136 24Z";
const rightShadow = "M136 24C173 42 196 76 196 120C196 164 173 198 136 216C182 206 210 170 210 120C210 70 182 34 136 24Z";

function symbol({ left = teal, mono = false, transform = "translate(0 18) scale(1 .85)" } = {}) {
  return `<g transform="${transform}">
    <g filter="url(#raised)">
      <path d="${leftHighlight}" fill="${left === ivory ? "#FFFDF9" : "#438A94"}"/><path d="${leftShadow}" fill="${left === ivory ? "#BDB7AE" : "#1A4D54"}"/>
      <path d="${rightHighlight}" fill="${mono ? (left === ivory ? "#FFFDF9" : "#438A94") : "#D98D73"}"/><path d="${rightShadow}" fill="${mono ? (left === ivory ? "#BDB7AE" : "#1A4D54") : "#8C4F3E"}"/>
      <use href="#left-wave-bar" x="82.75" y="111" width="2.5" height="18"/><use href="#left-wave-bar" x="91.5" y="101" width="3" height="38"/><use href="#left-wave-bar" x="100.25" y="86" width="3.5" height="68"/><use href="#left-wave-bar" x="108.75" y="66" width="4.5" height="108"/>
      <use href="#left-wave-bar" x="117.5" y="21" width="5" height="198"/>
      <use href="#right-wave-bar" x="126.75" y="66" width="4.5" height="108"/><use href="#right-wave-bar" x="136.25" y="86" width="3.5" height="68"/><use href="#right-wave-bar" x="145.5" y="101" width="3" height="38"/><use href="#right-wave-bar" x="154.75" y="111" width="2.5" height="18"/>
    </g>
    <circle cx="120" cy="12" r="4.5" fill="url(#dot-face)" stroke="${left}" stroke-width=".8" filter="url(#dot-inset)"/><circle cx="120" cy="228" r="4.5" fill="url(#dot-face)" stroke="${left}" stroke-width=".8" filter="url(#dot-inset)"/>
  </g>`;
}

const wordGeometry = `<ellipse cx="35" cy="70" rx="34" ry="40"/><path d="M105 30v52c0 20 10 30 28 30s28-10 28-30V30M220 110V30l32 62 32-62v80M340 110l30-80 30 80M452 30h68m-34 0v80M575 110V30h28c20 0 30 10 30 24s-10 24-30 24h-28m27 0 38 32M690 110l30-80 30 80"/>`;

function wordmark({ colour = teal, transform = "translate(270 43) scale(1 .85)", dotsY = 120, dotOffset = 0, mono = false } = {}) {
  return `<g filter="url(#word-depth)">
    <g transform="${transform} translate(1.2 1.5)" fill="none" stroke="url(#word-shadow)" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round">${wordGeometry}</g>
    <g transform="${transform}" fill="none" stroke="url(#word-face)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">${wordGeometry}</g>
    <g transform="${transform} translate(-.5 -.55)" fill="none" stroke="url(#word-highlight)" stroke-opacity=".8" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round">${wordGeometry}</g>
    <g fill="${mono ? colour : peach}"><circle cx="${640 + dotOffset}" cy="${dotsY}" r="5"/><circle cx="${990 + dotOffset}" cy="${dotsY}" r="5"/></g>
  </g>`;
}

const shell = ({ viewBox, title, body, defs }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-labelledby="title">
${defs}
  <title id="title">${title}</title>
  ${body}
</svg>\n`;

function horizontal({ dark = false, mono = false, tagline = false } = {}) {
  const left = dark ? ivory : teal;
  const right = mono ? left : peach;
  const symbolMarkup = symbol({ left, right, mono, transform: "translate(8 12) scale(.9 .82)" });
  const words = wordmark({ colour: left, transform: `translate(270 ${tagline ? 32 : 43}) scale(1 .85)`, dotsY: tagline ? 112 : 120, mono });
  const taglineMarkup = tagline ? `<g filter="url(#word-depth)"><path d="M290 160h120M890 160h120" stroke="${left}" stroke-width="1.5"/><text x="650" y="168" text-anchor="middle" fill="${left}" font-family="Georgia,'Times New Roman',serif" font-size="24">From Sound. <tspan fill="${peach}">Beyond Silence.</tspan></text></g>` : "";
  return shell({ viewBox: `0 0 1080 ${tagline ? 280 : 220}`, title: `OUMATRA ${tagline ? "horizontal logo with tagline" : "horizontal logo"}${dark ? " for dark backgrounds" : ""}`, defs: depthDefs({ left, right, mono }), body: symbolMarkup + words + taglineMarkup });
}

function stacked({ tagline = false } = {}) {
  const symbolMarkup = symbol({ transform: `translate(310 ${tagline ? 14 : 18}) scale(1 .88)` });
  const words = wordmark({ transform: `translate(50 ${tagline ? 240 : 250}) scale(1 .85)`, dotsY: tagline ? 318 : 328, dotOffset: -220 });
  const taglineMarkup = tagline ? `<g filter="url(#word-depth)"><path d="M105 390h108M647 390h108" stroke="${teal}" stroke-width="1.5"/><text x="430" y="398" text-anchor="middle" fill="${teal}" font-family="Georgia,'Times New Roman',serif" font-size="28">From Sound. <tspan fill="${peach}">Beyond Silence.</tspan></text></g>` : "";
  return shell({ viewBox: `0 0 860 ${tagline ? 480 : 420}`, title: `OUMATRA stacked logo${tagline ? " with tagline" : ""}`, defs: depthDefs(), body: symbolMarkup + words + taglineMarkup });
}

function symbolOnly({ dark = false, mono = false } = {}) {
  const left = dark ? ivory : teal;
  const right = mono ? left : peach;
  return shell({ viewBox: "0 0 240 240", title: `OUMATRA ${mono ? "single-colour " : ""}symbol${dark ? " for dark backgrounds" : ""}`, defs: depthDefs({ left, right, mono }), body: symbol({ left, right, mono }) });
}

function favicon() {
  const tinySymbol = symbol({ left: ivory, right: peach, transform: "translate(0 5) scale(.2667 .235)" });
  return shell({ viewBox: "0 0 64 64", title: "OUMATRA", defs: depthDefs({ left: ivory, right: peach, compact: true }), body: `<rect width="64" height="64" rx="14" fill="${teal}"/>${tinySymbol}` });
}

function social() {
  return shell({ viewBox: "0 0 512 512", title: "OUMATRA social avatar", defs: depthDefs({ left: ivory, right: peach }), body: `<rect width="512" height="512" rx="112" fill="${teal}"/>${symbol({ left: ivory, right: peach, transform: "translate(88 114) scale(1.4 1.18)" })}` });
}

const assets = new Map([
  ["logo/oumatra-logo-horizontal.svg", horizontal()],
  ["logo/oumatra-logo-horizontal-tagline.svg", horizontal({ tagline: true })],
  ["logo/oumatra-logo-horizontal-on-dark.svg", horizontal({ dark: true })],
  ["logo/oumatra-logo-stacked.svg", stacked()],
  ["logo/oumatra-logo-stacked-tagline.svg", stacked({ tagline: true })],
  ["logo/oumatra-logo-monochrome-dark.svg", horizontal({ mono: true })],
  ["logo/oumatra-logo-monochrome-light.svg", horizontal({ dark: true, mono: true })],
  ["logo/oumatra-symbol.svg", symbolOnly()],
  ["logo/oumatra-symbol-on-dark.svg", symbolOnly({ dark: true })],
  ["logo/oumatra-symbol-dark.svg", symbolOnly({ mono: true })],
  ["logo/oumatra-symbol-light.svg", symbolOnly({ dark: true, mono: true })],
  ["favicon/favicon.svg", favicon()],
  ["social/oumatra-social-avatar.svg", social()],
]);

await Promise.all([...assets].map(([path, content]) => writeFile(new URL(path, ROOT), content)));
console.log(`Generated ${assets.size} dimensional OUMATRA SVG assets.`);
