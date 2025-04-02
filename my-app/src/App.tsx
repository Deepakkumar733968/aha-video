import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route index element={<HeroSlider data={HERO_CAROUSEL} />} />
        <Route path="/movies" element={<MoviesList data={MOVIES_LIST} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
      {/* static card data */}
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
