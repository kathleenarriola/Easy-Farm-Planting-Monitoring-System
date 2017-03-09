'use strict';

( () => {
	angular
		.module('app')
		.factory('PlantService', PlantService);

	PlantService.$inject = ['$http', '$q'];

	const headers = {
		'content-type' : 'application/x-www-form-urlencoded'
	}

	function PlantService($http, $q) {
		const service = {
			addPlant: addPlant,
			viewPlants: viewPlants,
			deletePlant: deletePlant,
			editPlant: editPlant
		}

		return service;

		function addPlant(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/plant/add',
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

		function editPlant(data) {
			let deferred = $q.defer();

			$http({
				method: 'PUT',
				data: $.param(data),
				url: '/api/plant/edit/' + data.plantId,
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}		

		function deletePlant(plantId) {
			let deferred = $q.defer();

			$http({
				method: 'DELETE',
				url: '/api/plant/delete/' + plantId,
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
