import { PurposeObject } from "@/components/brand/purpose-object";

export function Purpose() {
  return (
    <section className="purpose purpose-refined" id="purpose" aria-labelledby="purpose-title">
      <div className="purpose-refined__inner frame">
        <div className="purpose-refined__statement">
          <p className="eyebrow">Our purpose</p>
          <h2 id="purpose-title">Some ideas deserve more than a moment.</h2>
        </div>

        <div className="purpose-refined__copy">
          <p>We give them the time, conviction and foundation to become companies that matter.</p>
          <p className="purpose-refined__cadence">
            <span>We create.</span>
            <span>We nurture.</span>
            <span>We build what lasts.</span>
          </p>
        </div>

        <PurposeObject />
      </div>
    </section>
  );
}
