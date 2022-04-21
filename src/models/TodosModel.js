const { connection } = require("../connections")

class TodosModel {
    constructor() {

    }

    deleteTodo({ id }, func) {
        connection.query("DELETE FROM todos WHERE ID=?", [ id ], func);
    }

    getTodos(func) {
        connection.query("SELECT * FROM todos", func);
    }

    getTodoByID(id, func) {
        connection.query(`SELECT * FROM todos WHERE ID=${id}`, func);
    }

    setTodo({ name }, func) {
        connection.query("INSERT INTO todos(name) VALUES(?)", [ name ], func);
    }

    updateTodo({ id, name }, func) {
        connection.query("UPDATE todos SET name=? WHERE ID=?", [ name, id ], func);
    }
}

module.exports = {
    TodosModel
}