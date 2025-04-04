import { HeroSlider } from "../../components/HeroSlider";
import { MoviesList } from "../../components/MoviesList";
import { useLandingScreenData } from "../../hooks/useLandingScreenData";
import { HERO_CAROUSEL } from "../../utils/HeroCarousel/heroCarousel";
import { MOVIES_LIST } from "../../utils/Home/home";

const Home = () => {
  const { data, loading, error } = useLandingScreenData();
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  function containerData(containerNum: number) {
    return data.t[0].c[containerNum];
  }

  // console.log(containerData(1), "checkData");
  // console.log(data.t[0].c[1].cd[0].lon[0].n, "allDataOne");
  // console.log(data.t[0].c[4].cd[0], "allDataTwo");

  return (
    <section>
      <HeroSlider heroCarousel={containerData(0)} />
      <MoviesList movies={containerData(1)} />
      <MoviesList movies={containerData(2)} />
      <MoviesList movies={containerData(3)} />
      <MoviesList movies={containerData(4)} />
    </section>
  );
};

export default Home;
