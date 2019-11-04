import React from 'react';
import styles from './WorkoutExecutionView.module.css';
import { Container, Icon } from 'semantic-ui-react';
import Header from "../../components/Header/Header";
import WorkoutExecutionContainer from "../../containers/WorkoutExecutionContainer";

const WorkoutExecutionView: React.FC = () => {
  return <>
    <div className={styles.wrapper}>
      <Header />
    </div>
    <WorkoutExecutionContainer />
  </>;
}

export default WorkoutExecutionView;