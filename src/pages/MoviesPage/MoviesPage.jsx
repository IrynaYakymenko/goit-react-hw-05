import { Link, useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "../../service/getMoviesAPI";
import { useEffect, useState } from "react";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentQuery = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!currentQuery) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        setHasSearched(true);
        const data = await searchMovies(currentQuery);
        setMovies(data);
      } catch (error) {
        console.error("Error occurred while searching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Search movies"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.length === 0 && hasSearched && !isLoading ? (
          <p>Movies couldn't find!</p>
        ) : (
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MoviesPage;
