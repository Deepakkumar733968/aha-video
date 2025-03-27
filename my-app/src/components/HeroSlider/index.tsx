import "./style.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
export const HeroSlider = () => {
  return (
    <section className="hero-main cursor-pointer">
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
        <div className="m-left-main">{/* <h1>left</h1> */}</div>
        <div className="m-right-main">{/* <h1>right</h1> */}</div>
      </div>
      <div className="all-btn-img-ali-main">
        <MdKeyboardArrowLeft size={26} />
        <div className="last-left-carousel-main">
          <div>
            <img
              src="https://image-resizer-cloud-api.akamaized.net/image/F2E3201D-E2C8-4BF0-927C-52DF484F8CBE/0-16x9.jpg?width=160&updatedTime=2025-03-27T09:21:25Z&dt=Web"
              alt="small-carousel-img"
              className="left-carousel-img"
            />
          </div>
          <div>
            <img
              src="https://image-resizer-cloud-api.akamaized.net/image/F2E3201D-E2C8-4BF0-927C-52DF484F8CBE/0-16x9.jpg?width=160&updatedTime=2025-03-27T09:21:25Z&dt=Web"
              alt="small-carousel-img"
              className="left-carousel-img"
            />
          </div>
          <div>
            <img
              src="https://image-resizer-cloud-api.akamaized.net/image/F2E3201D-E2C8-4BF0-927C-52DF484F8CBE/0-16x9.jpg?width=160&updatedTime=2025-03-27T09:21:25Z&dt=Web"
              alt="small-carousel-img"
              className="left-carousel-img"
            />
          </div>
        </div>
        <MdKeyboardArrowRight size={26} />
      </div>
    </section>
  );
};
