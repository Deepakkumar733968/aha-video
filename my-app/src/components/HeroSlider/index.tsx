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
        </div>
      </div>
    </section>
  );
};
