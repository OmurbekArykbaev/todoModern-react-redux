import { FC } from "react"
import { useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { Link } from "react-router-dom"

import styles from "./Sidebar.module.scss"
import { allTodosFilter } from "../../redux/todoItemSlice"

const Sidebar: FC = () => {
  const dispatch = useDispatch()

  // {{all:}}
  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <ul className={styles.navbar}>
          <li>
            <button onClick={() => dispatch(allTodosFilter("all"))}>
              All todos
            </button>
          </li>
          <li>
            <button onClick={() => dispatch(allTodosFilter("done"))}>
              Done
            </button>
          </li>
          <li>
            <button onClick={() => dispatch(allTodosFilter("hot"))}>Hot</button>
          </li>
          <li>
            <button onClick={() => dispatch(allTodosFilter("important"))}>
              Important
            </button>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
