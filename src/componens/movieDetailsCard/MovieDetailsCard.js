import React from 'react';
import styles from './MovieDetailsCard.module.css';

const MovieDetailsCard = ({
  movie: { poster_path, title, vote_average, overview },
  genres,
}) => {
  return (
    <div className={styles.BoxCard}>
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster"
          />
        ) : (
          <img
            src={`https://www.reelviews.net/resources/img/default_poster.jpg`}
            alt="poster"
            width="300"
          />
        )}
      </div>
      <div className={styles.BoxInfo}>
        <h2>{title}</h2>
        <p>
          User Score: <span className={styles.Score}>{vote_average}</span>
        </p>

        <h3>Overview:</h3>
        {overview ? (
          <p>{overview}</p>
        ) : (
          <p>We don't have any overview for this movie</p>
        )}

        <h3>Genres:</h3>
        {genres.length === 0 ? (
          <p>We don't have any genres for this movie</p>
        ) : (
          <ul>
            {genres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <span>{name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default MovieDetailsCard;


