import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies, isLoading, hasSearched, basePath = "" }) => {
  const location = useLocation();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {movies.length === 0 && hasSearched && !isLoading ? (
          <p>Movies couldn't find!</p>
        ) : (
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`${basePath}${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default MovieList;
