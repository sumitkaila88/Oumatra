import { writeFile } from "node:fs/promises";

const ROOT = new URL("../public/brand/", import.meta.url);
const teal = "#0E3D4A";
const peach = "#D08A6A";
const ivory = "#F3F0EB";

const depthDefs = ({ left = teal, right = peach, mono = false, compact = false } = {}) => `
  <defs>
    <linearGradient id="left-face" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${mono ? left : "#377482"}"/><stop offset=".38" stop-color="${left}"/><stop offset="1" stop-color="${mono ? left : "#062A33"}"/></linearGradient>
    <linearGradient id="right-face" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${mono ? right : "#F0B092"}"/><stop offset=".45" stop-color="${right}"/><stop offset="1" stop-color="${mono ? right : "#A95F46"}"/></linearGradient>
    <linearGradient id="word-face" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${left}"/><stop offset=".52" stop-color="${left}"/><stop offset="1" stop-color="${mono ? left : "#082D37"}"/></linearGradient>
    <filter id="raised" x="-30%" y="-30%" width="170%" height="180%"><feGaussianBlur in="SourceAlpha" stdDeviation="${compact ? ".45" : "1.1"}" result="blur"/><feOffset in="blur" dx="${compact ? ".7" : "2.2"}" dy="${compact ? "1" : "3.2"}" result="offsetBlur"/><feFlood flood-color="#061C22" flood-opacity=".42" result="shadowColour"/><feComposite in="shadowColour" in2="offsetBlur" operator="in" result="shadow"/><feGaussianBlur in="SourceAlpha" stdDeviation="${compact ? ".25" : ".65"}" result="softAlpha"/><feSpecularLighting in="softAlpha" surfaceScale="2" specularConstant=".36" specularExponent="18" lighting-color="#FFFFFF" result="specular"><feDistantLight azimuth="225" elevation="52"/></feSpecularLighting><feComposite in="specular" in2="SourceAlpha" operator="in" result="lit"/><feComponentTransfer in="lit" result="softLit"><feFuncA type="linear" slope=".24"/></feComponentTransfer><feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/><feMergeNode in="softLit"/></feMerge></filter>
    <filter id="word-depth" x="-8%" y="-20%" width="116%" height="150%"><feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="glowAlpha"/><feFlood flood-color="${mono && left === ivory ? ivory : "#FFFFFF"}" flood-opacity=".18"/><feComposite in2="glowAlpha" operator="in" result="glow"/><feDropShadow dx="1.8" dy="2.8" stdDeviation="1.35" flood-color="#061C22" flood-opacity=".42"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>`;

const leftCrescent = "M104 24C58 34 30 70 30 120s28 86 74 96C76 190 58 157 58 120s18-70 46-96Z";
const rightCrescent = "M136 24c46 10 74 46 74 96s-28 86-74 96c28-26 46-59 46-96s-18-70-46-96Z";

function symbol({ left = teal, right = peach, mono = false, transform = "translate(0 18) scale(1 .85)" } = {}) {
  const waveLeft = mono ? left : teal;
  const waveRight = mono ? right : peach;
  return `<g transform="${transform}">
    <g filter="url(#raised)">
      <path d="${leftCrescent}" fill="url(#left-face)" stroke="${mono ? left : "#5E929D"}" stroke-width="1.25"/>
      <path d="${rightCrescent}" fill="url(#right-face)" stroke="${mono ? right : "#F3C0A8"}" stroke-width="1.25"/>
      <path d="${leftCrescent}" fill="none" stroke="#FFFFFF" stroke-opacity=".28" stroke-width="1" transform="translate(-1 -1)"/>
      <path d="${rightCrescent}" fill="none" stroke="#FFFFFF" stroke-opacity=".34" stroke-width="1" transform="translate(-1 -1)"/>
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
    <g transform="${transform}" fill="none" stroke="#FFFFFF" stroke-opacity=".18" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">${wordGeometry}</g>
    <g transform="${transform}" fill="none" stroke="url(#word-face)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round">${wordGeometry}</g>
    <g transform="${transform} translate(-.55 -.55)" fill="none" stroke="#FFFFFF" stroke-opacity=".38" stroke-width=".7" stroke-linecap="round" stroke-linejoin="round">${wordGeometry}</g>
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
