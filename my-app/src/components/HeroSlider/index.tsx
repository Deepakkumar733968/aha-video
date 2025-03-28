import "./style.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IHeroCarousel } from "../../utils/HeroCarousel/heroCarousel";
import { useEffect, useRef, useState } from "react";

export const HeroSlider = ({ data }: { data: IHeroCarousel[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  useEffect(() => {
    if (thumbnailRef.current) {
      const selectedImage = thumbnailRef.current.children[
        currentIndex
      ] as HTMLElement;
      if (selectedImage) {
        thumbnailRef.current.scrollTo({
          left:
            selectedImage.offsetLeft -
            thumbnailRef.current.offsetWidth / 2 +
            selectedImage.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

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
        <div className="m-right-main"></div>
      </div>
      <div className="all-btn-img-ali-main">
        <MdKeyboardArrowLeft
          size={26}
          className="add-arr-hover"
          onClick={() =>
            setCurrentIndex(
              (prevIndex) => (prevIndex - 1 + data.length) % data.length
            )
          }
        />
        <div className="last-left-carousel-main" ref={thumbnailRef}>
          {data.map((item, index) => (
            <img
              key={index}
              src={item.smallHeroImage}
              alt="carousel-thumbnail"
              className={`left-carousel-img ${
                index === currentIndex ? "selected" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <MdKeyboardArrowRight
          size={26}
          className="add-arr-hover"
          onClick={() =>
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
          }
        />
      </div>
    </section>
  );
};
