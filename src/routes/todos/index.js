const todosRouter = require("express").Router();

todosRouter.get("/todos", (req, res) => {
    res.send({ todos: []});
})

module.exports = {
    todosRouter
};