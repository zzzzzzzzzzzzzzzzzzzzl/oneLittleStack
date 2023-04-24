const connection = require('./connection')

export function getAllTodos(db = connection) {
  //list
  return db('todos').select()
}

export function insertTodo(todo, db = connection) {
  //add
  return db('todos').insert(todo).returning('*')
}

export function updateTodo(id, updates, db = connection) {
  return db('todos').where('id', id).update(updates) //update
}

export function deleteTodo(id, db = connection) {
  //delete
  return db('todos').where('id', id).del()
}
