const todosRouter = require("express").Router();
const { db } = require("../../connections/mongodb")

todosRouter.get("/todos", async (req, res) => {
    const result = await db().find({ }).toArray();
    res.send({ todos: [], result});
})

module.exports = {
    todosRouter
};