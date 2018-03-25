// @flow
import React from 'react';
import { cond, T, propEq } from 'ramda';

import style from './Page.css';

const Page = (props: Props) => (
  <div className={style.Page}>
    <textarea
      className={style.Textarea}
      onChange={(event) => props.onType(event.target.value)}
    >
    </textarea>
  </div>
);

export default Page;
