import React from 'react';

const ReviewsList = ({ reviews }) => (
  <ul>
    {reviews.map(({ id, author, content }) => {
      return (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      );
    })}
  </ul>
);

export default ReviewsList;
