import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Box } from "@mui/material"

const Home = () => {
  const todoArray = useSelector((state: RootState) => state.todo.todos)

  return <div>Home </div>
}

export default Home
