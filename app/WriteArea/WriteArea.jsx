// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Page from './../components/Page';

import { writeAction } from './WriteActions';
import styles from './WriteArea.css';

type Props = {};

const mapStateToProps = (state) => ({
  text: state.write.text
});

const mapDispatchToProps = (dispatch) => ({
  typeText: (text) => dispatch(writeAction(text))
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
