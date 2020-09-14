import React from 'react';
import { Button } from './Search.module.css';

const Search = ({ getQuery }) => {
  const hendleMovieSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach((value, name) => {
      getQuery(value);
    });
  };

  return (
    <form onSubmit={hendleMovieSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        autoComplete="off"
        placeholder="Search movies"
      />
      <button className={Button} type="submit">
        Search
      </button>
    </form>
  );
};
export default Search;
