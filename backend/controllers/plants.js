'use strict';

const db = require(__dirname + '/../lib/mariasql');

exports.get_all_plants = (req, res, next) => {
	const query_string = 'SELECT * FROM plant;';
	const payload = [];

	db.query(query_string, payload, (err, data) => {
	    if (!err) {
		    res.send(data);
		    console.log('Successfully got all plants!');
		} else {
		    console.log('An error encountered in getting all plants!');
		}
	});
};

exports.add_plant = (req, res, next) => {
	const query_string = 'INSERT INTO plant (plantName, plantVariety, scientificName, harvestTimeInDays) VALUES(?,?,?,?);';
	const payload = [
		req.body.plantName, 
		req.body.plantVariety, 
		req.body.scientificName, 
		req.body.harvestTimeInDays
	];
	
	db.query(query_string, payload, (err, data) => {
	    if (!err) {
		    res.send(data);
		    console.log('Successfully added a plant!');
		} else {
			console.log(err);
	        console.log('An error encountered in adding a plant!');
		}
	});
};

exports.edit_plant_info = (req, res, next) => {
	const query_string = 'UPDATE plant SET plantName=?, plantVariety=?, scientificName=?, harvestTimeInDays=? WHERE plantId=?;';
	const payload = [
		req.body.plantName,
	    req.body.plantVariety,
	    req.body.scientificName,
	    req.body.harvestTimeInDays,
	    req.body.plantId
	];

	db.query(query_string, payload, (err, data) => {
	    if (!err) {
		    res.send(data);
		    console.log('Successfull in updating plant basic information!');
		} else {
            console.log("An error occured in editing a planting activity!");
            console.log(err);
		}
	});
};

exports.search_plant = (req, res, next) => {
	const query_string = 'SELECT * FROM plant where plantId = ?;';
	const payload = [req.params.plantId];
	
	db.query(query_string, payload, (err, data) => {
		if (!err) {
			res.send(data);
	        console.log('Plant was found!');
		} else {
			console.log('Plant was not Found!');
		}
	});
};

exports.delete_plant = (req, res, next) => {
	const query_string = 'DELETE FROM plant WHERE plantId = ?;';
	const payload = [req.params.plantId];

	db.query(query_string, payload, (err, data) => {
		if (!err) {
			res.send(data);
	        console.log('Successfully deleted a plant!');
		} else {
			console.log('Plant was not found!');
		}
	});
};
