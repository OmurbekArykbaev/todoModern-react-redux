import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Banner from "../../components/Banner/Banner"
import Todo from "../../components/Todo/Todo"
import TodoPanel from "../../components/TodoPanel/TodoPanel"
import { RootState } from "../../redux/store"
import TodoType from "../../types/Todo"
import styles from "./Home.module.scss"

const Home: FC = () => {
  const [filteredArray, setFilteredArray] = useState<TodoType[]>([])
  const { todos, filteredTodo } = useSelector((state: RootState) => state.todo)

  useEffect(() => {
    switch (filteredTodo) {
      case "all":
        setFilteredArray(todos)
        break
      case "done":
        setFilteredArray(todos.filter((item) => item.isDone === true))
        break
      case "hot":
        setFilteredArray(todos.filter((item) => item.isHot === true))
        break
      case "important":
        setFilteredArray(todos.filter((item) => item.isImportant === true))
        break

      default:
        setFilteredArray(todos)
    }
  }, [todos, filteredTodo])

  return (
    <section className={styles.home}>
      <TodoPanel />
      <div className={styles.wrapper}>
        {filteredArray.length > 0 && (
          <h1 className={styles.title}>{filteredArray.length} todo</h1>
        )}
        {filteredArray.length > 0 ? (
          <ul className={styles.list}>
            {filteredArray.map((el) => (
              <Todo key={el.id} {...el} />
            ))}
          </ul>
        ) : (
          <Banner />
        )}
      </div>
    </section>
  )
}

export default Home
