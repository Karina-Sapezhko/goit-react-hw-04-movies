import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { fetchMovieReviews } from '../../servises/api';
import Error from '../error/Error';
import ReviewsList from './reviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showList, setShowList] = useState(false);
  const [error, setError] = useState('');
  const movieId = useRouteMatch().params.movieId;

  useEffect(() => {
    (async () => {
      try {
        const getReviews = await fetchMovieReviews(movieId);
        setReviews(getReviews);
        setShowList(true);
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
        <>
          {showList && (
            <div>
              {reviews.length === 0 ? (
                <h3>We don't nave any reviews for this movie.</h3>
              ) : (
                <ReviewsList reviews={reviews} />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Reviews;
