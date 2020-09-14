import React from 'react';
import { ItemCast } from './CastListItem.module.css';

const CastListItem = ({ cast: { profile_path, name, character } }) => {
  return (
    <li className={ItemCast}>
      {profile_path ? (
        <img
          src={`http://image.tmdb.org/t/p/w185${profile_path}`}
          alt="photo"
        />
      ) : (
        <img
          src={`https://www.nyeducationservices.co.uk/sites/default/files/styles/height/public/team/Grey%20avatar%202_0.JPG?itok=KFTolSSu`}
          alt="photo"
          width="185"
          height="277"
        />
      )}
      <p>Actor: {name}</p>
      <p>{character}</p>
    </li>
  );
};

export default CastListItem;
