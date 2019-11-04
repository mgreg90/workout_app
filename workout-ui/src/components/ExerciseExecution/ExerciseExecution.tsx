import React from "react"
import { Button, Segment } from "semantic-ui-react"

import styles from "./ExerciseExecution.module.css"

interface Props {
  // define your props
}

const ExerciseExecution: React.FC<Props> = (props: Props) => {
  return <div className={styles.wrapper} >
    <Button attached='bottom'>Bottom</Button>
  </div>
}

export default ExerciseExecution