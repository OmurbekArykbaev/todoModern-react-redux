import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { editTodo } from "../redux/action/taskAction"

const Todo = ({ todo, toggleTask, removeTask }) => {
  const dispatch = useDispatch()

  const [input, setInput] = useState(false)
  const handleInput = () => {
    setInput(!input)
  }
  const changeTodoText = (id, value) => {
    dispatch(editTodo(id, value))
  }

  return (
    <div key={todo.id} className="todo">
      <div className="todo__task">
        {input ? (
          <input
            type="text"
            value={todo.task}
            onChange={(e) => changeTodoText(todo.id, e.currentTarget.value)}
          />
        ) : (
          <p
            onClick={() => {
              toggleTask(todo.id)
            }}
            className={todo.complete ? "item-text strike" : "item-text "}
          >
            {todo.task}
          </p>
        )}
      </div>

      <button className="itemDelete" onClick={() => removeTask(todo.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>

      <button className="itemEdit" onClick={handleInput}>
        {input ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-pen"></i>
        )}
      </button>
    </div>
  )
}

export default Todo
