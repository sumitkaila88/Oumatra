import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/brand/social-icon";
import { legalNavigation, primaryNavigation, siteConfig, type SocialPlatform } from "@/lib/site";

const footerLinks = [...primaryNavigation, ...legalNavigation] as const;
const socialPlatforms: ReadonlyArray<{ platform: SocialPlatform; label: string }> = [
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "instagram", label: "Instagram" },
  { platform: "x", label: "X" },
  { platform: "youtube", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="footer footer-reference" id="footer">
      <div className="footer-reference__main frame">
        <div className="footer-reference__brand">
          <Link href="/" className="footer-reference__symbol" aria-label="OUMATRA home">
            <Image src="/brand/logo/oumatra-symbol-on-dark.svg" alt="" width={240} height={240} />
          </Link>
          <span className="footer-reference__divider" aria-hidden="true" />
          <div className="footer-reference__identity">
            <Link href="/" aria-label="OUMATRA home">
              <Image src="/brand/logo/oumatra-wordmark-on-dark.svg" alt="OUMATRA" width={790} height={140} />
            </Link>
            <p>From Sound. <em>Beyond Silence.</em></p>
            <small>Home to ideas built with purpose, patience, and a long view.</small>
          </div>
        </div>

        <nav className="footer-reference__nav" aria-label="Footer navigation">
          <h2>Explore</h2>
          {footerLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>

        <div className="footer-reference__connect">
          <h2>Stay connected</h2>
          <p>For company, partnership and general enquiries.</p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="footer-reference__contact">
            <span>{siteConfig.contactEmail}</span><b aria-hidden="true">→</b>
          </a>
          <div className="footer-reference__socials" aria-label="OUMATRA social profiles">
            {socialPlatforms.map(({ platform, label }) => {
              const url = siteConfig.socialLinks[platform];
              const icon = <SocialIcon platform={platform} />;

              return url ? (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={`OUMATRA on ${label} (opens in a new tab)`}>{icon}</a>
              ) : (
                <span key={platform} className="footer-reference__social--pending" role="img" aria-label={`OUMATRA on ${label} — coming soon`} title={`${label} — coming soon`}>{icon}</span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer-reference__strip">
        <div className="footer-reference__base frame">
          <div className="footer-reference__copyright"><small>© 2026 OUMATRA. All rights reserved.</small></div>
          <p>One purpose. <i /> Many companies. <i /> Built for generations.</p>
        </div>
      </div>
    </footer>
  );
}
