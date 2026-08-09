import { SectionDivider } from "@/components/brand/section-divider";

export const values = [
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
    title: "Infinite Possibilities",
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

type ValueMarkType = (typeof values)[number]["icon"];

export function ValueMark({ type }: { type: ValueMarkType }) {
  return (
    <svg className={`value-mark value-mark--${type}`} viewBox="0 0 120 120" aria-hidden="true">
      <circle className="value-mark__surface" cx="60" cy="60" r="48" />
      {type === "origin" && <><circle cx="60" cy="60" r="31" /><circle cx="60" cy="60" r="17" /><circle className="value-mark__solid" cx="60" cy="60" r="5" /></>}
      {type === "growth" && <><circle cx="60" cy="60" r="39" /><path d="M60 89V43" /><path d="M60 62C48 61 42 55 41 44c12 0 19 6 19 18Z" /><path d="M60 72c14-1 22-9 22-22-14 0-22 8-22 22Z" /><path d="M60 82c-10-1-16-7-16-16 10 0 16 6 16 16Z" /></>}
      {type === "strength" && <><circle cx="60" cy="60" r="39" /><path d="M25 70h70M25 78h70" /><path d="M34 83V49M86 83V49" /><path d="M34 54c7 8 15 12 26 12s19-4 26-12" /><path d="M42 70V61M51 70v-5M69 70v-5M78 70v-9" /></>}
      {type === "possibility" && <path d="M20 60C20 37 42 37 60 60C78 83 100 83 100 60C100 37 78 37 60 60C42 83 20 83 20 60Z" />}
      {type === "legacy" && <><path d="M88 45c-8-13-24-19-39-14-19 6-29 27-21 45 8 19 31 27 49 16" /><path d="M86 72c4-14-4-29-18-34-15-5-31 3-36 18-5 14 3 29 17 34" /><path d="M48 77c-7-8-5-21 4-27 10-6 23-2 28 8 4 9 0 19-8 24" /><path d="M55 68c0-7 6-12 13-11 7 1 11 8 8 14" /></>}
    </svg>
  );
}

export function Values() {
  return (
    <section className="values values-refined" id="values" aria-labelledby="values-title">
      <div className="frame">
        <header className="values-refined__heading">
          <p className="eyebrow">Our core values</p>
          <h2 id="values-title">Guided by values. Driven by <em>impact.</em></h2>
          <p>These principles shape the choices we make, the companies we nurture, and the things we choose not to compromise.</p>
          <SectionDivider />
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
