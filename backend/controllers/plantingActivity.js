'use strict';

const db = require(__dirname + '/../lib/mariasql');

exports.get_all_plantingActivities = (req, res, next) => {
    const query_string = 'SELECT * FROM plantingActivity ;';
    const payload = [];
    
    db.query(query_string, payload, (err, data) => {
        if (!err) {
            res.send(data);
           
            console.log("Successfully got all planting activities!");
        } else {
            console.log("An error occured in getting all planting activities!");
        }
    });
};

exports.add_plantingActivity = (req, res, next) => {
    const query_string = 'INSERT INTO plantingActivity (datePlanted, requestedCrop, seedQuantity, status, fperson) VALUES (?,?,?,?,?);';
    const payload = [
        req.body.datePlanted,
        req.body.requestedCrop,
        req.body.seedQuantity,
        req.body.status,
        req.body.fperson
    ];
    
    db.query(query_string, payload, (err, data) => {
        if (!err) {
            res.send(data);
            console.log('Successfully added a planting activity!');
        } else {
            console.log('An error encountered in adding a planting activity!');
            console.log(err);
        }
    });
};

exports.edit_plantingActivity = (req, res, next) => {
    const query_string = 'UPDATE plantingActivity SET ? ;';
    const payload = {
        datePlanted: req.body.datePlanted,
        dateHarvested: req.body.dateHarvested,
    	requestedCrop: req.body.requestedCrop,
        seedQuantity: req.body.seedQuantity,
        status: req.body.status,
        fperson: req.body.fperson
    };
    
    db.query(query_string, payload, (err, data) => {
        if (!err) {
            res.send(data);
            console.log('Successfull in updating planting activity basic information!');
        } else {
            console.log("An error occured in editing basic information of a planting activity!");
        }
    });
};

exports.search_plantingActivity = (req, res, next) => {
    const query_string = 'SELECT * FROM plantingActivity WHERE activityNo = ?; ';
    const payload = [req.body.activityNo];
    
    db.query(query_string, payload, (err, data) => {
        if (!err) {
            res.send(data);
            console.log("Planting Activity was found!");
        } else {
            console.log('An error encountered in searching this planting activity!');
        }
    });
};

exports.delete_plantingActivity = (req, res, next) => {
	const query_string = 'DELETE FROM plantingActivity WHERE activityNo = ?;';
	const payload = [req.params.activityNo];

	db.query(query_string, payload, (err, data) => {
		if (!err) {
		    res.send(data);
		    console.log('Planting Activity was deleted!');
		} else {
		    console.log('An error encountered in searching this planting activity!');
		}
	});
};
