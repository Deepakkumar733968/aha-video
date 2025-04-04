import "./style.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { constructImageUrl } from "../ImageResizer";

export const HeroSlider = ({ heroCarousel }: { heroCarousel: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = heroCarousel.cd;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const currentSlide = slides[currentIndex] || {};

  const title = currentSlide?.lon?.[0]?.n ?? "Title Unavailable";
  const subHeading = currentSlide?.r ?? "N/A";
  const description = currentSlide?.lod?.[0]?.n ?? "Description Unavailable";
  const duration = currentSlide?.rt ?? 0;
  const formattedDuration = `${Math.floor(duration / 3600)}h ${Math.floor(
    (duration % 3600) / 60
  )}m`;
  const backgroundImage =
    constructImageUrl(
      currentSlide?.id,
      currentSlide?.ia?.[3],
      1250,
      currentSlide?.ut
    ) || "https://image-resizer-cloud-api.akamaized.net/image/default.jpg";

  const getVisibleThumbnails = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;
    return [slides[prevIndex], slides[currentIndex], slides[nextIndex]];
  };

  return (
    <div
      className="hero-main cursor-pointer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="left-pos-main">
        <div>
          <h1 className="pos-hed">{title}</h1>
          <p className="pos-sup-hed">
            {subHeading} • {formattedDuration} •{" "}
            {currentSlide?.log
              ?.find((item: any) => item.lang === "en")
              ?.n.join(" • ") ?? "Genre Unavailable"}
          </p>
        </div>
        <p className="pos-des">{description}</p>
      </div>
      <div className="l-a-r-main">
        <div className="bg-left-div-main"></div>
        <div className="m-left-main"></div>
        <div className="m-right-main">
          {/* <video width="600" controls className="video-main">
            <source src={currentSlide?.heroVideo} type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className="all-btn-img-ali-main">
        <div className="bg-min-arr-size min-arr-l min-arr-l-bg"></div>
        <div className="bg-min-arr-size min-arr-r min-arr-r-bg"></div>
        <MdKeyboardArrowLeft
          size={26}
          className="add-arr-hover arrow-left-pos"
          onClick={prevSlide}
        />
        <div className="last-left-carousel-main">
          {getVisibleThumbnails().map((item) => (
            <img
              key={item?.id}
              src={constructImageUrl(item?.id, item?.ia?.[3], 160, item?.ut)}
              alt="carousel-thumbnail"
              className={`left-carousel-img ${
                item?.id === currentSlide?.id ? "selected" : ""
              }`}
            />
          ))}
        </div>
        <MdKeyboardArrowRight
          size={26}
          className="add-arr-hover arrow-right-pos"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};
