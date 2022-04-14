const express = require('express');
const { router } = require("./routes")

const app = express();

app.use(router)

const port = 8080;
app.listen(port, () => console.log(`Server listening on port ${port}`));