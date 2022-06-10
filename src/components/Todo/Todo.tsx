import { FC } from "react"
import { BsTrash, BsPencil, BsCalendarCheck } from "react-icons/bs"
import styles from "./Todo.module.scss"

type TodoProps = {
  id: number
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
  return (
    <li className={styles.todo}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>{text}</h3>
          <div>
            <button>
              <BsTrash />
            </button>
            <button>
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
