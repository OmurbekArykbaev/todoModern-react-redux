import { FC, useState, MouseEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import ButtonType from "../../components/ButtonType/ButtonType"
import { RootState } from "../../redux/store"
import { updateTodo } from "../../redux/todoItemSlice"
import styles from "./Edit.module.scss"

const Edit: FC = () => {
  const [isHot, setIsHot] = useState<boolean>(false)
  const [isImportant, setIsImportant] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const [todo] = useSelector((state: RootState) =>
    state.todo.todos?.filter((item) => item.id === params.id)
  )
  const [inputValue, setInputValue] = useState<string>(todo?.text)

  const addEditTodoHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (params.id) {
      dispatch(
        updateTodo({ id: params.id, text: inputValue, isHot, isImportant })
      )
      navigate("/")
    }
  }

  return (
    <section className={styles.edit}>
      <div className={styles.wrapper}>
        <button onClick={() => navigate("/")}> {"<"} Back</button>

        <h1>Edit Todo {todo.id}</h1>
        <form>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <button onClick={(e) => addEditTodoHandler(e)}>Edit</button>
        </form>

        <div className={styles.control}>
          <ButtonType
            isHot={isHot}
            isImportant={isImportant}
            setIsImportant={setIsImportant}
            setIsHot={setIsHot}
            todo={todo}
          />
        </div>
      </div>
    </section>
  )
}

export default Edit
