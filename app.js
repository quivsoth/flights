var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var jade = require('jade');
var users = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users', users);



// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/node-demo");
// var nameSchema = new mongoose.Schema({
//     firstName: String,
//     lastName: String
// });
// var User = mongoose.model("User", nameSchema);


// /* GET ALL PRODUCTS */
// app.get("/users", function(req, res, next) {
//     User.find(function (err, users) {
//         console.log("users: " + users);
//       if (err) console.log('errpr'); //return next(err);
//       res.json(users);
//     });
//   });

// app.get("/pk", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});