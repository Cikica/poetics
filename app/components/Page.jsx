import React from 'react';
import { cond, T, propEq } from 'ramda';

import style from './Page.css';

const Page = (props) => (
  <div className={style.Page}>
    <textarea
      className={style.Textarea}
      onChange={(event) => props.onType(event.target.value)}
      value={props.text}
      ></textarea>
  </div>
);

export default Page;
