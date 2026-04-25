import Button from '../components/Button';
import PageIntro from '../components/PageIntro';

export default function NotFound() {
  return (
    <section className="section">
      <PageIntro eyebrow="404" title="This thought slipped out of frame." text="Return to the storefront." />
      <Button to="/shop">Go to shop</Button>
    </section>
  );
}
