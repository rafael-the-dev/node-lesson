const router = require("express").Router();

router.get('/', (req, res) => {
    console.log("GET method");
    res.send({ message: "Get method" })
});

module.exports = {
    router
}