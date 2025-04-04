import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieDetail } from "./components/MovieDetail";
import { MoviesList } from "./components/MoviesList";
import { MOVIES_LIST } from "./utils/Home/home";
import Home from "./pages/Home/page";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesList movies={MOVIES_LIST} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </main>
  );
}

export default App;
