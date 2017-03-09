'use strict';

const db = require(__dirname + '/../lib/mariasql');

exports.get_all_plots = (req, res, next) => {
	const query_string = 'SELECT * FROM plot;';
	const payload = [];

	db.query(query_string, payload, (err, data) => {
		if (!err) {
			res.send(data);
			console.log('Successfully got all plots!');
		} else {
			console.log('An error encountered in getting all plots.');
		}
	});
};

exports.add_plot = (req, res, next) => {
	const query_string = 'INSERT INTO plot (length, width, plantingCapacity, cropPlanted) VALUES(?,?,?,?);';
	const payload = [
		req.body.length,
		req.body.width,
		req.body.plantingCapacity,
		req.body.cropPlanted
	];

	db.query(query_string, payload, (err, data) => {
		if (!err) {
			res.send(data);
			console.log('Successfully added a plot!');
		} else {
			console.log('An error encountered in adding a plot!');
			console.log(err);
		}
	});
};


exports.edit_plot_info = (req, res, next) => {
    const query_string = 'UPDATE plot SET length=?, width=?, plantingCapacity=?  WHERE plotId=?;';
    const payload = [
		req.body.length,
		req.body.width,
		req.body.plantingCapacity,
		req.body.plotId
	];

    db.query(query_string, payload, (err, data) => {
    	if (!err) {
    		res.send(data);
	        console.log('Successfull in updating plot basic information!');
    	} else {
    		console.log('Cannot edit plot information!');
    	}
    });
    
};


exports.search_plot = (req, res, next) => {
	const query_string = 'SELECT * FROM plot WHERE plotId=?;';
	const payload = [req.params.plotId];
	
	db.query (query_string, payload, (err, data) => {
		if (!err) {
			res.send(data);
			console.log("Plot is in the list!");
		} else {
			console.log("Plot may not be in the list!");
		}
		
	});
};

exports.delete_plot = (req, res, next) => {
	const query_string = 'DELETE FROM plot WHERE plotId=?;';
	const payload = [req.params.plotId];

	db.query(query_string, payload, (err, data) => {
		if (!err) {
			res.send(data);
			console.log("Successfully deleted a plot!");
		} else {
			console.log("Error in deleting a plot!");
		}
	});
};
