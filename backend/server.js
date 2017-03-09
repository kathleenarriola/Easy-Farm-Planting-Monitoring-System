'use strict'

const router = require(__dirname + '/config/router');
const express = require('express');


let app = express();

app.use(express.static(__dirname + '/../front end')); //points to the html files
app.use(require('method-override')());
app.use(require('body-parser').urlencoded({extended: false}));
app.use(require('body-parser').json());
app.use(require('compression')());
app.use(router(express.Router()));


app.listen(8000, () => {
	console.log("Server is running at PORT 8000");
});
