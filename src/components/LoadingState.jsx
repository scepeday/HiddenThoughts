export default function LoadingState({ label = 'Loading the catalog' }) {
  return (
    <div className="state-block" aria-live="polite">
      <span className="state-line" />
      <small className="state-kicker">Loading</small>
      <p>{label}</p>
    </div>
  );
}
