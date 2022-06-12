import React, { FC, useState } from "react"
import styles from "./Edit.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { useNavigate, useParams } from "react-router-dom"
import { updateTodo } from "../../redux/todoItemSlice"

const Edit: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const [todo] = useSelector((state: RootState) =>
    state.todo.todos?.filter((item) => item.id === params.id)
  )
  const [inputValue, setInputValue] = useState<string>(todo?.text)

  const addEditTodoHandler = () => {
    if (params.id) {
      dispatch(updateTodo({ id: params.id, text: inputValue }))
      navigate("/")
    }
  }

  return (
    <section className={styles.edit}>
      <div className={styles.wrapper}>
        <h1>Edit Todo {todo.id}</h1>
        <form>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <button onClick={() => addEditTodoHandler()}>Edit</button>
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
