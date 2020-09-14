import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.css';

const Spinner = () => (
  <div className={styles.BoxSpinner}>
    <Loader
      type="TailSpin"
      color="firebrick"
      height={50}
      width={50}
      timeout={3000}
    />
  </div>
);

export default Spinner;
