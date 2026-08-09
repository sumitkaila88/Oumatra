import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/brand/section-divider";
import { PurposeObject } from "@/components/brand/purpose-object";

export const metadata: Metadata = {
  title: { absolute: "About OUMATRA — From Sound. Beyond Silence." },
  description: "What OUMATRA builds begins with what it believes.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <main id="main-content" tabIndex={-1} className="about-wire">
    <section className="about-wire__hero" aria-labelledby="about-title">
      <Image className="about-wire__edge-wave about-wire__edge-wave--left" src="/brand/about/about-hero-wave-left.svg" alt="" width={360} height={520} aria-hidden="true" />
      <Image className="about-wire__edge-wave about-wire__edge-wave--right" src="/brand/about/about-hero-wave-right.svg" alt="" width={360} height={520} aria-hidden="true" />
      <div className="frame about-wire__hero-grid">
        <div className="about-wire__hero-copy"><p className="eyebrow">About OUMATRA</p><h1 id="about-title"><span>What we build begins</span><span>with what we believe.</span></h1><SectionDivider /><p>OUMATRA gives meaningful ideas the time, conviction<br className="about-wire__desktop-break" /> and foundation to become something that lasts.</p></div>
        <div className="inner-purpose-visual"><PurposeObject /></div>
      </div>
    </section>

    <section className="about-wire__why" aria-labelledby="why-title"><div className="frame about-wire__split">
      <div><p className="eyebrow">Why we exist</p><h2 id="why-title"><span>Some ideas deserve the</span><span>chance to become more.</span></h2><p className="about-wire__body">We shape ideas with conviction. We build alongside<br className="about-wire__desktop-break" /> them with patience. And we give them the room<br className="about-wire__desktop-break" /> to become companies with identities and purposes<br className="about-wire__desktop-break" /> of their own.</p><p className="about-wire__cadence"><span>We create.</span><span>We nurture.</span><em>We build what lasts.</em></p></div>
    </div></section>

    <section className="about-wire__presence" aria-labelledby="presence-title"><div className="frame about-wire__split">
      <div className="about-wire__location-visual" aria-hidden="true"><span className="about-wire__pin"><i /></span><div className="about-wire__location-ripples" /></div>
      <div><p className="eyebrow">Our presence</p><h2 id="presence-title">Registered at</h2><address>104-D, Palam Vihar<br />Near Sunny Sweets<br />Ambala Cantt</address><p className="about-wire__accent">Expanding to Gurgaon soon.</p></div>
    </div></section>

    <section className="about-wire__promise" aria-labelledby="promise-title"><div className="about-wire__promise-rings" aria-hidden="true" /><div className="frame"><p className="eyebrow">Our promise</p><h2 id="promise-title">We build what<br />deserves to endure.</h2><nav aria-label="Continue exploring"><Link className="about-wire__primary" href="/companies">Our companies <span aria-hidden="true">→</span></Link><Link className="about-wire__secondary" href="/contact">Contact</Link></nav></div></section>
  </main>;
}
