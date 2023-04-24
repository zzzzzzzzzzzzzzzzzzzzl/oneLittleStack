// WARNING: this file is only a guide! not to be used as part of the challenge!
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import UpdateTodoComponent from '../components/UpdateTodoComponent'

const initialState: string[] = []

// {id:id,task:input,done:false}
const sampleData = []

async function postJSON(data) {
  try {
    const response = await fetch('http://localhost:3000/gpt', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log('Success:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}
async function deleteJSON(data) {
  try {
    const response = await fetch('http://localhost:3000/gpt', {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log('Success:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}
async function patchJSON(data) {
  try {
    const response = await fetch('http://localhost:3000/gpt', {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    console.log('Success:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}

// where our business logic goes
export const todoSlice = createSlice({
  name: 'todos',
  initialState: sampleData,

  reducers: {
    fetchInitialData: (state, action) => {
      return action.payload
    },
    appendToDo: (state, action) => {
      console.log(action.payload, 'here')

      postJSON(action.payload)
      return [...state, action.payload]
    },
    deleteToDo: (state, action) => {
      const idToDelete = action.payload
      deleteJSON({ id: idToDelete })
      const newState = state.filter((todo) => todo.id !== idToDelete)
      return newState
    },
    updateToDo: (state, action) => {
      const newState = state.map((i, idx) => {
        if (idx == action.payload) {
          return { update: 'update', id: i.id }
        }
        return i
      })
      return [...newState]
    },
    updateTodoComponent: (state, action) => {
      const newState = state.map((i, idx) => {
        console.log(i.id)
        console.log(action.payload[1].id)
        if (i.id == action.payload[1].id) {
          patchJSON({ id: i.id, task: action.payload[0] })
          return { id: i.id, task: action.payload[0], done: i.done }
        }
        return i
      })
      return newState
    },
    updateDone: (state, action) => {
      const newState = state.map((i, idx) => {
        if (i.id == action.payload) {
          patchJSON({ id: i.id, done: !i.done })
          return { ...i, done: !i.done }
        }
        return i
      })
      return newState
    },
  },
})

// a selector to be used as: const example = useSelector(exampleSelector)
export const todosSelector = (state: RootState) => state.example

// actions to be dispatched using dispatch(exampleAddToArray({ example: 'hi' }))
export const {
  appendToDo,
  deleteToDo,
  updateToDo,
  updateDone,
  updateTodoComponent,
  fetchInitialData,
} = todoSlice.actions

// the reducer to be used in store.js
export default todoSlice.reducer
