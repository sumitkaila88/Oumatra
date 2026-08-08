import Image from "next/image";

const companies=[
  {name:"KLANS",mark:"/companies/klans-logo.png",kind:"Community",description:"Building meaningful communities that inspire connection, collaboration, and growth.",className:"company-card--klans"},
  {name:"MEMRY",mark:"/companies/memry-mark.png",kind:"AI & Memory",description:"Building intelligent systems that understand, remember, and elevate human potential.",className:"company-card--memry"},
] as const;

export function Companies(){return <section className="companies" id="companies" aria-labelledby="companies-title"><div className="frame">
  <div className="section-label"><span/><div><p id="companies-title">Our companies</p><small>Building focused businesses. Creating lasting impact.</small></div><span/></div>
  <div className="company-grid">{companies.map(company=><article className={`company-card ${company.className}`} key={company.name}>
    <div className="company-card__content"><Image src={company.mark} alt={`${company.name} logo`} width={company.name==="KLANS"?181:928} height={company.name==="KLANS"?181:1152}/><h2>{company.name}</h2><p className="company-card__kind">{company.kind}</p><i/><p className="company-card__description">{company.description}</p><span className="company-card__link">Learn more <b aria-hidden="true">→</b></span></div>
    <div className="card-rings" aria-hidden="true"/><div className="card-signal" aria-hidden="true"/>
  </article>)}</div>
</div></section>}
