import React, { useState } from "react"
import TodoPanel from "../components/TodoPanel/TodoPanel"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Home = () => {
  const todoArray = useSelector((state: RootState) => state.todo.todos)

  return (
    <section>
      <TodoPanel />
      {todoArray.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </section>
  )
}

export default Home
