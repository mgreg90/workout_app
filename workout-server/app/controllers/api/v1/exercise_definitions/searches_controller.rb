class Api::V1::ExerciseDefinitions::SearchesController < ApplicationController
  def create
    results = ExerciseDefinition.search(params[:search_text])

    render json: results
  end
end
