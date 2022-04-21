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
}

module.exports = {
    TodosModel
}