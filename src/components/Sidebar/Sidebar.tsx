import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./Sidebar.module.scss"
import { allTodosFilter } from "../../redux/todoItemSlice"
import { RootState } from "../../redux/store"

const Sidebar: FC = () => {
  const dispatch = useDispatch()
  const filterState = useSelector((state: RootState) => state.todo.filteredTodo)
  console.log(filterState)

  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <ul className={styles.navbar}>
          <li
            onClick={() => dispatch(allTodosFilter("all"))}
            className={
              filterState === "all"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            All todos
          </li>
          <li
            onClick={() => dispatch(allTodosFilter("done"))}
            className={
              filterState === "done"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            Done
          </li>
          <li
            onClick={() => dispatch(allTodosFilter("hot"))}
            className={
              filterState === "hot"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            Hot
          </li>
          <li
            onClick={() => dispatch(allTodosFilter("important"))}
            className={
              filterState === "important"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            Important
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
