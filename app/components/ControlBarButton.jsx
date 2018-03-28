import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from './ControlBarButton.css';

const ControlBarButton = ({ icon, onClick }) => (
  <div
    className={styles.ControlBarButton}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} />
  </div>
);

export default ControlBarButton;
