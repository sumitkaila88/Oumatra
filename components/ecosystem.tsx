const companies = ["KLANS", "MEMRY", "Future Companies"] as const;

export function Ecosystem() {
  return (
    <section className="ecosystem section" aria-labelledby="ecosystem-title">
      <div className="shell ecosystem-inner">
        <p className="eyebrow eyebrow-light">The OUMATRA ecosystem</p>
        <h2 id="ecosystem-title">One foundation. Many possibilities.</h2>
        <div className="architecture" aria-label="OUMATRA company architecture">
          <div className="parent-node">
            <span>Parent company</span>
            <strong>OUMATRA</strong>
          </div>
          <span className="connector" aria-hidden="true" />
          <ul>
            {companies.map((company) => (
              <li key={company}>{company}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
