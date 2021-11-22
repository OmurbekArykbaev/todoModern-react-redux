const TODO_ADD = "TODO_ADD"
const TODO_TOGGLED = "TODO_TOGGLED"
const TODO_REMOVE = "TODO_REMOVE"
const TODO_EDIT = "TODO_EDIT"

export const setTask = (task) => {
  return {
    type: TODO_ADD,
    payload: task,
  }
}

export const toggledTask = (id) => {
  return {
    type: TODO_TOGGLED,
    payload: id,
  }
}

export const deleteTodo = (id) => {
  return {
    type: TODO_REMOVE,
    payload: id,
  }
}

export const editTodo = (id, value) => {
  return {
    type: TODO_EDIT,
    id,
    text: value,
  }
}
