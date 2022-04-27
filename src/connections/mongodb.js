const config = require("config")
const { MongoClient } = require("mongodb")

const url = config.get("mongoDBConfig.url");
const dbName = config.get("mongoDBConfig.dbName")
const dbConnection = new MongoClient(url);

let collection;

const createDBConnection = async () => {
    await dbConnection.connect();
    console.log('Connected successfully to db server');

    const database = dbConnection.db(dbName)
    collection = database.collection("todos");
};

const db = () => collection;

module.exports = {
    createDBConnection,
    db
}