import { useAppDispatch, useAppSelector } from '../hooks'
import todo, {
  deleteToDo,
  fetchInitialData,
  updateDone,
  updateToDo,
} from '../slices/todo'
import DeleteButton from './DeleteTodo'
import UpdateButton from './UpdateTodo'
import UpdateTodoComponent from './UpdateTodoComponent'

function TodoList() {
  const todos = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  function handleDelete(id) {
    dispatch(deleteToDo(id))
  }
  function handleUpdate(id) {
    dispatch(updateToDo(id))
  }
  function task(done) {
    if (!done) {
      return '#b83f45'
    }
    return '#81b77c'
  }
  function checkTask(id) {
    dispatch(updateDone(id))
  }
  // dispatch(fetchInitialData())
  return (
    <div>
      {todos &&
        todos.map((i, idx) => {
          if (i.update == 'update') {
            return (
              <div style={{ height: '99.06px' }}>
                <UpdateTodoComponent props={i} />
              </div>
            )
          }
          return (
            <div
              key={idx}
              className="new-todo"
              style={{
                border: ' 1px solid #e6e6e6',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                onClick={() => checkTask(i.id)}
                style={{
                  userSelect: 'none',
                  backgroundColor: `${task(i.done)}`,
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '12px 12px',
                  marginRight: '10px',
                }}
              ></div>
              <div style={{ width: '490px' }}>{i.task}</div>

              <div></div>
              <div style={{ margin: '10px' }}>
                <div onClick={() => handleDelete(i.id)} key={idx}>
                  <DeleteButton />
                </div>
              </div>
              <div>
                <div onClick={() => handleUpdate(idx)} key={idx}>
                  <UpdateButton />
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default TodoList
