const mongoose = require('mongoose');

const MONGO_URL = "mongodb+srv://mishrasiddharth1999:Reenter2@cluster0.luszmis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URL);



const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;