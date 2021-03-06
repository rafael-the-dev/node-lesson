const router = require("express").Router();
const axios = require('axios');
const fakeUsersURL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
    const res = await axios({ method: 'get', url: fakeUsersURL});
    const data = await res.data;
    return data;
};

const usersFilter = (key, keyValue, list) => list.filter(item => item[key] === keyValue);

router.get('/users', async (req, res) => {
    const { email, name, username } = req.query;
    let users = await fetchUsers();

    if(email) {
        users = usersFilter("email", email, users);
    }

    if(name) {
        users = usersFilter("name", name, users);
    }

    if(username) {
        users = usersFilter("username", username, users);
    }

    res.set({ "Content-Type": 'application/json' })
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
    
    res.set({ "Content-Type": 'application/json' })
    res.send({ user })
});

module.exports = {
    router
}