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

export const MoviesList = ({ data }: { data: IMoviesList[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setAtStart(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth || data.length <= 8);
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
      {data.length > 8 && (
        <div className="add-rel-main">
          <div className="hover-bg-col-main">
            <div className="bg-w-h-left"></div>
            <div className="bg-w-h-right"></div>
          </div>
          <div className="arrow-align-main">
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

      {data.length && (
        <SeeAll
          heading={data[0]?.movieListHeader}
          seeAll={data[0]?.seeAll}
          className={"movie-list-p-m"}
        />
      )}
      <div className="hr-list-align" ref={scrollRef}>
        {data.map((item: IMoviesList, index: number) => (
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
