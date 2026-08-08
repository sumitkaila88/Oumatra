const colours = [
  { name: "Deep Teal", value: "#0E3D4A", className: "swatch-teal" },
  { name: "Indigo", value: "#303A6B", className: "swatch-indigo" },
  { name: "Plum", value: "#7B2E5B", className: "swatch-plum" },
  { name: "Warm Peach", value: "#D08A6A", className: "swatch-peach" },
  { name: "Ivory", value: "#F3F0EB", className: "swatch-ivory" },
] as const;

export function Palette() {
  return (
    <section className="palette section" aria-labelledby="palette-title">
      <div className="shell">
        <p className="eyebrow eyebrow-light">The colour system</p>
        <h2 id="palette-title">A grounded, expressive palette.</h2>
        <ul className="swatches" aria-label="OUMATRA brand colours">
          {colours.map((colour) => (
            <li key={colour.name}>
              <span className={`swatch ${colour.className}`} aria-hidden="true" />
              <span className="swatch-name">{colour.name}</span>
              <code>{colour.value}</code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
