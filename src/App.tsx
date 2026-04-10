import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const laneCards = [
  {
    title: 'North shelf',
    detail: 'utility nodes staged close to the user',
    depth: '+220px',
  },
  {
    title: 'Mid drift',
    detail: 'core cards stay readable but clearly separated',
    depth: '+150px',
  },
  {
    title: 'Low runway',
    detail: 'supporting tiles dock lower and farther back',
    depth: '+110px',
  },
]

const metricCards = [
  {
    value: '05',
    label: 'Primary planes',
    note: 'one viewport layout',
  },
  {
    value: '14',
    label: 'Nested surfaces',
    note: 'chips stay lifted',
  },
  {
    value: '3D',
    label: 'Depth cadence',
    note: 'front, mid, far',
  },
]

const stackRows = [
  {
    index: '01',
    title: 'Outer shell',
    detail: 'each card keeps a clear XY lane',
    depth: '+18px',
  },
  {
    index: '02',
    title: 'Raised controls',
    detail: 'inner badges and controls float forward',
    depth: '+36px',
  },
  {
    index: '03',
    title: 'Hero highlights',
    detail: 'visual anchors lead the eye in space',
    depth: '+52px',
  },
]

const flowSteps = [
  {
    step: '01',
    title: 'Anchor XY',
    detail: 'fix shelves in XY first',
  },
  {
    step: '02',
    title: 'Lift on Z',
    detail: 'add depth and mild tilt',
  },
  {
    step: '03',
    title: 'Layer inside',
    detail: 'lift chips as local planes',
  },
]

function App() {
  return (
    <main className="scene-shell" enable-xr-monitor>
      <div className="scene-guides" aria-hidden="true">
        <span className="guide guide-ring"></span>
        <span className="guide guide-axis"></span>
        <span className="guide guide-horizon"></span>
      </div>

      <section className="panel panel-hero" enable-xr>
        <div className="surface-chip panel-tag" enable-xr>
          Windowless spatial layout
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>HTML panels now occupy space instead of a scroll column.</h1>
            <p className="panel-copy hero-copy-text">
              The viewport stays locked. Each module keeps a deliberate XY lane,
              then lifts into space with depth, tilt, and translucent material.
            </p>

            <div className="hero-actions">
              <article className="action-card surface-card" enable-xr>
                <span className="action-eyebrow">Locked viewport</span>
                <strong>No scrollbar chrome</strong>
                <p>Everything fits inside one composed spatial window.</p>
              </article>

              <article className="action-card surface-card" enable-xr>
                <span className="action-eyebrow">Nested depth</span>
                <strong>Panels inside panels</strong>
                <p>Badges, logos, and control tiles can float again.</p>
              </article>
            </div>
          </div>

          <div className="hero-visual" enable-xr>
            <div className="hero-image-shell surface-card" enable-xr>
              <img
                src={heroImg}
                className="hero-image"
                alt="Abstract layered graphic"
              />
            </div>

            <div className="logo-chip logo-react surface-card" enable-xr>
              <img src={reactLogo} alt="" aria-hidden="true" />
            </div>

            <div className="logo-chip logo-vite surface-card" enable-xr>
              <img src={viteLogo} alt="" aria-hidden="true" />
            </div>

            <span className="orbit-chip orbit-chip-a surface-card" enable-xr>
              front rail
            </span>
            <span className="orbit-chip orbit-chip-b surface-card" enable-xr>
              nested planes
            </span>
            <span className="orbit-chip orbit-chip-c surface-card" enable-xr>
              tilted by CSS
            </span>
          </div>
        </div>
      </section>

      <section className="panel panel-map" enable-xr>
        <div className="surface-chip panel-tag" enable-xr>
          Spatial lanes
        </div>
        <h2 className="panel-title">Order before drama.</h2>
        <p className="panel-copy">
          Cards are distributed across fixed shelves so the scene uses the
          entire window without falling back to scrolling.
        </p>

        <div className="lane-grid">
          {laneCards.map((lane) => (
            <article className="lane-card surface-card" enable-xr key={lane.title}>
              <strong>{lane.title}</strong>
              <p>{lane.detail}</p>
              <span className="lane-depth">{lane.depth}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel-stack" enable-xr>
        <div className="surface-chip panel-tag" enable-xr>
          Nested faces
        </div>
        <h2 className="panel-title">Panels can host more floating pieces.</h2>
        <p className="panel-copy">
          Spatialized children inherit the parent lane, then add their own local
          depth offsets and transforms.
        </p>

        <div className="stack-list">
          {stackRows.map((row) => (
            <article className="stack-row surface-card" enable-xr key={row.index}>
              <span className="stack-index">{row.index}</span>
              <div className="stack-copy">
                <strong>{row.title}</strong>
                <p>{row.detail}</p>
              </div>
              <span className="stack-depth">{row.depth}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel-metrics" enable-xr>
        <div className="surface-chip panel-tag" enable-xr>
          Scene readout
        </div>
        <h2 className="panel-title">Depth keeps a readable rhythm.</h2>

        <div className="metrics-grid">
          {metricCards.map((metric) => (
            <article className="metric-card surface-card" enable-xr key={metric.label}>
              <span className="metric-value">{metric.value}</span>
              <strong>{metric.label}</strong>
              <p>{metric.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel-flow" enable-xr>
        <div className="surface-chip panel-tag" enable-xr>
          Build pattern
        </div>
        <h2 className="panel-title">Repeatable spatial recipe.</h2>

        <div className="flow-list">
          {flowSteps.map((item) => (
            <article className="flow-step surface-card" enable-xr key={item.step}>
              <span className="flow-index">{item.step}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="signal-row">
          <span className="signal-chip surface-card" enable-xr>
            glass
          </span>
          <span className="signal-chip surface-card" enable-xr>
            back
          </span>
          <span className="signal-chip surface-card" enable-xr>
            tilt
          </span>
        </div>
      </section>
    </main>
  )
}

export default App
