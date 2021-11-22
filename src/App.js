import React from "react"
import TodoForm from "./components/TodoForm"
import Todo from "./components/Todo"
import { useDispatch, useSelector } from "react-redux"
import { setTask, toggledTask, deleteTodo } from "./redux/action/taskAction"

function App() {
  const task = useSelector((state) => state.tasks.todos)
  const dispatch = useDispatch()

  const addTask = (userInput) => {
    dispatch(setTask(userInput))
  }

  const removeTask = (id) => {
    dispatch(deleteTodo(id))
  }

  const handleToggle = (id) => {
    dispatch(toggledTask(id))
  }

  return (
    <div className="App container">
      <header>
        <h1 className="title">Todo-Modern (React Redux)</h1>
      </header>

      <div className="board">
        <div className="todo-column">
          {task.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            )
          })}
        </div>

        <TodoForm addTask={addTask} />
      </div>
    </div>
  )
}

export default App
