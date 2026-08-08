const values=[
  ["Origin with Purpose","We start with meaning. We question, listen, and create with intention to solve what truly matters.","target"],
  ["Enduring Growth","We grow with resilience and responsibility. We build for the long term, creating value that lasts.","growth"],
  ["Shared Strength","We believe in the power of partnership. Together, we build bridges that elevate people and strengthen communities.","bridge"],
  ["Infinite Possibility","We imagine beyond boundaries. Curiosity and courage open doors to what’s next.","infinity"],
  ["Legacy Minded","We think in generations. We build today for a better, more meaningful tomorrow.","legacy"],
] as const;

function ValueIcon({type}:{type:string}){return <span className={`value-icon value-icon--${type}`} aria-hidden="true"><i/></span>}
export function Values(){return <section className="values" id="values" aria-labelledby="values-title"><div className="frame">
  <div className="values__heading"><p>Our core values</p><h2 id="values-title">Guided by values. Driven by <em>impact.</em></h2><div className="mini-wave" aria-hidden="true"/></div>
  <ol className="value-grid">{values.map(([title,copy,icon])=><li key={title}><ValueIcon type={icon}/><h3>{title}</h3><p>{copy}</p></li>)}</ol>
</div></section>}
