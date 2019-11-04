class CreateExerciseDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_definitions, id: false do |t|
      t.string :name
      t.string :code, limit: 4, null: false
      t.string :category, limit: 8, null: false

      t.timestamps
    end

    add_index :exercise_definitions, :code, unique: true
  end
end
