module.exports = {
	index: function(req, res) {
		res.render('main', { title: 'American Airlines Flights' });
	},
	pk: function(req, res) {
		res.render('pk', { flights: 'flights' });
	}
};