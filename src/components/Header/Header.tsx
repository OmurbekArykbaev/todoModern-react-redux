import styles from "./Header.module.scss"
import "./Header.module.scss"
import { FC } from "react"

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="#/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
