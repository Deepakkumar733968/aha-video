import "./App.css";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <main>
      {/* <HeroSlider /> */}
      {/* <ChatWithExpert /> */}
      <MovieCard
        imageDivClass={"img-dic-cls"}
        imageClass={"img-cls"}
        image={
          "https://image-resizer-cloud-api.akamaized.net/image/49B283E2-29FA-46A9-A2DA-8822C9EDBE22/0-2x3.jpg?width=305&updatedTime=2025-03-25T06:18:28Z&dt=Web"
        }
        value={"Mr Housekeeping"}
      />
    </main>
  );
}

export default App;
