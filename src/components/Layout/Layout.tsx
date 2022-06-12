import { FC } from "react"
import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import TodoPanel from "../TodoPanel/TodoPanel"
import styles from "./Layout.module.scss"

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <Outlet />
      </main>
    </>
  )
}

export default Layout
