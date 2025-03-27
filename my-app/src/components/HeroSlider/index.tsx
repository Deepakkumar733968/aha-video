import "./style.css";

export const HeroSlider = () => {
  return (
    <section className="hero-main">
      <div className="left-pos-main">
        <div>
          <h1 className="pos-hed">Ring Ring</h1>
          <p className="pos-sup-hed">2025 • 1h 59m • Psychological Thriller</p>
        </div>
        <p className="pos-des">
          Ring Ring is a comedy family drama movie. seven close friends gather
          for a birthday party dinner. When one suggests a game, place their
          phones on the table and share every call and message. At first, it was
          fun. But as notifications arrive, a lot of secrets get revealed.
        </p>
      </div>
      {/* <div className="bg-left-div-main"></div> */}
      <div className="l-a-r-main">
        <div className="bg-left-div-main"></div>
        <div className="m-left-main">
          <h1>left</h1>
        </div>
        <div className="m-right-main">
          <h1>right</h1>
        </div>
      </div>
    </section>
  );
};
