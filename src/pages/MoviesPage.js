import React, { useEffect, useState } from 'react';
import Search from '../componens/search/Search';
import { fetchMoviesList } from '../servises/api';
import MoviesList from '../componens/moviesList/MoviesList';
import parseQueryString from '../utils/parseQueryString';
import Error from '../componens/error/Error';

const MoviesPage = props => {
  const [movies, setMovies] = useState([]);
  const [showList, setShowList] = useState(false);
  const [error, setError] = useState('');
  const { query } = parseQueryString(props.location.search);

  useEffect(() => {
    (async () => {
      try {
        const getMovies = await fetchMoviesList(query);
        setMovies(getMovies);
        setShowList(true);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.status_message);
        }
      }
    })();
  }, [query]);

  const getQuery = query => {
    console.log(query);
    console.log(props.location);
    props.history.push({
      ...props.location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : (
        <div>
          <Search getQuery={getQuery} />

          {showList && (
            <>
              {movies.length === 0 ? (
                <p>No results were found for your search</p>
              ) : (
                <MoviesList movies={movies} />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
export default MoviesPage;
