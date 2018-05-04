import React from 'react';
import { cond, T, propEq } from 'ramda';

import style from './Page.css';

export default class Page extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.text !== this.state.text) {
    //   this.onChange(nextProps.text);
    // }
  }

  onChange(text) {
    this.setState({ text });
    this.props.onType(text);
  }

  render() {
    return (
      <div className={style.Page}>
        <textarea
          className={style.Textarea}
          onChange={(event) => this.onChange(event.target.value)}
          value={this.state.text}
        ></textarea>
      </div>
    );
  }
}

// const Page = (props) => (
//   <div className={style.Page}>
//     <textarea
//       className={style.Textarea}
//       onChange={(event) => props.onType(event.target.value)}
//       value={props.text}
//     ></textarea>
//   </div>
// );

// export default Page;
