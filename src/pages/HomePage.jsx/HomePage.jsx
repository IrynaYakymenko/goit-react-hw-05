import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMovies } from "../../service/getMoviesAPI";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} basePath="movies/" />
    </div>
  );
};

export default HomePage;
