1 - Quick Workout
=======

## Priority #1 Be able to record a workout

* Simple gym style - sets, reps, weight
* Multiple exercises

### Workflow

1. USER Click add to search exercises
1. SYSTEM changes to exercise search screen
2. USER Search and select exercise
2. SYSTEM return to workout list screen
2. QA new exercise is on the workout list
3. REPEAT add as many exercises as desirable
4. USER Add Rep to Exercise
4. SYSTEM changes to AddSetView
5. USER Adds a Set/Rep
5. SYSTEM Stores the Set in memory
5. SYSTEM returns to the workout list view
5. QA latest set is visible on the screen
6. USER submits the workout
6. SYSTEM stores the workout
6. QA workout results are stored in the db

### Future

Right now there are no users or menus leading up to this, so this story does not
include the routing after successful submission. Once auth is done, we'll need
to route users somewhere after this.
