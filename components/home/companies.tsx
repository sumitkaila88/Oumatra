import Image from "next/image";

const companies = [
  {
    name: "KLANS",
    mark: "/companies/klans-logo.png",
    width: 181,
    height: 181,
    description: "Bringing people closer through the communities, activities and places around them.",
    cta: "Explore KLANS",
    className: "company-panel--klans",
  },
  {
    name: "MEMRY",
    mark: "/companies/memry-mark.png",
    width: 928,
    height: 1152,
    description: "Helping everyday life remember, understand and quietly work around you.",
    cta: "Explore MEMRY",
    className: "company-panel--memry",
  },
] as const;

export function Companies() {
  return (
    <section className="companies companies-refined" id="companies" aria-labelledby="companies-title">
      <div className="frame">
        <header className="companies-refined__heading">
          <p className="eyebrow">Our companies</p>
          <h2 id="companies-title">Ideas, made real.</h2>
          <p>Different ideas. Different journeys. Built with the same belief that meaningful things should be given the chance to endure.</p>
        </header>

        <div className="company-panels">
          {companies.map((company) => (
            <article className={`company-panel ${company.className}`} key={company.name}>
              <div className="company-panel__light" aria-hidden="true" />
              <div className="company-panel__identity">
                <Image
                  src={company.mark}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                />
                <h3>{company.name}</h3>
              </div>
              <div className="company-panel__copy">
                <p>{company.description}</p>
                <span className="company-panel__cta">{company.cta}<b aria-hidden="true">→</b></span>
              </div>
              <div className="company-panel__layers" aria-hidden="true"><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
