import Image from "next/image";

const companies=[
  {name:"KLANS",mark:"/companies/klans-logo.png",description:"Bringing people closer through the communities, activities and places around them.",cta:"Explore KLANS",className:"company-card--klans"},
  {name:"MEMRY",mark:"/companies/memry-mark.png",description:"Helping everyday life remember, understand and quietly work around you.",cta:"Explore MEMRY",className:"company-card--memry"},
] as const;

export function Companies(){return <section className="companies" id="companies" aria-labelledby="companies-title"><div className="frame">
  <div className="section-label"><span/><div><p id="companies-title">Our companies</p><h2>Ideas, made real.</h2><small>Different ideas. Different journeys. Built with the same belief that meaningful things should be given the chance to endure.</small></div><span/></div>
  <div className="company-grid">{companies.map(company=><article className={`company-card ${company.className}`} key={company.name}>
    <div className="company-card__content"><Image src={company.mark} alt={`${company.name} logo`} width={company.name==="KLANS"?181:928} height={company.name==="KLANS"?181:1152}/><h3>{company.name}</h3><i/><p className="company-card__description">{company.description}</p><span className="company-card__link">{company.cta} <b aria-hidden="true">→</b></span></div>
    <div className="card-rings" aria-hidden="true"/><div className="card-signal" aria-hidden="true"/>
  </article>)}</div>
</div></section>}
