const Todo = require('../data/todos') 

module.exports = {
    index,
    create,
    delete: deleteOne

};

function index(req, res, next) {
    console.log(Todo.getAll());
    res.render('index', { title: 'To Do List', todos: Todo.getAll()});
};

function create(req, res) {
    console.log("Created");
    Todo.createData(req.body);
    res.redirect('/');
}

function deleteOne(req, res) {
    console.log(req.params);
    Todo.deleteTodo(req.params.id);
    res.redirect('/');
}