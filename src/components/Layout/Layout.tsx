import { FC } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
// import { Sidebar } from "../index"

import styles from "./Layout.module.scss"

const Layout: FC = () => {
  return (
    <>
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}

export default Layout
