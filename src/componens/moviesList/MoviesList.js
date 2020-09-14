import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ItemLink, item } from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li className={item} key={id}>
          <Link
            className={ItemLink}
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default withRouter(MoviesList);
