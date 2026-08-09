import type { ReactNode } from "react";

type LegalDocumentProps = {
  title: string;
  updated: string;
  intro: readonly string[];
  sections: readonly string[];
  idPrefix: string;
  children: ReactNode;
};

export function LegalDocument({ title, updated, intro, sections, idPrefix, children }: LegalDocumentProps) {
  const titleId = `${idPrefix}-title`;

  return (
    <main id="main-content" tabIndex={-1} className="legal-page legal-page--policy">
      <section className="legal-page__content frame" aria-labelledby={titleId}>
        <header className="legal-page__header">
          <p className="eyebrow">OUMATRA</p>
          <h1 id={titleId}>{title}</h1>
          <p className="legal-page__updated">Last updated: {updated}</p>
          <div className="legal-page__rule" aria-hidden="true" />
          <div className="legal-page__intro">{intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </header>
        <div className="legal-page__layout">
          <aside aria-label={`${title} contents`}>
            <p className="legal-page__meta-label">Contents</p>
            <nav>{sections.map((section, index) => <a href={`#${idPrefix}-${index + 1}`} key={section}>{index + 1}. {section}</a>)}</nav>
          </aside>
          <div className="legal-page__body">{children}</div>
        </div>
      </section>
    </main>
  );
}
