const mongoose = require('mongoose');

async function connectToMongoDb() {
    try {
        const connectionURI = 'mongodb://127.0.0.1:27017/mongodb_playground';
        await mongoose.connect(connectionURI, { useNewUrlParser: true });
        console.log("Database connection established successfully");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectToMongoDb;
