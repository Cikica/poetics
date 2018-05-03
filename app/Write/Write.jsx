// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faICursor, faDotCircle, faCircle, faGenderless } from '@fortawesome/fontawesome-free-solid'

// Components
import Title from './../components/Title';
import Page from './../components/Page';
// Actions
import {
  writeAction,
  writeTitleAction,
  showAllTextAction,
  filterBySceneAction,
  filterByActAction,
  filterByOutlineAction
} from './WriteActions';
// Style
import styles from './Write.css';

type Props = {};

const mapStateToProps = (state) => {
  console.log('update fuck face', state.write.text)
  return {
    title: state.write.title,
    text: state.write.text
  };
};

const mapDispatchToProps = (dispatch) => ({
  writeTitle: (title) => dispatch(writeTitleAction(title)),
  write: (text) => dispatch(writeAction(text)),
  showAllText: () => dispatch(showAllTextAction()),
  filterByScene: () => dispatch(filterBySceneAction()),
  filterByAct: () => dispatch(filterByActAction()),
  filterByOutline: () => dispatch(filterByOutlineAction()),
});

class WriteAreaContainer extends Component<Props> {

  props: Props;

  render() {
    return (
      <div className={styles.WriteArea}>
        <div className={styles.TitleArea}>
          <Title
            text={this.props.title}
            onType={this.props.writeTitle}
          />
        </div>
        <div className={styles.TextArea}>
          <Page
            text={this.props.text}
            onType={this.props.write}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteAreaContainer);
