const todos = [];

module.exports = {
  getAll,
  createData,
  deleteTodo
};

function getAll() {
  return todos;
}

function createData(todo) {
  console.log('Inserting todo');
    todos.push(todo);
}
function deleteTodo(id) {
  todos.splice(id, 1);
}

