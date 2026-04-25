export default function EmptyState({ message = 'Nothing is available yet.' }) {
  return (
    <div className="state-block">
      <span className="state-line" />
      <small className="state-kicker">Nothing here yet</small>
      <p>{message}</p>
    </div>
  );
}
