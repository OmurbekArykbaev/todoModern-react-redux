import React from "react"
import styles from "./Sidebar.module.scss"

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.wrapper}>
        <ul className={styles.navbar}>
          <li>All todos</li>
          <li>Hot todos</li>
          <li>Important todos</li>
          <li>Done</li>
          <li>Was changed</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
