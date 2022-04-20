const express = require('express');
const { router } = require("./routes")
const { connection } = require("./connections")

const app = express();

app.use(router);
connection.connect();

const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));