EXERCISES_YAML = 'exercises.yaml'

# STEP define helper functions
def read_yaml_file(filename)
  string_contents = File.read(Rails.root.join('db', 'seed_data', filename))
  YAML.load(string_contents).with_indifferent_access
end

def border &block
  puts "=" * 80
  if block
    yield
    puts "=" * 80
  end
end

def print_stats title:, models:
  border do
    puts "\t#{title}"
    puts "Current Time:\t#{Time.now}"
    models.each do |model|
      count = model.count
      puts "#{model}:\t#{count}"
    end
  end
end

def add_exercise_def exercise
  exercise_def = ExerciseDefinition.find_by code: exercise[:code]
  return if exercise_def
  ExerciseDefinition.create!(
    name: exercise[:name],
    code: exercise[:code],
    category: exercise[:category]
  )
end

# STEP print pre-run counts
print_stats(
  title: "PRE RUN STATS",
  models: [
    ExerciseDefinition
  ]
)

# STEP execution
exercises = read_yaml_file(EXERCISES_YAML)[:exercises]
ExerciseDefinition.transaction do
  exercises.each { |ex| add_exercise_def(ex) }
end

# STEP print post-run counts
print_stats(
  title: "POST RUN STATS",
  models: [
    ExerciseDefinition
  ]
)