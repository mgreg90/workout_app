import axios from "axios"

class Client {
  public async searchExercises(searchText: string): Promise<ExerciseDefinitionType[]> {
    const response = await this.standardPost("exercise_definitions/search", { searchText })
    const results = response.data
    return results
  }

  private async standardPost(path: string, body: object) {
    return await axios.post(`http://localhost:3000/api/v1/${path}`, body)
  }
}

const client = new Client()

export default client