import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const state = useSelector(({ tasks }) => tasks.todos)
  const isCompleteTasks = state.filter((item) => item.complete === true)

  const handleSubmit = (e) => {
    if (userInput.length === 0 || userInput === "" || userInput === " ") {
      e.preventDefault()
      setErrorMsg("Напиши пожалуйста задачу!")
      return
    }
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
    setErrorMsg("")
  }

  const handleChange = (e) => {
    if (e.currentTarget.value.length >= 55) {
      setErrorMsg("Количество символов ограничено!")
      return
    }
    setErrorMsg("")
    setUserInput(e.currentTarget.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value.length >= 55) {
        setErrorMsg("Количество символов ограничено!")
      }
      handleSubmit(e)
    }
  }

  return (
    <div className="todoForm">
      <form className="todoEdit">
        <textarea
          type="text"
          value={userInput}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="67 символов"
        />

        <button onClick={handleSubmit}>Добавить</button>
      </form>
      <div className="todoStat">
        <p>Количество задач: {state.length}</p>
        <p>Выполнено: {isCompleteTasks.length}</p>
        {errorMsg && <p className="warningMsg">{errorMsg}</p>}
      </div>
    </div>
  )
}

export default TodoForm
