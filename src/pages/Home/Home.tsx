import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import styles from "./Home.module.scss"

const Home = () => {
  const todoArray = useSelector((state: RootState) => state.todo.todos)

  return <section className={styles.home}>Home </section>
}

export default Home
