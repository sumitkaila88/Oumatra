import Image from "next/image";

export function Footer(){return <><footer className="footer" id="footer"><div className="footer__grid frame">
  <div className="footer__brand"><Image src="/brand/logo/oumatra-symbol-on-dark.svg" alt="" width={240} height={240}/><span/><div><Image src="/brand/logo/oumatra-logo-horizontal-on-dark.svg" alt="OUMATRA" width={1080} height={220}/><p>From Sound. <em>Beyond Silence.</em></p><small>A global parent company<br/>that builds and nurtures enduring companies.</small></div></div>
  <nav aria-label="Footer navigation"><h2>Explore</h2><a href="#purpose">About Us</a><a href="#companies">Our Companies</a><a href="#values">Our Values</a><span>Careers</span><span>Insights</span><span>Contact</span></nav>
  <div className="footer__connect"><h2>Stay connected</h2><p>Thoughts, updates, and stories<br/>from across our ecosystem.</p><div className="contact-reserve">Contact channel coming soon <span aria-hidden="true">→</span></div><div className="social-reserve" aria-label="Social channels to be confirmed"><span>in</span><span>×</span><span>✉</span></div></div>
  </div></footer><div className="footer-strip"><div className="frame"><small>© {new Date().getFullYear()} OUMATRA</small><p>One purpose. <i/> Many companies. <i/> Endless possibilities. <i/> Built for generations.</p></div></div></>}
