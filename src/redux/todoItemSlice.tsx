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
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
    setDoneTodo: (state, action: PayloadAction<number>) => {
      state.todos.map((item): void => {
        if (item.id === action.payload) {
          item.isDone = true
          item.isHot = false
          item.isImportant = false
        }
      })
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      state.todoEdit = state.todoEdit.filter(
        (item) => item.id === action.payload
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, setDoneTodo, updateTodo } =
  todoItemSlice.actions

export default todoItemSlice.reducer
