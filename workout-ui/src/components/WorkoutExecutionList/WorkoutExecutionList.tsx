import React from "react"
import { Container } from "semantic-ui-react"

import styles from "./WorkoutExecutionList.module.css"
import ExerciseList from "../ExerciseList/ExerciseList"
import Icon, { IconType } from "../Icon/Icon"

interface Props {
  onClickAddExercise: () => void
  onClickExercise: (exercise: ExerciseDefinitionType) => void
  exercises: ExerciseDefinitionType[]
}

const WorkoutExecutionList: React.FC<Props> = (props: Props) => (
  <Container>
    <ExerciseList
      exercises={props.exercises}
      onClickExercise={props.onClickExercise}
    />
    <Icon
      onClick={props.onClickAddExercise}
      type={IconType.Add}
      centered
    />
  </Container>
)

export default WorkoutExecutionList