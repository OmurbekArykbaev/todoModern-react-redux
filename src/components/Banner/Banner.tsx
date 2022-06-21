import { FC } from "react"
import { TbMoodEmpty } from "react-icons/tb"
import styles from "./Banner.module.scss"
import { allTodosFilter } from "../../redux/todoItemSlice"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"

const Banner: FC = () => {
  const filterState = useSelector((state: RootState) => state.todo.filteredTodo)
  const dispatch = useDispatch()

  return (
    <article className={styles.banner}>
      <div className={styles.wrapper}>
        {filterState !== "all" && (
          <button onClick={() => dispatch(allTodosFilter("all"))}>
            {"<"} Back
          </button>
        )}

        <h1>
          This category is empty
          <br />
          please add new todo or change state task...
        </h1>
        <TbMoodEmpty />
      </div>
    </article>
  )
}

export default Banner
