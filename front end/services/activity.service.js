'use strict';

( () => {
	angular
		.module('app')
		.factory('ActivityService', ActivityService);

	ActivityService.$inject = ['$http', '$q'];

	const headers = {
		'content-type' : 'application/x-www-form-urlencoded'
	}

	function ActivityService($http, $q) {
		const service = {
			addActivity: addActivity,
			viewPlants: viewPlants,
			viewUsers: viewUsers,
			viewActivities: viewActivities
			//--------DONT FORGET ME!!!!!!!!!!!!!
		}

		return service;

		function addActivity(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/plantingActivity/add',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function viewActivities() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/plantingActivities',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function viewPlants() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/plants',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function viewUsers() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/users',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}


	}
}) ();
