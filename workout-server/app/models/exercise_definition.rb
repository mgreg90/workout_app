class ExerciseDefinition < ApplicationRecord
  self.primary_key = :code

  DEFAULT_SEARCH_PAGE_SIZE = 20

  def self.search search_text, page: 1
    search_args = { search_text: "%#{search_text}%".strip }
    query_string = "name ilike :search_text"

    where(query_string, search_args).
      page(page).
      per(DEFAULT_SEARCH_PAGE_SIZE)
  end
end
