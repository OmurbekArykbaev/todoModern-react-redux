import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import TodoType from "../../types/Todo"
import { addTodo } from "../../redux/todoItemSlice"
import { Box } from "@mui/material"

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
    <Box flex={1} bgcolor={"whiteSmoke"} p={2}>
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
    </Box>
  )
}

export default TodoPanel
