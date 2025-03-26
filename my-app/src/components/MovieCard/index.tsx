import "./style.css";

interface ICardData {
  mainDivClass?: string;
  imageDivClass?: string;
  imageClass?: string;
  image: string;
  value: string;
}

export const MovieCard = ({
  mainDivClass = "",
  imageDivClass = "",
  imageClass = "",
  image,
  value,
}: ICardData) => {
  return (
    <div className={`${mainDivClass} img-card-main`}>
      <span className="add-premium-pos">
        <img
          src="https://www.aha.video/tag-icon.4a97c58d9b826d7d.svg"
          alt="right-icons"
          className="right-icons-size"
        />
        <span className="pos-crd-txt">Premium</span>
      </span>
      <div className={`${imageDivClass} img-main-div`}>
        <img
          src={image}
          alt="movie-card-image"
          className={`${imageClass} img-size`}
        />
      </div>
      <p className="img-crd-des">{value}</p>
    </div>
  );
};
