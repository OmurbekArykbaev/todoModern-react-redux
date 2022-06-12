import { FC, useEffect, useState } from "react"
import {
  BsTrash,
  BsPencil,
  BsCalendarCheck,
  BsCheckCircleFill,
} from "react-icons/bs"
import { useDispatch } from "react-redux"
import { removeTodo, setDoneTodo } from "../../redux/todoItemSlice"
import { useNavigate } from "react-router-dom"
import styles from "./Todo.module.scss"

type TodoProps = {
  id: string
  text: string
  isDone: boolean
  isHot: boolean
  isImportant: boolean
  wasChanched: boolean
  date: string
}

const Todo: FC<TodoProps> = ({
  id,
  text,
  isDone,
  isHot,
  isImportant,
  wasChanched,
  date,
}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [animateType, setAnimateType] = useState<string>("")

  useEffect(() => {
    if (isHot) {
      setAnimateType(`${styles.todo} ${styles.ishot}`)
    } else if (isImportant) {
      setAnimateType(`${styles.todo} ${styles.isimportant}`)
    } else {
      setAnimateType(`${styles.todo}`)
    }
  }, [isHot, isImportant])

  const removeTodoHandler = (id: string): void => {
    dispatch(removeTodo(id))
  }

  const setDoneTodoHandler = (id: string): void => {
    dispatch(setDoneTodo(id))
  }
  const editTodoHandler = (id: string) => {
    navigate(`/edit/${id}`)
  }

  return (
    <li className={animateType} onClick={() => setDoneTodoHandler(id)}>
      <div className={styles.wrapper}>
        {isDone && <BsCheckCircleFill className={styles.check} />}
        <div className={styles.content}>
          <h3>{text}</h3>
          <div>
            <button onClick={() => removeTodoHandler(id)}>
              <BsTrash />
            </button>
            <button onClick={() => editTodoHandler(id)}>
              <BsPencil />
            </button>
          </div>
        </div>
        <div className={styles.description}>
          <span>
            <BsCalendarCheck /> {date}
          </span>
          <span>was edit</span>
        </div>
      </div>
    </li>
  )
}

export default Todo
