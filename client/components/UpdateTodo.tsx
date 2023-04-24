import { useAppSelector } from '../hooks'
function UpdateButton() {
  const todos=useAppSelector((state)=>state.todos)
  function handleClick(){
    console.log('here')

  }
  return (
    <button onClick={handleClick} style={{backgroundColor: '#81b77c', color: 'white', border: 'none', borderRadius: '4px', padding: '8px 16px'}}>
      +
    </button>
  )
}

export default UpdateButton
