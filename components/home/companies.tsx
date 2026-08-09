import Image from "next/image";
import { siteConfig } from "@/lib/site";

const companies = [
  {
    name: "KLANS",
    mark: "/companies/klans-logo.png",
    width: 181,
    height: 181,
    kind: "Community",
    description: "Bringing people closer through the communities, activities and places around them.",
    cta: "Learn more",
    href: siteConfig.companies.klans,
    surface: "/companies/klans-panel-background.png",
    className: "company-panel--klans",
  },
  {
    name: "MEMRY",
    mark: "/companies/memry-mark.png",
    width: 928,
    height: 1152,
    kind: "AI & Memory",
    description: "Helping everyday life remember, understand and quietly work around you.",
    cta: "Learn more",
    href: siteConfig.companies.memry,
    surface: "/companies/memry-panel-background.png",
    className: "company-panel--memry",
  },
] as const;

export function Companies() {
  return (
    <section className="companies companies-refined" id="companies" aria-labelledby="companies-title">
      <div className="frame">
        <header className="companies-refined__heading">
          <div><span aria-hidden="true" /><p className="eyebrow">Our companies</p><span aria-hidden="true" /></div>
          <h2 id="companies-title">Building focused businesses. Creating lasting impact.</h2>
        </header>

        <div className="company-panels">
          {companies.map((company) => (
            <article className={`company-panel ${company.className}`} key={company.name}>
              <Image className="company-panel__surface" src={company.surface} alt="" fill sizes="(max-width: 850px) 100vw, 50vw" />
              <div className="company-panel__light" aria-hidden="true" />
              <div className="company-panel__identity">
                <Image
                  src={company.mark}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                />
                <div><h3>{company.name}</h3><p>{company.kind}</p></div>
              </div>
              <div className="company-panel__copy">
                <p>{company.description}</p>
                <a className="company-panel__cta" href={company.href} target="_blank" rel="noopener noreferrer">{company.cta}<b aria-hidden="true">→</b><span className="sr-only"> (opens in a new tab)</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
