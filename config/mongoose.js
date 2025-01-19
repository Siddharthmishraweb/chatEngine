const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://siddhantmishra312001:Reenter2@cluster0.0ya0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;