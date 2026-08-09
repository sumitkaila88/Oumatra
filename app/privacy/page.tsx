import type { Metadata } from "next";
import { LegalDocument } from "@/components/inner/legal-document";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy — OUMATRA" },
  description: "How OUMATRA collects, uses, protects, and handles personal information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  "Information We Collect",
  "How We Use Information",
  "Contact Communications",
  "Cookies and Analytics",
  "Sharing of Information",
  "Third-Party Websites",
  "Data Retention",
  "Data Security",
  "Your Choices and Rights",
  "Children’s Privacy",
  "International Processing",
  "Changes to This Privacy Policy",
  "Contact",
] as const;

const sectionId = (index: number) => `privacy-${index + 1}`;

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" updated="August 2026" idPrefix="privacy" sections={sections} intro={["OUMATRA respects your privacy and is committed to handling personal information responsibly and transparently.", "This Privacy Policy explains how information may be collected, used, and protected when you visit the OUMATRA website or contact us."]}>
            <section id={sectionId(0)}><h2>1. Information We Collect</h2><p>The OUMATRA website is designed to collect as little personal information as reasonably necessary.</p><p>We may receive information that you choose to provide directly to us, such as when you contact us by email. This may include your name, email address, organisation, message content, and any other information you voluntarily include in your communication.</p><p>We may also receive limited technical information that is ordinarily generated when a website is accessed, such as browser type, device type, approximate location derived from an IP address, referring page, and basic server or security logs.</p><p>We do not intentionally collect sensitive personal information through this website.</p></section>

            <section id={sectionId(1)}><h2>2. How We Use Information</h2><p>Information received through the website or by email may be used to:</p><ul><li>respond to enquiries and communications;</li><li>evaluate potential business, partnership, or other professional opportunities;</li><li>maintain the security and reliability of the website;</li><li>prevent fraud, abuse, or misuse;</li><li>comply with applicable legal obligations; and</li><li>maintain records where reasonably necessary for business purposes.</li></ul><p>We do not use information collected through this website to make automated decisions about individuals.</p></section>

            <section id={sectionId(2)}><h2>3. Contact Communications</h2><p>If you contact OUMATRA at <a href="mailto:founders@oumatra.com">founders@oumatra.com</a>, the information contained in your email will be used primarily to understand and respond to your enquiry.</p><p>Please do not send confidential, financial, medical, identity-document, password, or other highly sensitive information unless specifically requested through an appropriate secure process.</p></section>

            <section id={sectionId(3)}><h2>4. Cookies and Analytics</h2><p>OUMATRA currently intends to keep the corporate website lightweight and privacy-conscious.</p><p>If the website does not use analytics, advertising trackers, or non-essential cookies, no consent-based tracking is performed for those purposes.</p><p>Essential technical mechanisms may still be used where necessary for website security, hosting, performance, or basic functionality.</p><p>If analytics, cookies, advertising technologies, or similar tracking tools are introduced in the future, this Privacy Policy and any applicable cookie controls will be updated accordingly.</p></section>

            <section id={sectionId(4)}><h2>5. Sharing of Information</h2><p>OUMATRA does not sell personal information.</p><p>Information may be shared only where reasonably necessary with service providers supporting the operation of the website or business, such as hosting, email, security, or infrastructure providers.</p><p>Such information may also be disclosed where required by law, regulation, legal process, or a competent governmental or judicial authority.</p></section>

            <section id={sectionId(5)}><h2>6. Third-Party Websites</h2><p>The OUMATRA website may contain links to websites operated by other companies, including companies associated with OUMATRA.</p><p>Those websites may maintain their own privacy policies and data practices.</p><p>OUMATRA is not responsible for the privacy practices of third-party websites. Visitors should review the applicable privacy policy before providing personal information to another service.</p></section>

            <section id={sectionId(6)}><h2>7. Data Retention</h2><p>Personal information is retained only for as long as reasonably necessary for the purpose for which it was collected, including responding to communications, maintaining appropriate business records, resolving disputes, protecting legitimate interests, and meeting applicable legal obligations.</p><p>Retention periods may vary depending on the nature of the information and the reason it was collected.</p></section>

            <section id={sectionId(7)}><h2>8. Data Security</h2><p>OUMATRA takes reasonable administrative, technical, and organisational measures intended to protect personal information against unauthorised access, loss, misuse, alteration, or disclosure.</p><p>No internet transmission or storage system can, however, be guaranteed to be completely secure.</p></section>

            <section id={sectionId(8)}><h2>9. Your Choices and Rights</h2><p>Depending on applicable law and the circumstances of the processing, you may have rights relating to your personal information, including the ability to request information about how your data is processed, request correction or updating of inaccurate information, request deletion where appropriate, or withdraw consent where processing is based on consent.</p><p>To make a privacy-related request, contact:</p><p><a href="mailto:founders@oumatra.com">founders@oumatra.com</a></p><p>We may need to verify your identity before processing certain requests.</p></section>

            <section id={sectionId(9)}><h2>10. Children’s Privacy</h2><p>The OUMATRA corporate website is not specifically directed toward children and is not intended to knowingly collect personal information from children through the website.</p><p>If we become aware that personal information has been collected in circumstances requiring parental or guardian consent, we will take appropriate steps in accordance with applicable law.</p></section>

            <section id={sectionId(10)}><h2>11. International Processing</h2><p>Some service providers used to operate the website, email systems, or supporting infrastructure may process information in jurisdictions outside India.</p><p>Where personal information is transferred or processed internationally, OUMATRA will seek to use appropriate safeguards consistent with applicable law.</p></section>

            <section id={sectionId(11)}><h2>12. Changes to This Privacy Policy</h2><p>This Privacy Policy may be updated from time to time to reflect changes in the website, OUMATRA’s business practices, technology, or applicable legal requirements.</p><p>The current version will be published on this page together with the date of the latest update.</p></section>

            <section id={sectionId(12)}><h2>13. Contact</h2><p><a href="/contact">Contact OUMATRA</a></p></section>
    </LegalDocument>
  );
}
