// @flow
import React, { Component } from 'react';

import styles from "./HomePage.css";
import Write from "./../Write/Write";

type Props = {};

export default class HomePage extends Component<Props> {

  props: Props;

  render() {
    return (
      <div className={styles.Work}>
        <Write/>
      </div>
    );
  }
}
