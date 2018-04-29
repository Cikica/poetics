import React from 'react';

import style from './Title.css';

export default ({ onType, text }) => (
  <div className={style.Title}>
    <input
      type="text"
      className={style.TitleInput}
      value={text}
      onChange={(event) => onType(event.target.value)}
    />
  </div>
);
