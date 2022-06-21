import { Dispatch, FC, useEffect, useRef } from "react"
import styles from "./ButtonType.module.scss"
import TodoType from "../../types/Todo"

type TBtnProps = {
  isHot: boolean
  isImportant: boolean
  setIsHot: Dispatch<React.SetStateAction<boolean>>
  setIsImportant: Dispatch<React.SetStateAction<boolean>>
  todo: TodoType
}

const ButtonType: FC<TBtnProps> = ({
  isHot,
  isImportant,
  setIsHot,
  setIsImportant,
  todo,
}) => {
  const btnHotRef = useRef<HTMLButtonElement>(null)
  const btnImpRef = useRef<HTMLButtonElement>(null)

  const addHotTodoHandler = () => {
    setIsHot(!isHot)

    if (null !== btnHotRef.current) {
      isHot
        ? (btnHotRef.current.style.opacity = "1")
        : (btnHotRef.current.style.opacity = "0.2")
    }
  }
  const addImportantTodoHandler = () => {
    setIsImportant(!isImportant)

    if (null !== btnImpRef.current) {
      isImportant
        ? (btnImpRef.current.style.opacity = "1")
        : (btnImpRef.current.style.opacity = "0.2")
    }
  }

  useEffect(() => {
    setIsHot(todo.isHot)
    setIsImportant(todo.isImportant)
  }, [todo.isHot, todo.isImportant, setIsHot, setIsImportant])

  return (
    <div className={styles.root}>
      <ul className={styles.wrapper}>
        <li className={styles.item}>
          <button
            style={isHot ? { opacity: "0.2" } : { opacity: "1" }}
            onClick={addHotTodoHandler}
            ref={btnHotRef}
            className={styles.btn}
          >
            Hot <span className={styles.hot}></span>
          </button>
        </li>
        <li className={styles.item}>
          <button
            style={isImportant ? { opacity: "0.2" } : { opacity: "1" }}
            onClick={addImportantTodoHandler}
            ref={btnImpRef}
            className={styles.btn}
          >
            Important <span className={styles.imp}></span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ButtonType
