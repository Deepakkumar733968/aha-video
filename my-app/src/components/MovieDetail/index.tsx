import { Button } from "../Button";
import { MovieCard } from "../MovieCard";
import "./style.css";

export const MovieDetail = () => {
  return (
    <section
      className="movie-hero-main cursor-pointer"
      style={{
        backgroundImage: `url("https://image-resizer-cloud-api.akamaized.net/image/754EBB87-954E-45FA-9495-581ED92ED78B/0-16x9.jpg?width=1250&updatedTime=2025-03-20T12:14:46Z&dt=Web")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="movie-left-pos-main">
        <div>
          <div className="movie-box-ali-main">
            <div className="right-i-ali-main bg-border-color">
              <img
                src="https://www.aha.video/check_orange.16b3b99eea4a3354.svg"
                alt="aha-icon"
                className="aha-icon-right-size"
              />
              <h6 className="movie-pre-box-text">Premium</h6>
            </div>
            <div className="bg-border-color">U/A</div>
            <div className="bg-border-color">13+</div>
          </div>
          <h1 className="movie-pos-hed">Ring Ring</h1>
          <h6 className="movie-pos-sup-hed">
            2025 • 1h 59m • Psychological Thriller
          </h6>
          <h6 className="movie-pos-sup-hed">Humorous • Emotional</h6>
        </div>
        <p className="movie-pos-des">
          Ring Ring is a comedy family drama movie. seven close friends gather
          for a birthday party dinner. When one suggests a game, place their
          phones on the table and share every call and message. At first, it was
          fun. But as notifications arrive, a lot of secrets get revealed.
        </p>
        <div className="two-button-ali-main">
          <Button
            className={"play-trailer-button cursor-pointer"}
            text={"Play Trailer"}
          />
          <Button
            className={"subscribe-now-button cursor-pointer"}
            text={"Subscribe Now"}
          />
        </div>
        <div className="share-ali-main">
          <button className="share-icon-button cursor-pointer">
            <div>
              <img
                src="https://www.aha.video/share.4be7dd16d801843e.svg"
                alt="share-icon"
                className="share-icon-size"
              />
            </div>
          </button>
          <p className="mov-share-button-main">Share</p>
        </div>
        <div className="mov-line-ali-main">
          <div className="taps-main">
            <div className="selected-tap">Cast</div>
            <div className="not-selected-tap">Details</div>
          </div>
          <div className="taps-img-detail-main">
            <div className="img-detail-ali">
              <MovieCard
                image={
                  "https://image-resizer-cloud-api.akamaized.net/image/hari-baskar/0-1x1.jpg?width=230&updatedTime=2025-03-25T06:18:28Z"
                }
                value={"Hari Baskar"}
                imageDivClass="mov-min-detail-size"
                imageClass="add-mov-border"
                cardTitleClass="mov-dea-title"
                showPremium={false}
              />
              <MovieCard
                image={
                  "https://image-resizer-cloud-api.akamaized.net/image/losliya-%20mariyanesan/0-1x1.jpg?width=110&updatedTime=2025-03-25T06:18:28Z"
                }
                value={"Hari Baskar"}
                imageDivClass="mov-min-detail-size"
                imageClass="add-mov-border"
                cardTitleClass="mov-dea-title"
                showPremium={false}
              />
              <MovieCard
                image={
                  "https://image-resizer-cloud-api.akamaized.net/image/ilavarasu/0-1x1.jpg?width=110&updatedTime=2025-03-25T06:18:28Z"
                }
                value={"Hari Baskar"}
                imageDivClass="mov-min-detail-size"
                imageClass="add-mov-border"
                cardTitleClass="mov-dea-title"
                showPremium={false}
              />
              <MovieCard
                image={
                  "https://image-resizer-cloud-api.akamaized.net/image/shah-ra/0-1x1.jpg?width=110&updatedTime=2025-03-25T06:18:28Z"
                }
                value={"Hari Baskar"}
                imageDivClass="mov-min-detail-size"
                imageClass="add-mov-border"
                cardTitleClass="mov-dea-title"
                showPremium={false}
              />
            </div>
            <div className="detail-text-ali">
              <p className="detail-text-heading">Director</p>
              <p className="detail-text-ans">Arun Ravichandran</p>
              <p className="detail-text-heading">Studio</p>
              <p className="detail-text-ans">Sri Thenandal Films</p>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-l-a-r-main">
        <div className="movie-bg-left-div-main"></div>
        <div className="movie-m-left-main"></div>
        <div className="movie-m-right-main">
          {/* <video width="600" controls className="video-main">
            <source src={data[currentIndex]?.heroVideo} type="video/mp4" />
          </video> */}
        </div>
      </div>
    </section>
  );
};
