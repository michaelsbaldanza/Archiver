const mongoose = require('mongoose');

process.env.DATABASE_URL;

mongoose.connect('mongodb://localhost/project2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});