import { writeFile } from "node:fs/promises";

const ROOT = new URL("../public/brand/", import.meta.url);
const teal = "#0E3D4A";
const peach = "#D08A6A";
const ivory = "#F3F0EB";

const depthDefs = ({ left = teal, right = peach, mono = false, compact = false } = {}) => {
  const lightSurface = left === ivory;
  const leftLight = lightSurface ? "#FFFDF9" : "#397582";
  const leftDark = lightSurface ? "#C9C3BA" : "#062A33";
  const rightDark = mono ? leftDark : "#A85E45";
  return `
  <defs>
    <radialGradient id="left-face"><stop stop-color="${left}"/><stop offset=".7" stop-color="${left}"/><stop offset="1" stop-color="${leftDark}"/></radialGradient>
    <radialGradient id="right-face"><stop stop-color="${right}"/><stop offset=".7" stop-color="${right}"/><stop offset="1" stop-color="${rightDark}"/></radialGradient>
    <linearGradient id="word-face" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${leftLight}"/><stop offset=".2" stop-color="${left}"/><stop offset=".72" stop-color="${left}"/><stop offset="1" stop-color="${leftDark}"/></linearGradient>
    <linearGradient id="word-highlight" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${leftLight}"/><stop offset="1" stop-color="${left}"/></linearGradient>
    <linearGradient id="word-shadow" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${left}"/><stop offset="1" stop-color="${leftDark}"/></linearGradient>
    <filter id="raised" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="0" dy="${compact ? ".5" : "1.4"}" stdDeviation="${compact ? ".35" : ".9"}" flood-color="#061C22" flood-opacity=".3"/></filter>
    <filter id="word-depth" x="-8%" y="-20%" width="116%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="2" result="glowAlpha"/><feFlood flood-color="${left}" flood-opacity=".14"/><feComposite in2="glowAlpha" operator="in" result="glow"/><feDropShadow dx="1.6" dy="2.4" stdDeviation="1.1" flood-color="#061C22" flood-opacity=".38"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <mask id="left-split"><rect width="240" height="240" fill="#fff"/><path d="${leftSplitOuter}" fill="none" stroke="#000" stroke-width="2.6"/><path d="${leftSplitInner}" fill="none" stroke="#000" stroke-width="2.6"/></mask>
    <mask id="right-split"><rect width="240" height="240" fill="#fff"/><path d="${rightSplitOuter}" fill="none" stroke="#000" stroke-width="2.6"/><path d="${rightSplitInner}" fill="none" stroke="#000" stroke-width="2.6"/></mask>
  </defs>`;
};

const leftCrescent = "M104 24C58 34 30 70 30 120s28 86 74 96C76 190 58 157 58 120s18-70 46-96Z";
const rightCrescent = "M136 24c46 10 74 46 74 96s-28 86-74 96c28-26 46-59 46-96s-18-70-46-96Z";
const leftSplitOuter = "M104 24C62 38 39 74 39 120s23 82 65 96";
const leftSplitInner = "M104 24C72 47 49 80 49 120s23 73 55 96";
const rightSplitOuter = "M136 24c42 14 65 50 65 96s-23 82-65 96";
const rightSplitInner = "M136 24c32 23 55 56 55 96s-23 73-55 96";
const leftMiddleCurve = "M104 24C67 42 44 76 44 120s23 78 60 96";
const rightMiddleCurve = "M136 24c37 18 60 52 60 96s-23 78-60 96";

function symbol({ left = teal, right = peach, mono = false, transform = "translate(0 18) scale(1 .85)" } = {}) {
  const waveLeft = mono ? left : teal;
  const waveRight = mono ? right : peach;
  const leftLight = left === ivory ? "#FFFDF9" : "#397582";
  const leftDark = left === ivory ? "#C9C3BA" : "#062A33";
  const rightLight = mono ? leftLight : "#E9AA8D";
  const rightDark = mono ? leftDark : "#A85E45";
  return `<g transform="${transform}">
    <g filter="url(#raised)">
      <path d="${leftCrescent}" fill="${left}" mask="url(#left-split)"/>
      <path d="${rightCrescent}" fill="${right}" mask="url(#right-split)"/>
      <g fill="none" stroke-linecap="butt">
        <path d="${leftMiddleCurve}" stroke="${leftLight}" stroke-opacity=".9" stroke-width="3.8" transform="translate(-1.7 0)"/><path d="${leftMiddleCurve}" stroke="${leftDark}" stroke-opacity=".88" stroke-width="3.8" transform="translate(1.7 0)"/><path d="${leftMiddleCurve}" stroke="${leftLight}" stroke-opacity=".96" stroke-width=".9"/>
        <path d="${rightMiddleCurve}" stroke="${rightLight}" stroke-opacity=".9" stroke-width="3.8" transform="translate(-1.7 0)"/><path d="${rightMiddleCurve}" stroke="${rightDark}" stroke-opacity=".88" stroke-width="3.8" transform="translate(1.7 0)"/><path d="${rightMiddleCurve}" stroke="${rightLight}" stroke-opacity=".96" stroke-width=".9"/>
      </g>
      <g fill="none" stroke-linecap="round">
        <path d="M82 112v16" stroke="${waveLeft}" stroke-width="3"/>
        <path d="M91 102v36" stroke="${waveLeft}" stroke-width="4"/>
        <path d="M100 88v64" stroke="${waveLeft}" stroke-width="5"/>
        <path d="M109 68v104" stroke="${waveLeft}" stroke-width="6"/>
        <path d="M118 38v164" stroke="${waveLeft}" stroke-width="5"/>
        <path d="M126 58v124" stroke="${waveRight}" stroke-width="6"/>
        <path d="M136 78v84" stroke="${waveRight}" stroke-width="5"/>
        <path d="M145 96v48" stroke="${waveRight}" stroke-width="4"/>
        <path d="M153 110v20" stroke="${waveRight}" stroke-width="3"/>
      </g>
      <circle cx="120" cy="12" r="4" fill="${left}"/><circle cx="120" cy="228" r="4" fill="${left}"/>
    </g>
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
