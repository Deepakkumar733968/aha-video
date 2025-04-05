import "./style.css";
import { HeroSlider } from "../../components/HeroSlider";
import { MoviesList } from "../../components/MoviesList";
import { useLandingScreenData } from "../../hooks/useLandingScreenData";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const { data, loading, error, fetchMore, hasMore } = useLandingScreenData();

  if (loading && data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // console.log(containerData(1), "checkData");
  // console.log(data.t[0].c[1].cd[0].lon[0].n, "allDataOne");
  // console.log(data.t[0].c[4].cd[0], "allDataTwo");
  return (
    <section>
      {data[0] && <HeroSlider heroCarousel={data[0]} />}

      <InfiniteScroll
        dataLength={data.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<p className="text-center">Loading more movies...</p>}
        scrollThreshold={0.9}
      >
        {data.slice(1).map((container, idx) => {
          if (!container || !container.cd || !Array.isArray(container.cd))
            return null;
          return <MoviesList key={idx} movies={container} />;
        })}
      </InfiniteScroll>
    </section>
  );
};

export default Home;
