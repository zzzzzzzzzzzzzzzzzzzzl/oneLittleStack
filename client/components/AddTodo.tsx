import { useAppDispatch, useAppSelector } from '../hooks'
import React, { useState } from 'react'
import { appendToDo } from '../slices/todo'

function AddTodo() {
  const activePage = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    //add to list
    let id
    if (activePage.length == 0) {
      id = 1
    } else {
      id = activePage[activePage.length - 1].id + 1
    }
    event.preventDefault()
    if (input !== '') {
      const data = {
        id: id,
        task: input,
        done: false,
      }
      dispatch(appendToDo(data))
      setInput('')
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="test" title="Type your new todo here">
        New Todo:
      </label>
      <input
        id="test"
        type="text"
        className="new-todo"
        placeholder="finish todo james"
        autoFocus={true}
        value={input}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo
