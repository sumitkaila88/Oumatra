import Image from "next/image";

function ResonanceIcon() {
  return <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="7"/><circle cx="60" cy="60" r="23"/><circle cx="60" cy="60" r="40"/></svg>;
}

function SilenceIcon() {
  return <svg viewBox="0 0 120 120" aria-hidden="true"><path d="M18 60h10l5-9 7 20 8-40 8 58 8-40 7 22 6-11h8"/><circle cx="94" cy="44" r="3"/><circle cx="94" cy="60" r="3"/><circle cx="94" cy="76" r="3"/></svg>;
}

export function Origin() {
  return (
    <section className="origin-content" id="origin" aria-labelledby="origin-content-title">
      <div className="origin-content__layout frame">
        <div className="origin-content__intro-block">
          <h2 id="origin-content-title">Every idea begins somewhere.</h2>
          <p className="origin-content__intro">OUMATRA takes its name from the space between creation and silence — from what begins to what remains.</p>
        </div>

        <div className="origin-concepts" aria-label="OM to AMATRA to OUMATRA">
          <article className="origin-concept origin-concept--om">
            <p className="origin-concept__step">A Signal.</p>
            <div className="origin-concept__surface"><ResonanceIcon /></div>
            <div><h3>OM</h3><p>The primordial sound — a symbol of origin, possibility and creation.</p></div>
          </article>
          <span className="origin-concepts__continuity origin-concepts__continuity--plus" aria-hidden="true">+</span>
          <article className="origin-concept origin-concept--amatra">
            <p className="origin-concept__step">A Thought.</p>
            <div className="origin-concept__surface"><SilenceIcon /></div>
            <div><h3>AMATRA</h3><p>The silence beyond sound — the space where noise falls away and what matters remains.</p></div>
          </article>
          <span className="origin-concepts__continuity" aria-hidden="true">→</span>
          <article className="origin-concept origin-concept--oumatra">
            <p className="origin-concept__step">A Possibility.</p>
            <div className="origin-concept__surface"><Image src="/brand/logo/oumatra-symbol.svg" alt="" width={240} height={240} /></div>
            <div><h3>OUMATRA</h3><p>From Sound. Beyond Silence.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}
