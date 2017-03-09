'use strict';

(function() {  
    angular
        .module('app', ['ngRoute'])
        .config(config)

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider

        /*------PLANTS------*/
            .when('/view-plants', {
                'templateUrl': 'views/plant/view-plants.html',
                'caseInsensitiveMatch': true,
                'controller' : 'PlantCtrl'
            })
            .when('/add-plant', {
                'templateUrl': 'views/plant/add-plant.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlantCtrl'
            })
            .when('/edit-plant', {
                'templateUrl': 'views/plant/edit-plant.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlantCtrl'
            })
            .when('/delete-plant', {
                'templateUrl': 'views/plant/delete-plant.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlantCtrl'
            })


        /*------PLOTS------*/
            .when('/view-plots', {
                'templateUrl': 'views/plot/view-plots.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlotCtrl'
            })
            .when('/add-plot', {
                'templateUrl': 'views/plot/add-plot.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlotCtrl'
            })
            .when('/edit-plot', {
                'templateUrl': 'views/plot/edit-plot.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlotCtrl'
            })
            .when('/delete-plot', {
                'templateUrl': 'views/plot/delete-plot.html',
                'caseInsensitiveMatch': true,
                'controller': 'PlotCtrl'
            })


        /*------PLANTING ACTIVITIES------*/
            .when('/view-activities', {
                'templateUrl': 'views/activity/view-activities.html',
                'caseInsensitiveMatch': true,
                'controller': 'ActivityCtrl'
            })
            .when('/add-activity', {
                'templateUrl': 'views/activity/add-activity.html',
                'caseInsensitiveMatch': true,
                'controller': 'ActivityCtrl'
            })
            .when('/edit-activity', {
                'templateUrl': 'views/activity/edit-activity.html',
                'caseInsensitiveMatch': true,
                'controller': 'ActivityCtrl'
            })
            .when('/delete-activity', {
                'templateUrl': 'views/activity/delete-activity.html',
                'caseInsensitiveMatch': true,
                'controller': 'ActivityCtrl'
            })


        /*------PERSONNEL------*/
            .when('/view-personnel', {
                'templateUrl': 'views/user/personnel/view-personnel.html',
                'caseInsensitiveMatch': true,
                'controller': 'UserCtrl'
            })
            .when('/add-personnel', {
                'templateUrl': 'views/user/personnel/add-personnel.html',
                'caseInsensitiveMatch': true,
                'controller': 'UserCtrl'
            })
            .when('/edit-personnel', {
                'templateUrl': 'views/user/personnel/delete-personnel.html',
                'caseInsensitiveMatch': true,
            })
            .when('/delete-personnel', {
                'templateUrl': 'views/user/personnel/delete-personnel.html',
                'caseInsensitiveMatch': true,
                'controller': 'UserCtrl'
            })
            

        /*------MAIN------*/
            .when('/', {
                'templateUrl': 'index.html',
                'caseInsensitiveMatch': true
            })
            .when('/sign-up', {
                'templateUrl': 'views/user/sign-up.html',
                'caseInsensitiveMatch': true,
                'controller': 'UserCtrl'
            })
            .otherwise({
                'redirectTo': '/'
            });
    }    
})();
