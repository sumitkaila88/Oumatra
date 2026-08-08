const values = [
  {
    title: "Origin with Purpose",
    lead: "We start with meaning.",
    paragraphs: [
      "We believe the strongest ideas begin with a reason to exist — a real need, a genuine possibility, or something worth making better.",
      "We do not build simply because something can be built.",
      "We begin with why it should exist.",
    ],
    icon: "origin",
  },
  {
    title: "Enduring Growth",
    lead: "We choose progress that can last.",
    paragraphs: [
      "Growth matters when it strengthens what already works rather than weakening the foundation beneath it.",
      "We value patience, resilience and responsible ambition over growth for its own sake.",
      "Build steadily. Grow meaningfully. Endure.",
    ],
    icon: "growth",
  },
  {
    title: "Shared Strength",
    lead: "The strongest things are rarely built alone.",
    paragraphs: [
      "Companies are shaped by people, relationships, communities and trust.",
      "We believe collaboration should multiply what each person brings rather than diminish individuality.",
      "We build bridges that last.",
    ],
    icon: "strength",
  },
  {
    title: "Infinite Possibility",
    lead: "The future should never be limited by the obvious.",
    paragraphs: [
      "Curiosity gives ideas room to become something greater than their beginnings.",
      "We explore beyond familiar boundaries while staying grounded in purpose.",
      "Imagine further. Build deliberately.",
    ],
    icon: "possibility",
  },
  {
    title: "Legacy Minded",
    lead: "We think beyond the next milestone.",
    paragraphs: [
      "The decisions worth making today are often the ones that will still make sense years from now.",
      "We want to create companies, products and institutions that remain useful, trusted and meaningful long after their beginning.",
      "We build today with tomorrow in mind.",
    ],
    icon: "legacy",
  },
] as const;

function ValueMark({ type }: { type: string }) {
  return (
    <svg className={`value-mark value-mark--${type}`} viewBox="0 0 120 120" aria-hidden="true">
      <circle className="value-mark__surface" cx="60" cy="60" r="48" />
      {type === "origin" && <><circle cx="60" cy="60" r="25" /><circle cx="60" cy="60" r="13" /><circle className="value-mark__solid" cx="60" cy="60" r="4" /></>}
      {type === "growth" && <><path d="M60 84V40" /><path d="M60 62C47 60 42 52 42 43c12 0 18 6 18 19Z" /><path d="M60 72c15-1 22-9 22-21-14 0-22 7-22 21Z" /></>}
      {type === "strength" && <><path d="M27 71c10-24 24-25 33-5 9-20 23-19 33 5" /><path d="M33 78h54" /><circle className="value-mark__solid" cx="27" cy="71" r="3" /><circle className="value-mark__solid" cx="93" cy="71" r="3" /></>}
      {type === "possibility" && <><path d="M27 61c10-22 24-22 33 0s23 22 33 0" /><path d="M27 61c10 22 24 22 33 0s23-22 33 0" /></>}
      {type === "legacy" && <><path d="M60 88c-22 0-34-13-34-29 0-18 14-31 32-31 20 0 34 15 34 34 0 15-11 27-27 27-15 0-25-10-25-23 0-12 9-21 21-21 10 0 17 7 17 16 0 8-6 14-14 14-6 0-10-4-10-9" /></>}
    </svg>
  );
}

export function Values() {
  return (
    <section className="values values-refined" id="values" aria-labelledby="values-title">
      <div className="frame">
        <header className="values-refined__heading">
          <p className="eyebrow">What guides us</p>
          <h2 id="values-title">How we build matters as much as what we build.</h2>
          <p>These principles shape the choices we make, the companies we nurture, and the things we choose not to compromise.</p>
        </header>

        <ol className="values-sequence">
          {values.map((value, index) => (
            <li className="value-item" key={value.title}>
              <div className="value-item__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              <div className="value-item__visual"><ValueMark type={value.icon} /></div>
              <article className="value-item__content">
                <p className="value-item__index">{String(index + 1).padStart(2, "0")} — {value.title}</p>
                <h3>{value.lead}</h3>
                {value.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
