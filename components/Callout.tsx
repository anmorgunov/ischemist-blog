const CIdea = ({ children }) => {
  return <div className="not-prose border-l-4 border-yellow-300 pl-4 pr-10 py-2">💡 {children}</div>
}

const CFact = ({ children }) => {
  return <div className="not-prose border-l-4 border-sky-400 pl-4 pr-10 py-2">📘 {children}</div>
}

const CNote = ({ children }) => {
  return <div className="not-prose border-l-4 border-rose-500 pl-4 pr-10 py-2">❗️ {children}</div>
}

export { CNote, CIdea, CFact }
