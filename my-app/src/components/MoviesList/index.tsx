import { useRef, useState, useEffect } from "react";
import { MovieCard } from "../MovieCard";
import { SeeAll } from "../SeeAll";
import "./style.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

interface IMoviesList {
  movieListHeader: string;
  seeAll: string;
  image: string;
  value: string;
  Premium: boolean;
}

const MOVIES_LIST: IMoviesList[] = new Array(30).fill({
  movieListHeader: "New Releases",
  seeAll: "See all",
  image:
    "https://image-resizer-cloud-api.akamaized.net/image/49B283E2-29FA-46A9-A2DA-8822C9EDBE22/0-2x3.jpg?width=305&updatedTime=2025-03-25T06:18:28Z&dt=Web",
  value: "Mr Housekeeping",
  Premium: true,
});

export const MoviesList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setAtStart(scrollLeft === 0);
      setAtEnd(
        scrollLeft + clientWidth >= scrollWidth || MOVIES_LIST.length <= 8
      );
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", updateScrollState);
      updateScrollState();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateScrollState);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="movies-list-main">
      {MOVIES_LIST.length > 8 && (
        <div className="arrow-align-main">
          <div
            className={`arrow-z ${atStart ? "hidden-arrow" : ""}`}
            onClick={() => scroll("left")}
          >
            <MdArrowBackIos size={28} color="#fff" className="cursor-pointer" />
          </div>
          <div
            className={`arrow-z ${atEnd ? "hidden-arrow" : ""}`}
            onClick={() => scroll("right")}
          >
            <MdArrowForwardIos
              size={28}
              color="#fff"
              className="cursor-pointer"
            />
          </div>
        </div>
      )}
      {MOVIES_LIST.length && (
        <SeeAll
          heading={"New Releases"}
          seeAll={"See all"}
          className={"movie-list-p-m"}
        />
      )}
      <div className="hr-list-align" ref={scrollRef}>
        {MOVIES_LIST.map((item, index) => (
          <MovieCard
            key={index}
            mainDivClass="img-div-hr"
            imageDivClass={""}
            imageClass={"img-cls-hr"}
            image={item.image}
            value={item.value}
            Premium={item.Premium}
          />
        ))}
      </div>
    </div>
  );
};
