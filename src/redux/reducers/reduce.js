import { v4 as uuidv4 } from "uuid"
const TODO_ADD = "TODO_ADD"
const TODO_TOGGLED = "TODO_TOGGLED"
const TODO_REMOVE = "TODO_REMOVE"
const TODO_EDIT = "TODO_EDIT"

const initState = {
  todos: [
    {
      id: 1,
      task: "Записаться в тренажерный зал",
      complete: false,
    },
    {
      id: 2,
      task: "Купить курс по NodeJs в Udemy",
      complete: false,
    },
    {
      id: 3,
      task: "Прогуляться по парку",
      complete: true,
    },
  ],
}

const taskReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            task: action.payload,
            complete: false,
          },
        ],
      }

    case TODO_TOGGLED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            complete: !todo.complete,
          }
        }),
      }

    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }

    case TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo
          }
          return Object.assign({}, todo, {
            task: action.text,
          })
        }),
      }

    default:
      return state
  }
}

export default taskReducer
