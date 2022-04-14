const router = require("express").Router();
const axios = require('axios');
const fakeUsersURL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
    const res = await axios({ method: 'get', url: fakeUsersURL});
    const data = await res.data;
    return data;
};

router.get('/users', async (req, res) => {
    const users = await fetchUsers();
    res.send({ users })
});

router.get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const users = await fetchUsers();
    const user = users.find(item => item.id === parseInt(id));

    if(!Boolean(user)) {
        res.status(404).send({ message: "User not found" });
        return;
    }
    
    res.send({ user })
});

module.exports = {
    router
}