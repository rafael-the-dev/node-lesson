const { connection } = require("../connections")

class TodosModel {
    constructor() {

    }

    getTodos(func) {
        connection.query("SELECT * FROM todos", func)
    }

    getTodoByID(id, func) {
        connection.query(`SELECT * FROM todos WHERE ID=${id}`, func);
    }

    setTodo({ name }, func) {
        connection.query("INSERT INTO todos(name) VALUES()", [ name ], func);
    }
}

module.exports = {
    TodosModel
}