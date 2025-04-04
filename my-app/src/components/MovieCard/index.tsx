import { constructImageUrl } from "../ImageResizer";
import "./style.css";

interface ICardData {
  mainDivClass?: string;
  imageDivClass?: string;
  imageClass?: string;
  movie: any;
  cardTitleClass?: string;
}

export const MovieCard = ({
  mainDivClass = "",
  imageDivClass = "",
  imageClass = "",
  movie,
  cardTitleClass = "",
}: ICardData) => {
  // console.log(movie.ent[0].sp, "movie-card-data");
  return (
    <div className={`${mainDivClass} img-card-main`}>
      {!movie.ent[0].sp && (
        <span className="add-premium-pos">
          <img
            src="https://www.aha.video/tag-icon.4a97c58d9b826d7d.svg"
            alt="right-icons"
            className="right-icons-size"
          />
          <span className="pos-crd-txt">Premium</span>
        </span>
      )}
      <div className={`${imageDivClass} img-main-div cursor-pointer`}>
        <img
          src={
            constructImageUrl(movie?.id || "", "0-2x3", 305, movie?.ut || "") ||
            "https://www.aha.video/aha-gray-logo.29a310bfcc08d0e8.svg"
          }
          alt="movie-card-image"
          className={`${imageClass} img-size`}
        />
      </div>
      <div className="mov-des-ali-main">
        <p className={`img-crd-des ${cardTitleClass}`}>{movie.lon[0].n}</p>
        {movie.rat[0].v === "A" && <p className="mov-lis-a">A</p>}
      </div>
    </div>
  );
};
