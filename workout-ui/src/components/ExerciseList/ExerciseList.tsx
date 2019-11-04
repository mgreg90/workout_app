import React from "react"
import { Image, List } from "semantic-ui-react"

import styles from "./ExerciseList.module.css"
import ExerciseSearch from "../ExerciseSearch/ExerciseSearch"

interface Props {
  exercises: ExerciseDefinitionType[]
  onClickExercise: (exercise: ExerciseDefinitionType) => void
}

const ExerciseList: React.FC<Props> = (props: Props) => {
  const items = props.exercises.map(exercise => (
    <List.Item
      key={exercise.code}
      className={styles.listItem}
      onClick={() => props.onClickExercise(exercise)}
      as="a"
    >
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/rachel.png' />
      <List.Content >
        <List.Header>{exercise.name}</List.Header>
        {exercise.type}
      </List.Content>
    </List.Item>
  ))

  return <List divided size="huge">{items}</List>
}

export default ExerciseList