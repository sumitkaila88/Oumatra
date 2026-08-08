import Image from "next/image";

const footerLinks = [
  ["Our Origin", "#origin"],
  ["Our Purpose", "#purpose"],
  ["Companies", "#companies"],
  ["Values", "#values"],
  ["Contact", "#contact"],
] as const;

export function Footer() {
  return (
    <footer className="footer footer-refined" id="footer">
      <div className="footer-refined__main frame">
        <div className="footer-refined__brand">
          <Image src="/brand/logo/oumatra-logo-horizontal-on-dark.svg" alt="OUMATRA" width={1080} height={220} />
          <p>From Sound. <em>Beyond Silence.</em></p>
        </div>
        <nav aria-label="Footer navigation">
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
      </div>
      <div className="footer-refined__base frame">
        <small>© {new Date().getFullYear()} OUMATRA</small>
        <p>One purpose. <i /> Many companies. <i /> Endless possibilities. <i /> Built for generations.</p>
      </div>
    </footer>
  );
}
