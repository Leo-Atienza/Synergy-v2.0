// Top bar. The wordmark is flat ink with a tracked-out treatment — no
// gradient-clip text (that is the banned AI-slop tell).
export function Masthead() {
  return (
    <header className="masthead">
      <div className="brand">
        <span className="brand-mark">SANCTUARY</span>
        <span className="brand-sub">Peel resilience hubs · heat-first triage</span>
      </div>
      <p className="masthead-q">
        Harden only five buildings before the next heat wave —<br />
        <strong>which five?</strong>
      </p>
    </header>
  );
}
