import keyVisualImage from '../../assets/kv-preview-21.jpg';
import logoWordmark from '../../assets/MainLogo.png';
import logoSymbol from '../../assets/Logo2.png';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="eyebrow">Issue 001 / Key Visual</p>
        <h1>What are your dreams telling you?</h1>
        <p>
          Hidden Thoughts sits between printed matter, fashion graphics, and private identity. The storefront should
          feel like an editorial artifact first and a student commerce interface second.
        </p>
        <div className="hero__actions">
          <Button to="/shop">Enter catalog</Button>
          <Button to="/about" variant="ghost">
            Read manifesto
          </Button>
        </div>
      </div>

      <div className="hero__visual">
        <img className="hero__visual-image" src={keyVisualImage} alt="Hidden Thoughts key visual" />
        <img className="hero__visual-wordmark" src={logoWordmark} alt="Hidden Thoughts wordmark" />
        <img className="hero__visual-symbol" src={logoSymbol} alt="" aria-hidden="true" />
      </div>

      <div className="hero__rail">
        <p className="hero__rail-title">Downtown Toronto based / To continue being alive is also an art.</p>
        <div className="hero__rail-meta">
          <span>@hidden_thoughts</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
}
