import AddTodo from './AddTodo'
import { useAppDispatch, useAppSelector } from '../hooks'
import exampleReducer from './test'
import TodoList from './TodoList'
import { fetchInitialData } from '../slices/todo'
import { useState } from 'react'
function App() {
  const dispatch = useAppDispatch()
  const [dataLoaded, setDataLoaded] = useState(false)

  const activePage = useAppSelector((state) => state)

  if (!dataLoaded) {
    fetch('http://localhost:3000/gpt')
      .then((response) => response.json())
      .then((data) => {
        setDataLoaded(true)
        console.log(data)
        dispatch(fetchInitialData(data))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <header className="header">
        <h1>SoManyThingsTodo</h1>
        <AddTodo />
        <TodoList />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
