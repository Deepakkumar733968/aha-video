import "./style.css";
interface ICardData {
  mainDivClass?: string;
  imageDivClass: string;
  imageClass?: string;
  image: string;
  value: string;
}
export const MovieCard = ({
  mainDivClass,
  imageDivClass,
  imageClass,
  image,
  value,
}: ICardData) => {
  return (
    <div className={mainDivClass}>
      <div className={`${imageDivClass}`}>
        <img
          src={image}
          alt="movie-card-image"
          className={`${imageClass}img-size`}
        />
      </div>
      <p className="img-crd-des">{value}</p>
    </div>
  );
};
