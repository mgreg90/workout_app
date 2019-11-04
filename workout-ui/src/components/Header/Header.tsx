import React from "react";
import { Header } from "semantic-ui-react";
import styles from "./Header.module.css";

const TITLE = "Hit the Gym!"

const AppHeader: React.FC = () => (
  <Header className={styles.header}>
    <h1 className={styles.headerText}>
      {TITLE}
    </h1>
  </Header>
)

export default AppHeader