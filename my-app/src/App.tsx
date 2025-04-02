import "./App.css";
import { HeroSlider } from "./components/HeroSlider";
import { MovieDetail } from "./components/MovieDetail";
import { MoviesList } from "./components/MoviesList";
import { HERO_CAROUSEL } from "./utils/HeroCarousel/heroCarousel";
import { MOVIES_LIST } from "./utils/Home/home";
import { MOVIES_DETAIL_LIST } from "./utils/MovieDetail/movieDetail";

function App() {
  return (
    <main>
      {/* <div>
        <MovieDetail />
        <MoviesList
          data={MOVIES_DETAIL_LIST}
          listCardDivClass="mov-un-detail-img-size"
          hoverBgSize="mov-lis-arr-hov-w-h"
          ArrowMainClass="mov-lis-arr-pos"
          hoverBgClass="mov-pos-ali"
        />
        <MoviesList
          data={MOVIES_DETAIL_LIST}
          listCardDivClass="mov-un-detail-img-size"
          hoverBgSize="mov-lis-arr-hov-w-h"
          ArrowMainClass="mov-lis-arr-pos"
          hoverBgClass="mov-pos-ali"
        />
      </div> */}
      <HeroSlider data={HERO_CAROUSEL} />
      {/* <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} /> */}
    </main>
  );
}

export default App;
