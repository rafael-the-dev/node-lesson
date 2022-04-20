const { connection } = require("../connections")

class TodosModel {
    constructor() {

    }

    getTodos(func) {
        connection.query("SELECT * FROM todos", func)
    }
}

module.exports = {
    TodosModel
}