import { useEffect, useState } from "react";
import { getMovieCast } from "../../service/getMoviesAPI";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const actors = await getMovieCast(movieId);
        setCast(actors.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <h3>Cast</h3>
      {cast.length ? (
        <ul>
          {cast.map((actor) => {
            return (
              <li key={actor.id}>
                {actor.name} - {actor.character}
              </li>
            );
          })}
        </ul>
      ) : (
        <p> We don't have any cart</p>
      )}
    </div>
  );
};

export default MovieCast;
