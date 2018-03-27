import React from 'react';

import styles from './ControlBar.css';

const ControlBar = ({ children }) => (
  <div className={styles.ControlBar}>
    { children }
  </div>
);

export default ControlBar;
