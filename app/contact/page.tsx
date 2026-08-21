import type { Metadata } from "next";
import Image from "next/image";
import { SectionDivider } from "@/components/brand/section-divider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact — OUMATRA" },
  description: "Contact OUMATRA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main id="main-content" tabIndex={-1} className="contact-wire">
    <section className="contact-wire__hero" aria-labelledby="contact-title">
      <Image className="contact-wire__edge contact-wire__edge--left" src="/brand/about/about-hero-wave-left.svg" alt="" width={360} height={520} aria-hidden="true" />
      <Image className="contact-wire__edge contact-wire__edge--right" src="/brand/about/about-hero-wave-right.svg" alt="" width={360} height={520} aria-hidden="true" />
      <div className="contact-wire__rings" aria-hidden="true" />
      <div className="frame contact-wire__layout">
        <header className="contact-wire__intro">
          <p className="eyebrow">Contact</p>
          <h1 id="contact-title">Some conversations are worth beginning.</h1>
          <SectionDivider />
          <p>For company, partnership and general enquiries, reach OUMATRA here.</p>
        </header>
        <article className="contact-wire__panel" aria-labelledby="contact-pathway-title">
          <div className="contact-wire__wave" aria-hidden="true">{[12,22,36,54,78,108,78,54,36,22,12].map((height,index)=><i key={`${height}-${index}`} style={{height}} />)}</div>
          <p className="contact-wire__label" id="contact-pathway-title">Write to us</p>
          <a className="contact-wire__email" href={`mailto:${siteConfig.contactEmail}`}><span>{siteConfig.contactEmail}</span><b aria-hidden="true">→</b></a>
          <div className="contact-wire__presence"><div><span>Registered presence</span><address>Gurgaon, Haryana</address></div></div>
        </article>
      </div>
    </section>
  </main>;
}
