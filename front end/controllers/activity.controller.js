'use strict';

(function() {
	angular
		.module('app')
		.controller('ActivityCtrl', ActivityCtrl);

		ActivityCtrl.$inject = ['$scope', '$filter', 'ActivityService'];


	function ActivityCtrl($scope, $filter, ActivityService) {
		$scope.activities = [];
		$scope.plants = [];
		$scope.users = [];
		$scope.requestedCrop;
		$scope.fperson;

		$scope.addActivity = function() {
			var datePlanted = new Date();
			const data = {
				datePlanted: datePlanted,
		        requestedCrop: $scope.requestedCrop,
		        seedQuantity: $scope.seedQuantity,
		        status: "PENDING",
		        fperson: $scope.fperson
			}

			ActivityService
				.addActivity(data)
				.then((res) => {
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
				})
		};

		$scope.addCrop = function(plantId) {
			$scope.requestedCrop = plantId;
		};

		$scope.addUser = function(fperson) {
			$scope.fperson = fperson;
		};

		$scope.viewActivities = function() {
			ActivityService.viewActivities()
				.then((data) => {
					$scope.activities = data.data;
					$scope.activities2 = $scope.activities;
				    $scope.$watch('search', function(val)
				    { 
				        $scope.activities = $filter('filter')($scope.activities2, val);
				    })
				}, (err) => {
					throw new Error(err);
				});
		};

		$scope.viewPlants = function() {
			ActivityService.viewPlants()
				.then((data) => {
					$scope.plants = data.data;
					$scope.plants2 = $scope.plants;
				    $scope.$watch('search', function(val)
				    { 
				        $scope.plants = $filter('filter')($scope.plants2, val);
				    })
				}, (err) => {
					throw new Error(err);
				});
		};

		$scope.viewUsers = function() {
			ActivityService.viewUsers()
				.then((data) => {
					$scope.users = data.data;
					$scope.users2 = $scope.users;
				    $scope.$watch('search', function(val)
				    { 
				        $scope.users = $filter('filter')($scope.users2, val);
				    })
				}, (err) => {
					throw new Error(err);
				});
		};

		
	}
})();
