import { FC, useEffect, useState } from "react"
import { useSelector } from "react-redux"
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
        <h1 className={styles.title}>
          Total todo in this category {filteredArray.length}
        </h1>
        <ul className={styles.list}>
          {filteredArray.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home
