import Button from './Button';

export default function CTASection() {
  return (
    <section className="cta-section">
      <p className="eyebrow">Field notes</p>
      <h2>Built for the people who read the label twice.</h2>
      <p>
        Follow the catalog as it changes through the backend: featured drops, category edits, stock shifts, and product
        imagery all come from the API.
      </p>
      <Button to="/shop">Browse current pieces</Button>
    </section>
  );
}
