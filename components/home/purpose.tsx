import Image from "next/image";

export function Purpose(){return <section className="purpose" id="purpose" aria-labelledby="purpose-title"><div className="purpose__grid frame">
  <div><p className="eyebrow">Our purpose</p><h2 id="purpose-title">Some ideas deserve more than a moment.</h2><div className="mini-wave" aria-hidden="true"/></div>
  <div className="purpose__copy"><p>We give them the time, conviction and foundation to become companies that matter.</p><p className="accent-copy">We create.<br/>We nurture.<br/>We build what lasts.</p></div>
  <div className="seal" aria-hidden="true"><span/><Image src="/brand/logo/oumatra-symbol-dark.svg" alt="" width={240} height={240}/></div>
</div></section>}
