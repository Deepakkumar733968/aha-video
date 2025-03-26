import { MovieCard } from "../MovieCard";
import { SeeAll } from "../SeeAll";
import "./style.css";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

interface IMoviesList {
  movieListHeader: string;
  seeAll: string;
  image: string;
  value: string;
  Premium: boolean;
}
const MOVIES_LIST: IMoviesList[] = new Array(16).fill({
  movieListHeader: "New Releases",
  seeAll: "See all",
  image:
    "https://image-resizer-cloud-api.akamaized.net/image/49B283E2-29FA-46A9-A2DA-8822C9EDBE22/0-2x3.jpg?width=305&updatedTime=2025-03-25T06:18:28Z&dt=Web",
  value: "Mr Housekeeping",
  Premium: true,
});
export const MoviesList = () => {
  return (
    <div className="movies-list-main">
      <div className="arrow-align-main">
        <div className="arrow-z">
          <MdArrowBackIos size={28} color="#fff" className=" cursor-pointer" />
        </div>
        <div className="arrow-z">
          <MdArrowForwardIos
            size={28}
            color="#fff"
            className="cursor-pointer"
          />
        </div>
      </div>
      {MOVIES_LIST.length && (
        <SeeAll
          heading={"New Releases"}
          seeAll={"See all"}
          className={"movie-list-p-m"}
        />
      )}
      <div className="hr-list-align">
        {MOVIES_LIST.map((item, index) => (
          <MovieCard
            key={index}
            imageDivClass={"img-div-hr"}
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
{
  /* <img
            src="https://www.aha.video/chevron-left.788b17bac00f11f9.svg"
            alt="arrow-left"
            className="arrow-img-left"
          /> */
}

{
  /* <img
            src="https://www.aha.video/chevron-right.09c34a1e0c616ffd.svg"
            alt="arrow-right"
            className="arrow-img-right"
          /> */
}
