import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import TodoType from "../types/Todo"

interface initState {
  todos: TodoType[]
}

const initialState: initState = {
  todos: [],
}

export const todoItemSlice = createSlice({
  name: "TodoItems",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = todoItemSlice.actions

export default todoItemSlice.reducer
