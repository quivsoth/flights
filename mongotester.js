// var express = require("express");
// var app = express();
// var port = 3000;
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// //Import the mongoose module
// var mongoose = require('mongoose');

// //Set up default mongoose connection
// var mongoDB = 'mongodb://localhost:27017/node-demo';
// mongoose.connect(mongoDB);

// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;



// var nameSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String
// });
// var User = mongoose.model("User", nameSchema);




// db.on('error', console.error.bind(console, 'Connection error: '));
// db.once('open', function(callback) {
// //The code in this asynchronous callback block is executed after connecting to MongoDB. 
//     console.log('Successfully connected to MongoDB.');



//     User.find({firstName: 'Phillip'}, function(error, comments) {
//         console.log(comments); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
//     });


// });