import { FC, MouseEvent, useState } from "react"
import styles from "./Edit.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { useNavigate, useParams } from "react-router-dom"
import { updateTodo } from "../../redux/todoItemSlice"
import ButtonType from "../../components/ButtonType/ButtonType"

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
        <h1>Edit Todo {todo.id}</h1>
        <form>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          />
          <button onClick={(e) => addEditTodoHandler(e)}>Edit</button>
        </form>

        <ButtonType
          isHot={isHot}
          isImportant={isImportant}
          setIsImportant={setIsImportant}
          setIsHot={setIsHot}
          todo={todo}
        />
      </div>
    </section>
  )
}

export default Edit
