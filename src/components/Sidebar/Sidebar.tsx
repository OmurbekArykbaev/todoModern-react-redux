import { FC } from "react"
import { Link } from "react-router-dom"
import styles from "./Sidebar.module.scss"

const Sidebar: FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">All todos</Link>
          </li>
          <li>
            <Link to="/edit/12">Edit</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
