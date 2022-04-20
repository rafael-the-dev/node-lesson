const todosRouter = require("express").Router();
const { connection } = require("../../connections")


todosRouter.get("/todos", (req, res) => {
    connection.query("SELECT * FROM todos", (error, result, fields) => {
        if(error) {
            res.status(500).json({ error: "Internal server error" });
            return;
        }

        console.log(result)
        res.json({ todos: result })
    })
});

module.exports = {
    todosRouter
}