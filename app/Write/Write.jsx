// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faICursor, faDotCircle, faCircle, faGenderless } from '@fortawesome/fontawesome-free-solid'

// Components
import Page from './../components/Page';
// Actions
import {
  writeAction,
  showAllTextAction,
  filterBySceneAction,
  filterByActAction,
  filterByOutlineAction
} from './WriteActions';
// Style
import styles from './Write.css';

type Props = {};

const mapStateToProps = (state) => ({
  text: state.write.text
});

const mapDispatchToProps = (dispatch) => ({
  typeText: (text) => dispatch(writeAction(text)),
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
        <Page
          text={'Textus mc textus'}
          onType={this.props.typeText}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteAreaContainer);
