const config = require("config")
const { MongoClient } = require("mongodb")

const url = config.get("mongoDBConfig.url");
const dbName = config.get("mongoDBConfig.dbName")
const dbConnection = new MongoClient(url);

const createDBConnection = async () => {
    await dbConnection.connect();
    console.log('Connected successfully to db server');
};

const db = () => dbConnection.db(dbName);

module.exports = {
    createDBConnection,
    db
}