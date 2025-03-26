import "./style.css";
export const HeroSlider = () => {
  return (
    <section>
      <div className="hero-tex-pos-par">
        <div className="image-div-main">
          <img
            src="https://image-resizer-cloud-api.akamaized.net/image/754EBB87-954E-45FA-9495-581ED92ED78B/0-16x9.jpg?width=1250&updatedTime=2025-03-20T12:14:46Z&dt=Web"
            alt="hero-img-alt"
            className="hero-img-cls"
          />
        </div>
        <div className="pos-point">
          <h1 className="ring-header">Ring Ring</h1>
          <p className="hero-yrd-sup ">
            2025 • 1h 59m • Psychological Thriller
          </p>
          <p className="hrd-des">
            Ring Ring is a comedy family drama movie. seven close friends gather
            for a birthday party dinner. When one suggests a game, place their
            phones on the table and share every call and message. At first, it
            was fun. But as notifications arrive, a lot of secrets get revealed.
          </p>
        </div>
      </div>
    </section>
  );
};
