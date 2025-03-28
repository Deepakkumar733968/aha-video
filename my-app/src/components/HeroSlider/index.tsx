import "./style.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IHeroCarousel } from "../../utils/HeroCarousel/heroCarousel";
import { useEffect, useState } from "react";
export const HeroSlider = ({ data }: { data: IHeroCarousel[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  return (
    <section
      className="hero-main cursor-pointer"
      style={{
        backgroundImage: `url(${data[currentIndex]?.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="left-pos-main">
        <div>
          <h1 className="pos-hed">{data[currentIndex]?.heading}</h1>
          <p className="pos-sup-hed">{data[currentIndex]?.subHeading}</p>
        </div>
        <p className="pos-des">{data[currentIndex]?.description}</p>
      </div>
      <div className="l-a-r-main">
        <div className="bg-left-div-main"></div>
        <div className="m-left-main"></div>
        <div className="m-right-main">
          {/* <video width="600" controls className="video-main">
            <source src={data[currentIndex]?.heroVideo} type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className="all-btn-img-ali-main">
        <MdKeyboardArrowLeft
          size={26}
          className="add-arr-hover"
          onClick={prevSlide}
        />

        <div className="last-left-carousel-main">
          {data.map((item, index) => (
            <img
              key={index}
              src={item.smallHeroImage}
              alt="carousel-thumbnail"
              className={`left-carousel-img ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <MdKeyboardArrowRight
          size={26}
          className="add-arr-hover"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};
