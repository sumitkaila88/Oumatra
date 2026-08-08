import Image from "next/image";

export function Purpose(){return <section className="purpose" id="purpose" aria-labelledby="purpose-title"><div className="purpose__grid frame">
  <div><p className="eyebrow">Our purpose</p><h2 id="purpose-title">We begin<br/>at the <em>origin.</em><br/>We reach<br/>beyond silence.</h2><div className="mini-wave" aria-hidden="true"/></div>
  <div className="purpose__copy"><p>Sound is movement. It carries meaning, creates connection, and shapes what lasts.</p><p>At OUMATRA, we listen to what matters. We invest with intention. We build with care. We empower teams to create impact that resonates far beyond today.</p><p className="accent-copy">One purpose. Many companies.<br/>Endless possibilities.</p></div>
  <div className="seal" aria-hidden="true"><span/><Image src="/brand/logo/oumatra-symbol-dark.svg" alt="" width={240} height={240}/></div>
</div></section>}
