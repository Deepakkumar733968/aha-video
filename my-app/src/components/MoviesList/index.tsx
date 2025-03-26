import { MovieCard } from "../MovieCard";
import { SeeAll } from "../SeeAll";
import "./style.css";

interface IMoviesList {
  movieListHeader: string;
  seeAll: string;
  image: string;
  value: string;
  Premium: boolean;
}
const MOVIES_LIST: IMoviesList[] = [
  {
    movieListHeader: "New Releases",
    seeAll: "See all",
    image:
      "https://image-resizer-cloud-api.akamaized.net/image/49B283E2-29FA-46A9-A2DA-8822C9EDBE22/0-2x3.jpg?width=305&updatedTime=2025-03-25T06:18:28Z&dt=Web",
    value: "Mr Housekeeping",
    Premium: true,
  },
];
export const MoviesList = () => {
  return (
    <div className="movies-list-main">
      <SeeAll heading={"New Releases"} seeAll={"See all"} className={""} />
      <MovieCard
        imageDivClass={"img-dic-cls"}
        imageClass={"img-cls"}
        image={
          "https://image-resizer-cloud-api.akamaized.net/image/49B283E2-29FA-46A9-A2DA-8822C9EDBE22/0-2x3.jpg?width=305&updatedTime=2025-03-25T06:18:28Z&dt=Web"
        }
        value={"Mr Housekeeping"}
        Premium={false}
      />
    </div>
  );
};
