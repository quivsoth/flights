var express = require('express');

module.exports = function(app){
	// register route controllers
	var main = require('../routes/main');
    //var todo = require('../routes/todo');
    
    
    var flights = require('../routes/flights');
    var flightRouter = express.Router();
    flightRouter.get('/', flights.all);
    

	app.use('/flights', flightRouter);
    app.get('/', main.index);
    app.get('/pk', main.pk);    



	//todoRouter.get('/', todo.all);
	//todoRouter.get('/:id', todo.viewOne);
	//todoRouter.post('/create', todo.create);
	//todoRouter.post('/destroy/:id', todo.destroy);
	//todoRouter.post('/edit/:id', todo.edit);
};