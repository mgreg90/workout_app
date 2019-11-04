import React, { useState } from "react"
import { Divider, Form, FormProps, InputOnChangeData } from "semantic-ui-react"

import Client from "../../services/client"
import styles from "./ExerciseSearch.module.css"
import ExerciseList from "../ExerciseList/ExerciseList"

interface Props {
  onClickExercise: (exercise: ExerciseDefinitionType) => void
}

const ExerciseSearch: React.FC<Props> = (props: Props) => {
  const [searchText, setSearchText] = useState<string>("")
  const [results, setResults] = useState<ExerciseDefinitionType[]>([])
  const searchChangeHandler = (_: any, data: InputOnChangeData) => setSearchText(data.value)
  const searchSubmitHandler = async () => {
    const results = await Client.searchExercises(searchText)
    setResults(results)
  }

  return <>
    <Form onSubmit={searchSubmitHandler}>
      <Form.Input
        name="searchText"
        icon="search"
        placeholder="Search Exercises..."
        onChange={searchChangeHandler}
      />
    </Form>
    <Divider />
    <ExerciseList exercises={results} onClickExercise={props.onClickExercise} />
  </>
}

export default ExerciseSearch