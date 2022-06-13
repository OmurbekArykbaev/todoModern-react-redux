import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import TodoType from "../types/Todo"

interface initState {
  todos: TodoType[]
}

const initialState: initState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") || "{}")
    : [],
}

export const todoItemSlice = createSlice({
  name: "TodoItems",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    setDoneTodo: (state, action: PayloadAction<string>) => {
      state.todos.map((item): void => {
        if (item.id === action.payload) {
          item.isDone = true
          item.isHot = false
          item.isImportant = false
        }
      })
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    updateTodo: (
      state,
      action: PayloadAction<{
        id: string
        text: string
        isHot: boolean
        isImportant: boolean
      }>
    ) => {
      if (action)
        state.todos.map((item) => {
          if (item.id === action.payload.id) {
            item.text = action.payload.text
            item.isHot = action.payload.isHot
            item.isImportant = action.payload.isImportant
            item.wasChanched = true
          }
        })
      localStorage.setItem("todos", JSON.stringify(state.todos))
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, setDoneTodo, updateTodo } =
  todoItemSlice.actions

export default todoItemSlice.reducer
