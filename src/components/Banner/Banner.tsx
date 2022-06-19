import React from "react"
import { TbMoodEmpty } from "react-icons/tb"
import styles from "./Banner.module.scss"

const Banner = () => {
  return (
    <article className={styles.banner}>
      <div className={styles.wrapper}>
        <h1>Please add new todo task...</h1>
        <TbMoodEmpty />
      </div>
    </article>
  )
}

export default Banner
