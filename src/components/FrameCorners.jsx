function FrameCorners({ color = '#EDE8D5' }) {
  return (
    <>
      <span className="corner-bracket tl" style={{ borderColor: color }} />
      <span className="corner-bracket tr" style={{ borderColor: color }} />
      <span className="corner-bracket bl" style={{ borderColor: color }} />
      <span className="corner-bracket br" style={{ borderColor: color }} />
    </>
  )
}

export default FrameCorners
