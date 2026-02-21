const items = [
  {
    title: 'Building hardware',
    description: 'We supply and fabricate steel gates, windows, grilles, building iron, angle iron, channels, hinges, and fasteners. From residential to commercial projects, we have the hardware you need for construction and security.',
    icon: (
      <svg className="what-we-do-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Plumbing',
    description: 'Full range of plumbing supplies: PVC, CPVC, and GI pipes, taps, fittings, valves, basins, and connectors. For new builds or repairs, we stock quality products for water supply and drainage.',
    icon: (
      <svg className="what-we-do-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-8" />
        <path d="M12 14l3-3 3 3-3 3-3-3z" />
        <path d="M5 6h14l-1 6H6L5 6z" />
        <path d="M5 6V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
]

function WhatWeDo() {
  return (
    <section className="what-we-do" id="what-we-do">
      <div className="what-we-do-inner">
        <div className="section-title">
          <span className="overline">What we do</span>
          <h2>We build & supply</h2>
        </div>
        <div className="what-we-do-grid">
          {items.map((item, i) => (
            <div key={i} className="what-we-do-card">
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
