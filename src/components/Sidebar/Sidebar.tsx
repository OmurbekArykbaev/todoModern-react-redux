import { FC, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { RootState } from "../../redux/store"
import { allTodosFilter } from "../../redux/todoItemSlice"
import styles from "./Sidebar.module.scss"

const Sidebar: FC = () => {
  const [isOpenSB, setIsOpenSB] = useState<boolean>(false)
  const sidebarBtnRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const filterState = useSelector((state: RootState) => state.todo.filteredTodo)

  const openSideBar = () => {
    setIsOpenSB(!isOpenSB)

    if (null !== sidebarBtnRef.current) {
      isOpenSB
        ? (sidebarBtnRef.current.style.display = "flex")
        : (sidebarBtnRef.current.style.display = "none")
    }
  }

  // const closeSidebarHandler = () => {
  //   setIsOpenSB(!isOpenSB)
  //   if (null !== sidebarBtnRef.current) {
  //     isOpenSB
  //       ? (sidebarBtnRef.current.style.display = "flex")
  //       : (sidebarBtnRef.current.style.display = "none")
  //   }
  // }

  return (
    <aside className={styles.aside}>
      <span
        className={
          isOpenSB ? `${styles.menu}` : `${styles.menu} ${styles.isClose}`
        }
        ref={sidebarRef}
      >
        <button onClick={() => openSideBar()}>
          {isOpenSB ? <AiOutlineMenu /> : <AiOutlineClose />}
        </button>
      </span>

      <div ref={sidebarBtnRef} className={styles.wrapper}>
        <div className={styles.title}>
          <h1>Todo Modern</h1>
        </div>
        <ul className={styles.navbar} onClick={() => openSideBar()}>
          <li
            onClick={() => dispatch(allTodosFilter("all"))}
            className={
              filterState === "all"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            All todos
          </li>
          <li
            onClick={() => dispatch(allTodosFilter("done"))}
            className={
              filterState === "done"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            Done
          </li>
          <li
            onClick={() => dispatch(allTodosFilter("hot"))}
            className={
              filterState === "hot"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            Hot
          </li>
          <li
            onClick={() => dispatch(allTodosFilter("important"))}
            className={
              filterState === "important"
                ? `${styles.item} ${styles.active}`
                : `${styles.item}`
            }
          >
            Important
          </li>
        </ul>
        <div className={styles.links}>
          <a href="https://github.com/OmurbekArykbaev">
            <BsGithub />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
