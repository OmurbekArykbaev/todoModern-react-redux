import React, { FC, useRef } from "react"
import styles from "./Edit.module.scss"

const Edit: FC = () => {
  return (
    <section className={styles.edit}>
      <div className={styles.wrapper}>
        <h1>Edit Todo </h1>
        <form>
          <input type="text" />
          <button>Edit</button>
        </form>
        <div className={styles.control}>
          <button>
            Hot <span className={styles.hot}></span>
          </button>
          <button>
            Important <span className={styles.imp}></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Edit
