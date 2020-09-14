import React from 'react';
import { errorText } from './Error.module.css';
const Error = ({ message }) => {
  return <h2 className={errorText}>Error: {message}</h2>;
};
export default Error;
