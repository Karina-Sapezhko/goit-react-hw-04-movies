import React, { useEffect, useState } from 'react';
import { fetchAllMovies } from '../servises/api';
import MoviesList from '../componens/moviesList/MoviesList';
import Error from '../componens/error/Error';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const getMovies = await fetchAllMovies();
        setMovies(getMovies);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.status_message);
        }
      }
    })();
  }, []);

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : (
        <>{movies && <MoviesList movies={movies} />}</>
      )}
    </>
  );
};
export default Home;
