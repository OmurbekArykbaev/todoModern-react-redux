import { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import TodoType from "../../types/Todo"
import styles from "./TodoPanel.module.scss"
import { ImCross } from "react-icons/im"
import { MdClear } from "react-icons/md"
import { addTodo } from "../../redux/todoItemSlice"
import date from "date-and-time"

const TodoPanel: FC = () => {
  const btnHotRef = useRef<HTMLButtonElement>(null)
  const btnImpRef = useRef<HTMLButtonElement>(null)
  const inputrRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState<string>("")
  const [isHot, setIsHot] = useState<boolean>(false)
  const [isImportant, setIsImportant] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const dispatch = useDispatch()

  const addTodoHandler = () => {
    if (!inputValue) {
      setErrorMessage("Please write some text!")
      setTimeout(() => setErrorMessage(""), 2000)
    } else {
      const now: Date = new Date()
      const time: string = date.format(now, "DD.MM.YYYY HH:mm")
      const todo: TodoType = {
        id: String(Date.now()),
        text: inputValue.slice(0, 45),
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
    if (null !== btnHotRef.current) {
      isHot
        ? (btnHotRef.current.style.opacity = "1")
        : (btnHotRef.current.style.opacity = "0.2")
    }
  }
  const addImportantHandler = (): void => {
    setIsImportant(!isImportant)
    if (null !== btnImpRef.current) {
      isImportant
        ? (btnImpRef.current.style.opacity = "1")
        : (btnImpRef.current.style.opacity = "0.2")
    }
  }

  const todoOnChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
    if (e.target.value.length > 45) {
      setErrorMessage("The input value has restrictions, 45 words!")
      setTimeout(() => setErrorMessage(""), 4000)
      setInputValue(inputValue.slice(0, 45))
    }
  }

  useEffect(() => {
    inputrRef.current?.focus()
  }, [])

  return (
    <div className={styles.toolbar}>
      <div className={styles.wrapper}>
        {errorMessage && (
          <div className={styles.banner} onClick={() => setErrorMessage("")}>
            <h3>{errorMessage}</h3>
            <span>
              <MdClear />
            </span>
          </div>
        )}

        <div className={styles.form}>
          <div className={styles.input}>
            <input
              placeholder="Please write some todo..."
              ref={inputrRef}
              value={inputValue}
              onChange={(e) => todoOnChangeHandler(e)}
              id="standard-basic"
            />
            <ImCross onClick={() => setInputValue("")} />
          </div>

          <button type="submit" className={styles.btn} onClick={addTodoHandler}>
            Add Todo
          </button>
        </div>

        {inputValue && (
          <div className={styles.control}>
            {!isImportant && (
              <button ref={btnHotRef} onClick={addHotHandler}>
                Hot <span className={styles.hot}></span>
              </button>
            )}
            {!isHot && (
              <button ref={btnImpRef} onClick={addImportantHandler}>
                Important <span className={styles.imp}></span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoPanel
