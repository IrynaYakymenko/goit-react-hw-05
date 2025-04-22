import { searchMovies } from "../../service/getMoviesAPI";
import { useState } from "react";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    try {
      const data = await searchMovies(query);
      setMovies(data);
    } catch (error) {
      console.error("Error occurred while searching movies:", error);
    }
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
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <li key={movie.id}>{movie.title}</li>;
          })
        ) : (
          <p>No movies found</p>
        )}
      </ul>
    </div>
  );
};

export default MoviesPage;
