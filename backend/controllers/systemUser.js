'use strict';

const db = require(__dirname + '/../lib/mariasql');

exports.get_all_personnel = (req, res, next) => {
	const query_string = 'SELECT * FROM systemUser WHERE fPersonnelFlag = 1;';
	const payload = [];

	db.query(query_string, payload, (err, data) => {
	    if (!err) {
		    res.send(data);
		    console.log('Successfully got all farm personnel!');
		} else {
		    console.log('An error encountered in getting all farm personnel!');
		}
	});
};

exports.add_owner = (req, res, next) => {
	const query_string = 'INSERT INTO systemUser (name, username, password, birthday, age, ownerFlag, farmOwned, fPersonnelFlag)VALUES (?,?,?,?,?,?,?,?);';
	const payload = [
		req.body.name,
		req.body.username,
		req.body.password,
		req.body.birthday,
		req.body.age,
		req.body.ownerFlag,
		req.body.farmOwned,
		req.body.fPersonnelFlag,
	];
	

	db.query(query_string, payload, (err, data) => {
		if (!err) {
			console.log('Successfully added an owner!');
            res.send(data);
		} else {
            console.log('An error encountered in adding an owner!');
            console.log(err);
		}
	});
};

exports.add_systemUser = (req, res, next) => {
	const query_string = 'INSERT INTO systemUser (name, username, password, birthday, age, ownerFlag, farmOwned, fPersonnelFlag, hoursOfWork, plotWorking)VALUES (?,?,?,?,?,?,?,?,?,?);';
	const payload = [
		req.body.name,
		req.body.username,
		req.body.password,
		req.body.birthday,
		req.body.age,
		req.body.ownerFlag,
		req.body.farmOwned,
		req.body.fPersonnelFlag,
		req.body.hoursOfWork,
		req.body.plotWorking
	];
	

	db.query(query_string, payload, (err, data) => {
		if (!err) {
			console.log('Successfully added a farm personnel!');
            res.send(data);
		} else {
            console.log('An error encountered in adding a farm personnel!');
            console.log(err);
		}
	});
};

exports.edit_farmPersonnel = (req, res, next) => {
    const query_string = 'UPDATE systemUser SET ? ;';
    const payload = {
    	lname: req.body.lname,
		fname: req.body.fname,
		mi: req.body.mi,
		username: req.body.username,
		password: req.body.password,
		birthday: req.body.birthday,
		age: req.body.int,
		ownerFlag: req.body.ownerFlag,
		farmOwned: req.body.farmOwned,
		fPersonnelFlag: req.body.fPersonnelFlag,
		hoursOfWork: req.body.hoursOfWork,
		plotWorking: req.body.hoursOfWork,
    };
    
    db.query(query_string, payload, (err, data) => {
        if (!err) {
            res.send(data);
            console.log('Successfull in updating farm personnel basic information!');
        } else {
            console.log("An error occured in editing a farm personnel!");
           
        }
    });
};

exports.search_farmPersonnel = (req, res, next) => {
    const query_string = 'SELECT * FROM systemUser WHERE ?;';
    const payload = [req.body.userId];
    
    db.query(query_string, payload, (err, data) => {
        if (!err) {
            res.send(data);
            console.log("Farm personnel was found!");
        } else {
            console.log('An error encountered in searching this farm personnel!');
        }
    });
};

exports.delete_farmPersonnel = (req, res, next) => {
	const query_string = 'DELETE FROM systemUser WHERE userId = ?;';
	const payload = [req.params.userId];

	db.query(query_string, payload, (err, data) => {
		if (!err) {
		    res.send(data);
		    console.log('Farm personnel was deleted!');
		} else {
		    console.log('An error encountered in searching this farm personnel!');
		}
	});
};
