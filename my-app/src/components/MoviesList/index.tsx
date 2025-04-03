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

      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (!currentRef) return;

    const handleScroll = () => updateScrollState();
    currentRef.addEventListener("scroll", handleScroll);
    updateScrollState();

    return () => {
      currentRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="movies-list-main">
      {movies.cd.length > 6 && (
        <div className="add-rel-main">
          <div className={`${hoverBgClass} hover-bg-col-main`}>
            <div
              className={`${hoverBgSize} bg-w-h-left`}
              style={{ visibility: atStart ? "hidden" : "visible" }}
            ></div>
            <div
              className={`${hoverBgSize} bg-w-h-right`}
              style={{ visibility: atEnd ? "hidden" : "visible" }}
            ></div>
          </div>
          <div className={`${ArrowMainClass} arrow-align-main`}>
            <div
              className="arrow-z"
              style={{ visibility: atStart ? "hidden" : "visible" }}
              onClick={() => scroll("left")}
            >
              <MdArrowBackIos
                size={28}
                color="#fff"
                className="cursor-pointer"
              />
            </div>
            <div
              className="arrow-z"
              style={{ visibility: atEnd ? "hidden" : "visible" }}
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

      {movies.lon && movies.lon[0]?.n && (
        <SeeAll
          heading={movies.lon[0].n}
          className="movie-list-p-m"
          showSeeAll={movies.lon[0].n.length > 12}
        />
      )}

      <div
        className="hr-list-align"
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
        }}
      >
        {movies.cd.map((movie: any, index: number) => (
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
