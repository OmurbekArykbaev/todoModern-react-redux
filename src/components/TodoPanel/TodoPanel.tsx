import { useState } from "react"
import { useDispatch } from "react-redux"
import TodoType from "../../types/Todo"
import styles from "./TodoPanel.module.scss"
import { addTodo } from "../../redux/todoItemSlice"

const TodoPanel = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const dispatch = useDispatch()

  const addTodoHandler = () => {
    const item: TodoType = {
      id: Date.now(),
      text: inputValue,
      isDone: false,
      isHot: false,
      isImportant: false,
      wasChanched: false,
    }
    dispatch(addTodo(item))
  }
  return (
    <div className={styles.toolbar}>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="standard-basic"
          />
          <button className={styles.btn} onClick={addTodoHandler}>
            Add Todo
          </button>
        </div>

        <div className={styles.control}>
          <button>
            Hot <span></span>
          </button>
          <button>
            Important <span></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoPanel
