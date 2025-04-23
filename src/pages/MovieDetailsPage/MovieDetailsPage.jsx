import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMoviesDetails } from "../../service/getMoviesAPI";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMoviesDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <>
      <Link to={location.state?.from ?? "/"}>Go back</Link>
      {movie ? (
        <div className={s.overview}>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div>
      ) : (
        <p>There is no information about this movie</p>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={"cast"}>Cast</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
