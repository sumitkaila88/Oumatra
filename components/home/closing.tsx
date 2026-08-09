import Link from "next/link";

export function Closing() {
  return (
    <section className="closing-content closing-refined" id="contact" aria-labelledby="closing-content-title">
      <div className="closing-refined__layout frame">
        <div className="closing-refined__content">
          <h2 id="closing-content-title">What begins as an idea can become something that outlives the moment.</h2>
          <p className="closing-refined__line">We build what deserves to endure.</p>
          <nav aria-label="Closing navigation">
            <Link href="/about">About OUMATRA <span aria-hidden="true">→</span></Link>
            <Link href="/contact">Contact <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
