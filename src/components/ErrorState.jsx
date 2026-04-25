export default function ErrorState({ message = 'Something went wrong.' }) {
  return (
    <div className="state-block state-block--error" role="alert">
      <span className="state-line" />
      <small className="state-kicker">Catalog issue</small>
      <p>{message}</p>
    </div>
  );
}
