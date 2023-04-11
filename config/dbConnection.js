const mongoose = require('mongoose');

// Connect to the database
const db = () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log('Connected to MongoDB...', mongoose.connection.host, mongoose.connection.name))
    .catch(err => console.log('Could not connect to MongoDB...', err));
}

module.exports = db;