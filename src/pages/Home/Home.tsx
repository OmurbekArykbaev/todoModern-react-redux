import { FC } from "react"
import { useSelector } from "react-redux"
import Todo from "../../components/Todo/Todo"
import TodoPanel from "../../components/TodoPanel/TodoPanel"
import { RootState } from "../../redux/store"
import styles from "./Home.module.scss"

const Home: FC = () => {
  const todoArray = useSelector((state: RootState) => state.todo.todos)

  return (
    <section className={styles.home}>
      <TodoPanel />
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {todoArray.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home
