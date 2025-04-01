import "./App.css";
import { HeroSlider } from "./components/HeroSlider";
import { MoviesList } from "./components/MoviesList";
import { HERO_CAROUSEL } from "./utils/HeroCarousel/heroCarousel";
import { MOVIES_LIST } from "./utils/Home/home";

function App() {
  return (
    <main>
      {/* <ChatWithExpert /> */}
      <HeroSlider data={HERO_CAROUSEL} />
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
      <MoviesList data={MOVIES_LIST} />
      <MoviesList data={MOVIES_LIST} />
    </main>
  );
}

export default App;
