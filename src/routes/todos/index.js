const todosRouter = require("express").Router();
const { db } = require("../../connections/mongodb")

todosRouter.get("/todos", async (req, res) => {
    const result = await db().find({ }).toArray();
    res.send({ todos: result});
});

todosRouter.post("/todos", async (req, res) => {
    const todo = req.body;
    await db().insert(todo)
    res.status(204).send();
});

module.exports = {
    todosRouter
};