'use strict';

( () => {
	angular
		.module('app')
		.factory('PlotService', PlotService);

	PlotService.$inject = ['$http', '$q'];

	const headers = {
		'content-type' : 'application/x-www-form-urlencoded'
	}

	function PlotService($http, $q) {
		const service = {
			addPlot: addPlot,
			viewPlots: viewPlots,
			deletePlot: deletePlot,
			editPlot: editPlot
		}

		return service;

		function addPlot(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/plot/add',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function viewPlots() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/plots',
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function editPlot(data) {
			let deferred = $q.defer();

			$http({
				method: 'PUT',
				data: $.param(data),
				url: '/api/plot/edit/' + data.plotId,
				headers: headers
			})
			.then( (res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}

		function deletePlot(plotId) {
			let deferred = $q.defer();

			$http({
				method: 'DELETE',
				url: '/api/plot/delete/' + plotId,
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
