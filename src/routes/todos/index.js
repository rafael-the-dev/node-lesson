const todosRouter = require("express").Router();
const { connection } = require("../../connections")
const { TodosModel } = require("../../models/TodosModel");

const model = new TodosModel();


todosRouter.get("/todos", (req, res) => {
    model.getTodos((error, result, fields) => {
        if(error) {
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        res.json({ todos: result });
    });
    //connection.query("SELECT * FROM todos", )
});

todosRouter.get("/todos/:id", (req, res) => {
    const { id } = req.params;
    
    model.getTodoByID(id, (error, result, fields) => {
        if(error) {
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        res.json({ todos: result });
    })
});

todosRouter.post("/todos", (req, res) => {
    const body = req.body;

    model.setTodo(body, (error, result, fields) => {
        if(error) {
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        res.json({ message: "Todo was successfully saved", result })
    })
})

module.exports = {
    todosRouter
}