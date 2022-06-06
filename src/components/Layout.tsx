import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import TodoPanel from "./TodoPanel/TodoPanel"

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Outlet />
        <TodoPanel />
      </main>
    </>
  )
}

export default Layout
