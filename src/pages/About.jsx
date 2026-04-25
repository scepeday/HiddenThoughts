import logoMark from '../../assets/MainLogo.png';

export default function About() {
  return (
    <>
      <section className="about-manifesto">
        <div className="about-manifesto__mark">
          <img src={logoMark} alt="Hidden Thoughts symbol" />
        </div>
        <div className="about-manifesto__text">
          <p className="eyebrow">Manifesto</p>
          <h2>Quiet products. Strong point of view.</h2>
          <p>
            Hidden Thoughts is built around the idea that everyday objects can still carry atmosphere. A shirt, a
            poster, a postcard, or a tote becomes more memorable when the visual language is controlled and the
            presentation feels cinematic.
          </p>
        </div>
      </section>
    </>
  );
}
