const express = require('express');
const { router } = require("./routes")
const { todosRouter } = require("./routes/todos")
const { connection } = require("./connections")

const app = express();

app.use(router);
app.use(todosRouter)
connection.connect();

const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));