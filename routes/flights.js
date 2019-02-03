var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

// todo model
var flightSchema = new Schema({
    flightNumber: String,
    from: String,
    to: String
    // completed: { type: Boolean, default: false },
    // updated_at: { type: Date, default: Date.now }
});
var Flight = mongoose.model('Flight', flightSchema);



module.exports = {
    all: function(req, res){
        console.log("module.exports");
        console.log('we are in todo.all')
        Flight.find({}, function(err, flights){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('in the callback')
            res.render('pk', { flights: flights });
        });
    }
}

// var mongoose = require('mongoose'),
// Flights = mongoose.model("users");

// module.exports = {


//     all: function(req, res){
//         console.log("module.exports");
//         console.log('we are in todo.all')
//         Flights.find({}, function(err, flights){
//             if(err) res.render('error', { error: 'Could not fetch items from database :('});
//             console.log('in the callback')
//             res.render('flights', { flights: flights });
//         });
//     }
//     // ,
//     // viewOne: function(req, res){
//     //     Flight.find({ _id: req.params.id }, function(err, flight){
//     //         res.render('todo', { flight: flight[0] })
//     //     });
//     // },
//     // create: function(req, res){
//     //     var todoContent = req.body.content;
//     //     // create todo
//     //     Flight.create({ content: todoContent }, function(err, todo){
//     //         if(err) res.render('error', { error: 'Error creating your todo :('})
//     //         // reload collection
//     //         res.redirect('/todos');
//     //     });
//     // },
//     // destroy: function(req, res){
//     //     var id = req.params.id;

//     //     Flight.findByIdAndRemove(id, function(err, todo){
//     //         if(err) res.render('error', { error: 'Error deleting todo'});
//     //         res.redirect('/todos');
//     //     });
//     // },
//     // edit: function(req, res){
//     //     Flight.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, todo){
//     //         res.redirect('/todos');
//     //     });
//     // }

// };