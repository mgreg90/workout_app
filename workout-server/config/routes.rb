Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :exercise_definitions do
        resource :search, only: [:create]
      end
    end
  end
end
