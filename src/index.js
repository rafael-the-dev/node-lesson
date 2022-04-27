const express = require("express");
const bodyParser = require("body-parser")
const config = require("config")

const { todosRouter } = require("./routes/todos")
const { createDBConnection } = require("./connections/mongodb")

const app = express();
app.use(bodyParser.json());

createDBConnection();

app.use(todosRouter);

const PORT = config.get("port");
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})