import InfiniteScroll from "react-infinite-scroll-component";
import { HeroSlider } from "../../components/HeroSlider";
import { MoviesList } from "../../components/MoviesList";
import { useLandingScreenData } from "../../hooks/useLandingScreenData";
import "./style.css";
import { useEffect } from "react";
const Movies = () => {
  const { data, loading, error, fetchMore, hasMore } = useLandingScreenData();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight + 400 >= fullHeight && hasMore && !loading) {
        fetchMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, fetchMore]);

  if (loading && data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      {data[0] && <HeroSlider heroCarousel={data[0]} />}

      {data.slice(1).map((container, id) => {
        if (!container || !container.cd || !Array.isArray(container.cd))
          return null;
        return <MoviesList key={id} movies={container} />;
      })}
    </section>
  );
};
export default Movies;
