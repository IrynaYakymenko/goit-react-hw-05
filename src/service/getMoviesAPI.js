import axios from "axios";

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWMwMDk0OGQzMGFjNDNmOGZmZjlhNjIwMmQ2YzhjMiIsIm5iZiI6MTc0NTI0MzIyNC41NzcsInN1YiI6IjY4MDY0YzU4YzVjODAzNWZiMDhhMjY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w53Z8I9z3Qi8aXrAHoiO_yT2lz2qDiqD7uRc8-dqJs8",
  },
};

export const getMovies = async () => {
  const response = await axios.get(url, options);
  return response.data;
};

export const getMoviesDetails = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return response.data.results;
};
