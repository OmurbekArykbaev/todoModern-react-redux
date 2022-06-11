import { ChangeEvent, FC, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TodoType from "../../types/Todo"
import styles from "./TodoPanel.module.scss"
import { ImCross } from "react-icons/im"
import { addTodo } from "../../redux/todoItemSlice"
import date from "date-and-time"
import { RootState } from "../../redux/store"

const TodoPanel: FC = () => {
  const editTodo = useSelector((state: RootState) => state.todo.todoEdit)
  const [inputValue, setInputValue] = useState<string>("")
  const [isHot, setIsHot] = useState<boolean>(false)
  const [isImportant, setIsImportant] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const dispatch = useDispatch()

  const addTodoHandler = () => {
    if (!inputValue) {
      setErrorMessage("Please write some text!")
      setTimeout(() => setErrorMessage(""), 1000)
    } else {
      const now: Date = new Date()
      const time: string = date.format(now, "DD.MM.YYYY HH:mm")
      const todo: TodoType = {
        id: Date.now(),
        text: inputValue,
        isDone: false,
        isHot: isHot,
        isImportant: isImportant,
        wasChanched: false,
        date: time,
      }
      dispatch(addTodo(todo))
      setInputValue("")
      setIsHot(false)
      setIsImportant(false)
    }
  }

  const addHotHandler = (): void => {
    setIsHot(!isHot)
  }
  const addImportantHandler = (): void => {
    setIsImportant(!isImportant)
  }

  const todoOnChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    if (editTodo[0]) {
      setInputValue(editTodo[0].text)
    }
  }, [editTodo])

  return (
    <div className={styles.toolbar}>
      <div className={styles.wrapper}>
        {errorMessage && (
          <div className={styles.banner}>
            <h3>Please write some text!</h3>
          </div>
        )}

        <div className={styles.form}>
          <div className={styles.input}>
            <input
              value={inputValue}
              onChange={(e) => todoOnChangeHandler(e)}
              id="standard-basic"
            />
            <ImCross onClick={() => setInputValue("")} />
          </div>

          <button className={styles.btn} onClick={addTodoHandler}>
            Add Todo
          </button>
        </div>

        {inputValue && (
          <div className={styles.control}>
            <button
              style={isHot ? { opacity: "0.2" } : { opacity: "1" }}
              onClick={addHotHandler}
            >
              Hot <span></span>
            </button>
            <button
              style={isImportant ? { opacity: "0.2" } : { opacity: "1" }}
              onClick={addImportantHandler}
            >
              Important <span></span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoPanel
