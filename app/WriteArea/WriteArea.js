// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Page from './../components/Page';

import { writeAction } from './WriteActions';
import styles from './WriteArea.css';

type Props = {};

const mapStateToProps = (state) => ({

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
          text={[
            {
            type: 'title',
            value: 'The Infamous master of the hidden chamber under the moon of the guiding star',
            },
            {
            type: 'act',
            value: 'I',
            },
            {
            type: 'chapter',
            value: '# All things begin before yer mother',
            },
            {
            type: 'prose',
            value: 'It all began when i was a scrub ye soem some',
            },
            {
            type: 'dialog',
            value: 'SOme dude: Over there here.',
            },
            {
            type: 'dialog',
            value: 'Some some: How there over there.',
            },
          ]}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WriteAreaContainer);
