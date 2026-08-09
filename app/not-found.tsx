import Link from "next/link";
import { SectionDivider } from "@/components/brand/section-divider";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found-page">
      <div className="frame">
        <p className="eyebrow">404</p>
        <h1>This page has gone quiet.</h1>
        <SectionDivider />
        <p className="not-found-page__message">The page you’re looking for may have moved, changed, or never existed.</p>
        <nav className="not-found-page__actions" aria-label="Not found actions">
          <Link href="/">Return home <span aria-hidden="true">→</span></Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </main>
  );
}
