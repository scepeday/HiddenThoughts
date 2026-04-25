import Button from '../components/Button';
import PageIntro from '../components/PageIntro';

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Send a note before the next drop."
      />
      <section className="contact-grid">
        <div className="contact-card">
          <p className="eyebrow">Studio</p>
          <h2>Toronto / Online</h2>
          <p>studio@hiddenthoughts.example</p>
          <p>Press, wholesale, styling, and student project review inquiries.</p>
          <div className="contact-card__notes">
            <p><strong>Reply window</strong> 1 to 2 business days</p>
            <p><strong>Best for</strong> collaborations, stockist questions, and project review</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Tell us what you are looking for." />
          </label>
          <Button type="submit">Prepare message</Button>
        </form>
      </section>
    </>
  );
}
