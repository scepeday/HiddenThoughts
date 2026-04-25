export default function PageIntro({ eyebrow, title, text, centered = false }) {
  return (
    <section className={`page-intro ${centered ? 'page-intro--centered' : ''}`.trim()}>
      <div className="page-intro__meta">{eyebrow && <p className="eyebrow">{eyebrow}</p>}</div>
      <div className="page-intro__body">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
