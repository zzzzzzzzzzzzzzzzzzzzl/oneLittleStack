import { useAppDispatch, useAppSelector } from '../hooks'
import React, { useState } from 'react'
import { updateTodoComponent } from '../slices/todo'

function UpdateTodoComponent(props) {
  const activePage = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (input !== '') {
      dispatch(updateTodoComponent([input, props.props]))
      setInput('')
    }
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type=""
        className="update-todo"
        placeholder="im crying"
        autoFocus={true}
        value={input}
        onChange={handleChange}
      />
    </form>
  )
}

export default UpdateTodoComponent
