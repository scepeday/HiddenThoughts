export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <header className="section-header">
      <div className="section-header__meta">{eyebrow ? <p className="eyebrow">{eyebrow}</p> : <span />}</div>
      <div className="section-header__body">
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
    </header>
  );
}
