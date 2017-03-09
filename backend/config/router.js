'use strict';

const plants 			 = require(__dirname + '/../controllers/plants');
const plots 			 = require(__dirname + '/../controllers/plot');
const users 			 = require(__dirname + '/../controllers/systemUser');
const plantingActivities = require(__dirname + '/../controllers/plantingActivity');

module.exports = (router) => {
	router.del = router.delete;

	router.get ('/api/plants', 									plants.get_all_plants);
	router.post('/api/plant/add',								plants.add_plant);
	router.put ('/api/plant/edit/:plantId', 					plants.edit_plant_info);
	router.del ('/api/plant/delete/:plantId',					plants.delete_plant);
	router.get ('/api/plant/search/:plantId', 					plants.search_plant);

	router.get ('/api/plots',									plots.get_all_plots);
	router.post('/api/plot/add',								plots.add_plot);
	router.put ('/api/plot/edit/:plotId', 						plots.edit_plot_info);
	router.del ('/api/plot/delete/:plotId',						plots.delete_plot);
	router.get ('/api/plot/search/:plotId', 					plots.search_plot);

	router.get ('/api/plantingActivities',						plantingActivities.get_all_plantingActivities);
	router.post('/api/plantingActivity/add',					plantingActivities.add_plantingActivity);
	router.put ('/api/plantingActivity/edit/:activityNo',		plantingActivities.edit_plantingActivity);
	router.del ('/api/plantingActivity/delete/:activityNo',		plantingActivities.delete_plantingActivity);
	router.get ('/api/plantingActivity/search/:activityNo', 	plantingActivities.search_plantingActivity);

	router.get ('/api/users',									users.get_all_personnel);
	router.post('/api/user/add',								users.add_systemUser);
	router.put ('/api/user/edit/:userId', 						users.edit_farmPersonnel);
	router.del ('/api/user/delete/:userId',						users.delete_farmPersonnel);
	router.get ('/api/user/search/:userId', 					users.search_farmPersonnel);

	router.post('/api/admin/sign-up',							users.add_owner);
		
	router.all ('*', (req, res) => {
		res.status(404).send({
            message: 'Not Found!'
        });
	});

	return router;
};