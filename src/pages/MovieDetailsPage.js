import React, { useEffect, useState } from 'react';
import { fetchMovieInfo } from '../servises/api';
import Cast from '../componens/cast/Cast';
import Reviews from '../componens/reviews/Reviews';
import MovieDetailsCard from '../componens/movieDetailsCard/MovieDetailsCard';
import ItemLinkDetails from '../componens/itemLinkDetails/ItemLinkDetails';
import { Btn, ContainerInfo, ListInfo } from './MovieDetailsPage.module.css';
import Error from '../componens/error/Error';
import { useLocation, useRouteMatch } from 'react-router-dom';

const MovieDetailsPage = props => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([]);
  const [locationState, setLocationState] = useState({});
  const [error, setError] = useState('');

  const movieId = useRouteMatch().params.movieId;
  const location = useLocation().state.from;

  useEffect(() => {
    (async () => {
      try {
        const getInfo = await fetchMovieInfo(movieId);
        await setMovie(getInfo);
        setGenres(getInfo.genres);
        setLocationState(location);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.status_message);
        }
      }
    })();
  }, []);

  const handleGoBack = () => {
    const { state } = props.location;
    if (state && state.from) {
      return props.history.push(state.from);
    }

    props.history.push('/movies');
  };

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : (
        <>
          {movie && (
            <div>
              <button type="button" onClick={handleGoBack} className={Btn}>
                ...Go back
              </button>

              <div>
                <MovieDetailsCard movie={movie} genres={genres} />
                <div className={ContainerInfo}>
                  <p>Additional information:</p>
                  <ul className={ListInfo}>
                    <ItemLinkDetails
                      name="cast"
                      component={Cast}
                      locationState={locationState}
                    />
                    <ItemLinkDetails
                      name="revievs"
                      component={Reviews}
                      locationState={locationState}
                    />
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
