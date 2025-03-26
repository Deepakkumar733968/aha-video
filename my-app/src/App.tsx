import "./App.css";
import { HeroSlider } from "./components/HeroSlider";
import { MovieCard } from "./components/MovieCard";
import { MoviesList } from "./components/MoviesList";
import { SeeAll } from "./components/SeeAll";
import Footer from "./layouts/Footer/Footer";
import { MOVIES_LIST } from "./utils/Home/home";

function App() {
  return (
    <main>
      <HeroSlider />
      {/* <ChatWithExpert /> */}
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
