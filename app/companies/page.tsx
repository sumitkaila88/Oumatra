import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { SectionDivider } from "@/components/brand/section-divider";
import { PurposeObject } from "@/components/brand/purpose-object";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Our Companies — OUMATRA" },
  description: "Independent ideas, given the room to build identities and journeys of their own.",
  alternates: { canonical: "/companies" },
};

type IconName = "people" | "activity" | "posts" | "location" | "understand" | "organize" | "remind" | "assist" | "status" | "calendar" | "website";

function LineIcon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, ReactNode> = {
    people: <><circle cx="10" cy="9" r="4"/><circle cx="22" cy="8" r="3"/><path d="M3 26c0-6 3-10 8-10s8 4 8 10M18 16c5 0 8 3 8 9"/></>,
    activity: <><circle cx="16" cy="6" r="3"/><path d="m13 11-4 5 5 3-3 8M13 12l6 4 4-2M14 19l6 8"/></>,
    posts: <><rect x="4" y="5" width="24" height="20" rx="3"/><path d="M9 11h13M9 16h9M9 21h6"/></>,
    location: <><path d="M25 13c0 8-9 15-9 15S7 21 7 13a9 9 0 1 1 18 0Z"/><circle cx="16" cy="13" r="3"/></>,
    understand: <><path d="M16 4c-6 0-10 4-10 9 0 4 2 6 5 8v5h10v-5c3-2 5-4 5-8 0-5-4-9-10-9Z"/><path d="M12 12c1-3 7-3 8 0M16 9v10M11 26h10"/></>,
    organize: <><rect x="5" y="4" width="22" height="24" rx="3"/><path d="m9 11 2 2 4-4M18 11h5M9 19l2 2 4-4M18 19h5"/></>,
    remind: <><path d="M8 23h16l-2-3v-7a6 6 0 0 0-12 0v7l-2 3Z"/><path d="M14 27h4"/><circle cx="16" cy="5" r="2"/></>,
    assist: <><path d="M16 3c1 7 5 11 12 13-7 2-11 6-12 13-2-7-6-11-13-13 7-2 11-6 13-13Z"/><path d="M25 3v6M22 6h6"/></>,
    status: <><circle cx="16" cy="16" r="10"/><path d="M16 9v7l4 3M16 3v3M16 26v3"/></>,
    calendar: <><rect x="4" y="7" width="24" height="21" rx="3"/><path d="M10 4v6M22 4v6M4 13h24M10 18h2M16 18h2M22 18h1M10 23h2M16 23h2"/></>,
    website: <><circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c4 4 5 8 5 12s-1 8-5 12c-4-4-5-8-5-12s1-8 5-12Z"/><path d="m20 12 5-5M21 7h4v4"/></>,
  };
  return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}>{paths[name]}</svg>;
}

const companies = [
  {
    name: "KLANS", descriptor: "Community", tone: "teal", logo: "/companies/klans-logo.png",
    summary: "A location-first community platform that helps people discover communities, activities and connections around them.",
    features: [["people","Communities"],["activity","Activities"],["posts","Posts"],["location","Local discovery"]] as const,
    facts: [["status","Status","Beta"],["calendar","Planned public launch","October 2026"],["website","Website","https://klans.app/"]] as const,
    href: siteConfig.companies.klans, cta: "Visit KLANS",
  },
  {
    name: "MEMRY", descriptor: "Life Intelligence", tone: "plum", logo: "/companies/memry-mark.png",
    summary: "Helping everyday life remember, understand and quietly work around you.",
    features: [["understand","Understand"],["organize","Organize"],["remind","Remind"],["assist","Assist"]] as const,
    facts: [["status","Status","In development"],["calendar","Launch","TBD"],["website","Website","https://memry.homes/"]] as const,
    href: siteConfig.companies.memry, cta: "Explore MEMRY",
  },
] as const;

export default function CompaniesPage() {
  return <main id="main-content" tabIndex={-1} className="companies-wire">
    <section className="companies-wire__hero" aria-labelledby="companies-title">
      <Image className="companies-wire__edge companies-wire__edge--left" src="/brand/about/about-hero-wave-left.svg" alt="" width={360} height={520} aria-hidden="true" />
      <Image className="companies-wire__edge companies-wire__edge--right" src="/brand/about/about-hero-wave-right.svg" alt="" width={360} height={520} aria-hidden="true" />
      <div className="frame companies-wire__hero-grid"><div><p className="eyebrow">Our companies</p><h1 id="companies-title">Ideas, made real.</h1><SectionDivider /><p>Independent ideas, given the room to build<br />identities and journeys of their own.</p></div><div className="inner-purpose-visual"><PurposeObject /></div></div>
    </section>

    <section className="companies-wire__profiles" aria-label="OUMATRA companies"><div className="frame">
      {companies.map((company) => <article className={`companies-wire__panel companies-wire__panel--${company.tone}`} key={company.name}>
        <div className="companies-wire__story">
          <div className="companies-wire__identity"><Image src={company.logo} alt={`${company.name} logo`} width={100} height={100}/><div><h2>{company.name}</h2><p>{company.descriptor}</p></div></div>
          <i className="companies-wire__accent" aria-hidden="true"/><p className="companies-wire__summary">{company.summary}</p>
          <ul>{company.features.map(([icon,label])=><li key={label}><LineIcon name={icon}/><span>{label}</span></li>)}</ul>
        </div>
        <div className="companies-wire__facts"><dl>{company.facts.map(([icon,label,value])=><div key={label}><LineIcon name={icon}/><dt>{label}</dt><dd>{label === "Website" ? <a href={company.href} target="_blank" rel="noopener noreferrer">{value}<span className="sr-only"> (opens in a new tab)</span></a> : value}</dd></div>)}</dl><a className="companies-wire__cta" href={company.href} target="_blank" rel="noopener noreferrer">{company.cta}<span aria-hidden="true">→</span><span className="sr-only"> (opens in a new tab)</span></a></div>
      </article>)}
    </div></section>

    <section className="companies-wire__belief" aria-label="OUMATRA company philosophy"><div className="frame"><div><p>Different ideas. Different journeys.</p><em>One belief in what’s possible.</em></div><div className="companies-wire__belief-wave" aria-hidden="true"><Image src="/brand/about/about-hero-wave-right.svg" alt="" width={360} height={520} /></div></div></section>
  </main>;
}
