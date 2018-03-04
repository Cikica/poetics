// @flow
import React, { Component } from 'react';

import styles from "./HomePage.css";
import ControlBar from "./../components/ControlBar";
import WriteArea from "./../WriteArea/WriteArea";

type Props = {};

export default class HomePage extends Component<Props> {

  props: Props;

  render() {
    return (
      <div className={styles.Work}>
        {/* <ControlBar/> */}
        <WriteArea/>
      </div>
    );
  }
}
