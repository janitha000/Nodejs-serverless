const mongoose = require('mongoose');
mongoose.Promise = global.Promise
let isConnected;
let connectionString = "mongodb://aws-lambda:lambda@cluster0-shard-00-00-uaaxd.mongodb.net:27017,cluster0-shard-00-01-uaaxd.mongodb.net:27017,cluster0-shard-00-02-uaaxd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

module.exports = connectToDatabase = () => {
    if(isConnected){
        console.log('Using exsisiting database connection');
        return Promise.resolve();
    }

    console.log('Using a new database connection');
    return mongoose.connect(connectionString)
        .then(db => {
            isConnected = db.connections[0].readyState;
        });
};