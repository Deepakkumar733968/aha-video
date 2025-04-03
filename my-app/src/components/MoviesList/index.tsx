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

export const MoviesList = ({
  movies,
  listCardTitleClass = "",
  listCardDivClass = "",
  listCardImageClass = "",
  hoverBgClass = "",
  hoverBgSize = "",
  ArrowMainClass = "",
}: {
  movies: any;
  listCardTitleClass?: string;
  listCardDivClass?: string;
  listCardImageClass?: string;
  hoverBgClass?: string;
  ArrowMainClass?: string;
  hoverBgSize?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      const isAtStart = scrollLeft <= 0;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

      setAtStart(isAtStart);
      setAtEnd(isAtEnd);
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

  // console.log(movies.cd[0], "movies-data");

  return (
    <div className="movies-list-main">
      {movies.length > 6 && (
        <div className="add-rel-main">
          <div className={`${hoverBgClass} hover-bg-col-main`}>
            <div
              className={`${hoverBgSize} bg-w-h-left ${
                atStart ? "hidden-bg" : ""
              }`}
            ></div>
            <div
              className={`${hoverBgSize} bg-w-h-right ${
                atEnd ? "hidden-bg" : ""
              }`}
            ></div>
          </div>
          <div className={`${ArrowMainClass} arrow-align-main`}>
            <div
              className={`arrow-z ${atStart ? "hidden-arrow" : ""}`}
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos
                size={28}
                color="#fff"
                className="cursor-pointer"
              />
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
        </div>
      )}

      {movies.lon[0].n && (
        <SeeAll
          heading={movies.lon[0].n}
          className={"movie-list-p-m"}
          showSeeAll={movies.lon[0].n.length > 12 ? true : false}
        />
      )}

      <div className="hr-list-align" ref={scrollRef}>
        {movies.cd.map((movie: any, index: any) => (
          <MovieCard
            key={index}
            mainDivClass="img-div-hr"
            imageDivClass={listCardDivClass}
            imageClass={`img-cls-hr ${listCardImageClass}`}
            cardTitleClass={listCardTitleClass}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
};
