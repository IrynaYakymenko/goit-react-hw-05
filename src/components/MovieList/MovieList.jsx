import { useEffect, useState } from "react";
import { getMovies } from "../../service/getMoviesAPI";
import { Link } from "react-router-dom";

const MovieList = () => {
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
    <ul>
      {movies.length ? (
        movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))
      ) : (
        <p>Movies couldn't find!</p>
      )}
    </ul>
  );
};

export default MovieList;
