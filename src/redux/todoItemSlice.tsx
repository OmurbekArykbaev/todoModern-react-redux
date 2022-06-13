import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import TodoType from "../types/Todo"

interface initState {
  todos: TodoType[]
  todoEdit: TodoType[]
}

const initialState: initState = {
  todos: [],
  todoEdit: [],
}

export const todoItemSlice = createSlice({
  name: "TodoItems",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    setDoneTodo: (state, action: PayloadAction<string>) => {
      state.todos.map((item): void => {
        if (item.id === action.payload) {
          item.isDone = true
          item.isHot = false
          item.isImportant = false
        }
      })
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
      state.todos.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text
          item.isHot = action.payload.isHot
          item.isImportant = action.payload.isImportant
          item.wasChanched = true
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, setDoneTodo, updateTodo } =
  todoItemSlice.actions

export default todoItemSlice.reducer
