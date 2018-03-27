import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './ControlBarButton.css';

const ControlBarButton = ({ icon }) => (
  <div className={styles.ControlBarButton}>
    <FontAwesomeIcon icon={icon} />
  </div>
);

export default ControlBarButton;
