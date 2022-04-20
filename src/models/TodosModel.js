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
}

module.exports = {
    TodosModel
}