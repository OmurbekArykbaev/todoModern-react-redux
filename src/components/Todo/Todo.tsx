import { FC } from "react"
import { BsTrash, BsPencil } from "react-icons/bs"
import styles from "./Todo.module.scss"

type TodoProps = {
  id: number
  text: string
  isDone: boolean
  isHot: boolean
  isImportant: boolean
  wasChanched: boolean
}

const Todo: FC<TodoProps> = ({
  id,
  text,
  isDone,
  isHot,
  isImportant,
  wasChanched,
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
          <span>13:44, 10.06.2022</span>
          <span>was edit</span>
        </div>
      </div>
    </li>
  )
}

export default Todo
