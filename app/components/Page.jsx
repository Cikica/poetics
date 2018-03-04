import React from 'react';

import style from './Page.css';

export default class Page extends React.Component {

  whoYou() {

  }

  render () {
    return (
      <div className={style.Page}>
        <span
          className={style.title}
        >
          The Infamous master of the hidden chamber under the moon of the guiding star
        </span>
        <span className={style.act}>
          I
        </span>
        <span className={style.chapter}>
          # All things begin before yer mother
        </span>
        <span className={style.prose}>
          It all began when i was a scrub ye soem some
        </span>
        <span className={style.dialog}>
            SOme dude: 'Over there here'.
        </span>
        <span className={style.dialog}>
            Some some: 'How there over there'.
        </span>
      </div>
    );
  }
};
