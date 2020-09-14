import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieCast } from '../../servises/api';
import { ListCast } from './Cast.module.css';
import CastListItem from './castListItem/CastListItem';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [showList, setShowList] = useState(false);
  const [error, setError] = useState('');
  const movieId = useRouteMatch().params.movieId;

  useEffect(() => {
    (async () => {
      try {
        const getCast = await fetchMovieCast(movieId);
        setCast(getCast);
        setShowList(true);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.status_message);
        }
      }
    })();
  }, []);

  const castShortcut = cast.slice(0, 5);

  return (
    <>
      {error ? (
        <h1>Error: {error}</h1>
      ) : (
        <>
          {showList && (
            <div>
              {cast.length === 0 ? (
                <h3>We don't nave any cast information for this movie.</h3>
              ) : (
                <ul className={ListCast}>
                  {castShortcut.map(el => (
                    <CastListItem key={el.id} cast={el} />
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Cast;
