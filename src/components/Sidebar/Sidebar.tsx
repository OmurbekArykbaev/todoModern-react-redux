import React from "react"
import styles from "./Sidebar.module.scss"

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <ul>
        <li>All todos</li>
        <li>Hot todos</li>
        <li>Important todos</li>
        <li>Done</li>
        <li>Was changed</li>
      </ul>
    </aside>
  )
}

export default Sidebar
