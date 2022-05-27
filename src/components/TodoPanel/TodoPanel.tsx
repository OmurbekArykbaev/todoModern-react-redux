import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import TodoType from "../../types/Todo"
import { addTodo } from "../../redux/todoItemSlice"

const TodoPanel = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const dispatch = useDispatch()

  const addTodoHandler = () => {
    const item: TodoType = {
      id: Date.now(),
      text: inputValue,
      isDone: false,
    }
    dispatch(addTodo(item))
  }
  return (
    <div>
      <TextField
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
      <Button onClick={addTodoHandler} variant="contained">
        Add
      </Button>
    </div>
  )
}

export default TodoPanel
