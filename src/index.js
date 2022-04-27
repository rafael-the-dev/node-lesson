const express = require("express");
const bodyParser = require("body-parser")
const config = require("config")

const app = express();
app.use(bodyParser.json())

const PORT = config.get("port");
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})