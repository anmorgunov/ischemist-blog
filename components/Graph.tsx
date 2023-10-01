export default function Plotly({ fname }) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
      <iframe
        scrolling="no"
        // src={`/static/images/${fname}.html`}
        src={`https://cdn.bc-pf.org/blog/${fname}.html`}
        title={`Plotly Graph ${fname}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          border: 'none',
        }}
      ></iframe>
    </div>
    // <iframe scrolling="no" src={`/interactive/${fname}.html`} width="100%" height="600px" style={{ overflow: "hidden", border: "none" }}></iframe>
  )
}
