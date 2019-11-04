import React, { useState } from "react"

import styles from "./WorkoutExecution.module.css"
import ExerciseExecution from "../components/ExerciseExecution/ExerciseExecution"
import ExerciseSearch from "../components/ExerciseSearch/ExerciseSearch"
import WorkoutExecutionList from "../components/WorkoutExecutionList/WorkoutExecutionList"

enum ViewState {
  List = 0,
  ExerciseSearch = 1,
  ExerciseExecution = 2,
}

const DEFAULT_VIEW_STATE = ViewState.List

const WorkoutExecutionContainer: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(DEFAULT_VIEW_STATE)
  const [exercises, setExercises] = useState<ExerciseDefinitionType[]>([])
  const [currentExercise, setCurrentExercise] = useState<ExerciseDefinitionType | undefined>(undefined)

  const addExerciseHandler = () => setViewState(ViewState.ExerciseSearch)
  const clickExerciseHandler = (exercise: ExerciseDefinitionType) => {
    setExercises([...exercises, exercise])
    setViewState(ViewState.List)
  }
  const addSetHandler = (exercise: ExerciseDefinitionType) => {
    setCurrentExercise(exercise)
    setViewState(ViewState.ExerciseExecution)
  }

  switch (viewState) {
    case ViewState.List:
      return <WorkoutExecutionList
        onClickAddExercise={addExerciseHandler}
        onClickExercise={addSetHandler}
        exercises={exercises}
      />
    case ViewState.ExerciseSearch:
      return <ExerciseSearch onClickExercise={clickExerciseHandler} />
    case ViewState.ExerciseExecution:
      return <ExerciseExecution />
  }
};

export default WorkoutExecutionContainer;