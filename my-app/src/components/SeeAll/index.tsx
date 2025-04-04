import "./style.css";
interface ISeeAll {
  heading: string;
  // seeAll?: string;
  className: string;
  showSeeAll?: boolean;
}

export const SeeAll = ({ heading, className, showSeeAll }: ISeeAll) => {
  return (
    <div className={`${className} see-all-main`}>
      <h2 className="see-all-left-header">{heading}</h2>
      {showSeeAll && (
        <h2 className="see-all-right-header cursor-pointer">See all</h2>
      )}
    </div>
  );
};
