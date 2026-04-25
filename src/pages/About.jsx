import keyVisualImage from '../../assets/kv-preview-20.jpg';
import logoWordmark from '../../assets/MainLogo.png';

export default function About() {
  return (
    <section className="about-manifesto">
      <div className="about-manifesto__mark">
        <img src={keyVisualImage} alt="Hidden Thoughts brand key visual" />
      </div>
      <div className="about-manifesto__text">
        <p className="eyebrow">Manifesto</p>
        <h2>Hidden Thoughts makes objects for private signals.</h2>
        <p>
          The brand sits between wearable product, printed matter, and introspective image-making. It favors restraint,
          emotional texture, and a slower sense of presentation over trend-driven storefront noise.
        </p>
        <img className="about-manifesto__wordmark" src={logoWordmark} alt="Hidden Thoughts" />
        <p className="about-manifesto__quote">“This comeback is an apology to myself.”</p>
      </div>
    </section>
  );
}
