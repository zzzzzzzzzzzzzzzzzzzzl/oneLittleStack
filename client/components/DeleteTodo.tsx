// import { deleteTodo } from '../../server/db/db'
import { useAppDispatch, useAppSelector } from '../hooks'
import { deleteToDo } from '../slices/todo';


function DeleteButton() {
    const dispatch=useAppDispatch()





  return (
    <button style={{backgroundColor: '#b83f45', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px'}}>
      X
    </button>
  )
}

export default DeleteButton
