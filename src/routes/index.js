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

module.exports = {
    router
}