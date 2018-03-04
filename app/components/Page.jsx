// @flow
import React from 'react';
import { cond, T, propEq } from 'ramda';

import style from './Page.css';

type PageLineType = 'title' | 'act' | 'chapter' | 'prose' | 'dialog';

type PageLine = {
  type: PageLineType;
  value: string;
};

type Props = {
  text: Array<PageLine>;
};

const RenderTitle = (line: PageLine, index: number) => (
  <span
    key={index}
    className={style.title}
  >{line.value}</span>
);

const RenderAct = (line: PageLine, index: number) => (
  <span
    key={index}
    className={style.act}
  >{line.value}</span>
);

const RenderChapter = (line: PageLine, index: number) => (
  <span
    key={index}
    className={style.chapter}
  >{line.value}</span>
);

const RenderProse = (line: PageLine, index: number) => (
  <span
    key={index}
    className={style.prose}
  >{line.value}</span>
);

const RenderDialog = (line: PageLine, index: number) => (
  <span
    key={index}
    className={style.dialog}
  >{line.value}</span>
);

const RenderLine = cond([
  [propEq('type', 'title'), RenderTitle],
  [propEq('type', 'act'), RenderAct],
  [propEq('type', 'chapter'), RenderChapter],
  [propEq('type', 'prose'), RenderProse],
  [propEq('type', 'dialog'), RenderDialog],
  [T, RenderProse],
]);

const Page = (props: Props) => (
  <div className={style.Page}>
    {props.text.map(RenderLine)}
  </div>
);

export default Page;
