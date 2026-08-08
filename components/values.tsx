const values = [
  ["Origin with Purpose", "We start with meaning and create impact."],
  ["Enduring Growth", "We grow with resilience and responsibility."],
  ["Shared Strength", "We build bridges that last."],
  ["Infinite Possibility", "We imagine beyond boundaries."],
  ["Legacy Minded", "We build today for tomorrow's world."],
] as const;

export function Values() {
  return (
    <section className="values shell section" aria-labelledby="values-title">
      <p className="eyebrow">What guides us</p>
      <h2 id="values-title">Principles built to endure.</h2>
      <ol className="value-grid">
        {values.map(([name, description], index) => (
          <li key={name}>
            <span className="value-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
