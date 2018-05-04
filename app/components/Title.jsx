import React from 'react';

import style from './Title.css';

export default class Title extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentWillReceiveProps (nextProps) {
    // if (nextProps.text !== this.state.text) {
    //   this.onChange(nextProps.text);
    // }
  }

  onChange (text) {
    this.setState({ text });
    this.props.onType(text);
  }

  render () {
    return (
      <div className={style.Title}>
        <input
          type="text"
          className={style.TitleInput}
          value={this.state.text}
          onChange={(event) => this.onChange(event.target.value)}
          />
      </div>
    );
  }
};
// onChange={(event) => this.props.onType(event.target.value)}

// export default ({ onType, text }) => (
//   <div className={style.Title}>
//     <input
//       type="text"
//       className={style.TitleInput}
//       value={text}
//       onChange={(event) => onType(event.target.value)}
//     />
//   </div>
// );
