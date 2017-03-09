/*
 * FILE DESCRIPTION: This file contains the database schema of the Easy Plant 
 *                   Activity Monitoring System.
 * DATE MODIFIED: NOVEMBER 10, 2016
 */
 
DROP DATABASE IF EXISTS plantingSystem;
CREATE DATABASE IF NOT EXISTS plantingSystem;
USE plantingSystem;

SET FOREIGN_KEY_CHECKS = 0;

/*
 * DESCRIPTION: This table contains all infromation about the user.
 */
 
CREATE TABLE systemUser(
   userId INT(5) NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   username VARCHAR(32) NOT NULL,
   password VARCHAR(32) NOT NULL,
   birthday DATE,
   age INT(2),
   ownerFlag ENUM("0", "1") NOT NULL,
   farmOwned VARCHAR(50),
   fPersonnelFlag ENUM("0", "1") NOT NULL,
   hoursOfWork INT(5),
   plotWorking int(5),
   CONSTRAINT systemUser_userId_pk PRIMARY KEY(userId),
   CONSTRAINT systemUser_userId_uk UNIQUE KEY(userId),
   CONSTRAINT systemUser_username_uk UNIQUE KEY(username),
   CONSTRAINT systemUser_plotWorking_fk FOREIGN KEY(plotWorking) REFERENCES plot(plotId)
);

/*
 * DESCRIPTION: This table contains all infromation about the plot.
 */

CREATE TABLE plot(
	plotId INT(5) AUTO_INCREMENT NOT NULL,
	length INT(2) NOT NULL,
	width INT(2) NOT NULL,
	plantingCapacity INT(5) NOT NULL,
	activityNum INT(5),
	cropPlanted INT(5),
	CONSTRAINT plot_plotId_pk PRIMARY KEY(plotId),
	CONSTRAINT plot_plotId_uk UNIQUE KEY(plotId),
	CONSTRAINT plot_activityNum_fk FOREIGN KEY(activityNum) REFERENCES plantingActivity(activityNo),
	CONSTRAINT plot_cropPlanted_fk FOREIGN KEY(cropPlanted) REFERENCES plantingActivity(requestedCrop)
);

/*
 * DESCRIPTION: This table contains all infromation about farm's planting activity.
 */

CREATE TABLE plantingActivity(
	activityNo INT(5) AUTO_INCREMENT NOT NULL,
	status ENUM("SUCCESSFUL", "FAILED", "PENDING"),
	seedQuantity INT(5) NOT NULL,
	datePlanted DATE,
	dateHarvested DATE,
	requestedCrop INT(5),
	fperson INT(5),
	CONSTRAINT plantingActivity_activityNo_pk PRIMARY KEY(activityNo),
	CONSTRAINT plantingActivity_activityNo_uk UNIQUE KEY(activityNo),
	CONSTRAINT plantingActivity_requestedCrop_fk FOREIGN KEY(requestedCrop) REFERENCES plant(plantId),
	CONSTRAINT plantingActivity_fPerson_fk FOREIGN KEY(fperson) REFERENCES systemUser(userId)
);

/*
 * DESCRIPTION: This table contains all infromation about plants.
*/
CREATE TABLE plant(
	plantId INT(5) AUTO_INCREMENT NOT NULL,
	plantName VARCHAR(20) NOT NULL,
	plantVariety VARCHAR(20),
	scientificName VARCHAR(100),
	harvestTimeInDays INT(5),
	CONSTRAINT plant_plantId_uk UNIQUE KEY(plantId),
	CONSTRAINT plant_plantId_pk PRIMARY KEY(plantId)
);