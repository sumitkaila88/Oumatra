import Image from "next/image";

export function Closing() {
  return (
    <section className="closing-content closing-refined" id="contact" aria-labelledby="closing-content-title">
      <div className="closing-refined__mark" aria-hidden="true">
        <span />
        <Image src="/brand/logo/oumatra-symbol-dark.svg" alt="" width={240} height={240} />
      </div>
      <div className="frame">
        <h2 id="closing-content-title">What begins as an idea can become something that outlives the moment.</h2>
        <p className="closing-refined__line">We build what deserves to endure.</p>
        <nav aria-label="Closing navigation">
          <a href="#origin">About OUMATRA <span aria-hidden="true">→</span></a>
          <a href="#footer">Contact <span aria-hidden="true">→</span></a>
        </nav>
      </div>
    </section>
  );
}
